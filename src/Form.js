import React from "react";
import shortid from "shortid";

export default class Form extends React.Component {
  state = {
    text: "",
  };

  //sets text to whatever is typed into input box
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    //makes sure textbox isn't empty
    if (this.state.text !== "") {
      //prop to update the todo with properties
      this.props.Submitting({
        id: shortid.generate(),
        text: this.state.text,
        number: 1,
        complete: false,
      });
      this.setState({
        text: "",
      });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="text"
          value={this.state.text}
          onChange={this.handleChange}
          placeholder="Add todo"
        ></input>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
