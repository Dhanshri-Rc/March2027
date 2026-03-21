import React from 'react';

export default function Submission() {
  return (
    <section id="submission" style={{ padding: '100px 0' }}>
      <div className="container">

        {/* HEADER */}
        <div className="section-header">
          <span className="section-label">📝 Guidelines</span>

          <h2>
            Paper Submission Guidelines
          </h2>

          <p>
            All submissions must adhere to the following requirements to ensure a fair and
            efficient review process. Please read carefully before submitting.
          </p>
        </div>

        {/* GRID */}
        <div className="grid-2" style={{ gap: '32px' }}>

          {/* CARD 1 */}
          <div
            className="card"
            style={{ padding: '36px' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.boxShadow = '0 18px 40px rgba(0,0,0,0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '';
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '24px' }}>
              <div className="icon-circle" style={{ background: 'var(--gold-pale)', fontSize: '1.3rem' }}>
                📄
              </div>

              <h3>Manuscript Requirements</h3>
            </div>

            <ul className="styled-list text-justify">
              <li>Full papers must be between <strong>5,000–8,000 words</strong></li>
              <li>Extended abstracts must be <strong>800–1,200 words</strong></li>
              <li>Original, unpublished research only</li>
              <li>Structured abstract of <strong>200–300 words</strong></li>
              <li>Minimum of <strong>5 keywords</strong></li>
              <li>Figures must be <strong>300 dpi</strong></li>
              <li>Declare conflicts of interest</li>
              <li>Ethics approval required</li>
              <li>Include statistical analysis</li>
              <li>Academic English required</li>
            </ul>
          </div>

          {/* CARD 2 */}
          <div
            className="card"
            style={{ padding: '36px' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.boxShadow = '0 18px 40px rgba(0,0,0,0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '';
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '24px' }}>
              <div className="icon-circle" style={{ background: 'var(--teal-pale)', fontSize: '1.3rem' }}>
                🖊️
              </div>

              <h3>Formatting Requirements</h3>
            </div>

            <ul className="styled-list">
              <li>Format: <strong>.docx or PDF</strong></li>
              <li>Page size: <strong>A4</strong></li>
              <li>Font: <strong>Times New Roman, 12pt</strong></li>
              <li>Line spacing: <strong>1.5</strong></li>
              <li>APA 7th referencing style</li>
              <li>Numbered headings system</li>
              <li>Use equation editors</li>
              <li>Blind review (no author info)</li>
              <li>Submit supplementary files separately</li>
              <li>Page numbers in footer</li>
            </ul>

            <div className="divider"></div>

            <div
              style={{
                background: 'var(--gold-pale)',
                border: '1px solid rgba(181,134,44,0.2)',
                borderRadius: '8px',
                padding: '16px'
              }}
            >
              <p style={{ fontSize: '0.88rem', color: 'var(--gold)', fontWeight: '500', marginBottom: '4px' }}>
                📌 Template Available
              </p>
              <p style={{ fontSize: '0.87rem', color: 'var(--ink-muted)' }}>
                Download the official SIARE manuscript template to ensure your submission meets all formatting requirements.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}