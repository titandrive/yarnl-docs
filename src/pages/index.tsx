import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

const features = [
  {
    icon: '📄',
    title: 'PDF Pattern Support',
    description: 'Import your pattern PDFs directly. Page through them while tracking your progress.',
  },
  {
    icon: '🔢',
    title: 'Row Counter',
    description: 'Built-in row counter that stays with your pattern. Never lose your place again.',
  },
  {
    icon: '🏷️',
    title: 'Categories & Tags',
    description: 'Organize patterns by type, difficulty, or any custom tags you want.',
  },
  {
    icon: '⏱️',
    title: 'Time Tracking',
    description: 'See how long you spend on each project. Track your crafting journey.',
  },
  {
    icon: '🔍',
    title: 'Search & Filter',
    description: 'Find any pattern instantly. Filter by status, category, or search by name.',
  },
  {
    icon: '🏠',
    title: 'Self-Hosted',
    description: 'Your data stays yours. Host it yourself with Docker in minutes.',
  },
];

export default function Home(): ReactNode {
  return (
    <Layout
      title="Home"
      description="Yarnl - Your self-hosted crochet companion. Track patterns, manage your yarn stash, and organize your projects.">

      <div className="homepage">
        {/* Hero */}
        <section className="hero-section">
          <div className="hero-inner">
            <img
              src="/img/yarnboi.png"
              alt="Yarnl mascot"
              className="hero-mascot"
            />
            <h1 className="hero-title">Yarnl</h1>
            <p className="hero-tagline">Your self-hosted crochet companion</p>
            <div className="hero-buttons">
              <Link className="btn-primary" to="/docs/intro">
                Get Started
              </Link>
              <Link className="btn-secondary" href="https://demo.yarnl.com">
                Try the Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Screenshot */}
        <section className="screenshot-section">
          <div className="screenshot-container">
            <img
              src="/img/screenshot-library.png"
              alt="Yarnl pattern library"
              className="screenshot-main"
            />
          </div>
        </section>

        {/* Features */}
        <section className="features-section">
          <div className="features-inner">
            <div className="features-header">
              <h2>Everything you need to stay organized</h2>
              <p>Built by crafters, for crafters</p>
            </div>
            <div className="features-grid">
              {features.map((feature, idx) => (
                <div key={idx} className="feature-card">
                  <span className="feature-icon">{feature.icon}</span>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pattern View Preview */}
        <section className="preview-section">
          <div className="preview-inner">
            <div className="preview-content">
              <h2>Focus on your craft, not your tools</h2>
              <p>
                View your patterns with a built-in PDF reader, track rows with a tap,
                and pick up exactly where you left off—even weeks later.
              </p>
              <ul className="preview-list">
                <li>Page-by-page PDF viewing</li>
                <li>Persistent row counter</li>
                <li>Time tracking per project</li>
                <li>Notes and annotations</li>
              </ul>
            </div>
            <img
              src="/img/screenshot-pattern.png"
              alt="Pattern view with row counter"
              className="preview-image"
            />
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section">
          <div className="cta-inner">
            <h2>Ready to get organized?</h2>
            <p>Yarnl is free, open source, and self-hosted. Set it up in minutes.</p>
            <Link className="cta-button" to="/docs/intro">
              Read the Docs
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}
