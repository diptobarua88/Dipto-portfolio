import React, { useState, useEffect, useRef } from "react";
import Preloader from "./components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home2";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Home/Contact/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills/Skills";

import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, updateLoad] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  // Section References
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  // Preloader effect
  useEffect(() => {
    const timer = setTimeout(() => updateLoad(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  // --- ACTIVE SECTION DETECTION ---
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;

      if (contactRef.current && scrollPos >= contactRef.current.offsetTop) {
        setActiveSection("contact");
      } 
      else if (projectRef.current && scrollPos >= projectRef.current.offsetTop) {
        setActiveSection("projects");
      } 
      else if (skillsRef.current && scrollPos >= skillsRef.current.offsetTop) {
        setActiveSection("skills");
      } 
      else if (aboutRef.current && scrollPos >= aboutRef.current.offsetTop) {
        setActiveSection("about");
      } 
      else {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="App" id={load ? "no-scroll" : "scroll"}>
      <Preloader load={load} />

      <Navbar
        activeSection={activeSection}
        scrollToSection={{
          home: () => scrollToSection(homeRef),
          about: () => scrollToSection(aboutRef),
          skills: () => scrollToSection(skillsRef),
          projects: () => scrollToSection(projectRef),
          contact: () => scrollToSection(contactRef),
        }}
      />

      {/* Sections */}
      <div ref={homeRef}>
        <Home />
      </div>

      <div ref={aboutRef}>
        <About />
      </div>

      <div ref={skillsRef}>
        <Skills />
      </div>

      <div ref={projectRef}>
        <Projects />
      </div>

      <div ref={contactRef}>
        <Contact />
      </div>

      <Footer />
    </div>
  );
}

export default App;
