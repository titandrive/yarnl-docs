import type {ReactNode} from 'react';
import {useState, useEffect} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import ThemedImage from '@theme/ThemedImage';

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
    icon: 'server',
    title: 'Self-Hosted',
    description: 'Host Yarnl on your own server. Free forever with no subscriptions. Your data stays private and fully portable.',
  },
  {
    icon: 'document',
    title: 'Pattern Library',
    description: 'Bulk import patterns, organize with categories & hashtags, and find anything instantly with search and filters.',
  },
  {
    icon: 'counter',
    title: 'Pattern Viewer',
    description: 'A distraction-free crocheting experience with everything you need and nothing you don\'t.',
  },
  {
    icon: 'tag',
    title: 'Backups',
    description: 'Automatic backups that save all of your data. No more worrying about losing your place or favorite pattern again.',
  },
  {
    icon: 'clock',
    title: 'Keyboard Shortcuts',
    description: 'Fully customizable keyboard shortcuts for counters, timer, navigation, and more. Yarnl also supports Bluetooth controllers.',
  },
  {
    icon: 'search',
    title: 'Customizable UI',
    description: 'Nearly every part of the UI is customizable. Choose from tons of themes and fonts. You can even choose your favorite mascot.',
  },
];

function ScreenshotCarousel(): ReactNode {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const screenshots = [
    {
      light: '/img/screenshots/home-light.png',
      dark: '/img/screenshots/home.png',
      alt: 'Yarnl pattern library',
      caption: 'Organize and manage your entire pattern library'
    },
    {
      light: '/img/screenshots/viewer-light.png',
      dark: '/img/screenshots/viewer.png',
      alt: 'Pattern view with row counter',
      caption: 'Never lose track of what row you\'re on again'
    },
    {
      light: '/img/screenshots/notes-light.png',
      dark: '/img/screenshots/notes.png',
      alt: 'Pattern notes',
      caption: 'Create notes or full patterns using Markdown'
    },
    {
      light: '/img/screenshots/info-light.png',
      dark: '/img/screenshots/info.png',
      alt: 'Pattern information',
      caption: 'Track all your pattern details in one place'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        prevSlide();
      } else if (event.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <div className="screenshot-carousel">
        <button className="carousel-btn carousel-btn-prev" onClick={prevSlide} aria-label="Previous screenshot">
          ‹
        </button>
        <div onClick={() => setIsZoomed(true)} style={{ cursor: 'zoom-in' }}>
          <ThemedImage
            alt={screenshots[currentIndex].alt}
            sources={{
              light: screenshots[currentIndex].light,
              dark: screenshots[currentIndex].dark,
            }}
            className="screenshot-main"
          />
        </div>
        <button className="carousel-btn carousel-btn-next" onClick={nextSlide} aria-label="Next screenshot">
          ›
        </button>
        <div className="carousel-dots">
          {screenshots.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to screenshot ${index + 1}`}
            />
          ))}
        </div>
        <p className="carousel-caption">{screenshots[currentIndex].caption}</p>
      </div>

      {isZoomed && (
        <div className="screenshot-modal" onClick={() => setIsZoomed(false)}>
          <button className="screenshot-modal-nav screenshot-modal-nav-prev" onClick={(e) => { e.stopPropagation(); prevSlide(); }} aria-label="Previous">
            ‹
          </button>
          <div className="screenshot-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="screenshot-modal-close" onClick={() => setIsZoomed(false)} aria-label="Close">
              ×
            </button>
            <ThemedImage
              alt={screenshots[currentIndex].alt}
              sources={{
                light: screenshots[currentIndex].light,
                dark: screenshots[currentIndex].dark,
              }}
              className="screenshot-modal-image"
            />
            <p className="screenshot-modal-caption">{screenshots[currentIndex].caption}</p>
          </div>
          <button className="screenshot-modal-nav screenshot-modal-nav-next" onClick={(e) => { e.stopPropagation(); nextSlide(); }} aria-label="Next">
            ›
          </button>
        </div>
      )}
    </>
  );
}

function SmallCarousel({screenshots, title}: {screenshots: Array<{light: string, dark: string, name: string}>, title: string}): ReactNode {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  useEffect(() => {
    if (!isZoomed) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        prevSlide();
      } else if (event.key === 'ArrowRight') {
        nextSlide();
      } else if (event.key === 'Escape') {
        setIsZoomed(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isZoomed]);

  return (
    <>
      <div className="small-carousel">
        <h3 className="small-carousel-title">{title}</h3>
        <div className="small-carousel-content">
          <button className="carousel-btn carousel-btn-prev" onClick={prevSlide} aria-label="Previous">
            ‹
          </button>
          <div onClick={() => setIsZoomed(true)} style={{ cursor: 'zoom-in' }}>
            <ThemedImage
              alt={screenshots[currentIndex].name}
              sources={{
                light: screenshots[currentIndex].light,
                dark: screenshots[currentIndex].dark,
              }}
              className="small-carousel-image"
            />
          </div>
          <button className="carousel-btn carousel-btn-next" onClick={nextSlide} aria-label="Next">
            ›
          </button>
        </div>
        <p className="carousel-caption">{screenshots[currentIndex].name}</p>
        <div className="carousel-dots">
          {screenshots.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to ${title} ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {isZoomed && (
        <div className="screenshot-modal" onClick={() => setIsZoomed(false)}>
          <button className="screenshot-modal-nav screenshot-modal-nav-prev" onClick={(e) => { e.stopPropagation(); prevSlide(); }} aria-label="Previous">
            ‹
          </button>
          <div className="screenshot-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="screenshot-modal-close" onClick={() => setIsZoomed(false)} aria-label="Close">
              ×
            </button>
            <ThemedImage
              alt={screenshots[currentIndex].name}
              sources={{
                light: screenshots[currentIndex].light,
                dark: screenshots[currentIndex].dark,
              }}
              className="screenshot-modal-image"
            />
            <p className="screenshot-modal-caption">{screenshots[currentIndex].name}</p>
          </div>
          <button className="screenshot-modal-nav screenshot-modal-nav-next" onClick={(e) => { e.stopPropagation(); nextSlide(); }} aria-label="Next">
            ›
          </button>
        </div>
      )}
    </>
  );
}

function ThemesCarousel(): ReactNode {
  const themes = [
    { name: 'Aqua', light: '/img/screenshots/themes/aqual-light.png', dark: '/img/screenshots/themes/aqua.png' },
    { name: 'Coffee', light: '/img/screenshots/themes/coffee-light.png', dark: '/img/screenshots/themes/coffee.png' },
    { name: 'Cyberpunk', light: '/img/screenshots/themes/cyberpunk-light.png', dark: '/img/screenshots/themes/cyberpunk.png' },
    { name: 'Dracula', light: '/img/screenshots/themes/dracula-light.png', dark: '/img/screenshots/themes/dracula.png' },
    { name: 'Forest', light: '/img/screenshots/themes/forest-light.png', dark: '/img/screenshots/themes/forest.png' },
    { name: 'Halloween', light: '/img/screenshots/themes/haloween-light.png', dark: '/img/screenshots/themes/haloween.png' },
    { name: 'Lavender', light: '/img/screenshots/themes/lavender-light.png', dark: '/img/screenshots/themes/lavender.png' },
    { name: 'Midnight', light: '/img/screenshots/themes/midnight-light.png', dark: '/img/screenshots/themes/midnight.png' },
    { name: 'Minimal', light: '/img/screenshots/themes/minimal-light.png', dark: '/img/screenshots/themes/minimal.png' },
    { name: 'Ocean', light: '/img/screenshots/themes/ocean-light.png', dark: '/img/screenshots/themes/ocean.png' },
    { name: 'Slate', light: '/img/screenshots/themes/slate-light.png', dark: '/img/screenshots/themes/slate.png' },
    { name: 'Sunset', light: '/img/screenshots/themes/sunset-light.png', dark: '/img/screenshots/themes/sunset.png' },
    { name: 'Synthwave', light: '/img/screenshots/themes/synthwave-light.png', dark: '/img/screenshots/themes/synthwave.png' },
  ];

  return <SmallCarousel screenshots={themes} title="Themes" />;
}

function SettingsCarousel(): ReactNode {
  const settings = [
    { name: 'Appearance', light: '/img/screenshots/settings/appearance-light.png', dark: '/img/screenshots/settings/appearance.png' },
    { name: 'Categories', light: '/img/screenshots/settings/categories-light.png', dark: '/img/screenshots/settings/categories.png' },
    { name: 'Keyboard', light: '/img/screenshots/settings/keyboard-light.png', dark: '/img/screenshots/settings/keyboard.png' },
    { name: 'Backup', light: '/img/screenshots/settings/backup-light.png', dark: '/img/screenshots/settings/backup.png' },
    { name: 'Notifications', light: '/img/screenshots/settings/notifications-light.png', dark: '/img/screenshots/settings/notifications.png' },
    { name: 'About', light: '/img/screenshots/settings/about-light.png', dark: '/img/screenshots/settings/about.png' },
    { name: 'Archive', light: '/img/screenshots/settings/archive-light.png', dark: '/img/screenshots/settings/archive.png' },
  ];

  return <SmallCarousel screenshots={settings} title="Settings" />;
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Home"
      description="Yarnl - Your self-hosted crochet companion. Track patterns, manage your yarn stash, and organize your projects.">

      <div className="homepage">
        {/* Hero */}
        <section className="hero-section">
          <div className="hero-inner">
            <div className="hero-title-row">
              <h1 className="hero-title">Yarnl</h1>
              <ThemedImage
                alt="Yarnl mascot"
                sources={{
                  light: '/img/mascot-light.png',
                  dark: '/img/mascot.png',
                }}
                className="hero-mascot"
              />
            </div>
            <p className="hero-tagline">Your self-hosted crochet companion</p>
            <div className="hero-buttons">
              <Link className="btn-primary" to="/docs/guide/installation">
                Get Started
              </Link>
              <Link className="btn-secondary" href="https://demo.yarnl.com">
                Try the Demo
              </Link>
              <Link className="btn-secondary" to="/docs/about">
                Read the Docs
              </Link>
            </div>
          </div>
        </section>

        {/* Screenshot */}
        <section className="screenshot-section">
          <div className="screenshot-container">
            <ScreenshotCarousel />
          </div>
          <div className="small-carousels-container">
            <ThemesCarousel />
            <SettingsCarousel />
          </div>
        </section>

        {/* Features */}
        <section className="features-section">
          <div className="features-inner">
            <div className="features-header">
              <h2>The perfect crocheting companion</h2>
              <p>Made just for you</p>
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
                and pick up exactly where you left off, even weeks later.
              </p>
              <ul className="preview-list">
                <li>Page-by-page PDF viewing</li>
                <li>Persistent row counter</li>
                <li>Time tracking per pattern</li>
                <li>Notes and annotations</li>
              </ul>
            </div>
            <ThemedImage
              alt="Pattern view with row counter"
              sources={{
                light: '/img/screenshots/screenshot-pattern-light.png',
                dark: '/img/screenshots/screenshot-pattern.png',
              }}
              className="preview-image"
            />
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section">
          <div className="cta-inner">
            <h2>Ready to start crocheting?</h2>
            <p>Yarnl is free, open source, and self-hosted.<br />Get started in minutes.</p>
            <Link className="cta-button" to="/docs/guide/installation">
              Get Started
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}
