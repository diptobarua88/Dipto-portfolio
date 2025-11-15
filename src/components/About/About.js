// src/components/About/About.js
import React from "react"; 
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Aboutcard from "./AboutCard";
import ExperienceCard from "./ExperienceCard";

import Github from "./Github";
import "./About.css";

function About() {
  return (
    <Container
      fluid
      className="about-section"
      style={{
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        minHeight: "100vh",
        paddingBottom: "60px",
      }}
    >
      <Particle />
      <Container>
        {/* About Section */}
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={10} style={{ justifyContent: "center", paddingTop: "30px", paddingBottom: "30px" }}>
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px", textAlign: "center", color: "#fff" }}>
              About <strong className="purple">Me</strong>
            </h1>
            <Aboutcard />
            <ExperienceCard />
          </Col>
        </Row>



        {/* GitHub Section */}
        <Github />
      </Container>
    </Container>
  );
}

export default About;
