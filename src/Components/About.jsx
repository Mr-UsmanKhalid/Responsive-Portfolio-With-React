import React from "react";
import "./Styles/About.css";
import profileImage from "../Assets/user.jpeg";

const About = () => {

  const myEmail = 'example@gmail.com'; 
  const subject = 'Hire Me';
  const body = '';
  
  const handleHireMeClick = (event) => {
    event.preventDefault();
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(myEmail)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailLink, '_blank');
  };
  

  return (
    <div class="about-wrapper">
    <div className="about-container">
      <div className="about-image">
        <img src={profileImage} alt="Profile" />
        <div className="image-border"></div>
      </div>
      <div className="about-content">
        <h2>About Me</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum atque in temporibus at odit reprehenderit exercitationem dicta asperiores eius facere est, numquam ipsa?</p>
        
        
        <div className="about-buttons">
          <a className="hire-me" onClick={handleHireMeClick} >Hire Me</a>
          <a  href="#" target="blank" className="download-cv">Download CV</a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
