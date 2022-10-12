import React from "react";
import "./singleFilter.scss";
import remove from "./images/icon-remove.svg";

function SingleFilter({ tag, filterTags, setFilterTags }) {
  return (
    <div className="singleFilter">
      <p>{tag}</p>
      <img
        id="remove"
        src={remove}
        onClick={() => setFilterTags(filterTags.filter((e) => e !== `${tag}`))}
        alt="Remove"
      />
    </div>
  );
}

export default SingleFilter;
