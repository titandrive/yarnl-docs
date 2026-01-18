import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

function Icon({name}: {name: string}): ReactNode {
  const icons: Record<string, ReactNode> = {
    document: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
    counter: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2"/>
        <path d="M9 9h6"/>
        <path d="M12 9v6"/>
        <path d="M9 15h6"/>
      </svg>
    ),
    tag: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
        <line x1="7" y1="7" x2="7.01" y2="7"/>
      </svg>
    ),
    clock: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    search: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/>
        <line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    ),
    server: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="6" rx="1"/>
        <rect x="2" y="15" width="20" height="6" rx="1"/>
        <circle cx="6" cy="6" r="1"/>
        <circle cx="6" cy="18" r="1"/>
      </svg>
    ),
  };
  return icons[name] || null;
}

const features = [
  {
    icon: 'document',
    title: 'PDF Pattern Support',
    description: 'Import your pattern PDFs directly. Page through them while tracking your progress.',
  },
  {
    icon: 'counter',
    title: 'Row Counter',
    description: 'Built-in row counter that stays with your pattern. Never lose your place again.',
  },
  {
    icon: 'tag',
    title: 'Categories & Tags',
    description: 'Organize patterns by type, difficulty, or any custom tags you want.',
  },
  {
    icon: 'clock',
    title: 'Time Tracking',
    description: 'See how long you spend on each project. Track your crafting journey.',
  },
  {
    icon: 'search',
    title: 'Search & Filter',
    description: 'Find any pattern instantly. Filter by status, category, or search by name.',
  },
  {
    icon: 'server',
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
              <Link className="btn-primary" to="/docs/Documentation/installation">
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
                  <span className="feature-icon"><Icon name={feature.icon} /></span>
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
            <Link className="cta-button" to="/docs/Documentation/installation">
              Read the Docs
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}
