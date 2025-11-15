import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card
      className="quote-card-view"
      style={{
        background: "linear-gradient(135deg, #4b0082 0%, #1e90ff 100%)",
        color: "#fff",
        border: "none",
        borderRadius: "15px",
        padding: "20px",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)",
      }}
    >
      <Card.Body>
        <blockquote
          className="blockquote mb-0"
          style={{
            fontSize: "1.1rem",
            lineHeight: "1.8",
            letterSpacing: "0.5px",
          }}
        >
          <p style={{ textAlign: "justify" }}>
             I’m{" "}
           
            from{" "}
            <span style={{ color: "#FFD700", fontWeight: "600" }}>
              Mirsarai, Chittagong, Bangladesh
            </span>.
            <br />
            I completed my <span style={{ color: "#FFD700", fontWeight: "600" }}>SSC</span>{" "}
            from <span style={{ color: "#FFD700", fontWeight: "600" }}>Jorargonj Buddha High School</span> and{" "}
            my <span style={{ color: "#FFD700", fontWeight: "600" }}>HSC</span>{" "}
            from <span style={{ color: "#FFD700", fontWeight: "600" }}>Cambrian College, Chittagong</span>.
            <br />
            Currently, I’m pursuing a{" "}
            <span style={{ color: "#FFD700", fontWeight: "600" }}>
              B.Sc in Computer Science & Engineering
            </span>{" "}
            at the{" "}
            <span style={{ color: "#FFD700", fontWeight: "600" }}>
              University of Creative Technology, Chittagong
            </span>.
            <br />
            I’m passionate about <span style={{ color: "#FFD700", fontWeight: "600" }}>Machine Learning</span>,{" "}
            <span style={{ color: "#FFD700", fontWeight: "600" }}>Deep Learning</span>, and Artificial Intelligence.
            <br />
            <br />
            Outside of academics, I enjoy:
          </p>
          <ul style={{ marginTop: "10px" }}>
            <li className="about-activity" style={{ marginBottom: "8px" }}>
              <ImPointRight style={{ color: "#FFD700", marginRight: "8px" }} />
              Travelling
            </li>
            <li className="about-activity" style={{ marginBottom: "8px" }}>
              <ImPointRight style={{ color: "#FFD700", marginRight: "8px" }} />
              Exploring New Technologies
            </li>
            <li className="about-activity">
              <ImPointRight style={{ color: "#FFD700", marginRight: "8px" }} />
              Playing Games
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
