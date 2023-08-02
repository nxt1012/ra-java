import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      text: "Old text",
    };
  }
  handleChangeText = () => {
    this.setState({
      text: "New text",
    });
  };
  render() {
    return (
      <div className="App">
        <p
          style={{ fontFamily: "Tahoma", fontSize: "2rem", fontWeight: "bold" }}
        >
          {this.state.text}
        </p>
        <button
          style={{ fontFamily: "Tahoma", fontSize: "1rem" }}
          onClick={this.handleChangeText}
        >
          Change text
        </button>
      </div>
    );
  }
}
