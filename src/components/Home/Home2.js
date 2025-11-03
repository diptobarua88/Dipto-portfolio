import "./home2.css";
import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/profile-pic.png";
import Tilt from "react-parallax-tilt";
import { FaEnvelope, FaLinkedinIn, FaPhone } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

function Home2() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        {/* Intro Section */}
        <Row>
          <Col
            md={8}
            className="home-about-description"
            data-aos="fade-right"
          >
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m deeply passionate about working with{" "}
              <b className="purple">Machine Learning</b> and{" "}
              <b className="purple">Deep Learning</b> — especially building projects using{" "}
              <b className="purple">Python</b>, Django, and databases.
              <br />
              <br />
              I mostly work with real-world datasets in{" "}
              <b className="purple">Kaggle</b> and{" "}
              <b className="purple">Google Colab</b>, and sometimes code in{" "}
              <b className="purple">C</b>.
              <br />
              <br />
              I’m eager to explore new technologies and create impactful projects
              through intelligent systems and web applications.
            </p>
          </Col>

          <Col
            md={4}
            className="myAvtar"
            data-aos="fade-left"
          >
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>


        {/* FAST Contact Section */}
        <Row className="justify-content-center">
          <Col
            md={6}
            className="home-about-contact text-center"
            data-aos="fade-up"
          >
            <h1 style={{ fontSize: "2em", fontWeight: 600 }}>
              FAST
            </h1>
            <p style={{ fontSize: "1.1rem", marginBottom: "25px" }}>
              I’d love to <span className="purple">connect</span> or discuss tech 🤝
            </p>
            <ul
              className="contact-info-list"
              style={{
                listStyle: "none",
                padding: 0,
                fontSize: "1.1rem",
                display: "inline-block",
                textAlign: "left",
              }}
            >
              <li style={{ marginBottom: "15px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <FaEnvelope style={{ marginRight: "12px", color: "#00c6ff", fontSize: "1.3rem" }} />
                <a
                  href="mailto:diptobarua18@gmail.com"
                  style={{
                    color: "#ffffff",
                    textDecoration: "none",
                    transition: "all 0.3s",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.color = "#00c6ff")}
                  onMouseOut={(e) => (e.currentTarget.style.color = "#ffffff")}
                >
                  diptobarua18@gmail.com
                </a>
              </li>
              <li style={{ marginBottom: "15px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <FaLinkedinIn style={{ marginRight: "12px", color: "#00c6ff", fontSize: "1.3rem" }} />
                <a
                  href="https://www.linkedin.com/in/dipto-barua-906b22375/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#ffffff",
                    textDecoration: "none",
                    transition: "all 0.3s",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.color = "#00c6ff")}
                  onMouseOut={(e) => (e.currentTarget.style.color = "#ffffff")}
                >
                  linkedin.com/in/Dipto Barua
                </a>
              </li>
              <li style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <FaPhone style={{ marginRight: "12px", color: "#00c6ff", fontSize: "1.3rem" }} />
                <span style={{ color: "#ffffff" }}>01531396073,01606914101</span>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
