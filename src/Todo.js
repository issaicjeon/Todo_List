import React from "react";
import "./Todo.css";

export default class Todo extends React.Component {
  state = {
    edit: false,
    text: this.props.todo.text,
    todos: this.props.todos,
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
        <div
          //crosses line through todo if completed
          style={{
            textDecoration: this.props.todo.complete ? "line-through" : "",
          }}
        >
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
            <div className="Todo">
              {this.props.todo.number}. {this.props.todo.text}
              <button onClick={this.props.onComplete}>Complete</button>
              <button onClick={this.props.Deleted}>Delete</button>
              <button onClick={this.Edit}>Edit</button>
            </div>
          )}
        </div>
      </div>
    );
  }
}
