import React from "react";
import "./App.css";
import List from "./List.js";

function App() {
  return (
    <div className="App">
      <h1>TODO List</h1>
      <p>Add numbers</p>
      <p>allow editing on todolists</p>
      <p>Style with css</p>
      <List></List>
    </div>
  );
}

export default App;
