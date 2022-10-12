import { useState } from "react";
import "./App.scss";
import Card from "./Card";
import data from "./data.json";
import bg from "./images/bg-header-mobile.svg";
import SingleFilter from "./SingleFilter";

function App() {
  const [filterTags, setFilterTags] = useState(["React", "JavaScript"]);
  return (
    <>
      <div id="bg">
        <img src={bg} alt="background design" />
      </div>

      <div id="main">
        {filterTags.length !== 0 && (
          <div id="filterBar">
            <div className="tags">
              {[...new Set(filterTags)].map((tag, i) => {
                return (
                  <SingleFilter
                    tag={tag}
                    filterTags={filterTags}
                    setFilterTags={setFilterTags}
                    key={i}
                  />
                );
              })}
            </div>
            <div onClick={() => setFilterTags([])}>
              <p>Clear</p>
            </div>
          </div>
        )}

        {data.map((single) => {
          const allTags = [
            single.role,
            single.level,
            ...single.languages,
            ...single.tools,
          ];
          return (
            filterTags &&
            filterTags.every((tag) => allTags.includes(tag)) && (
              <Card
                props={single}
                filterTags={filterTags}
                setFilterTags={setFilterTags}
                key={single.id}
              />
            )
          );
        })}
      </div>
    </>
  );
}

export default App;
