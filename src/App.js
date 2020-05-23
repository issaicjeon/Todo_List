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
    </div>
  );
}

export default App;
