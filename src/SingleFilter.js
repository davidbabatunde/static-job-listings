import React from "react";
import "./singleFilter.scss";
import remove from "./images/icon-remove.svg";

function SingleFilter({ tag }) {
  return (
    <div className="singleFilter">
      <p>{tag}</p>
      <img id="remove" src={remove} alt="Remove" />
    </div>
  );
}

export default SingleFilter;
