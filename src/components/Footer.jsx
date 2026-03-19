import React from 'react';

const quickLinks = [
  { label: 'About SIARE', href: '#about-siare' },
  { label: 'Conference Tracks', href: '#tracks' },
  { label: 'Submission Guidelines', href: '#submission' },
  { label: 'Plagiarism Policy', href: '#plagiarism' },
  { label: 'Registration', href: '#registration' },
  { label: 'Important Dates', href: '#dates' },
];

export default function Footer() {
  const scrollTo = href => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer style={{background:'var(--ink)', color:'white', padding:'64px 0 0'}}>
      <div className="container">
        <div style={{display:'grid', gridTemplateColumns:'2fr 1fr 1fr 1.2fr', gap:'48px', paddingBottom:'48px'}}>

          {/* Brand */}
          <div>
            <div style={{display:'flex', alignItems:'center', gap:'10px', marginBottom:'16px'}}>
              <span style={{fontSize:'1.8rem'}}>🌿</span>
              <div>
                <span style={{display:'block', fontFamily:'var(--font-display)', fontSize:'1.3rem', fontWeight:'700', color:'var(--teal-light)'}}>ICCBGSR 2027</span>
                <span style={{display:'block', fontFamily:'var(--font-mono)', fontSize:'0.65rem', color:'rgba(255,255,255,0.4)', letterSpacing:'0.08em'}}>SIARE CONFERENCE SERIES</span>
              </div>
            </div>
            <p style={{color:'rgba(255,255,255,0.5)', fontSize:'0.9rem', lineHeight:'1.7', maxWidth:'320px'}}>
              The International Conference on Climate Change, Biodiversity, and Global Sustainability Research — bringing together the world's sustainability scientists.
            </p>
            <div style={{display:'flex', gap:'10px', marginTop:'20px'}}>
              {['𝕏', 'in', '📘', '📧'].map((icon, i) => (
                <div key={i} style={{width:'36px', height:'36px', borderRadius:'8px', background:'rgba(255,255,255,0.08)', display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer', fontSize:'0.9rem', color:'rgba(255,255,255,0.6)', transition:'background 0.2s'}}
                     onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
                     onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}>
                  {icon}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{color:'white', fontFamily:'var(--font-body)', fontSize:'0.85rem', textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:'16px'}}>Quick Links</h4>
            <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
              {quickLinks.map(link => (
                <a key={link.href} href={link.href} style={{color:'rgba(255,255,255,0.5)', fontSize:'0.9rem', textDecoration:'none', transition:'color 0.15s'}}
                   onClick={e => { e.preventDefault(); scrollTo(link.href); }}
                   onMouseEnter={e => e.currentTarget.style.color = 'var(--teal-light)'}
                   onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Key Dates */}
          <div>
            <h4 style={{color:'white', fontFamily:'var(--font-body)', fontSize:'0.85rem', textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:'16px'}}>Key Dates</h4>
            <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
              {[
                ['Oct 31, 2026', 'Early Bird Deadline'],
                ['Dec 15, 2026', 'Paper Deadline'],
                ['Jan 10, 2027', 'Notification'],
                ['Mar 2027', 'Conference'],
              ].map(([d, l]) => (
                <div key={l}>
                  <span style={{display:'block', fontFamily:'var(--font-mono)', fontSize:'0.72rem', color:'var(--teal-light)'}}>{d}</span>
                  <span style={{fontSize:'0.88rem', color:'rgba(255,255,255,0.5)'}}>{l}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{color:'white', fontFamily:'var(--font-body)', fontSize:'0.85rem', textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:'16px'}}>Contact Us</h4>
            <div style={{display:'flex', flexDirection:'column', gap:'14px'}}>
              {[
                { icon: '📧', label: 'Email', val: 'conference@siare2027.org' },
                { icon: '🌐', label: 'Website', val: 'www.siare2027.org' },
                { icon: '📱', label: 'WhatsApp', val: '+1 (555) 234-5678' },
                { icon: '📍', label: 'Secretariat', val: 'SIARE Academic Society\nInternational Campus, Suite 400' },
              ].map(c => (
                <div key={c.label} style={{display:'flex', gap:'10px', alignItems:'flex-start'}}>
                  <span style={{fontSize:'1rem', marginTop:'1px', flexShrink:0}}>{c.icon}</span>
                  <div>
                    <span style={{display:'block', fontSize:'0.72rem', color:'rgba(255,255,255,0.35)', textTransform:'uppercase', letterSpacing:'0.08em', fontFamily:'var(--font-mono)'}}>{c.label}</span>
                    <span style={{fontSize:'0.87rem', color:'rgba(255,255,255,0.6)', whiteSpace:'pre-line'}}>{c.val}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{borderTop:'1px solid rgba(255,255,255,0.08)', padding:'20px 0', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:'12px'}}>
          <p style={{color:'rgba(255,255,255,0.3)', fontSize:'0.83rem', margin:0}}>
            © 2026 SIARE International Conference Series. All rights reserved.
          </p>
          <div style={{display:'flex', gap:'20px'}}>
            {['Privacy Policy', 'Terms of Use', 'Cookie Policy'].map(l => (
              <a key={l} href="#" style={{color:'rgba(255,255,255,0.3)', fontSize:'0.82rem', textDecoration:'none'}}
                 onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
                 onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.3)'}>
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          footer > div > div:first-of-type { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 520px) {
          footer > div > div:first-of-type { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
