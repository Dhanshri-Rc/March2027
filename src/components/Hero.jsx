import React from 'react';
import './Hero.css';

export default function Hero({ onSubmit }) {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="hero">
      <div className="hero-bg">
        <div className="hero-orb hero-orb-1"></div>
        <div className="hero-orb hero-orb-2"></div>
        <div className="hero-orb hero-orb-3"></div>
        <div className="hero-grid"></div>
      </div>

      <div className="container hero-inner">
        <div className="hero-badge">
          <span>🌍</span>
          <span>SIARE International Conference Series</span>
          <span className="hero-badge-dot"></span>
          <span>March 2027</span>
        </div>

        <h1 className="hero-title">
          International Conference on<br />
          <em>Climate Change, Biodiversity</em><br />
          & Global Sustainability Research
        </h1>

        <p className="hero-subtitle">
          A premier interdisciplinary forum uniting researchers, policymakers, and practitioners
          from across the globe to address the defining environmental challenges of our era.
        </p>

        <div className="hero-meta">
          <div className="hero-meta-item">
            <span className="hero-meta-icon">📅</span>
            <div>
              <span className="hero-meta-label">Conference Date</span>
              <span className="hero-meta-value">March 2027</span>
            </div>
          </div>
          <div className="hero-meta-divider"></div>
          <div className="hero-meta-item">
            <span className="hero-meta-icon">📄</span>
            <div>
              <span className="hero-meta-label">Submission Deadline</span>
              <span className="hero-meta-value">December 15, 2026</span>
            </div>
          </div>
          <div className="hero-meta-divider"></div>
          <div className="hero-meta-item">
            <span className="hero-meta-icon">🌐</span>
            <div>
              <span className="hero-meta-label">Format</span>
              <span className="hero-meta-value">Hybrid (In-Person & Online)</span>
            </div>
          </div>
        </div>

        <div className="hero-actions">
          <button className="btn btn-primary hero-btn" onClick={onSubmit}>
            📝 Submit Your Paper
          </button>
          <button className="btn btn-outline hero-btn" onClick={() => scrollTo('registration')}>
            Register Now
          </button>
          <button className="btn hero-btn hero-btn-ghost" onClick={() => scrollTo('about-conference')}>
            Learn More ↓
          </button>
        </div>

        <div className="hero-stats">
          {[
            { n: '500+', l: 'Expected Attendees' },
            { n: '40+', l: 'Countries Represented' },
            { n: '12', l: 'Conference Tracks' },
            { n: '3', l: 'Days of Insights' },
          ].map(s => (
            <div key={s.l} className="hero-stat">
              <span className="hero-stat-n">{s.n}</span>
              <span className="hero-stat-l">{s.l}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
