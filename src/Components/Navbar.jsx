import React, { useState, useEffect } from "react";
import Home from "./Home";
import Skills from "./Skills";
import About from "./About";
import Projects from "./Projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHome, faCode, faBriefcase, faUser } from "@fortawesome/free-solid-svg-icons";
import "./Styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState("Home");

  // Store section references
  const sections = {
    Home: Home,
    Skills: Skills,
    Projects: Projects,
    About: About,
  };

  // Function to handle smooth scrolling
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // Adjust for fixed navbar height
        behavior: "smooth",
      });
      setMenuOpen(false); // Close the menu after clicking
    }
  };

  // Detect active section while scrolling
  useEffect(() => {
    const handleScroll = () => {
      let activeSection = "Home";
      const scrollY = window.scrollY;

      Object.keys(sections).forEach((section) => {
        const element = document.getElementById(section);
        if (element && scrollY >= element.offsetTop - 120) {
          activeSection = section;
        }
      });

      setCurrentSection(activeSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className="navbar">
        <a className="logo">Portfolio</a>

        {/* Desktop Navigation Links */}
        <ul className="topmenu">
          {Object.keys(sections).map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={currentSection === section ? "active" : ""}
                onClick={(e) => scrollToSection(e, section)}
              >
                {section}
              </a>
            </li>
          ))}
        </ul>

     
      </nav>

      {/* Render Sections */}
      <div>
        {Object.keys(sections).map((section) => (
          <div key={section} id={section} className="section">
            {React.createElement(sections[section])}
          </div>
        ))}
      </div>

      {/* Bottom Navigation Bar */}
      <div className="bottom-navbar">
        <ul>
          <li className={currentSection === "Home" ? "active" : ""} onClick={(e) => scrollToSection(e, "Home")}>
            <a href="#Home">
              <FontAwesomeIcon icon={faHome} />
              <span>Home</span>
            </a>
          </li>
          <li className={currentSection === "Skills" ? "active" : ""} onClick={(e) => scrollToSection(e, "Skills")}>
            <a href="#Skills">
              <FontAwesomeIcon icon={faCode} />
              <span>Skills</span>
            </a>
          </li>
          <li className={currentSection === "Projects" ? "active" : ""} onClick={(e) => scrollToSection(e, "Projects")}>
            <a href="#Projects">
              <FontAwesomeIcon icon={faBriefcase} />
              <span>Projects</span>
            </a>
          </li>
          <li className={currentSection === "About" ? "active" : ""} onClick={(e) => scrollToSection(e, "About")}>
            <a href="#About">
              <FontAwesomeIcon icon={faUser} />
              <span>About</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
