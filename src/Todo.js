import React from "react";
import Button from "./CSS/Button.js";
import List from "./CSS/Listing.js";
import Button2 from "./CSS/Button2.js";

export default class Todo extends React.Component {
  state = {
    edit: false,
    text: this.props.todo.text,
    complete: false,
  };

  Edit = () => {
    this.setState({
      edit: true,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    //creates new todo from input
    this.props.Submitting({
      id: this.props.todo.id,
      text: this.state.text,
      number: this.props.todo.number,
      complete: this.props.todo.onComplete,
    });

    this.setState({
      edit: false,
    });
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          {/* conditionally renders input or value if the edit button is pressed */}
          {this.state.edit ? (
            <form onSubmit={this.handleSubmit}>
              <input
                name="text"
                value={this.state.text}
                onChange={this.handleChange}
              ></input>
            </form>
          ) : (
            <List list>
              {this.props.todo.number}. {this.props.todo.text}
              {/* <Button2
                primary={this.props.todo.complete}
                circle
                onClick={this.props.onComplete}
              ></Button2>
              <button onClick={this.props.Deleted}>Delete</button>
              <button onClick={this.Edit}>Edit</button> */}
            </List>
          )}
        </div>
      </div>
    );
  }
}
