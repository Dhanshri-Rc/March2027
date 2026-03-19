import React from 'react';

const dates = [
  { date: 'June 1, 2026', label: 'Call for Papers Opens', icon: '📢', status: 'past', cat: 'submission' },
  { date: 'August 15, 2026', label: 'Abstract Submission Deadline', icon: '📋', status: 'past', cat: 'submission' },
  { date: 'September 5, 2026', label: 'Abstract Acceptance Notification', icon: '✅', status: 'past', cat: 'review' },
  { date: 'October 31, 2026', label: 'Early Bird Registration Deadline', icon: '🎫', status: 'upcoming', cat: 'registration', highlight: true },
  { date: 'November 30, 2026', label: 'Full Paper Submission Deadline', icon: '📤', status: 'upcoming', cat: 'submission' },
  { date: 'December 15, 2026', label: 'Extended Full Paper Deadline', icon: '⏰', status: 'upcoming', cat: 'submission', highlight: true },
  { date: 'January 10, 2027', label: 'Paper Acceptance Notification', icon: '📧', status: 'upcoming', cat: 'review' },
  { date: 'January 15, 2027', label: 'Regular Registration Deadline', icon: '🔒', status: 'upcoming', cat: 'registration' },
  { date: 'February 1, 2027', label: 'Camera-Ready Submission', icon: '🖨️', status: 'upcoming', cat: 'submission' },
  { date: 'February 15, 2027', label: 'Final Registration Deadline', icon: '🚫', status: 'upcoming', cat: 'registration' },
  { date: 'February 28, 2027', label: 'Conference Programme Published', icon: '📅', status: 'upcoming', cat: 'conference' },
  { date: 'March 2027', label: 'ICCBGSR 2027 Conference', icon: '🎓', status: 'upcoming', cat: 'conference', highlight: true },
];

const catColors = {
  submission: 'var(--teal)',
  review: 'var(--gold)',
  registration: '#7c3aed',
  conference: 'var(--rust)',
};

const catLabels = {
  submission: 'Submission',
  review: 'Review',
  registration: 'Registration',
  conference: 'Conference',
};

export default function ImportantDates({ onSubmit }) {
  return (
    <section id="dates">
      <div className="container">
        <div className="section-header">
          <span className="section-label">📅 Timeline</span>
          <h2>Important Dates</h2>
          <p>Mark these key milestones to ensure you don't miss any critical deadlines.</p>
        </div>

        <div style={{display:'flex', gap:'10px', flexWrap:'wrap', marginBottom:'32px'}}>
          {Object.entries(catLabels).map(([k, v]) => (
            <div key={k} style={{display:'flex', alignItems:'center', gap:'7px', padding:'5px 14px', background:'var(--paper-card)', border:'1px solid var(--border-soft)', borderRadius:'100px', fontSize:'0.83rem', color:'var(--ink-muted)'}}>
              <span style={{width:'8px', height:'8px', borderRadius:'50%', background: catColors[k], display:'inline-block'}}></span>
              {v}
            </div>
          ))}
        </div>

        <div className="dates-list">
          {dates.map((d, i) => (
            <div key={i} className={`date-item ${d.highlight ? 'highlight' : ''}`}>
              <div className="date-dot" style={{background: catColors[d.cat], boxShadow: d.highlight ? `0 0 0 4px ${catColors[d.cat]}22` : 'none'}}></div>
              <div className="date-icon">{d.icon}</div>
              <div className="date-info">
                <span className="date-label">{d.label}</span>
                {d.highlight && <span className="date-badge" style={{background:`${catColors[d.cat]}18`, color: catColors[d.cat]}}>Key Date</span>}
              </div>
              <div className="date-value" style={{color: d.highlight ? catColors[d.cat] : 'var(--ink-soft)'}}>
                {d.date}
              </div>
            </div>
          ))}
        </div>

        <div style={{marginTop:'48px', textAlign:'center'}}>
          <p style={{marginBottom:'20px', fontSize:'1rem'}}>Don't miss the submission window — start preparing your paper today.</p>
          <div style={{display:'flex', gap:'12px', justifyContent:'center', flexWrap:'wrap'}}>
            <button className="btn btn-primary" onClick={onSubmit}>📝 Submit Paper</button>
            <a href="#registration" className="btn btn-outline"
               onClick={e=>{e.preventDefault(); document.getElementById('registration')?.scrollIntoView({behavior:'smooth'})}}>
              🎫 Register Now
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .dates-list { display: flex; flex-direction: column; gap: 0; }
        .date-item {
          display: grid;
          grid-template-columns: 16px 40px 1fr auto;
          gap: 16px;
          align-items: center;
          padding: 16px 20px;
          border-radius: var(--radius);
          transition: background 0.15s;
          position: relative;
        }
        .date-item:hover { background: var(--paper-card); }
        .date-item.highlight { background: var(--paper-card); box-shadow: var(--shadow-sm); border: 1px solid var(--border-soft); margin: 4px 0; }
        .date-dot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; }
        .date-icon { font-size: 1.1rem; }
        .date-info { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
        .date-label { font-size: 0.95rem; color: var(--ink-soft); font-weight: 500; }
        .date-badge { font-family: var(--font-mono); font-size: 0.68rem; font-weight: 600; padding: 2px 8px; border-radius: 100px; letter-spacing: 0.06em; text-transform: uppercase; }
        .date-value { font-family: var(--font-mono); font-size: 0.85rem; font-weight: 500; white-space: nowrap; }
        @media (max-width: 540px) {
          .date-item { grid-template-columns: 12px 32px 1fr; }
          .date-value { grid-column: 3; font-size: 0.78rem; }
        }
      `}</style>
    </section>
  );
}
