import React from "react";

export default function Submission() {
  const guidelines = [
    {
      title: "Manuscript",
      icon: "📄",
      color: "#c59d5f",
      items: [
        "5,000–8,000 words (full papers)",
        "800–1,200 words (abstracts)",
        "Original & unpublished work",
        "200–300 word abstract",
        "Minimum 5 keywords",
        "300 dpi figures",
      ],
    },
    {
      title: "Ethics & Quality",
      icon: "⚖️",
      color: "#14b8a6",
      items: [
        "Declare conflicts of interest",
        "Ethics approval required",
        "Include statistical details",
        "Academic English only",
      ],
    },
    {
      title: "Formatting",
      icon: "🖊️",
      color: "#8b5cf6",
      items: [
        "DOCX / PDF / LaTeX",
        "A4, 2.5 cm margins",
        "Times New Roman, 12pt",
        "APA 7th style",
        "1.5 spacing",
        "Numbered headings",
      ],
    },
    {
      title: "Submission",
      icon: "📤",
      color: "#3b82f6",
      items: [
        "Blind review required",
        "Include page numbers",
        "Upload extra files separately",
        "Use official template",
      ],
    },
  ];

  return (
    <section
      id="submission"
      style={{
        padding: "100px 20px",
        background: "linear-gradient(to bottom, #f8fafc, #eef2f7)",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "auto" }}>
        
        {/* HEADER */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          {/* <span style={{ color: "#c59d5f", fontWeight: "600" }}>
            📝 Submission Guide
          </span> */}
          <h2 style={{ fontSize: "2.4rem" }}>
            Paper Submission Guidelines
          </h2>
          <p style={{ color: "#6b7280", fontSize: "0.95rem" }}>
            Follow these guidelines to ensure smooth review and acceptance.
          </p>
        </div>

        {/* GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "28px",
          }}
        >
          {guidelines.map((card, index) => (
            <div
              key={index}
              style={{
                background: "#fff",
                borderRadius: "18px",
                padding: "28px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                borderTop: `4px solid ${card.color}`,
                transition: "0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow =
                  "0 20px 50px rgba(0,0,0,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 10px 30px rgba(0,0,0,0.05)";
              }}
            >
              {/* CARD HEADER */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "18px",
                }}
              >
                <span style={{ fontSize: "1.4rem" }}>{card.icon}</span>
                <h3 style={{ fontSize: "1.2rem", fontWeight: "600" }}>
                  {card.title}
                </h3>
              </div>

              {/* LIST */}
              <ul style={{ paddingLeft: "18px" }}>
                {card.items.map((item, i) => (
                  <li
                    key={i}
                    style={{
                      marginBottom: "8px",
                      fontSize: "0.9rem",
                      color: "#374151",
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* FOOTER */}


      </div>
    </section>
  );
}