import React, { Component } from "react";

export default class DemoForm1 extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
    };
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };
  render() {
    console.log(this.state.text);
    return (
      <div>
        <h3>Xử lý form với 1 ô input</h3>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChangeInput} />
          <button type="submit">Click</button>
        </form>
      </div>
    );
  }
}
