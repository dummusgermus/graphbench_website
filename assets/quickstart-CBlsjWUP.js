import{r as a,e as s}from"./layout-HE2mcCM1.js";const e=document.querySelector("#app");e.innerHTML=a("quickstart",`
  <section class="page-header tight">
    <div class="container">
      <div class="title-row">
        <span class="page-icon" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="8 5 18 12 8 19"/></svg>
        </span>
        <h2>Get Started</h2>
      </div>
      <p class="lead">Install GraphBench, set up your experiment, optimize your model, and evaluate — in just a few lines.</p>
    </div>
  </section>

  <section class="container">
    <div class="grid">
      <div class="col-12 section-surface prose qs-prose">
        <ol class="steps">
          <li class="step">
            <div class="num">1</div>
            <div class="body">
              <h3>Install</h3>
              <p>We recommend installing with Python's package manager.</p>
              <div class="card code-card">
                <div class="code-wrap">
                  <button class="copy-btn" data-copy="pip install graphbench" aria-label="Copy pip install command" title="Copy">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                  </button>
                  <pre><code class="code-manual">pip install graphbench</code></pre>
                </div>
              </div>
            </div>
          </li>

          <li class="step">
            <div class="num">2</div>
            <div class="body">
              <h3>Setup</h3>
              <p>Choose your components. You can plug in any PyTorch model and optional PyG-style transforms.</p>
              <div class="card code-card">
                <div class="code-wrap">
                  <button class="copy-btn" data-copy="import graphbench

model = ...  # your torch model
dataset_name = ...  # name of the task
pre_filter = ...  # optional: PyG pre-filter matrix
pre_transform = ...  # optional: transform applied at load-time
transform = ...  # optional: transform applied at runtime" aria-label="Copy setup snippet" title="Copy">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                  </button>
<pre><code class="code-manual"><span class="kw">import</span> graphbench

<span class="var">model</span> = <span class="com"># your torch model</span>
<span class="var">dataset_name</span> = <span class="com"># name of the task</span>
<span class="var">pre_filter</span> = <span class="com"># optional: PyG pre-filter matrix</span>
<span class="var">pre_transform</span> = <span class="com"># optional: transform applied at load-time</span>
<span class="var">transform</span> = <span class="com"># optional: transform applied at runtime</span></code></pre>
                </div>
              </div>
            </div>
          </li>

          <li class="step">
            <div class="num">3</div>
            <div class="body">
              <h3>Load data</h3>
              <p>Create a dataset with GraphBench's loader. Transforms are optional and can be composed.</p>
              <div class="card code-card">
                <div class="code-wrap">
                  <button class="copy-btn" data-copy="dataset = graphbench.loader(dataset_name, pre_filter, pre_transform, transform)" aria-label="Copy data loader snippet" title="Copy">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                  </button>
<pre><code class="code-manual"><span class="var">dataset</span> = graphbench.<span class="fn">loader</span>(<span class="var">dataset_name</span>, <span class="var">pre_filter</span>, <span class="var">pre_transform</span>, <span class="var">transform</span>)</code></pre>
                </div>
              </div>
            </div>
          </li>

          <li class="step">
            <div class="num">4</div>
            <div class="body">
              <h3>Optimize</h3>
              <p>Automatically tune training hyperparameters on the training split.</p>
              <div class="card code-card">
                <div class="code-wrap">
                  <button class="copy-btn" data-copy="opt_model = graphbench.optimize(model, dataset['train'])" aria-label="Copy optimization snippet" title="Copy">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                  </button>
<pre><code class="code-manual"><span class="var">opt_model</span> = graphbench.<span class="fn">optimize</span>(<span class="var">model</span>, <span class="var">dataset</span>[<span class="str">'train'</span>])</code></pre>
                </div>
              </div>
            </div>
          </li>

          <li class="step">
            <div class="num">5</div>
            <div class="body">
              <h3>Evaluate</h3>
              <p>Run standardized evaluation on validation and test splits and get metrics back.</p>
              <div class="card code-card">
                <div class="code-wrap">
                  <button class="copy-btn" data-copy="results = graphbench.evaluator(dataset_name, opt_model, dataset['valid'], dataset['test'])" aria-label="Copy evaluation snippet" title="Copy">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                  </button>
<pre><code class="code-manual"><span class="var">results</span> = graphbench.<span class="fn">evaluator</span>(<span class="var">dataset_name</span>, <span class="var">opt_model</span>, <span class="var">dataset</span>[<span class="str">'valid'</span>], <span class="var">dataset</span>[<span class="str">'test'</span>])</code></pre>
                </div>
              </div>
            </div>
          </li>

          <li class="step">
            <div class="num">6</div>
            <div class="body">
              <h3>All together</h3>
              <p>Run the full GraphBench pipeline in only 3 lines of code.</p>
              <div class="card code-card">
                <div class="code-wrap">
                  <button class="copy-btn" data-copy="import graphbench

model = ...
dataset_name = ...
pre_filter = ...
pre_transform = ...
transform = ...

dataset = graphbench.loader(dataset_name, pre_filter, pre_transform, transform)
opt_model = graphbench.optimize(model, dataset['train'])
results = graphbench.evaluator(dataset_name, opt_model, dataset['valid'], dataset['test'])" aria-label="Copy full example" title="Copy">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                  </button>
<pre><code class="code-manual"><span class="kw">import</span> graphbench

<span class="var">model</span> = <span class="com"># your torch model</span>
<span class="var">dataset_name</span> = <span class="com"># name of the task</span>
<span class="var">pre_filter</span> = <span class="com"># optional: PyG pre-filter matrix</span>
<span class="var">pre_transform</span> = <span class="com"># optional: transform applied at load-time</span>
<span class="var">transform</span> = <span class="com"># optional: transform applied at runtime</span>

<span class="var">dataset</span> = graphbench.<span class="fn">loader</span>(<span class="var">dataset_name</span>, <span class="var">pre_filter</span>, <span class="var">pre_transform</span>, <span class="var">transform</span>)
<span class="var">opt_model</span> = graphbench.<span class="fn">optimize</span>(<span class="var">model</span>, <span class="var">dataset</span>[<span class="str">'train'</span>])
<span class="var">results</span> = graphbench.<span class="fn">evaluator</span>(<span class="var">dataset_name</span>, <span class="var">opt_model</span>, <span class="var">dataset</span>[<span class="str">'valid'</span>], <span class="var">dataset</span>[<span class="str">'test'</span>])</code></pre>
                </div>
              </div>
            </div>
          </li>

          <!-- Builder CTA -->
          <li class="step">
            <div class="num">→</div>
            <div class="body">
              <h3>Assemble your custom GraphCast code</h3>
              <p>Use our interactive builder to configure datasets and generate your full GraphCast script.</p>
              <div style="text-align:center; margin:.6rem 0 0;">
                <a class="btn btn-primary" href="./index.html#builder" title="Open the code builder" style="border:none; color:#fff;">Let's Go!</a>
              </div>
            </div>
          </li>

          <li class="step">
            <div class="num">★</div>
            <div class="body">
              <h3>Cite GraphBench</h3>
              <p>If you use GraphBench in your work, please cite our paper (Bibtex below).</p>
              <div class="cite-box" role="region" aria-label="BibTeX citation">
@article{name2025graphbench,
  title={GraphBench: Next-generation graph learning benchmarking},
  author={name, name, name},
  journal={arXiv preprint arXiv:00000.00000},
  year={2025}
}
              </div>
            </div>
          </li>
        </ol>
      </div>
    </div>
  </section>
  <div class="page-bottom-bar">© ${new Date().getFullYear()} GraphBench</div>
`);s();
