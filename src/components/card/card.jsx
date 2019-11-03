import React from "react";
import "./cardStyle.css";

const Card = ({ name }) => {
  return (
    <div className="card" style={{ borderRadius: "50px" }}>
      <div className="img-container mx-auto">
        <img
          src="https://pokeres.bastionbot.org/images/pokemon/2.png"
          alt=""
          className="img-fluid"
          height="180px"
          width="180px"
        />
      </div>
      <div className="name mx-auto">{name}</div>
    </div>
  );
};

export default Card;
