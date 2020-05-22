import React from "react";
import "./App.css";
import List from "./List.js";
import Header from "./CSS/Header.js";
import Body from "./CSS/Listing.js";

function App() {
  return (
    <div>
      <Header>TODO 📋</Header>
      <Body>
        <List></List>
      </Body>
      {/* 
      Style with css
      complete, delete and edit button is hidden
      Change buttons style
      Make buttons to the left smaller and prettier, and make the sides the same length
      Change input style
      Change editing input style 
      */}
    </div>
  );
}

export default App;
