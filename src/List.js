import React from "react";
import "./List.css";
import Form from "./Form.js";
import Todo from "./Todo.js";

export default class List extends React.Component {
  state = {
    todos: [],
    todoToShow: "all",
  };

  //update todos whenever the form is submitted
  addTodo = (todo) => {
    const newTodos = [todo, ...this.state.todos];

    this.setState({
      todos: newTodos,
    });
  };

  //toggles the complete state when clicked
  Complete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete,
          };
        } else {
          return todo;
        }
      }),
    });
  };

  Remove = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  };

  deleteCompleted = () => {
    this.setState({
      todos: this.state.todos.filter((todo) => !todo.complete),
    });
  };

  allComplete = () => {
    this.state.todos.map((todo) => {
      todo.complete = true;
    });
    this.forceUpdate();
  };

  allActive = () => {
    this.state.todos.map((todo) => {
      todo.complete = false;
    });
    this.forceUpdate();
  };

  clear = () => {
    this.setState({
      todos: [],
    });
  };

  resetNumbering = (todos) => {
    let x = 1;
    for (let i = todos.length - 1; i > -1; i--) {
      todos[i].number = x;
      x++;
    }
  };

  render() {
    //change todos depending on what user wants to show
    let todos = [];
    if (this.state.todoToShow === "all") {
      todos = this.state.todos;
    } else if (this.state.todoToShow === "active") {
      todos = this.state.todos.filter((todo) => !todo.complete);
    } else if (this.state.todoToShow === "complete") {
      todos = this.state.todos.filter((todo) => todo.complete);
    }

    return (
      <div>
        {/* go through each todo and make it show through Todo.js */}
        <Form Submitting={this.addTodo}></Form>
        {this.resetNumbering(this.state.todos)}
        {todos
          .slice(0)
          .reverse()
          .map((todo) => (
            <Todo
              key={todo.id}
              id={todo.id}
              todo={todo}
              Deleted={() => this.Remove(todo.id)}
              onComplete={() => this.Complete(todo.id)}
            ></Todo>
          ))}
        <div className="List">
          {/* keeps track of number of todos */}
          todos left: {this.state.todos.filter((todo) => !todo.complete).length}
        </div>
        <div>
          <button onClick={this.clear}>clear</button>
        </div>
        <div>
          <button
            onClick={() => {
              this.setState({
                todoToShow: "all",
              });
            }}
          >
            show all
          </button>
          <button
            onClick={() => {
              this.setState({
                todoToShow: "active",
              });
            }}
          >
            show active
          </button>
          <button
            onClick={() => {
              this.setState({
                todoToShow: "complete",
              });
            }}
          >
            show completed
          </button>
          <div>
            <button onClick={this.allActive}>all active</button>
            <button onClick={this.allComplete}>all completed</button>
          </div>
          {/* button that deleted completed todos */}
          {this.state.todos.some((todo) => todo.complete) ? (
            <div>
              <button onClick={this.deleteCompleted}>delete completed</button>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}
