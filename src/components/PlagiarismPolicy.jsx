import React from 'react';

export default function PlagiarismPolicy() {
  return (
    <section id="plagiarism">
      <div className="container">
        <div className="section-header">
          <span className="section-label">⚠️ Integrity</span>
          <h2>Plagiarism Policy</h2>
          <p>
            SIARE upholds the highest standards of academic integrity. All submissions are subject
            to rigorous screening for plagiarism and research misconduct.
          </p>
        </div>

        <div className="grid-2" style={{gap:'32px', marginBottom:'32px'}}>
          <div className="card" style={{padding:'32px'}}>
            <h3 style={{fontSize:'1.3rem', marginBottom:'16px'}}>Detection & Screening</h3>
            <p style={{marginBottom:'14px'}}>
              All submitted manuscripts are screened using <strong>iThenticate</strong> plagiarism
              detection software prior to peer review. This tool compares submissions against an extensive
              database of published academic literature, web content, and previously submitted papers.
            </p>
            <p style={{marginBottom:'14px'}}>
              A <strong>similarity index threshold of 15%</strong> applies to the overall manuscript.
              No single source may account for more than 5% similarity. Matches from the paper's own
              reference list and properly quoted text are excluded from the threshold calculation.
            </p>
            <p>
              Self-plagiarism — the re-use of an author's own previously published text without
              appropriate attribution — is treated with equal seriousness and may constitute grounds
              for rejection.
            </p>
          </div>

          <div className="card" style={{padding:'32px'}}>
            <h3 style={{fontSize:'1.3rem', marginBottom:'16px'}}>Consequences of Violations</h3>
            <ul className="styled-list" style={{marginBottom:'20px'}}>
              <li>Papers exceeding the similarity threshold will be <strong>immediately rejected</strong> without peer review</li>
              <li>Authors found to have committed serious plagiarism will be <strong>blacklisted</strong> from future SIARE conferences and publications</li>
              <li>Institutional affiliations will be notified in cases of deliberate misconduct</li>
              <li>Published papers found post-publication to contain plagiarism will be <strong>retracted</strong> and notices issued</li>
              <li>AI-generated content submitted without disclosure constitutes a form of academic dishonesty under SIARE policy</li>
            </ul>
            <div style={{background:'rgba(192,57,43,0.06)', border:'1px solid rgba(192,57,43,0.2)', borderRadius:'8px', padding:'14px 16px'}}>
              <p style={{color:'var(--rust)', fontSize:'0.88rem', fontWeight:'500'}}>
                ⚠️ Note on AI-Assisted Writing
              </p>
              <p style={{color:'var(--ink-muted)', fontSize:'0.87rem', marginTop:'4px'}}>
                Authors who use AI tools (e.g., ChatGPT, Claude) for writing assistance must disclose
                this in the acknowledgements section. Full AI-generated manuscripts will not be accepted.
              </p>
            </div>
          </div>
        </div>

        <div className="card" style={{padding:'32px'}}>
          <h3 style={{fontSize:'1.3rem', marginBottom:'16px'}}>Ethical Research Standards</h3>
          <div className="grid-3" style={{gap:'24px'}}>
            {[
              { icon: '🔬', title: 'Data Fabrication', desc: 'Inventing or manipulating research data is grounds for immediate rejection and institutional reporting.' },
              { icon: '✍️', title: 'Author Attribution', desc: 'All listed co-authors must have made substantive contributions. Ghost and gift authorship are prohibited.' },
              { icon: '📊', title: 'Data Availability', desc: 'Authors are encouraged to deposit research data in open repositories and provide availability statements.' },
            ].map((item, i) => (
              <div key={i} style={{display:'flex', gap:'14px', alignItems:'flex-start'}}>
                <div className="icon-circle">{item.icon}</div>
                <div>
                  <h4 style={{marginBottom:'6px', fontSize:'0.97rem'}}>{item.title}</h4>
                  <p style={{fontSize:'0.88rem'}}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
