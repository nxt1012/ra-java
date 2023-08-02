import React, { Component } from "react";

export default class GetInput extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
    };
  }
  handleInputChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };
  handleClick = () => {
    alert(`You've just input "${this.state.inputValue}"`);
    this.setState({
      inputValue: "",
    });
  };
  render() {
    return (
      <div>
        <input
          id="inputValue"
          type="text"
          placeholder="Input something here"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}
