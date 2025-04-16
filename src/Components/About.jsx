import React, { useRef, useState, useEffect } from "react";
import "./Styles/About.css";
import profileImage from "../Assets/user.jpeg";
import { motion, useInView, useReducedMotion } from "framer-motion";

const About = () => {
  const myEmail = "example@gmail.com";
  const subject = "Hire Me";
  const body = "";

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });
  const shouldReduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Update isMobile on resize with debouncing
  useEffect(() => {
    let timeoutId;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setIsMobile(window.innerWidth <= 768), 100);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  // Animation variants
  const variants = {
    image: {
      initial: { opacity: shouldReduceMotion ? 1 : 0.5, x: shouldReduceMotion ? 0 : -20 },
      animate: { opacity: 1, x: 0 },
    },
    content: {
      initial: { opacity: shouldReduceMotion ? 1 : 0.5, x: shouldReduceMotion ? 0 : 20 },
      animate: { opacity: 1, x: 0 },
    },
  };

  const handleHireMeClick = (event) => {
    event.preventDefault();
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      myEmail
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailLink, "_blank");
  };

  return (
    <div className="about-wrapper">
      <div className="about-container" ref={containerRef}>
        <motion.div
          className="about-image"
          variants={variants.image}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          transition={{ ease: "easeOut", duration: isMobile || shouldReduceMotion ? 0.5 : 0.6 }}
        >
          <img src={profileImage} alt="Profile" loading="lazy" />
          <div className="image-border"></div>
        </motion.div>
        <motion.div
          className="about-content"
          variants={variants.content}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          transition={{ ease: "easeOut", duration: isMobile || shouldReduceMotion ? 0.5 : 0.6 }}
          aria-live="polite"
        >
          <h2>About Me</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum atque in temporibus at odit
            reprehenderit exercitationem dicta asperiores eius facere est, numquam ipsa?
          </p>
          <div className="about-buttons">
            <a className="hire-me" onClick={handleHireMeClick}>
              Hire Me
            </a>
            <a href="#" target="_blank" className="download-cv">
              Download CV
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;