import React, { Component } from "react";
import Form from "./components/Form";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
    };
  }
  handleGetValue = (input) => {
    this.setState({
      inputValue: input,
    });
  };
  render() {
    return (
      <div>
        <Form handleGetValue={this.handleGetValue} />
        <p>{this.state.inputValue}</p>
      </div>
    );
  }
}
