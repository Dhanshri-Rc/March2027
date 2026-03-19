import React from 'react';

export default function AboutConference() {
  const highlights = [
    { icon: '🎤', title: 'Keynote Addresses', desc: 'Internationally acclaimed scientists and policymakers sharing frontier research' },
    { icon: '📊', title: 'Peer-Reviewed Papers', desc: 'Double-blind review process ensuring the highest scholarly standards' },
    { icon: '🤝', title: 'Networking Sessions', desc: 'Structured networking with researchers, NGOs, and policymakers worldwide' },
    { icon: '🏆', title: 'Best Paper Awards', desc: 'Recognition for outstanding contributions across all conference tracks' },
    { icon: '📚', title: 'Indexed Publications', desc: 'Proceedings published in SCOPUS and Web of Science indexed journals' },
    { icon: '🌐', title: 'Hybrid Format', desc: 'Participate in-person or virtually with full access to all sessions' },
  ];

  return (
    <section id="about-conference">
      <div className="container">
        <div className="section-header">
          <span className="section-label">🔬 The Conference</span>
          <h2>About the Conference</h2>
          <p>
            A world-class interdisciplinary gathering exploring the scientific, social, economic, and
            policy dimensions of climate change, biodiversity conservation, and sustainability.
          </p>
        </div>

        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'56px', alignItems:'start', marginBottom:'56px'}}>
          <div>
            <p style={{marginBottom:'18px'}}>
              The <strong>International Conference on Climate Change, Biodiversity, and Global
              Sustainability Research (ICCBGSR 2027)</strong> is the flagship annual event of the SIARE
              conference series, bringing together over 500 delegates from more than 40 nations.
              Scheduled for March 2027, the conference serves as a crucible for innovative research
              and interdisciplinary dialogue on the most urgent ecological challenges of our time.
            </p>
            <p style={{marginBottom:'18px'}}>
              This conference addresses the deeply interconnected crises of anthropogenic climate
              disruption, accelerating biodiversity collapse, and the systemic unsustainability of
              current economic and social paradigms. By fostering dialogue between natural scientists,
              social scientists, economists, engineers, ethicists, and community advocates, ICCBGSR
              generates holistic insights that no single discipline can produce alone.
            </p>
            <p>
              Accepted papers will be published in conference proceedings with ISBN, and selected
              works will be invited for submission to SIARE's partner peer-reviewed journals, offering
              pathways to SCOPUS-indexed publication. Oral presentations, poster sessions, panel
              discussions, and workshop formats ensure diverse modes of scholarly exchange.
            </p>
          </div>

          <div style={{display:'flex', flexDirection:'column', gap:'16px'}}>
            <div className="card" style={{background:'var(--teal)', color:'white', border:'none'}}>
              <h3 style={{color:'white', fontSize:'1.5rem', marginBottom:'8px'}}>ICCBGSR 2027</h3>
              <p style={{color:'rgba(255,255,255,0.75)', marginBottom:'16px'}}>International Conference on Climate Change, Biodiversity & Global Sustainability Research</p>
              <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
                {[
                  ['📅', 'Date', 'March 2027'],
                  ['🌐', 'Format', 'Hybrid (In-Person + Virtual)'],
                  ['🌍', 'Scope', 'International'],
                  ['🔬', 'Theme', 'Climate, Biodiversity & Sustainability'],
                  ['📝', 'Peer Review', 'Double-blind Review Process'],
                ].map(([icon, k, v]) => (
                  <div key={k} style={{display:'flex', gap:'10px', alignItems:'center'}}>
                    <span>{icon}</span>
                    <span style={{color:'rgba(255,255,255,0.6)', fontSize:'0.85rem', width:'90px', flexShrink:0}}>{k}</span>
                    <span style={{color:'white', fontSize:'0.9rem', fontWeight:'500'}}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid-3">
          {highlights.map((h, i) => (
            <div key={i} className="card">
              <div style={{display:'flex', gap:'14px', alignItems:'flex-start'}}>
                <div className="icon-circle" style={{fontSize:'1.2rem'}}>{h.icon}</div>
                <div>
                  <h4 style={{marginBottom:'6px', fontSize:'1rem'}}>{h.title}</h4>
                  <p style={{fontSize:'0.9rem'}}>{h.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about-conference .grid-2-custom { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
