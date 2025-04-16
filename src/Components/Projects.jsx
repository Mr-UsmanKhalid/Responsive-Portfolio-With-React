import React, { useRef, useEffect, useState } from "react";
import "./Styles/projects.css";
import projectimage1 from "../Assets/E-commerce.jpeg";
import projectimage2 from "../Assets/Car.jpg";
import projectimage3 from "../Assets/Webdesign.jpeg";
import { motion, useInView } from "framer-motion";

function Project() {
  const projects = [
    {
      id: 1,
      image: projectimage1,
      title: "E-commerce Project",
      description: "We're working on an e-commerce platform for our small business. This project includes a user registration system, product management, and secure checkout process. We're using React and Node.js for the backend.",
      Link: "#"
    },
    {
      id: 2,
      image: projectimage2,
      title: "Car Web Design",
      description: "🚗💻 Excited to showcase my latest front-end web design for Pak Motor! From sleek car displays to user-friendly service options, this design aims to provide a seamless experience for automobile enthusiasts. 🚙✨",
      Link: "#"
    },
    {
      id: 3,
      image: projectimage3,
      title: "Business Web Design",
      description: "I'm working on a shake shop for our small business. This project includes a user registration system, product management, and secure checkout process. We're using React and Node.js for the backend.",
      Link: "#"
    },
  ];

  // Animation variants for fade-in, glow, and inside-out effect
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.2, // Start very small for "inside out" expansion
    },
    visible: {
      opacity: 1,
      scale: 1, // Expand to full size
      transition: {
        duration: 0.5, // Fast for repeated animations
        ease: "easeOut",
        scale: { duration: 0.5 },
        boxShadow: { duration: 0.7 },
      },
    },
  };

  // Custom hook to detect vertical scrolling
  const useVerticalScroll = () => {
    const [isVerticalScroll, setIsVerticalScroll] = useState(true);
    let lastScrollX = window.scrollX;
    let lastScrollY = window.scrollY;

    useEffect(() => {
      const handleScroll = () => {
        const currentScrollX = window.scrollX;
        const currentScrollY = window.scrollY;
        const deltaX = Math.abs(currentScrollX - lastScrollX);
        const deltaY = Math.abs(currentScrollY - lastScrollY);

        // Consider it vertical scroll if Y change is greater than X change
        setIsVerticalScroll(deltaY > deltaX || deltaX === 0);

        lastScrollX = currentScrollX;
        lastScrollY = currentScrollY;
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return isVerticalScroll;
  };

  return (
    <div className="Project-container">
      <motion.h1
        className="Project-heading"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h1>
      <div className="Project-grid">
        {projects.map((project) => {
          // Create a ref for each card to track visibility
          const ref = useRef(null);
          const isInView = useInView(ref, { 
            margin: "0px 0px -50px 0px", // Trigger 50px from bottom
            threshold: 0.2 // Trigger when 20% of card is visible
          });
          const isVerticalScroll = useVerticalScroll();

          return (
            <motion.div
              key={project.id}
              ref={ref}
              className="card"
              variants={cardVariants}
              initial="hidden"
              animate={isInView && isVerticalScroll ? "visible" : "hidden"}
            >
              <div className="card-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="card-content">
                <h1>{project.title}</h1>
                <p>{project.description}</p>
              </div>
              <div className="Visit_btn">
                <a href={project.Link} target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default Project;