import React from "react";
import props from "./data.json";
import "./Card.scss";

function Card() {
  return (
    <div className="card">
      <img src={require(`${props[0].logo}`)} alt="Company Logo" />
      <h2>{props[0].company}</h2>
      <h2>{props[0].position}</h2>
      list of Info list of tags
    </div>
  );
}

export default Card;
