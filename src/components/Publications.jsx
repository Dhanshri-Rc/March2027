import React from 'react';

const outlets = [
  {
    icon: '📘',
    title: 'Conference Proceedings',
    tier: 'All Accepted Papers',
    desc: 'All accepted and presented papers are published in the SIARE ICCBGSR 2027 Conference Proceedings with a unique ISBN, making them citable scholarly works.',
    features: ['ISBN-assigned publication', 'Digital and print editions', 'Open access option available', 'Indexed in Google Scholar'],
    color: 'var(--teal)',
  },
  {
    icon: '🏅',
    title: 'SIARE Journal of Sustainability Research',
    tier: 'Selected Papers',
    desc: 'Top-ranked papers from the peer review process are invited for submission to the SCOPUS-indexed SIARE Journal of Sustainability Research (JSR) following additional review.',
    features: ['SCOPUS & Web of Science indexed', 'Impact Factor: 2.4 (2024)', 'Fast-track review within 60 days', 'No additional submission fee'],
    color: 'var(--gold)',
  },
  {
    icon: '🌿',
    title: 'International Journal of Climate & Ecology',
    tier: 'Top Contributions',
    desc: 'Exceptional papers addressing novel climate-ecology interfaces are considered for the IJCE, a quarterly peer-reviewed journal in partnership with SIARE.',
    features: ['Quarterly publication', 'Broad interdisciplinary scope', 'Open access platform', 'DOAJ registered'],
    color: '#7c3aed',
  },
  {
    icon: '📗',
    title: 'Edited Book Chapter Collection',
    tier: 'By Invitation',
    desc: 'Authors of outstanding papers may be invited to expand their work into chapters for an edited volume on "Climate, Biodiversity & Sustainability: Global Perspectives" published with Springer.',
    features: ['Springer Nature publication', 'ISBN & DOI assigned', 'Global distribution', 'Significant academic prestige'],
    color: '#0891b2',
  },
];

export default function Publications() {
  return (
    <section id="publications">
      <div className="container">
        <div className="section-header">
          <span className="section-label">📚 Publications</span>
          <h2>Publication Opportunities</h2>
          <p>
            ICCBGSR 2027 offers multiple publication pathways to maximize the visibility and
            impact of your research, from conference proceedings to internationally indexed journals.
          </p>
        </div>

        <div className="grid-2" style={{gap:'24px'}}>
          {outlets.map((o, i) => (
            <div key={i} className="card pub-card" style={{padding:'32px'}}>
              <div style={{display:'flex', alignItems:'flex-start', justifyContent:'space-between', gap:'12px', marginBottom:'16px'}}>
                <div style={{display:'flex', gap:'14px', alignItems:'center'}}>
                  <div className="icon-circle" style={{background:`${o.color}15`, fontSize:'1.3rem'}}>{o.icon}</div>
                  <div>
                    <span className="pub-tier" style={{color: o.color}}>{o.tier}</span>
                    <h4 style={{fontSize:'1.05rem', lineHeight:'1.3'}}>{o.title}</h4>
                  </div>
                </div>
              </div>
              <p style={{marginBottom:'18px', fontSize:'0.92rem'}}>{o.desc}</p>
              <div style={{display:'flex', flexDirection:'column', gap:'8px'}}>
                {o.features.map((f, j) => (
                  <div key={j} style={{display:'flex', gap:'8px', alignItems:'center'}}>
                    <span style={{color: o.color, fontSize:'0.8rem'}}>✓</span>
                    <span style={{fontSize:'0.88rem', color:'var(--ink-soft)'}}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{marginTop:'32px', background:'var(--paper-warm)', border:'1px solid var(--border-soft)', borderRadius:'var(--radius)', padding:'28px 32px', display:'flex', gap:'20px', alignItems:'flex-start'}}>
          <span style={{fontSize:'1.8rem', flexShrink:0}}>💡</span>
          <div>
            <h4 style={{marginBottom:'6px', fontSize:'1rem'}}>Note on Publication Fees</h4>
            <p style={{fontSize:'0.92rem'}}>Conference proceedings publication is included in the registration fee at no additional cost. Journal publications may involve article processing charges (APCs) per the respective journal's policy. Waiver requests from researchers from low-income countries are welcome.</p>
          </div>
        </div>
      </div>

      <style>{`
        .pub-tier { display: block; font-family: var(--font-mono); font-size: 0.72rem; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 4px; }
      `}</style>
    </section>
  );
}
