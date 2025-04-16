import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faFile,
  faDatabase,
  faGears,
} from "@fortawesome/free-solid-svg-icons";
import { faFigma, faFlutter } from "@fortawesome/free-brands-svg-icons";
import Servicesitem from "./Servicesitem";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Styles/Skills.css";

function Skills() {
  const services_data = [
    {
      id: 1,
      icon: <FontAwesomeIcon icon={faCode} />,
      title: "Web Development",
      description: "We build modern and scalable web applications.",
    },
    {
      id: 2,
      icon: <FontAwesomeIcon icon={faFigma} />,
      title: "UX AND UI",
      description: "We provide exceptional design services for your projects.",
    },
    {
      id: 3,
      icon: <FontAwesomeIcon icon={faFile} />,
      title: "Data Entry",
      description: "We ensure accurate and efficient data entry solutions.",
    },
    {
      id: 4,
      icon: <FontAwesomeIcon icon={faFlutter} />,
      title: "App Development",
      description:
        "We develop mobile and web applications using Flutter.",
    },
    {
      id: 5,
      icon: <FontAwesomeIcon icon={faDatabase} />,
      title: "MySQL",
      description:
        "We manage and optimize MySQL databases for your Web  App",
    },
    {
      id: 6,
      icon: <FontAwesomeIcon icon={faGears} />,
      title: "SEO",
      description:
        "We help you grow your brand with strategic SEO solutions.",
    },
  ];

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="services-container"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <h1 className="services-heading">Our Skills</h1>
      <div className="services-grid">
        {services_data.map((service) => (
          <motion.div key={service.id} variants={itemVariants}>
            <Servicesitem
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
