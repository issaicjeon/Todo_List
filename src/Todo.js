import React from "react";
import Button from "./CSS/Button.js";
import List from "./CSS/Listing.js";
import Button2 from "./CSS/Button2.js";
import "./CSS/style.css";
import Input from "./CSS/Input2.js";

export default class Todo extends React.Component {
  state = {
    edit: false,
    text: this.props.todo.text,
    complete: false,
    arrow: false,
  };

  Edit = () => {
    this.setState({
      edit: true,
      arrow: false,
    });
  };

  Complete = () => {
    this.setState({
      arrow: false,
    });
    this.props.onComplete({
      id: this.props.todo.id,
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
              <Input
                name="text"
                value={this.state.text}
                onChange={this.handleChange}
              ></Input>
            </form>
          ) : (
            <List list>
              <a
                style={{
                  color: this.props.todo.complete ? "#E9967A" : "black",
                }}
              >
                {this.props.todo.number}. {this.props.todo.text}
              </a>
              <a
                href="javascript:void()"
                className={this.state.arrow ? "arrow left" : "arrow right"}
                onClick={() => {
                  this.setState({
                    arrow: !this.state.arrow,
                  });
                }}
              ></a>
              {this.state.arrow ? (
                <a>
                  <Button2
                    primary={this.props.todo.complete}
                    onClick={this.Complete}
                  >
                    Finish
                  </Button2>
                  <Button2 onClick={this.Edit}>Edit</Button2>
                  <Button2 onClick={this.props.Deleted}>Delete</Button2>
                </a>
              ) : null}
            </List>
          )}
        </div>
      </div>
    );
  }
}
