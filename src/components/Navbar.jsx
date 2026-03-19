import React, { useState } from 'react';
import './Navbar.css';

const navLinks = [
  { label: 'About', href: '#about-siare' },
  { label: 'Conference', href: '#about-conference' },
  { label: 'Tracks', href: '#tracks' },
  { label: 'Submission', href: '#submission' },
  { label: 'Registration', href: '#registration' },
  { label: 'Dates', href: '#dates' },
];

export default function Navbar({ scrolled, onSubmit }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (href) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner container">
        <a href="#hero" className="nav-brand" onClick={e => { e.preventDefault(); window.scrollTo({top:0,behavior:'smooth'}); }}>
          <span className="brand-icon">🌿</span>
          <div>
            <span className="brand-main">ICCBGSR</span>
            <span className="brand-sub">2027</span>
          </div>
        </a>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="nav-link"
               onClick={e => { e.preventDefault(); handleNav(link.href); }}>
              {link.label}
            </a>
          ))}
          <button className="btn btn-primary nav-cta" onClick={() => { setMenuOpen(false); onSubmit(); }}>
            Submit Paper
          </button>
        </div>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span className={menuOpen ? 'open' : ''}></span>
          <span className={menuOpen ? 'open' : ''}></span>
          <span className={menuOpen ? 'open' : ''}></span>
        </button>
      </div>
    </nav>
  );
}
