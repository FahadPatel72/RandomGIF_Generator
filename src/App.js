import React from "react";
import Random from "./components/Random";
import Tag from "./components/Tag";

const App = () => {
  return (
    <div className="wrapper">
      <h1 className="header">RANDOM GIFS</h1>
      <div>
        <Random />
        <Tag />
      </div>
    </div>
  );
};

export default App;
