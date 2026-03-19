import React from 'react';

const steps = [
  { n: 1, icon: '📋', title: 'Register on the Portal', desc: 'Create your author account on the SIARE submission portal. Complete your profile with institutional affiliation, research interests, and ORCID ID.' },
  { n: 2, icon: '📝', title: 'Prepare Your Manuscript', desc: 'Format your paper using the official SIARE template. Ensure anonymisation for blind review, verify word count, and proofread thoroughly.' },
  { n: 3, icon: '📤', title: 'Submit via Portal', desc: 'Log in to the SIARE submission portal, select the appropriate track, complete the submission form with title, abstract, and keywords, then upload your files.' },
  { n: 4, icon: '✅', title: 'Desk Review', desc: 'The Editorial Committee performs an initial desk review for scope, format compliance, and originality check via iThenticate plagiarism detection software.' },
  { n: 5, icon: '👥', title: 'Peer Review Process', desc: 'Eligible submissions enter double-blind peer review by at least two independent experts. Reviewers assess originality, methodology, contribution, and clarity.' },
  { n: 6, icon: '📧', title: 'Decision Notification', desc: 'Authors receive decisions — Accept, Minor Revision, Major Revision, or Reject — with detailed reviewer feedback within 6–8 weeks of submission.' },
  { n: 7, icon: '🔄', title: 'Revision & Resubmission', desc: 'If revisions are required, authors have 3 weeks (minor) or 6 weeks (major) to revise and resubmit, accompanied by a detailed response letter.' },
  { n: 8, icon: '🎓', title: 'Camera-Ready Submission', desc: 'Accepted papers submit final camera-ready versions with completed copyright transfer forms, author bios, and high-resolution figures.' },
];

export default function SubmissionProcess() {
  return (
    <section id="submission-process">
      <div className="container">
        <div className="section-header">
          <span className="section-label">🔄 Process</span>
          <h2>Submission Process</h2>
          <p>
            From initial preparation to final acceptance, our streamlined eight-step process
            ensures transparency and scholarly rigour at every stage.
          </p>
        </div>

        <div className="process-grid">
          {steps.map((step) => (
            <div key={step.n} className="process-step">
              <div className="process-num">{step.n}</div>
              <div className="process-icon">{step.icon}</div>
              <h4 style={{marginBottom:'8px', fontSize:'1rem'}}>{step.title}</h4>
              <p style={{fontSize:'0.9rem'}}>{step.desc}</p>
            </div>
          ))}
        </div>

        <div style={{marginTop:'40px', background:'var(--ink)', borderRadius:'var(--radius-lg)', padding:'32px 40px', display:'flex', alignItems:'center', justifyContent:'space-between', gap:'24px', flexWrap:'wrap'}}>
          <div>
            <h3 style={{color:'white', fontSize:'1.5rem', marginBottom:'6px'}}>Ready to submit your research?</h3>
            <p style={{color:'rgba(255,255,255,0.6)', margin:0}}>Submissions are open. Deadline: December 15, 2026.</p>
          </div>
          <a href="#" className="btn btn-gold" style={{whiteSpace:'nowrap'}}>Access Submission Portal →</a>
        </div>
      </div>

      <style>{`
        .process-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .process-step {
          background: var(--paper-card);
          border: 1px solid var(--border-soft);
          border-radius: var(--radius);
          padding: 24px 20px;
          position: relative;
          transition: box-shadow 0.2s, transform 0.2s;
        }
        .process-step:hover { box-shadow: var(--shadow-md); transform: translateY(-2px); }
        .process-num {
          position: absolute;
          top: -12px; left: 20px;
          background: var(--teal);
          color: white;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 600;
          padding: 3px 10px;
          border-radius: 100px;
        }
        .process-icon { font-size: 1.6rem; margin: 10px 0 12px; }
        @media (max-width: 900px) { .process-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 500px) { .process-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}
