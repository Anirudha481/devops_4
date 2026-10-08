import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="navbar">
        <div className="logo">⚙️ DevOps CI</div>

        <nav>
          <a href="#home">Home</a>
          <a href="#pipeline">Pipeline</a>
          <a href="#about">About CI</a>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="tag">🚀 CONTINUOUS INTEGRATION</p>

            <h1>
              Build. Test. <span>Integrate.</span>
            </h1>

            <p className="description">
              A simple React project created to demonstrate how Continuous
              Integration works with Git, GitHub and automated build pipelines.
            </p>

            <button onClick={() => alert("CI Pipeline Started 🚀")}>
              Run CI Pipeline
            </button>
          </div>

          <div className="status-card">
            <div className="status-header">
              <span>CI Pipeline</span>
              <span className="success">● Passing</span>
            </div>

            <div className="pipeline-step">
              <span>✓</span>
              <div>
                <strong>Code Push</strong>
                <small>GitHub Repository</small>
              </div>
            </div>

            <div className="pipeline-line"></div>

            <div className="pipeline-step">
              <span>✓</span>
              <div>
                <strong>Build</strong>
                <small>npm run build</small>
              </div>
            </div>

            <div className="pipeline-line"></div>

            <div className="pipeline-step">
              <span>✓</span>
              <div>
                <strong>Testing</strong>
                <small>Automated Tests</small>
              </div>
            </div>

            <div className="pipeline-line"></div>

            <div className="pipeline-step">
              <span>✓</span>
              <div>
                <strong>Integration</strong>
                <small>Ready to Deploy</small>
              </div>
            </div>
          </div>
        </section>

        {/* Pipeline Section */}
        <section className="pipeline-section" id="pipeline">
          <h2>How CI Works</h2>

          <p className="section-description">
            Every time developers push code, the CI pipeline automatically
            checks whether the application is working correctly.
          </p>

          <div className="cards">
            <div className="card">
              <div className="icon">💻</div>
              <h3>1. Code</h3>
              <p>
                Developer writes code and pushes the latest changes to GitHub.
              </p>
            </div>

            <div className="card">
              <div className="icon">🔨</div>
              <h3>2. Build</h3>
              <p>
                CI server installs dependencies and creates a production
                build.
              </p>
            </div>

            <div className="card">
              <div className="icon">🧪</div>
              <h3>3. Test</h3>
              <p>
                Automated tests check the application for errors and bugs.
              </p>
            </div>

            <div className="card">
              <div className="icon">✅</div>
              <h3>4. Integrate</h3>
              <p>
                If everything passes, the code is successfully integrated.
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="about" id="about">
          <h2>What is Continuous Integration?</h2>

          <p>
            Continuous Integration is a DevOps practice where developers
            frequently merge their code into a shared repository. Automated
            builds and tests are executed whenever new code is pushed.
          </p>

          <div className="tools">
            <span>Git</span>
            <span>GitHub</span>
            <span>React</span>
            <span>npm</span>
            <span>GitHub Actions</span>
          </div>
        </section>
      </main>

      <footer>
        <p>⚡ React CI Demo | Learning DevOps</p>
      </footer>
    </div>
  );
}

export default App;