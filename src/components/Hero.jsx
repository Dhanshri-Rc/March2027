import React from 'react';
import './Hero.css';

export default function Hero({ onSubmit }) {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="hero">
      
      {/* Background Overlay */}
      <div className="hero-overlay"></div>

      {/* Animated Circles */}
      <div className="circle circle1"></div>
      <div className="circle circle2"></div>

      <div className="container hero-wrapper">

        {/* LEFT */}
        <div className="hero-left">
          <span className="hero-tag">
            SIARE International Conference • March 2027
          </span>

          <h1 className="hero-title">
            International Conference on <br />
            <span>Climate Change & Sustainability</span>
          </h1>

          <p className="hero-desc">
            Connect with global researchers, scientists, and policymakers
            to explore innovative solutions for climate change,
            biodiversity, and sustainable development.
          </p>

          <div className="hero-buttons">
            <button className="btn primary" onClick={onSubmit}>
              Submit Paper
            </button>

            <button className="btn secondary" onClick={() => scrollTo('registration')}>
              Register Now
            </button>
          </div>

          <div className="hero-info">
            <div>
              <strong>📅 March 2027</strong>
              <span> Conference Date</span>
            </div>

            <div>
              <strong>📄 Dec 15, 2026</strong>
              <span> Submission Deadline</span>
            </div>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="hero-card">
          <h3>Conference Highlights</h3>

          <ul>
            <li>🌍 500+ Global Participants</li>
            <li>🎤 Expert Keynote Speakers</li>
            <li>📚 12 Research Tracks</li>
            <li>💻 Hybrid Mode (Online + Offline)</li>
          </ul>

          <button className="btn full" onClick={() => scrollTo('about-conference')}>
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
}