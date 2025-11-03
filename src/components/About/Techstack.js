import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiC, SiDjango, SiMysql, SiPostgresql } from "react-icons/si";
import { DiPython, DiJava } from "react-icons/di";
import { FaDatabase } from "react-icons/fa";
import "./Techstack.css"; // Make sure this CSS file is created

function Techstack() {
  const iconStyle = {
    transition: "transform 0.3s, color 0.3s, box-shadow 0.3s",
    cursor: "pointer",
    color: "#1e90ff",
    fontSize: "3rem",
  };

  const icons = [SiC, DiJava, DiPython, SiDjango, SiMysql, FaDatabase, SiPostgresql];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {icons.map((Icon, idx) => (
        <Col xs={4} md={2} className="tech-icons" key={idx}>
          <Icon className="tech-icon" style={iconStyle} />
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
