import React from "react";
import Card from "react-bootstrap/Card";
import { FaLaptopCode, FaUsers } from "react-icons/fa";

function ExperienceCard() {
  return (
    <Card
      className="experience-card-view"
      style={{
        background: "linear-gradient(135deg, #1e90ff 0%, #4b0082 100%)",
        color: "#fff",
        border: "none",
        borderRadius: "15px",
        padding: "20px",
        marginTop: "25px",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)",
      }}
    >
      <Card.Body>
        <h2 style={{ color: "#FFD700", textAlign: "center", marginBottom: "15px" }}>
          💼 Experience
        </h2>

        <div style={{ marginBottom: "15px" }}>
          <h4 style={{ color: "#FFD700", display: "flex", alignItems: "center" }}>
            <FaUsers style={{ marginRight: "8px" }} /> UCTC Computer Club
          </h4>
          <p style={{ margin: "5px 0", fontWeight: "500" }}>
            Vice President — 7th Executive Committee
          </p>
          <p style={{ fontSize: "0.95rem", textAlign: "justify" }}>
            Actively contributing to the growth of the UCTC Computer Club by
            leading event coordination, managing technical teams, and promoting
            collaboration among students in programming, AI, and research activities.
          </p>
        </div>

        <div>
          <h4 style={{ color: "#FFD700", display: "flex", alignItems: "center" }}>
            <FaLaptopCode style={{ marginRight: "8px" }} /> Technical Projects
          </h4>
          <p style={{ fontSize: "0.95rem", textAlign: "justify" }}>
            Developed multiple academic and personal projects focusing on machine
            learning, deep learning, and web development, integrating research-driven
            solutions with real-world applications.
          </p>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ExperienceCard;
