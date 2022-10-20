import React from "react";
import "./singleFilter.scss";
import remove from "./images/icon-remove.svg";

function SingleFilter({ tag, filterTags, setFilterTags }) {
  return (
    <div className="singleFilter">
      <p>{tag}</p>
      <button
        id="remove"
        onClick={() => setFilterTags(filterTags.filter((e) => e !== `${tag}`))}
      >
        <img src={remove} alt="Delete" />
      </button>
    </div>
  );
}

export default SingleFilter;
