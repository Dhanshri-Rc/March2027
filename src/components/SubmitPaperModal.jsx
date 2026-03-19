import React, { useState } from 'react';

export default function SubmitPaperModal({ onClose }) {
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    affiliation: '', country: '', track: '', title: '',
    abstract: '', keywords: '', coauthors: '',
  });
  const [file, setFile] = useState(null);
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleFile = e => setFile(e.target.files[0]);
  const next = () => setStep(s => s + 1);
  const back = () => setStep(s => s - 1);
  const handleFinal = e => { e.preventDefault(); setSubmitted(true); };

  const tracks = [
    'T1: Climate Science & Atmospheric Research',
    'T2: Biodiversity Conservation & Ecology',
    'T3: Sustainable Agriculture & Food Systems',
    'T4: Renewable Energy & Energy Transition',
    'T5: Urban Sustainability & Climate Resilience',
    'T6: Ocean & Marine Ecosystem Research',
    'T7: Climate Justice & Environmental Governance',
    'T8: Green Finance & Sustainable Economics',
    'T9: Environmental Health & One Health Approach',
    'T10: Technology & Innovation for Sustainability',
    'T11: Environmental Education & Capacity Building',
    'T12: Land Use, Forestry & Carbon Sinks',
  ];

  return (
    <div className="modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal-box">
        <button className="modal-close" onClick={onClose}>×</button>

        {submitted ? (
          <div style={{textAlign:'center', padding:'32px 0'}}>
            <div style={{fontSize:'4rem', marginBottom:'16px'}}>🌿</div>
            <h2 style={{fontSize:'1.8rem', marginBottom:'12px'}}>Submission Received!</h2>
            <p style={{marginBottom:'8px'}}>Your paper <strong>"{form.title}"</strong> has been submitted successfully.</p>
            <p style={{marginBottom:'24px', fontSize:'0.9rem'}}>You will receive a confirmation email at <strong>{form.email}</strong> within 24 hours with your submission ID.</p>
            <div style={{background:'var(--teal-pale)', border:'1px solid var(--border)', borderRadius:'8px', padding:'16px', marginBottom:'24px', textAlign:'left'}}>
              <p style={{fontSize:'0.88rem', color:'var(--teal)', fontWeight:'500', marginBottom:'4px'}}>What happens next?</p>
              <p style={{fontSize:'0.87rem', color:'var(--ink-muted)'}}>Your submission will undergo a desk review within 5 business days, followed by assignment to two peer reviewers. Expect notification within 6–8 weeks.</p>
            </div>
            <button className="btn btn-primary" onClick={onClose} style={{justifyContent:'center', width:'100%'}}>Close</button>
          </div>
        ) : (
          <>
            <div style={{marginBottom:'28px'}}>
              <div style={{display:'flex', gap:'8px', marginBottom:'20px'}}>
                {[1, 2, 3].map(s => (
                  <div key={s} style={{flex:1, height:'4px', borderRadius:'2px', background: step >= s ? 'var(--teal)' : 'var(--border-soft)', transition:'background 0.3s'}}></div>
                ))}
              </div>
              <span className="section-label" style={{margin:0}}>📝 Paper Submission Portal</span>
              <h2 style={{fontSize:'1.7rem', marginTop:'8px'}}>
                {step === 1 ? 'Author Information' : step === 2 ? 'Paper Details' : 'Upload & Review'}
              </h2>
              <p style={{fontSize:'0.88rem', color:'var(--ink-ghost)'}}>Step {step} of 3</p>
            </div>

            {step === 1 && (
              <div>
                <div className="grid-2" style={{gap:'16px'}}>
                  {[['firstName','First Name','Dr. Jane'],['lastName','Last Name','Smith']].map(([n,l,p]) => (
                    <div key={n} className="form-group" style={{margin:0}}>
                      <label>{l} *</label>
                      <input name={n} value={form[n]} onChange={handle} placeholder={p} required />
                    </div>
                  ))}
                </div>
                <div className="form-group" style={{marginTop:'16px'}}>
                  <label>Email Address *</label>
                  <input name="email" type="email" value={form.email} onChange={handle} placeholder="jane.smith@university.edu" required />
                </div>
                <div className="form-group">
                  <label>Institution / Affiliation *</label>
                  <input name="affiliation" value={form.affiliation} onChange={handle} placeholder="University of Example" required />
                </div>
                <div className="grid-2" style={{gap:'16px'}}>
                  {[['country','Country','India'],['phone','Phone (optional)','']].map(([n,l,p]) => (
                    <div key={n} className="form-group" style={{margin:0}}>
                      <label>{l}</label>
                      <input name={n} value={form[n]} onChange={handle} placeholder={p} />
                    </div>
                  ))}
                </div>
                <div className="form-group">
                  <label>Co-Authors (optional)</label>
                  <input name="coauthors" value={form.coauthors} onChange={handle} placeholder="Author 2 (Institution), Author 3 (Institution)" />
                </div>
                <button className="btn btn-primary" style={{width:'100%', justifyContent:'center', marginTop:'8px'}} onClick={next}>
                  Continue to Paper Details →
                </button>
              </div>
            )}

            {step === 2 && (
              <div>
                <div className="form-group">
                  <label>Paper Title *</label>
                  <input name="title" value={form.title} onChange={handle} placeholder="Enter your full paper title" required />
                </div>
                <div className="form-group">
                  <label>Conference Track *</label>
                  <select name="track" value={form.track} onChange={handle} required>
                    <option value="">Select a track...</option>
                    {tracks.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <div className="form-group">
                  <label>Abstract * (200–300 words)</label>
                  <textarea name="abstract" rows={5} value={form.abstract} onChange={handle}
                    placeholder="Provide a structured abstract covering background, methodology, results, and conclusions..."
                    style={{resize:'vertical', fontFamily:'var(--font-body)'}} required />
                </div>
                <div className="form-group">
                  <label>Keywords * (5 minimum, comma-separated)</label>
                  <input name="keywords" value={form.keywords} onChange={handle} placeholder="climate change, biodiversity, sustainability, carbon sequestration, ..." required />
                </div>
                <div style={{display:'flex', gap:'12px', marginTop:'8px'}}>
                  <button className="btn btn-outline" style={{flex:1, justifyContent:'center'}} onClick={back}>← Back</button>
                  <button className="btn btn-primary" style={{flex:2, justifyContent:'center'}} onClick={next}>Continue to Upload →</button>
                </div>
              </div>
            )}

            {step === 3 && (
              <form onSubmit={handleFinal}>
                <div className="form-group">
                  <label>Upload Full Paper *</label>
                  <label className="file-upload-area" style={{cursor:'pointer', display:'block'}}>
                    <input type="file" accept=".pdf,.doc,.docx" onChange={handleFile} style={{display:'none'}} />
                    <div style={{fontSize:'2rem', marginBottom:'8px'}}>📄</div>
                    {file ? (
                      <div>
                        <p style={{color:'var(--teal)', fontWeight:'500'}}>{file.name}</p>
                        <p style={{fontSize:'0.82rem', color:'var(--ink-ghost)', marginTop:'4px'}}>{(file.size/1024/1024).toFixed(2)} MB — Click to replace</p>
                      </div>
                    ) : (
                      <div>
                        <p style={{fontWeight:'500'}}>Click to upload your manuscript</p>
                        <p style={{fontSize:'0.82rem', color:'var(--ink-ghost)', marginTop:'4px'}}>PDF, DOC, or DOCX · Max 20MB</p>
                      </div>
                    )}
                  </label>
                </div>

                <div style={{background:'var(--paper-warm)', borderRadius:'8px', padding:'16px', marginBottom:'20px', fontSize:'0.87rem', color:'var(--ink-muted)'}}>
                  <strong>Review your submission:</strong><br />
                  <strong>Author:</strong> {form.firstName} {form.lastName} ({form.affiliation})<br />
                  <strong>Title:</strong> {form.title || '—'}<br />
                  <strong>Track:</strong> {form.track || '—'}
                </div>

                <div style={{display:'flex', gap:'12px'}}>
                  <button type="button" className="btn btn-outline" style={{flex:1, justifyContent:'center'}} onClick={back}>← Back</button>
                  <button type="submit" className="btn btn-primary" style={{flex:2, justifyContent:'center'}} disabled={!file}>
                    🚀 Submit Paper
                  </button>
                </div>
              </form>
            )}
          </>
        )}
      </div>
    </div>
  );
}
