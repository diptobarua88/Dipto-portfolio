import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ddos from "../../Assets/Projects/ddos.png";
import forest_fire from "../../Assets/Projects/forest fire.png";
import Lms from "../../Assets/Projects/Lms.png";
import HMS from "../../Assets/Projects/HMS.png";
import obstaclear from "../../Assets/Projects/obstaclear.png";
import AOS from "aos";
import "aos/dist/aos.css";

function Projects() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const projects = [
    {
      imgPath: ddos,
      title: "🧠 ML/DL-based DDoS Attack Detection",
      description:
        "Built an end-to-end detection framework using the CICDDoS2019 dataset and 28 algorithms (18 classical ML, 5 MLPs, 7 deep learning models including a CNN+LSTM hybrid and a Transformer). The pipeline includes EDA, visualization, outlier removal, SMOTE balancing, PCA, LDA, t-SNE, UMAP, and SHAP-based explainability for model interpretation.",
      ghLink: "https://github.com/diptobarua88/DDOS-Attack-Detection",
    },
    {
      imgPath: forest_fire,
      title: "🔥 Forest Fire Prediction",
      description:
        "Developed a machine learning project using the Algerian Forest Fires Processed Dataset, applying Random Forest and Logistic Regression models to predict fire occurrences. The project included EDA, feature engineering, correlation heatmap, SMOTE balancing, PCA, and SHAP-based explainability for model interpretation.",
      ghLink: "https://github.com/diptobarua88/Forest-Fire-Prediction",
    },
    {
      imgPath: Lms,
      title: "📚 Smart Shelf Books Stacks",
      description:
        "A Library Management System built with Django and SQLite3 that allows efficient management of books, categories, and students with secure login authentication. The system includes modules for book and category management, subcategory handling, student records, and detailed reporting/logs. It provides an intuitive dashboard for smooth navigation and easy data management.",
      ghLink: "https://github.com/diptobarua88/Library-Management-System",
    },
    {
      imgPath: obstaclear,
      title: "🔧 Arduino-Based Obstacle Avoiding Robot",
      description:
        "This project involves designing and implementing an Obstacle Avoiding Robot based on the Arduino Uno R3 microcontroller. The system uses an ultrasonic sensor mounted on a servo motor to detect obstacles in its surroundings by emitting and receiving sound waves. The L298N motor driver controls the movement of the DC motors based on the data processed by the Arduino. When an obstacle is detected within a threshold distance, the robot automatically determines an alternative path (left, right, or straight) to avoid collision. This project demonstrates real-time sensing, motor control, and autonomous navigation using embedded systems.",
    },
    {
      imgPath: HMS ,
      title: "🩺 Hospital Management System",
      description:
        "A web-based application built with PHP and MySQL using XAMPP. It includes modules for patients, doctors, and staff, with features for appointments, billing, and medical record management. Designed for efficiency, usability, and secure data handling, it streamlines hospital operations and improves patient care.",
    },


  ];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading" data-aos="fade-down">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white", textAlign: "center" }} data-aos="fade-up">
          Here are a few projects I've worked on recently.
        </p>

        <div className="d-flex flex-column align-items-center mt-4">
          {projects.map((project, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="w-100 mb-5"
            >
              <ProjectCard
                imgPath={project.imgPath}
                isBlog={false}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
              />
            </div>
          ))}
        </div>
      </Container>
    </Container>
  );
}

export default Projects;
