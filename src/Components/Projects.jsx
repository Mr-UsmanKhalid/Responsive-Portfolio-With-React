import React from "react";
import "./Styles/projects.css";
import projectimage1 from "../Assets/E-commerce.jpeg";
import projectimage2 from "../Assets/Car.jpg";
import projectimage3 from "../Assets/Webdesign.jpeg";

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
      id: 2,
      image: projectimage3,
      title: "Business Web Design",
      description: " I'm working on a shake shop for our small business. This project includes a user registration system, product management, and secure checkout process. We're using React and Node.js for the backend.",
      Link: "#"
    },
  ];
  return (
    <div className="Project-container">
      <h1 className="Project-heading">Projects</h1>
      <div className="Project-grid">
          {projects.map((project) => (
            <div key={project.id} className="card">
              <div className="card-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="card-content">
                <h1>{project.title}</h1>
                <p>{project.description}</p>
              </div>
              <div className="Visit_btn">
                <a href={project.Link} target="_blank" rel="noopener noreferrer">
                   View Project {/* <i class='bx bx-chevron-right' style='color:#0a3773'  ></i> */}
                </a>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Project;
