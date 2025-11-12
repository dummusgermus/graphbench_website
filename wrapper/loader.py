
class Loader():

    def __init__(self, root, dataset_names, pre_filter, pre_transform, transform, generate_fallback) -> None:
        self.root = root
        self.dataset_names = dataset_names
        self.pre_filter = pre_filter
        self.pre_transform = pre_transform
        self.transform = transform
        self.generate_fallback = generate_fallback
        self.data_list = []

        if self.generate_fallback:
            self.generate = True
            print("Activated fallback to generate dataset if not found.")
        

    def _check_for_updates(self):
        # check if dataset needs to be updated
        pass

    def load(self):
        self._check_for_updates()
        for dataset in self.dataset_names:
            data = self._loader(dataset)
            self.data_list.append(data)
        
        return self.data_list
        
    def _loader(self, dataset_name):

        if dataset_name.contains("algoreas"):
            from graphbench.algoreas import AlgoReasDataset
            train_dataset =  AlgoReasDataset(root=self.root, name=dataset_name, pre_transform=self.pre_transform, transform=self.transform, split="train", generate=generate)
            valid_dataset =  AlgoReasDataset(root=self.root, name=dataset_name, pre_transform=self.pre_transform, transform=self.transform, split="valid", generate=generate)
            test_dataset =  AlgoReasDataset(root=self.root, name=dataset_name, pre_transform=self.pre_transform, transform=self.transform, split="test", generate=generate)

        elif dataset_name.contains("bluesky"):
            from graphbench.bluesky import BlueSkyDataset
            feature_file_name = "redacted"
            empty_file_name = ""
            raw_target_file_name = ""
            train_dataset =  BlueSkyDataset(root=self.root, name=dataset_name, pre_transform=self.pre_transform, transform=self.transform, split="train", follower_subgraph=False, cleanup_raw=False, feature_file_name=feature_file_name, empty_emb_file_name=empty_file_name, target_file_name=raw_target_file_name, load_preprocessed=True)
            valid_dataset =  BlueSkyDataset(root=self.root, name=dataset_name, pre_transform=self.pre_transform, transform=self.transform, split="valid")
            test_dataset =  BlueSkyDataset(root=self.root, name=dataset_name, pre_transform=self.pre_transform, transform=self.transform, split="test")

        elif dataset_name.contains("chipdesign"):
            from graphbench.chipdesign import ChipDesignDataset
            train_dataset =  ChipDesignDataset(root=self.root, name=dataset_name, pre_transform=self.pre_transform, transform=self.transform, split="train")
            valid_dataset =  ChipDesignDataset(root=self.root, name=dataset_name, pre_transform=self.pre_transform, transform=self.transform, split="valid")
            test_dataset =  ChipDesignDataset(root=self.root, name=dataset_name, pre_transform=self.pre_transform, transform=self.transform, split="test")

        elif dataset_name.contains("weather"):
            from graphbench.weatherforecasting import WeatherforecastingDataset
            train_dataset =  WeatherforecastingDataset(root=self.root, name=dataset_name, pre_transform=self.pre_transform, transform=self.transform, split="train")
            valid_dataset =  WeatherforecastingDataset(root=self.root, name=dataset_name, pre_transform=self.pre_transform, transform=self.transform, split="valid")
            test_dataset =  WeatherforecastingDataset(root=self.root, name=dataset_name, pre_transform=self.pre_transform, transform=self.transform, split="test")

        elif dataset_name.contains("co"):
            from graphbench.co import CODataset
            train_dataset =  CODataset(root=self.root, name=dataset_name, pre_transform=self.pre_transform, transform=self.transform, split="train", generate=self.generate)
            valid_dataset =  CODataset(root=self.root, name=dataset_name, pre_transform=self.pre_transform, transform=self.transform, split="valid", generate=self.generate)
            test_dataset =  CODataset(root=self.root, name=dataset_name, pre_transform=self.pre_transform, transform=self.transform, split="test", generate=self.generate)

        elif dataset_name.contains("sat"):
            from graphbench.sat import SATDataset
            train_dataset =  SATDataset(root=self.root, name=dataset_name, pre_transform=self.pre_transform, transform=self.transform, split="train", generate=self.generate)
            valid_dataset =  SATDataset(root=self.root, name=dataset_name, pre_transform=self.pre_transform, transform=self.transform, split="valid", generate=self.generate)
            test_dataset =  SATDataset(root=self.root, name=dataset_name, pre_transform=self.pre_transform, transform=self.transform, split="test", generate=self.generate)


        elif dataset_name.contains("electronic_circuit"):
            #TODO
            pass

        else:
            raise ValueError(f"Dataset {dataset_name} is not supported.")



        return {
            "train": train_dataset, 
            "valid": valid_dataset,
            "test": test_dataset
        }