// SkillsDebug.jsx
import React from "react";

export default function SkillsDebug() {
  const boxStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))",
    gap: "16px",
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "24px"
  };

  const item = {
    background: "#111",
    color: "#fff",
    padding: "18px",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0 8px 30px rgba(0,0,0,0.6)",
    border: "1px solid rgba(255,255,255,0.03)"
  };

  return (
    <section style={{ width: "100%", background: "#000", padding: "48px 0" }}>
      <div style={{ padding: "0 24px" }}>
        <h2 style={{ color: "#fff", textAlign: "center", marginBottom: 28 }}>
          Skills (debug)
        </h2>

        <div style={boxStyle}>
          {[
            "Python",
            "Java",
            "JavaScript",
            "React",
            "Next.js",
            "SQL",
            "AWS",
            "Docker",
            "Kubernetes",
            "Figma"
          ].map((s) => (
            <div key={s} style={item}>{s}</div>
          ))}
        </div>
      </div>
    </section>
  );
}




  
 
  
