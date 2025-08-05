import React from "react";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "Bootstrap",
  "React",
  "Node.js",
  "Express.js",
];

const Skills = () => {
  return (
    <section
      id="skills"
      style={{
        padding: "5rem 1.5rem",
        backgroundColor: "#f7fafc", // light gray
       
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "2.25rem", fontWeight: "700", marginBottom: "2rem" }}>
        Skills
      </h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "1.5rem",
        }}
      >
        {skills.map((skill) => (
          <div
            key={skill}
            style={{
              flex: "1 1 140px",
              maxWidth: "160px",
              backgroundColor: "white",
              padding: "1.5rem",
              borderRadius: "10px",
              boxShadow: "0 4px 12px rgba(23, 20, 221, 0.1)",
              fontWeight: "600",
              fontSize: "1.2rem",
              color: "#2e16b3ff",
              cursor: "default",
              userSelect: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
