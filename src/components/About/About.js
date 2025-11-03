import React from "react";
import "./About.css";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container
      fluid
      className="about-section"
      style={{
        background: "linear-gradient(135deg, #b3e5fc, #81d4fa, #4fc3f7, #0072ff)", // 💙 darker bluish gradient
        minHeight: "100vh",
        paddingBottom: "60px",
      }}
    >
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={10}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1
              style={{
                fontSize: "2.1em",
                paddingBottom: "20px",
                textAlign: "center",
                color: "#fff", // white text for contrast
              }}
            >
              About <strong className="purple">Me</strong>
            </h1>
            <Aboutcard />
          </Col>
        </Row>

        <h1
          className="project-heading"
          style={{
            textAlign: "center",
            marginTop: "50px",
            color: "#fff",
          }}
        >
          My <strong className="purple">Skills</strong>
        </h1>
        <Techstack />

        <h1
          className="project-heading"
          style={{
            textAlign: "center",
            marginTop: "50px",
            color: "#fff",
          }}
        >
          <strong className="purple">Tools</strong> I Use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
