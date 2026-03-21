import React, { useState } from "react";

export default function Registration() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section   id="registration" style={{ padding: "100px 20px", background: "#fff" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* HEADER */}
        {/* <div style={{ marginBottom: "60px" }}>
          <span style={label}>Registration</span>
          <h2 style={heading}>Conference Registration</h2>
          <p style={subtext}>
            Join ICCBGSR 2027 and connect with global researchers and professionals.
          </p>
          <div style={divider}></div>
        </div> */}

         <div className="section-header">
          <span className="section-label">Registration</span>

          <h2>
            Conference Registration
          </h2>

          <p>
          Join ICCBGSR 2027 and connect with global researchers and professionals.
          </p>
        </div>

        {/* MAIN GRID */}
        <div style={grid}>

          {/* LEFT SIDE */}
          <div>

            <h3 style={subHeading}>Registration Categories</h3>

            <div style={list}>
              <Item title="Academic / Researcher" price="$250 – $390" />
              <Item title="Student / PhD Candidate" price="$120 – $190" />
              <Item title="Industry / Professional" price="$380 – $540" />
              <Item title="NGO / Government" price="$200 – $330" />
            </div>

            <p style={note}>
              Early, Regular and Late pricing varies by deadline.
            </p>

          </div>

          {/* RIGHT SIDE (FORM) */}
          <div style={formBox}>
            <h3 style={formTitle}>Register Now</h3>

            {submitted ? (
              <p style={{ color: "#0d7c66" }}>
                Thank you. We will contact you shortly.
              </p>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>

                <input placeholder="Full Name" required style={input} />
                <input placeholder="Email Address" required style={input} />

                <select required style={input}>
                  <option>Select Category</option>
                  <option>Academic / Researcher</option>
                  <option>Student / PhD Candidate</option>
                  <option>Industry / Professional</option>
                  <option>NGO / Government</option>
                </select>

                <button style={btn}>Submit Request →</button>

              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}

/* SMALL COMPONENT */
function Item({ title, price }) {
  return (
    <div style={item}>
      <span>{title}</span>
      <strong style={{ color: "#0d7c66" }}>{price}</strong>
    </div>
  );
}

/* ===== STYLES ===== */

const label = {
  fontSize: "0.75rem",
  fontWeight: "600",
  color: "#0d7c66",
};

const heading = {
  fontSize: "2.1rem",
  margin: "8px 0",
};

const subtext = {
  color: "#555",
  fontSize: "0.95rem",
};

const divider = {
  width: "50px",
  height: "2px",
  background: "#0d7c66",
  marginTop: "14px",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "50px",
};

const subHeading = {
  fontSize: "1.2rem",
  marginBottom: "20px",
};

const list = {
  borderTop: "1px solid #eee",
};

const item = {
  display: "flex",
  justifyContent: "space-between",
  padding: "14px 0",
  borderBottom: "1px solid #eee",
  fontSize: "0.95rem",
};

const note = {
  marginTop: "12px",
  fontSize: "0.85rem",
  color: "#777",
};

const formBox = {
  border: "1px solid #eee",
  padding: "30px",
  borderRadius: "10px",
  background: "#fafafa",
};

const formTitle = {
  marginBottom: "20px",
  fontSize: "1.2rem",
};

const input = {
  width: "100%",
  padding: "11px",
  marginBottom: "14px",
  border: "1px solid #ddd",
  borderRadius: "6px",
};

const btn = {
  width: "100%",
  padding: "12px",
  background: "#0d7c66",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};