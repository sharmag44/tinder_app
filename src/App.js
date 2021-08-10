import React from "react";
import "./App.css";
import Header from "./Header";
import TinderCards from "./TinderCards";
import SwipeButtton from "./SwipeButtton";


function App() {
  return (
    <div className="App">
      <Header />
      <TinderCards/>
      <SwipeButtton/>
    </div>
  );
}

export default App;
