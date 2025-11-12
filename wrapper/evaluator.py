import pandas as pd
import torch
import torchmetrics
import os
import numpy as np
import torch.nn as nn
from ..helpers.utils import VectorizedCircuitSimulator
from torch import Tensor
from torch_geometric.data import Data, Batch
from torch_geometric.utils import remove_self_loops, unbatch, unbatch_edge_index, remove_self_loops

class Evaluate():

    def __init__(self, name):
        self.name = name 
        self.csv_info = pd.read_csv(os.path.join(os.path.dirname(__file__), 'master.csv'), index_col=0, keep_default_na=False)

        self.task = self.csv_info.loc[self.name]['task']
        self.metric = self.csv_info.loc[self.name]['metric']


    def _check_input(self, y_true, y_pred):
        if isinstance(y_pred, np.ndarray):
            y_pred = torch.from_numpy(y_pred)
        if isinstance(y_true, np.ndarray):
            y_true = torch.from_numpy(y_true)

        if y_pred.size(0) != y_true.size(0):
            raise ValueError(f"y_pred and y_true must have the same number of samples. Got {y_pred.size(0)} and {y_true.size(0)}.")
        
        if not isinstance(y_pred, torch.Tensor) or not isinstance(y_pred, np.ndarray):
            raise ValueError(f"y_pred must be a torch.Tensor or numpy.ndarray. Got {type(y_pred)}.")
        if not isinstance(y_true, torch.Tensor) or not isinstance(y_true, np.ndarray):
            raise ValueError(f"y_true must be a torch.Tensor or numpy.ndarray. Got {type(y_true)}.")
        
        if not y_true.ndim == 2 or not y_pred.ndim == 2:
            raise RuntimeError('y_true and y_pred mush to 2-dim arrray, {}-dim array given'.format(y_true.ndim))

        return y_true, y_pred

    def _get_metric_from_name(self, metric_name):
        metric_dict = {
            'accuracy': torchmetrics.Accuracy(),
            'f1': torchmetrics.F1Score(),
            'spearman_r_0':self._get_spearman(0),
            'spearman_r_1':self._get_spearman(1),
            'spearman_r_2':self._get_spearman(2),
            'r2_0':self._get_r2(0),
            'r2_1':self._get_r2(1),
            'r2_2':self._get_r2(2),
            'MSE': torchmetrics.MeanSquaredError(),
            'MAE': torchmetrics.MeanAbsoluteError(),
            'RMSE': torchmetrics.MeanSquaredError(squared=False),
            'MisSize': self._get_mis_size(),
            'MaxCutSize': self._get_max_cut_size(),
            'NumColorsUsed': self._get_num_colors_used(),
            'ClosedGap': self._get_closed_gap(),
            'ChipDesignScore': self._get_chip_design_score(),
            'RSE': torchmetrics.RelativeSquaredError(),
            'Weather_MSE': None,
        }
        if metric_name in metric_dict:
            return metric_dict[metric_name]
        else:
            raise ValueError(f"Metric {metric_name} not recognized.")


    def _get_metric(self):
        print(f"Using metric: {self.metric} for task: {self.task}")
        #check length of metric list
        if len(self.metric) == 1:
            return self._get_metric_from_name(self.metric[0])
        else:
            metric_list =[]
            for metric in self.metric:
                metric_list.append(self._get_metric_from_name(metric))
            return metric_list  
        

    def evaluate(self, y_true, y_pred, batch_len=1):
        metric = self._get_metric()
        y_true, y_pred = self._check_input(y_true, y_pred)

        if isinstance(metric, list):
            result_list = [met(y_pred, y_true).item()/batch_len for met in metric]
            return result_list
        else:
            return metric(y_pred, y_true).item()/batch_len
                

    def _get_spearman(self, index):
        spearman = torchmetrics.SpearmanCorrCoef()
        return lambda x, y: spearman(x[:,index], y[:,index])
    
    def _get_r2(self, index):
        r2 = torchmetrics.R2Score()
        return lambda x, y: r2(x[:,index], y[:,index])
    
    def _get_closed_gap(self,y_pred, y_true, inference_times=None):
        # Stack tensors
        y_pred = torch.cat(y_pred, dim=0)
        y_true = torch.cat(y_true, dim=0)

        # Compute weighed predicted best performance
        # predicted_best_performance = torch.sum(y_pred * y_true, dim=1)

        # compute highest predicted probability best performance
        _, predicted_class_indices = torch.max(y_pred, dim=1)
        predicted_best_performance = y_true[
            torch.arange(y_true.size(0)), predicted_class_indices
        ]

        if inference_times is not None:
            inference_times = torch.cat(inference_times, dim=0)
            predicted_best_performance += inference_times

        # Compute virtual best performance
        virtual_best_performance = torch.min(y_true, dim=1).values

        # Compute single best performance (from index 0)
        single_best_performance = y_true[:, 0]

        # Compute the closed gap
        numerator = torch.mean(single_best_performance) - torch.mean(
            predicted_best_performance
        )
        denominator = torch.mean(single_best_performance) - torch.mean(
            virtual_best_performance
        )

        # Avoid division by zero
        if denominator == 0:
            return torch.tensor(float("nan"))

        closed_gap = numerator / denominator

        return closed_gap
    

    def _get_chip_design_score(self,y_pred, y_true):
        """
        Calculate chip design score based on equivalence
        
        Args:
            y_pred: List of predicted circuit data objects  
            y_true: List of target circuit data objects
            
        Returns:
            score: Average score across all samples (0-100 scale)
        """
        if len(y_pred) != len(y_true):
            return 0.0
            
        total_score = 0.0
        N = len(y_pred)
        
        for pred_circuit, target_circuit in zip(y_pred, y_true):
            try:
                # Extract input/output counts from target circuit
                if hasattr(target_circuit, 'num_inputs') and hasattr(target_circuit, 'num_outputs'):
                    num_inputs = target_circuit.num_inputs
                    num_outputs = target_circuit.num_outputs
                else:
                    # Extract from node features using proper extraction logic
                    num_inputs, num_outputs = self.extract_input_output_counts(target_circuit.x)
                
                # Set num_inputs and num_outputs on both circuits
                pred_circuit.num_inputs = num_inputs
                pred_circuit.num_outputs = num_outputs
                target_circuit.num_inputs = num_inputs  
                target_circuit.num_outputs = num_outputs
                
                # Simulate both circuits
                pred_sim = VectorizedCircuitSimulator(pred_circuit)
                target_sim = VectorizedCircuitSimulator(target_circuit)
                
                pred_truth = pred_sim.simulate_all_patterns()
                target_truth = target_sim.simulate_all_patterns()
                
                # Check equivalence and get score
                sample_score = self.equivalence_score(
                    pred_truth, target_truth,
                    pred_circuit.x.shape[0], 
                    target_circuit.x.shape[0] 
                )
                
                total_score += sample_score
                
            except Exception as e:
                # Skip problematic samples 
                continue
        
        return (100.0 * total_score) / N if N > 0 else 0.0
    
    def _extract_truth_vectors(self,truth_vectors, num_inputs, num_outputs):
        """Fast truth vector extraction with numpy operations"""
        expected_length = 2**num_inputs
        result = np.zeros((num_outputs, expected_length), dtype=np.uint8)
        
        for output_idx, truth_vector in enumerate(truth_vectors):
            # Find length (-1 padding)
            length = 0
            for val in truth_vector:
                if val == -1:
                    break
                length += 1
            
            if length != expected_length:
                return None  # Invalid truth vector
            
            result[output_idx] = truth_vector[:length]
        
        return result


    def _extract_input_output_counts(self,x):
        """
        Extract number of inputs and outputs from node features
        
        Args:
            x: Node features tensor with shape (num_nodes, 3) 
            where columns are [AND, INPUT, OUTPUT] one-hot encoding
        
        Returns:
            tuple: (num_inputs, num_outputs)
        """
        if x.shape[1] != 3:
            raise ValueError(f"Expected node features with 3 columns [AND, INPUT, OUTPUT], got {x.shape[1]}")
        
        # Count input nodes: [0, 1, 0]
        input_mask = (x[:, 1] == 1) & (x[:, 0] == 0) & (x[:, 2] == 0)
        num_inputs = input_mask.sum().item()
        
        # Count output nodes: [0, 0, 1]  
        output_mask = (x[:, 2] == 1) & (x[:, 0] == 0) & (x[:, 1] == 0)
        num_outputs = output_mask.sum().item()
        
        return num_inputs, num_outputs


    def _equivalence_score(self, predicted_truth_vectors, original_truth_vectors, num_nodes_generated, num_nodes_test):
        
        if np.array_equal(predicted_truth_vectors, original_truth_vectors):
            # equivalence
            if num_nodes_generated > 0:
                return num_nodes_test / num_nodes_generated
            else:
                return 0.0
        else:
            # No match
            return 0.0
        
    def _get_mis_size(self, x: Tensor, batch: Batch, dec_length: int = 300, num_seeds: int = 1) -> Tensor:
        batch = self.mis_decoder(x, batch, dec_length, num_seeds)

        data_list = batch.to_data_list()

        size_list = [data.is_size for data in data_list]

        return Tensor(size_list).mean()


    def _mis_decoder(self, x: Tensor, batch: Batch, dec_length: int = 300, num_seeds: int = 1) -> Batch:
        x = torch.sigmoid(x)
        data_list = batch.to_data_list()
        x_list = unbatch(x, batch.batch)

        for data, x_data in zip(data_list, x_list):
            is_size_list = []

            for seed in range(num_seeds):

                order = torch.argsort(x_data, dim=0, descending=True)
                c = torch.zeros_like(x_data)

                edge_index = remove_self_loops(data.edge_index)[0]
                src, dst = edge_index[0], edge_index[1]

                c[order[seed]] = 1
                for idx in range(seed, min(dec_length, data.num_nodes)):
                    c[order[idx]] = 1

                    cTWc = torch.sum(c[src] * c[dst])
                    if cTWc != 0:
                        c[order[idx]] = 0

                is_size_list.append(c.sum())

            data.is_size = max(is_size_list)

        return Batch.from_data_list(data_list)


    def _get_max_cut_size(self, x: Tensor, data: Batch) -> Tensor:
        x = (x > 0).float()
        x = (x - 0.5) * 2

        x_list = unbatch(x, data.batch)
        edge_index_list = unbatch_edge_index(data.edge_index, data.batch)

        cut_list = []
        for x, edge_index in zip(x_list, edge_index_list):
            cut_list.append(torch.sum(x[edge_index[0]] * x[edge_index[1]] == -1.0) / 2)

        return Tensor(cut_list).mean()


    # TODO: double-check implementation
    def _get_num_colors_used(self, x: Tensor, batch: Batch, num_seeds: int = 1) -> Tensor:
        batch = self.graph_coloring_decoder(x, batch, num_seeds)

        data_list = batch.to_data_list()

        num_colors_used_list = []
        for data in data_list:
            num_colors_used = data.colors.unique().size(0)
            num_colors_used_list.append(num_colors_used)

        return torch.tensor(num_colors_used_list).mean(dtype=torch.float)


    