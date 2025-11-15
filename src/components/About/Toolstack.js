import React from "react";
import { Col, Row } from "react-bootstrap";
import { 
  SiVisualstudiocode, 
  SiKaggle, 
  SiGooglecolab, 
  SiAmazonaws 
} from "react-icons/si";
import "./Techstack.css"; // same animation CSS

function Toolstack() {
  const toolData = [
    { icon: SiVisualstudiocode, name: "VS Code", color: "#007ACC" },
    { icon: SiKaggle, name: "Kaggle", color: "#20BEFF" },
    { icon: SiGooglecolab, name: "Google Colab", color: "#F9AB00" },
    { icon: SiAmazonaws, name: "Amazon SageMaker", color: "#FF9900" }
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {toolData.map((tool, idx) => {
        const Icon = tool.icon;
        return (
          <Col xs={6} md={2} className="tech-icons" key={idx}>
            <div className="tool-wrapper">
              <Icon
                className="tech-icon"
                style={{ fontSize: "3rem", color: tool.color }}
              />
              <p className="tool-label">{tool.name}</p>
            </div>
          </Col>
        );
      })}
    </Row>
  );
}

export default Toolstack;
