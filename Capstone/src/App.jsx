import './App.css'

const features = [
  {
    title: 'Instant summaries',
    description: 'Turn long reports, contracts, and research papers into concise takeaways in seconds.',
  },
  {
    title: 'Smart search',
    description: 'Ask questions in plain English and find the exact section, clause, or insight you need.',
  },
  {
    title: 'Secure workflows',
    description: 'Keep sensitive files organized with private uploads, role-based access, and clear audit trails.',
  },
]

const highlights = [
  { value: '40%', label: 'faster review cycles' },
  { value: '24/7', label: 'always-on document support' },
  { value: '100+', label: 'formats supported' },
]

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <a className="brand" href="#">
          <span className="brand-mark">✦</span>
          AI Document Analyzer
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#features">Features</a>
          <a href="#workflow">How it works</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Next-generation document intelligence</p>
            <h1>Understand every document without reading every page.</h1>
            <p className="hero-text">
              Upload contracts, invoices, policies, and research notes, then let AI surface the key points,
              answer questions, and accelerate your team&apos;s decisions.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#contact">
                Start analyzing
              </a>
              <a className="btn btn-secondary" href="#features">
                Explore features
              </a>
            </div>
            <ul className="pill-list" aria-label="Supported file types">
              <li>PDF</li>
              <li>DOCX</li>
              <li>TXT</li>
              <li>CSV</li>
            </ul>
          </div>

          <div className="hero-card" aria-label="Preview of AI insights">
            <div className="card-header">
              <span className="status-dot"></span>
              Live insight preview
            </div>
            <div className="card-body">
              <h2>Key findings</h2>
              <ul>
                <li>Summarized obligations and deadlines in plain language.</li>
                <li>Identified missing approvals and ambiguous clauses.</li>
                <li>Suggested next actions for legal and operations teams.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="stats" aria-label="Product highlights">
          {highlights.map((item) => (
            <div key={item.label} className="stat-card">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </section>

        <section id="features" className="section-block">
          <div className="section-heading">
            <p className="eyebrow">Built for modern teams</p>
            <h2>From raw files to actionable insight.</h2>
          </div>
          <div className="feature-grid">
            {features.map((feature) => (
              <article key={feature.title} className="feature-card">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="workflow" className="section-block workflow">
          <div className="section-heading">
            <p className="eyebrow">How it works</p>
            <h2>Upload once, then let the platform do the heavy lifting.</h2>
          </div>
          <div className="workflow-steps">
            <div>
              <span>01</span>
              <h3>Upload documents</h3>
              <p>Drag and drop your files or connect your existing storage.</p>
            </div>
            <div>
              <span>02</span>
              <h3>Analyze with AI</h3>
              <p>Generate summaries, extract entities, and answer questions instantly.</p>
            </div>
            <div>
              <span>03</span>
              <h3>Share results</h3>
              <p>Export insights, create briefs, and keep teams aligned on decisions.</p>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="footer">
        <h2>Ready to simplify your document workflow?</h2>
        <a className="btn btn-primary" href="mailto:hello@aidocumentanalyzer.com">
          Request a demo
        </a>
      </footer>
    </div>
  )
}

export default App
