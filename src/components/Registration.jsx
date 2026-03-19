import React, { useState } from 'react';

const categories = [
  { type: 'Academic / Researcher', early: '$250', regular: '$320', late: '$390', color: 'var(--teal)' },
  { type: 'Student / PhD Candidate', early: '$120', regular: '$150', late: '$190', color: '#7c3aed' },
  { type: 'Industry / Professional', early: '$380', regular: '$460', late: '$540', color: 'var(--gold)' },
  { type: 'NGO / Government', early: '$200', regular: '$270', late: '$330', color: '#0891b2' },
  { type: 'Virtual Attendee', early: '$80', regular: '$100', late: '$120', color: '#059669' },
  { type: 'Workshop Only', early: '$60', regular: '$80', late: '$100', color: '#dc2626' },
];

const benefits = [
  { icon: '📄', label: 'Access to all conference sessions and keynotes' },
  { icon: '📚', label: 'Conference proceedings (digital copy)' },
  { icon: '🍽️', label: 'Conference meals and refreshments (in-person)' },
  { icon: '🤝', label: 'Access to networking events and gala dinner' },
  { icon: '🏆', label: 'Eligibility for Best Paper Award' },
  { icon: '📂', label: 'Post-conference access to session recordings' },
  { icon: '🎖️', label: 'Official participation certificate' },
  { icon: '📱', label: 'SIARE conference mobile app access' },
];

export default function Registration({ onSubmit }) {
  const [form, setForm] = useState({ name: '', email: '', affiliation: '', category: '', country: '' });
  const [submitted, setSubmitted] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); };

  return (
    <section id="registration">
      <div className="container">
        <div className="section-header">
          <span className="section-label">🎫 Register</span>
          <h2>Registration Information</h2>
          <p>Secure your place at ICCBGSR 2027. Early registration discounts available until October 31, 2026.</p>
        </div>

        {/* Fee Table */}
        <div style={{marginBottom:'48px'}}>
          <h3 style={{fontSize:'1.4rem', marginBottom:'24px'}}>Registration Categories & Fees</h3>
          <div className="reg-table-wrap">
            <table className="reg-table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Early Bird <span>(by Oct 31)</span></th>
                  <th>Regular <span>(by Jan 15)</span></th>
                  <th>Late / On-site</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((c, i) => (
                  <tr key={i}>
                    <td>
                      <span className="reg-dot" style={{background: c.color}}></span>
                      {c.type}
                    </td>
                    <td className="price early">{c.early}</td>
                    <td className="price">{c.regular}</td>
                    <td className="price late">{c.late}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{fontSize:'0.85rem', color:'var(--ink-ghost)', marginTop:'12px'}}>* All fees in USD. Group discounts available for 5+ registrations from the same institution. Contact us for details.</p>
        </div>

        <div className="grid-2" style={{gap:'40px', alignItems:'start'}}>
          {/* Benefits */}
          <div>
            <h3 style={{fontSize:'1.4rem', marginBottom:'24px'}}>Registration Benefits</h3>
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'12px'}}>
              {benefits.map((b, i) => (
                <div key={i} style={{display:'flex', gap:'10px', alignItems:'center', background:'var(--paper-card)', border:'1px solid var(--border-soft)', borderRadius:'8px', padding:'12px 14px'}}>
                  <span style={{fontSize:'1.1rem'}}>{b.icon}</span>
                  <p style={{fontSize:'0.87rem', color:'var(--ink-soft)', margin:0, lineHeight:'1.4'}}>{b.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Registration Form */}
          <div className="card" style={{padding:'32px'}}>
            <h3 style={{fontSize:'1.3rem', marginBottom:'4px'}}>Express Interest</h3>
            <p style={{fontSize:'0.9rem', marginBottom:'24px'}}>Register your interest and receive updates when full registration opens.</p>
            {submitted ? (
              <div style={{textAlign:'center', padding:'32px 0'}}>
                <div style={{fontSize:'3rem', marginBottom:'12px'}}>🎉</div>
                <h4>Thank you!</h4>
                <p style={{fontSize:'0.9rem', marginTop:'8px'}}>We've received your interest. Check your inbox for a confirmation email.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {[
                  { name: 'name', label: 'Full Name', type: 'text', placeholder: 'Dr. Jane Smith' },
                  { name: 'email', label: 'Email Address', type: 'email', placeholder: 'jane.smith@university.edu' },
                  { name: 'affiliation', label: 'Institution / Organization', type: 'text', placeholder: 'University of Example' },
                  { name: 'country', label: 'Country', type: 'text', placeholder: 'India' },
                ].map(f => (
                  <div key={f.name} className="form-group">
                    <label>{f.label}</label>
                    <input name={f.name} type={f.type} placeholder={f.placeholder} value={form[f.name]} onChange={handle} required />
                  </div>
                ))}
                <div className="form-group">
                  <label>Registration Category</label>
                  <select name="category" value={form.category} onChange={handle} required>
                    <option value="">Select category...</option>
                    {categories.map(c => <option key={c.type} value={c.type}>{c.type}</option>)}
                  </select>
                </div>
                <button type="submit" className="btn btn-primary" style={{width:'100%', justifyContent:'center', marginTop:'8px'}}>
                  Register Interest →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .reg-table-wrap { overflow-x: auto; border-radius: var(--radius); border: 1px solid var(--border-soft); }
        .reg-table { width: 100%; border-collapse: collapse; }
        .reg-table th, .reg-table td { padding: 14px 20px; text-align: left; border-bottom: 1px solid var(--border-soft); }
        .reg-table th { background: var(--paper-warm); font-size: 0.85rem; font-weight: 600; color: var(--ink-soft); font-family: var(--font-body); }
        .reg-table th span { font-weight: 400; color: var(--ink-ghost); font-size: 0.8rem; display: block; }
        .reg-table td { font-size: 0.93rem; color: var(--ink-muted); background: var(--paper-card); }
        .reg-table tr:last-child td { border-bottom: none; }
        .reg-table tr:hover td { background: var(--teal-pale); }
        .reg-dot { display: inline-block; width: 8px; height: 8px; border-radius: 50%; margin-right: 10px; vertical-align: middle; }
        .price { font-family: var(--font-mono); font-weight: 500; color: var(--ink) !important; }
        .price.early { color: var(--teal) !important; }
        .price.late { color: var(--ink-ghost) !important; }
      `}</style>
    </section>
  );
}
