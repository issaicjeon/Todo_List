import React from "react";

export default (props) => (
  <div style={{ display: "flex", justifyContent: "center" }}>
    <div
      //crosses line through todo if completed
      style={{
        textDecoration: props.todo.complete ? "line-through" : "",
      }}
    >
      {props.todo.number}. {props.todo.text}
      <button onClick={props.onComplete}>Complete</button>
      <button onClick={props.Deleted}>Delete!</button>
    </div>
  </div>
);
