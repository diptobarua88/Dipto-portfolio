import React from "react";
import { Row, Col } from "react-bootstrap";
import { DiPython } from "react-icons/di";
import { SiDjango, SiMysql, SiC } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import {
  SiVisualstudiocode,
  SiKaggle,
  SiGooglecolab,
  SiAmazonaws,
} from "react-icons/si";

import "./skills.css";

function Skills() {
  const skillData = [
    { icon: DiPython, name: "Python", color: "#FFD43B" },
    { icon: SiDjango, name: "Django", color: "#2C7A7B" },
    { icon: SiMysql, name: "MySQL", color: "#00758F" },
    { icon: SiC, name: "C Programming", color: "#0A79DF" },
    { icon: FaDatabase, name: "Database", color: "#FFB100" },
  ];

  const toolData = [
    { icon: SiVisualstudiocode, name: "VS Code", color: "#007ACC" },
    { icon: SiKaggle, name: "Kaggle", color: "#20BEFF" },
    { icon: SiGooglecolab, name: "Google Colab", color: "#F9AB00" },
    { icon: SiAmazonaws, name: "Amazon AWS", color: "#FF9900" },
  ];

  return (
    <div className="skills-container">

      {/* SKILLS SECTION */}
      <h1 className="skills-heading">
        My <span className="purple">Skills</span>
      </h1>

      <Row style={{ justifyContent: "center", marginBottom: "40px" }}>
        {skillData.map((skill, idx) => {
          const Icon = skill.icon;
          return (
            <Col xs={6} md={3} className="skill-col" key={idx}>
              <div className="skill-wrapper">
                <Icon
                  className="skill-icon"
                  style={{ color: skill.color }}
                />
                <p className="skill-label">{skill.name}</p>
              </div>
            </Col>
          );
        })}
      </Row>

      {/* TOOLS SECTION */}
      <h1 className="skills-heading">
        Tools <span className="purple">I Use</span>
      </h1>

      <Row style={{ justifyContent: "center" }}>
        {toolData.map((tool, idx) => {
          const Icon = tool.icon;
          return (
            <Col xs={6} md={3} className="skill-col" key={idx}>
              <div className="skill-wrapper">
                <Icon
                  className="skill-icon"
                  style={{ color: tool.color }}
                />
                <p className="skill-label">{tool.name}</p>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default Skills;
