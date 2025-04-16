import React, { useEffect, useState, useRef } from "react";
import "./Styles/Home.css";
import user from "../Assets/user.jpeg";
import {
  motion,
  useInView,
  useReducedMotion,
  useAnimation,
} from "framer-motion";

function Home() {
  const roles = ["Front-End Developer", "App Developer"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Typing effect
  useEffect(() => {
    const currentRole = roles[index];
    let typingSpeed = isDeleting ? 20 : 100;

    if (!isDeleting && charIndex === currentRole.length) {
      setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }

    const timeout = setTimeout(() => {
      setText(currentRole.substring(0, charIndex + (isDeleting ? -1 : 1)));
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, index, isDeleting, roles]);

  // Animation setup
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 },
    },
  };

  const infoVariants = {
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const imgVariants = {
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.section
      className="home"
      ref={containerRef}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <motion.div className="home-info" variants={infoVariants}>
        <motion.h2 variants={infoVariants}>Hi, I'm Sterv John</motion.h2>
        <motion.h2 variants={infoVariants}>
          {text} <span className="cursor">|</span>
        </motion.h2>
        <motion.div className="btn-sci" variants={infoVariants}>
          <a href="#" target="_blank" className="btn">
            Download Resume
          </a>
          <div className="sci">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <i className="bx bxl-github"></i>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="bx bxl-linkedin"></i>
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
              <i className="bx bxl-twitter"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="bx bxl-instagram"></i>
            </a>
          </div>
        </motion.div>
      </motion.div>
      <motion.div className="home-img" variants={imgVariants}>
        <div className="img-box">
          <div className="img-item">
            <img src={user} alt="Profile" loading="lazy" />
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default Home;
