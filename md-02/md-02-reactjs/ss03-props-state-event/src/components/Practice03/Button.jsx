import React, { Component } from "react";

export default class Button extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  handleClick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}
