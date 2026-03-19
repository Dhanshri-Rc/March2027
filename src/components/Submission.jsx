import React from 'react';

export default function Submission() {
  return (
    <section id="submission">
      <div className="container">
        <div className="section-header">
          <span className="section-label">📝 Guidelines</span>
          <h2>Paper Submission Guidelines</h2>
          <p>
            All submissions must adhere to the following requirements to ensure a fair and
            efficient review process. Please read carefully before submitting.
          </p>
        </div>

        <div className="grid-2" style={{gap:'32px'}}>
          {/* Manuscript Requirements */}
          <div className="card" style={{padding:'36px'}}>
            <div style={{display:'flex', alignItems:'center', gap:'14px', marginBottom:'24px'}}>
              <div className="icon-circle" style={{background:'var(--gold-pale)', fontSize:'1.3rem'}}>📄</div>
              <h3 style={{fontSize:'1.4rem'}}>Manuscript Requirements</h3>
            </div>
            <ul className="styled-list">
              <li>Full papers must be between <strong>5,000–8,000 words</strong> excluding references, figures, and appendices</li>
              <li>Extended abstracts (for poster sessions) must be <strong>800–1,200 words</strong> with clear research objectives, methodology, and preliminary findings</li>
              <li>Submissions must present <strong>original, unpublished research</strong> not currently under review elsewhere</li>
              <li>Papers must include a structured abstract of <strong>200–300 words</strong> covering background, methodology, results, and conclusions</li>
              <li>A minimum of <strong>5 relevant keywords</strong> must accompany the abstract</li>
              <li>All figures and tables must be <strong>high-resolution (300 dpi minimum)</strong> with full descriptive captions</li>
              <li>Authors must declare all <strong>conflicts of interest</strong> and funding sources</li>
              <li>Research involving <strong>human subjects or animal studies</strong> must include ethics committee approval references</li>
              <li>Statistical analyses must report <strong>effect sizes, confidence intervals</strong>, and use appropriate tests</li>
              <li>Manuscripts must be written in <strong>academic English</strong>; non-native speakers are encouraged to seek professional editing</li>
            </ul>
          </div>

          {/* Formatting Requirements */}
          <div className="card" style={{padding:'36px'}}>
            <div style={{display:'flex', alignItems:'center', gap:'14px', marginBottom:'24px'}}>
              <div className="icon-circle" style={{background:'var(--teal-pale)', fontSize:'1.3rem'}}>🖊️</div>
              <h3 style={{fontSize:'1.4rem'}}>Formatting Requirements</h3>
            </div>
            <ul className="styled-list">
              <li>File format: <strong>MS Word (.docx) or PDF</strong>; LaTeX submissions accepted with source files</li>
              <li>Page size: <strong>A4</strong>, with margins of 2.5 cm on all sides</li>
              <li>Font: <strong>Times New Roman, 12pt</strong> for body text; headings per SIARE style guide</li>
              <li>Line spacing: <strong>1.5 lines</strong> for body; single spacing for abstract, references, and captions</li>
              <li>Referencing style: <strong>APA 7th Edition</strong> for all in-text citations and reference lists</li>
              <li>Section headings must follow a <strong>hierarchical numbering system</strong> (1, 1.1, 1.1.1)</li>
              <li>Equations must be formatted using <strong>equation editors</strong> (MathType or Word's built-in editor)</li>
              <li>All submissions must be <strong>anonymised for blind review</strong> — remove all author-identifying information</li>
              <li>Supplementary materials (datasets, code, appendices) should be provided as <strong>separate files</strong></li>
              <li>Page numbers must be included in the <strong>footer of every page</strong></li>
            </ul>

            <div className="divider"></div>
            <div style={{background:'var(--gold-pale)', border:'1px solid rgba(181,134,44,0.2)', borderRadius:'8px', padding:'16px'}}>
              <p style={{fontSize:'0.88rem', color:'var(--gold)', fontWeight:'500', marginBottom:'4px'}}>📌 Template Available</p>
              <p style={{fontSize:'0.87rem', color:'var(--ink-muted)'}}>Download the official SIARE manuscript template to ensure your submission meets all formatting requirements automatically.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
