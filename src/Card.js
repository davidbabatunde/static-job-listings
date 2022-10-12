import React from "react";
import "./Card.scss";

function Card({ props }) {
  const { role, level, languages, tools } = props;
  const allTags = [role, level, ...languages, ...tools];

  return (
    <div className="card">
      <img id="logo" src={require(`${props.logo}`)} alt="Company Logo" />
      <div id="top">
        <p id="company">{props.company}</p>
        {props.new && <p id="new">NEW!</p>}
        {props.featured && <p id="featured">FEATURED</p>}
      </div>
      <p id="position">{props.position}</p>

      <ul className="info">
        <li>{props.postedAt}</li>
        <li>{props.contract}</li>
        <li>{props.location}</li>
      </ul>

      <hr />

      <ul className="tags">
        {allTags.map((tag, index) => {
          return <li key={index}>{tag}</li>;
        })}
      </ul>
    </div>
  );
}

export default Card;
