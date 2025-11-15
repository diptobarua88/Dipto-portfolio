// src/components/Navbar.js
import React, { useState, useEffect, useRef } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";

import logo from "../Assets/logo.png";

function NavBar({ activeSection, scrollToSection }) {
  const [sticky, setSticky] = useState(false);
  const navRefs = useRef([]);
  const [underlineStyle, setUnderlineStyle] = useState({});

  // Sticky navbar
  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update underline style
  useEffect(() => {
    const indexMap = ["home", "about", "skills", "projects", "contact"];
    const activeIndex = indexMap.indexOf(activeSection);
    if (navRefs.current[activeIndex]) {
      const link = navRefs.current[activeIndex];
      setUnderlineStyle({
        left: link.offsetLeft + link.offsetWidth / 2 + "px",
        width: link.offsetWidth + "px",
      });
    }
  }, [activeSection]);

  return (
    <Navbar
      fixed="top"
      expand="md"
      className={sticky ? "navbar sticky" : "navbar"}
      style={{ zIndex: 1030, position: "relative" }}
    >
      <Container>
        {/* Logo */}
        <Navbar.Brand
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection.home();
          }}
        >
          <img src={logo} alt="logo" className="logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto position-relative">
            {["home", "about", "skills", "projects", "contact"].map(
              (section, idx) => {
                const icons = {
                  home: <AiOutlineHome />,
                  about: <AiOutlineUser />,
                  skills: <AiOutlineFundProjectionScreen />, // you can replace with a different icon
                  projects: <AiOutlineFundProjectionScreen />,
                  contact: null,
                };
                const labels = {
                  home: "Home",
                  about: "About",
                  skills: "Skills",
                  projects: "Projects",
                  contact: "Contact",
                };
                return (
                  <Nav.Link
                    key={section}
                    ref={(el) => (navRefs.current[idx] = el)}
                    href={`#${section}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection[section]();
                    }}
                    className={activeSection === section ? "active" : ""}
                  >
                    {icons[section]} {labels[section]}
                  </Nav.Link>
                );
              }
            )}

            {/* Animated underline */}
            <div className="nav-underline" style={underlineStyle}></div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
