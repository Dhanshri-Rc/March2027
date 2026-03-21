import React, { useState } from "react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" style={section}>

      <div style={container}>

        {/* HEADER */}
        <div style={header}>
          <span style={label}>Contact</span>

          <h2 style={heading}>Get in Touch</h2>

          <p style={subtext}>
            For any inquiries regarding submissions, registration, or conference details,
            feel free to contact us. Our team will respond as soon as possible.
          </p>

          <div style={divider}></div>
        </div>

        {/* MAIN GRID */}
        <div style={grid}>

          {/* LEFT SIDE */}
          <div>
            <h3 style={subHeading}>Contact Information</h3>

            <div style={infoItem}>
              <strong>Email</strong>
              <p style={infoText}>conference2027@gmail.com</p>
            </div>

            <div style={infoItem}>
              <strong>Phone</strong>
              <p style={infoText}>+91 98765 43210</p>
            </div>

            <div style={infoItem}>
              <strong>Location</strong>
              <p style={infoText}>Nashik, Maharashtra, India</p>
            </div>

            <div style={infoItem}>
              <strong>Response Time</strong>
              <p style={infoText}>Within 24–48 hours</p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div style={formBox}>
            <h3 style={formTitle}>Send a Message</h3>

            {submitted ? (
              <p style={successText}>
                Thank you for contacting us. We will get back to you soon.
              </p>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <input placeholder="Full Name" required style={input} />
                <input placeholder="Email Address" required style={input} />

                <textarea
                  placeholder="Your Message"
                  rows="4"
                  required
                  style={textarea}
                ></textarea>

                <button style={btn}>Send Message →</button>
              </form>
            )}
          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;

/* ===== STYLES ===== */

const section = {
  padding: "100px 100px", // 🔥 aligns with navbar
  background: "#ffffff",
};

const container = {
  maxWidth: "1200px",
};

const header = {
  marginBottom: "60px",
  textAlign: "left", // 🔥 important
};

const label = {
  fontSize: "0.75rem",
  fontWeight: "600",
  color: "#0d7c66",
  letterSpacing: "1px",
};

const heading = {
  fontSize: "2.4rem",
  margin: "10px 0",
  fontWeight: "700",
};

const subtext = {
  color: "#555",
  fontSize: "1rem",
  maxWidth: "600px",
  lineHeight: "1.6",
};

const divider = {
  width: "60px",
  height: "3px",
  background: "#0d7c66",
  marginTop: "16px",
  borderRadius: "2px",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "60px",
};

const subHeading = {
  fontSize: "1.3rem",
  marginBottom: "25px",
};

const infoItem = {
  marginBottom: "22px",
};

const infoText = {
  marginTop: "6px",
  color: "#555",
  fontSize: "0.95rem",
};

const formBox = {
  border: "1px solid #eee",
  padding: "35px",
  borderRadius: "12px",
  background: "#fafafa",
  boxShadow: "0 10px 25px rgba(0,0,0,0.03)",
};

const formTitle = {
  marginBottom: "20px",
  fontSize: "1.3rem",
};

const input = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  border: "1px solid #ddd",
  borderRadius: "6px",
  fontSize: "0.95rem",
};

const textarea = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  border: "1px solid #ddd",
  borderRadius: "6px",
  resize: "none",
  fontSize: "0.95rem",
};

const btn = {
  width: "100%",
  padding: "13px",
  background: "#0d7c66",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontSize: "0.95rem",
  fontWeight: "600",
};

const successText = {
  color: "#0d7c66",
  fontWeight: "500",
};