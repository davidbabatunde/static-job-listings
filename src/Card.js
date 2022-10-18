import React from "react";
import "./Card.scss";

function Card({ props, filterTags, setFilterTags }) {
  const { role, level, languages, tools } = props;
  const allTags = [role, level, ...languages, ...tools];

  return (
    <div
      className="card"
      style={{
        borderLeft: props.featured ? "5px solid hsl(180, 29%, 50%)" : null,
      }}
    >
      <img id="logo" src={require(`${props.logo}`)} alt="Company Logo" />
      <div className="details">
        <div id="top">
          <h3 className="company">{props.company}</h3>
          {props.new && <p className="new">NEW!</p>}
          {props.featured && <p className="featured">FEATURED</p>}
        </div>
        <h2 className="position">{props.position}</h2>

        <ul className="info">
          <li>{props.postedAt}</li>
          <li>{props.contract}</li>
          <li>{props.location}</li>
        </ul>
      </div>

      <hr />

      <ul className="tags">
        {allTags.map((tag, index) => {
          return (
            <li
              className="cardTags"
              onClick={() => setFilterTags([...filterTags, `${tag}`])}
              key={index}
            >
              {tag}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Card;
