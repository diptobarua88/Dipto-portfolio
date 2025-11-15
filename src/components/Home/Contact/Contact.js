import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert, Spinner } from "react-bootstrap";
import { FaEnvelope, FaLinkedinIn, FaPhone } from "react-icons/fa";
import emailjs from "@emailjs/browser";

function Contact() {
  const [status, setStatus] = useState(""); // "success", "error", ""
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("");
    setLoading(true);

    emailjs
      .sendForm(
        "service_zlyajrm",   // Replace with your EmailJS service ID
        "template_6ktj3y9",  // Replace with your EmailJS template ID
        e.target,
        "FAVdHO4SQh_xoxLxX"    // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          setLoading(false);
          setStatus("success");
          e.target.reset();
        },
        (error) => {
          setLoading(false);
          setStatus("error");
          console.error("EmailJS error:", error.text);
        }
      );
  };

  return (
    <Container
      fluid
      className="home-about-section"
      style={{ padding: "80px 0", background: "#203a43", color: "#fff" }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col md={8} className="text-center" data-aos="fade-up">
            <h1 style={{ fontSize: "2em", fontWeight: 600 }}>Contact Me</h1>
            <p style={{ fontSize: "1.1rem", marginBottom: "25px" }}>
              I’d love to <span className="highlight" style={{ color: "#00ffff" }}>connect</span> or discuss tech 🤝
            </p>

            {/* Contact Info */}
            <ul style={{ listStyle: "none", padding: 0, fontSize: "1.1rem" }}>
              <li style={{ marginBottom: "15px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <FaEnvelope style={{ marginRight: "12px", color: "#00ffff", fontSize: "1.3rem" }} />
                <a
                  href="mailto:diptobarua18@gmail.com"
                  style={{ color: "#ffffff", textDecoration: "none", transition: "all 0.3s" }}
                  onMouseOver={(e) => (e.currentTarget.style.color = "#00ffff")}
                  onMouseOut={(e) => (e.currentTarget.style.color = "#ffffff")}
                >
                  diptobarua18@gmail.com
                </a>
              </li>
              <li style={{ marginBottom: "15px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <FaLinkedinIn style={{ marginRight: "12px", color: "#00ffff", fontSize: "1.3rem" }} />
                <a
                  href="https://www.linkedin.com/in/dipto-barua-906b22375/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#ffffff", textDecoration: "none", transition: "all 0.3s" }}
                  onMouseOver={(e) => (e.currentTarget.style.color = "#00ffff")}
                  onMouseOut={(e) => (e.currentTarget.style.color = "#ffffff")}
                >
                  linkedin.com/in/Dipto Barua
                </a>
              </li>
              <li style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <FaPhone style={{ marginRight: "12px", color: "#00ffff", fontSize: "1.3rem" }} />
                <span style={{ color: "#ffffff" }}>01531396073, 01606914101</span>
              </li>
            </ul>

            {/* Contact Form */}
            <Form
              onSubmit={handleSubmit}
              style={{ marginTop: "40px", maxWidth: "600px", marginLeft: "auto", marginRight: "auto" }}
            >
              <Form.Group className="mb-3" controlId="formName">
                <Form.Control type="text" name="from_name" placeholder="Your Name" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Control type="email" name="from_email" placeholder="Your Email" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Control as="textarea" name="message" rows={4} placeholder="Your Message" required />
              </Form.Group>
              <Button
                type="submit"
                style={{ backgroundColor: "#00ffff", border: "none", color: "#000", fontWeight: "600" }}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" style={{ marginRight: "8px" }} />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
            </Form>

            {/* Status Messages */}
            {status === "success" && (
              <Alert variant="success" style={{ marginTop: "20px" }}>
                Your message has been sent successfully!
              </Alert>
            )}
            {status === "error" && (
              <Alert variant="danger" style={{ marginTop: "20px" }}>
                Failed to send your message. Please check your EmailJS IDs and try again.
              </Alert>
            )}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
