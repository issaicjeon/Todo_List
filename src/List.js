import React from "react";
import Form from "./Form.js";
import Todo from "./Todo.js";
import Button from "./CSS/Button.js";

export default class List extends React.Component {
  state = {
    todos: [],
    todoToShow: "all",
    active: false,
    completed: false,
  };

  //update todos whenever the form is submitted
  addTodo = (todo) => {
    const newTodos = [todo, ...this.state.todos];

    this.setState({
      todos: newTodos,
    });
  };

  //updates changed todo
  addChangedTodo = (todo) => {
    this.setState({
      todos: this.state.todos.map((todoo) => {
        if (todoo.id === todo.id) {
          return {
            ...todoo,
            text: todo.text,
          };
        } else {
          return todoo;
        }
      }),
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

  Edit = (id) => {
    this.state.todos.map((todo) => {
      if (todo.id === id) {
      }
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
      if (this.state.active === true) {
        todos = this.state.todos.filter((todo) => !todo.complete);
      } else {
        todos = this.state.todos;
      }
    } else if (this.state.todoToShow === "complete") {
      if (this.state.completed === true) {
        todos = this.state.todos.filter((todo) => todo.complete);
      } else {
        todos = this.state.todos;
      }
    }

    return (
      <div>
        <div className="List" style={{ fontSize: 18 }}>
          {/* keeps track of number of todos */}
          Todos left: {this.state.todos.filter((todo) => !todo.complete).length}
        </div>
        {/* go through each todo and make it show through Todo.js */}
        <Form Submitting={this.addTodo}></Form>
        {this.resetNumbering(this.state.todos)}

        <div>
          <div>
            <Button onClick={this.clear}>Clear</Button>
          </div>
          <div>
            <Button
              primary={this.state.active}
              onClick={() => {
                this.setState({
                  todoToShow: "active",
                  active: !this.state.active,
                });
              }}
            >
              Show active todos
            </Button>
          </div>

          <Button
            primary={this.state.completed}
            onClick={() => {
              this.setState({
                todoToShow: "complete",
                completed: !this.state.completed,
              });
            }}
          >
            Show completed todos
          </Button>
          <div>
            <Button onClick={this.allActive}>Set all active</Button>
          </div>
          <Button onClick={this.allComplete}>Set all completed</Button>
          {/* button that deleted completed todos */}
          <div>
            <Button onClick={this.deleteCompleted}>Delete completed</Button>
          </div>
        </div>
        {todos
          .slice(0)
          .reverse()
          .map((todo) => (
            <Todo
              Submitting={this.addChangedTodo}
              key={todo.id}
              id={todo.id}
              todo={todo}
              Deleted={() => this.Remove(todo.id)}
              onComplete={() => this.Complete(todo.id)}
            ></Todo>
          ))}
      </div>
    );
  }
}
