import React, { useState } from "react";

const categories = [
  { type: "Academic / Researcher", early: "$250", regular: "$320" },
  { type: "Student / PhD Candidate", early: "$120", regular: "$150" },
  { type: "Industry / Professional", early: "$380", regular: "$460" },
];

export default function Registration() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    category: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handle = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="registration"
      style={{
        padding: "100px 20px",
        background: "#faf9f6",
        fontFamily: "Georgia, serif",
        color: "#2f2f2f",
      }}
    >
      <div style={{ maxWidth: "800px", margin: "auto" }}>

        {/* HEADER */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <div style={label}>Registration</div>
          <h2 style={heading}>Conference Registration</h2>
          <p style={subtext}>
            Secure your participation in ICCBGSR 2027.
          </p>
          <div style={divider} />
        </div>

        {/* PRICING (clean list style) */}
        <div style={{ marginBottom: "60px" }}>
          {categories.map((c, i) => (
            <div key={i} style={row}>
              <div>{c.type}</div>
              <div style={price}>
                {c.early} <span style={muted}>/ {c.regular}</span>
              </div>
            </div>
          ))}
        </div>

        {/* FORM (centered + calm) */}
        <div
          style={{
            background: "#fff",
            padding: "30px",
            border: "1px solid #e6e1d9",
            borderRadius: "10px",
          }}
        >
          <h3 style={{ marginBottom: "16px" }}>Express Interest</h3>

          {submitted ? (
            <p>Thank you. We will contact you shortly.</p>
          ) : (
            <form onSubmit={submit}>
              <input name="name" placeholder="Full Name" onChange={handle} required style={input} />
              <input name="email" placeholder="Email Address" onChange={handle} required style={input} />

              <select name="category" onChange={handle} required style={input}>
                <option value="">Select Category</option>
                {categories.map((c) => (
                  <option key={c.type}>{c.type}</option>
                ))}
              </select>

              <button style={btn}>Submit</button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}

/* styles */
const label = {
  fontSize: "0.75rem",
  letterSpacing: "2px",
  textTransform: "uppercase",
  color: "#b88a2a",
};

const heading = {
  fontSize: "2.2rem",
  fontWeight: "500",
};

const subtext = {
  color: "#6b6b6b",
  marginTop: "10px",
};

const divider = {
  width: "60px",
  height: "2px",
  background: "#b88a2a",
  margin: "18px auto 0",
};

const row = {
  display: "flex",
  justifyContent: "space-between",
  padding: "14px 0",
  borderBottom: "1px solid #e6e1d9",
};

const price = {
  fontWeight: "500",
};

const muted = {
  color: "#8a8175",
  fontSize: "0.85rem",
};

const input = {
  width: "100%",
  padding: "10px",
  marginBottom: "14px",
  border: "1px solid #e6e1d9",
  borderRadius: "6px",
};

const btn = {
  width: "100%",
  padding: "11px",
  background: "#b88a2a",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
};