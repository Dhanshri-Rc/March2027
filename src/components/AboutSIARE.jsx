import React from 'react';

export default function AboutSIARE() {
  const events = [
    { month: 'June', label: 'Call for Papers Opens', icon: '📢' },
    { month: 'August', label: 'Early Submission Deadline', icon: '📋' },
    { month: 'October', label: 'Notification of Acceptance', icon: '✅' },
    { month: 'November', label: 'Camera-Ready Submission', icon: '📤' },
    { month: 'December', label: 'Final Registration Deadline', icon: '🔒' },
    { month: 'March', label: 'Conference Convenes', icon: '🎓' },
  ];

  return (
    <section id="about-siare">
      <div className="container">
        <div className="section-header">
          <span className="section-label">🌿 Conference Series</span>
          <h2>About the SIARE Conference Series</h2>
          <p>
            The Society for Interdisciplinary Academic Research & Exchange (SIARE) has been
            organizing high-impact international conferences since 2008, connecting scholars
            across continents in pursuit of knowledge that matters.
          </p>
        </div>

        <div className="siare-grid">
          <div>
            <p style={{marginBottom:'16px'}}>
              SIARE conferences are renowned for their rigorous peer-review processes, distinguished keynote
              speakers from leading global institutions, and commitment to translating academic insight into
              actionable policy. Each edition follows a carefully structured annual cycle — from the June
              opening of submissions through the March conference convening — designed to maximize
              scholarly quality and participant engagement.
            </p>
            <p style={{marginBottom:'16px'}}>
              With a track record spanning over 60 successful conferences across 28 countries, SIARE
              has built an unparalleled network of researchers, educators, NGOs, governmental bodies,
              and industry leaders. Our publications are indexed in SCOPUS, Web of Science, and DOAJ,
              ensuring maximum visibility for accepted research.
            </p>
            <p>
              The 2027 edition focuses on one of humanity's most pressing challenges: the intersecting
              crises of climate change, biodiversity loss, and the imperative of global sustainability —
              a nexus that demands collaborative, cross-disciplinary solutions at unprecedented scale.
            </p>
          </div>

          <div>
            <h4 style={{marginBottom:'20px', fontSize:'1rem', fontFamily:'var(--font-body)', color:'var(--ink-soft)', textTransform:'uppercase', letterSpacing:'0.05em'}}>Annual Conference Cycle</h4>
            <div className="timeline">
              {events.map((e, i) => (
                <div key={i} className="timeline-item">
                  <div className="timeline-dot">
                    <span>{e.icon}</span>
                  </div>
                  <div className="timeline-content">
                    <span className="timeline-month">{e.month}</span>
                    <span className="timeline-label">{e.label}</span>
                  </div>
                  {i < events.length - 1 && <div className="timeline-line"></div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .siare-grid {
          display: grid;
          grid-template-columns: 1fr 380px;
          gap: 64px;
          align-items: start;
        }
        .timeline { display: flex; flex-direction: column; gap: 0; }
        .timeline-item {
          display: flex; align-items: flex-start; gap: 14px;
          position: relative; padding-bottom: 20px;
        }
        .timeline-dot {
          width: 40px; height: 40px; border-radius: 50%;
          background: var(--teal-pale);
          border: 2px solid var(--border);
          display: flex; align-items: center; justify-content: center;
          font-size: 1rem; flex-shrink: 0;
          position: relative; z-index: 1;
        }
        .timeline-item:not(:last-child)::before {
          content: '';
          position: absolute;
          left: 19px; top: 40px;
          width: 2px; height: calc(100% - 20px);
          background: var(--border);
        }
        .timeline-content { display: flex; flex-direction: column; padding-top: 8px; }
        .timeline-month { font-family: var(--font-mono); font-size: 0.75rem; color: var(--teal); font-weight: 500; letter-spacing: 0.08em; text-transform: uppercase; }
        .timeline-label { font-size: 0.95rem; color: var(--ink-soft); font-weight: 500; }
        @media (max-width: 860px) {
          .siare-grid { grid-template-columns: 1fr; gap: 40px; }
        }
      `}</style>
    </section>
  );
}
