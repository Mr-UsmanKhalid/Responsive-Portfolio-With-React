import React from "react";

function Servicesitem(props) {
  return (
    <div className="service-card">
      <div className="icon">{props.icon}</div>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
}

export default Servicesitem;
