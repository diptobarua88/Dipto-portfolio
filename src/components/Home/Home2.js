// src/components/Home/Home2.js
import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import AOS from "aos";
import "aos/dist/aos.css";
import "./home2.css";
import myImg from "../../Assets/profile-pic.png";

function Home2() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <Container fluid className="home-about-section">
      <Container>
        <Row className="home-about-row">
          <Col md={8} className="home-about-description" data-aos="fade-right">
            <h1 className="intro-animated">
              LET ME <span className="purple"> INTRODUCE </span>
            </h1>
            <p className="home-about-body">
              Hey there,This is Dipto Barua.I’m deeply passionate about working with <b className="purple">Machine Learning</b> and <b className="purple">Deep Learning</b> — building projects using <b className="purple">Python</b>, Django, and databases.
              <br /><br />
              I mostly work with real-world datasets in <b className="purple">Kaggle</b> and <b className="purple">Google Colab</b>, and sometimes code in <b className="purple">VS Code</b> for developing projects.
              <br /><br />
              I’m eager to explore new technologies and create impactful projects through intelligent systems and web applications.
            </p>
          </Col>

          <Col md={4} className="myAvtar" data-aos="fade-left">
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000} scale={1.05} transitionSpeed={400}>
              <img
                src={myImg}
                alt="avatar"
                className="img-fluid avatar-img"
              />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
