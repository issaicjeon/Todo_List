import React from "react";
import "./App.css";
import List from "./List.js";

function App() {
  return (
    <div className="App">
      <h1>TODO 📋</h1>
      {/* <p>Style with css</p>
      <p>toggle show active/show completed etc. by clicking multiple times</p>
      <p>Show color when buttons are on and change wording of button</p>
      <p>Complete button is always next to text, delete and edit button is hidden</p>
      <p>Set all active and set all complete button is only primary when clicked</p>
      <p>Update Readme with these features</p> */}
      <List></List>
    </div>
  );
}

export default App;
