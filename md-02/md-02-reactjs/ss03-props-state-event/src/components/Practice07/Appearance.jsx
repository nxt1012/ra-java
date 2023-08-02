import React, { Component } from "react";

export default class Appearance extends Component {
  constructor() {
    super();
    this.state = {
      color: "black",
      fontSize: "1rem",
      isShow: false,
      content: "Old content would be like this",
    };
  }
  handleToggle = () => {
    this.setState({
      isShow: !this.state.isShow,
    });
  };
  handleChangeBackGround = () => {
    this.setState({
      color: this.state.color === "black" ? "blue" : "black",
      fontSize: this.state.fontSize === "1rem" ? "2rem" : "1rem",
      content:
        this.state.content === "Old content would be like this"
          ? "New content will be like this"
          : "Old content would be like this",
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.handleToggle}>Toggle</button>
        <button onClick={this.handleChangeBackGround}>Change</button>
        {!this.state.isShow ? (
          <div>
            <p
              style={{ color: this.state.color, fontSize: this.state.fontSize }}
            >
              {this.state.content}
            </p>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}
