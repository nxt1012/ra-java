import React, { Component } from "react";

export default class DemoForm4 extends Component {
  constructor() {
    super();
    this.state = {
      selectedRadio: "Male",
    };
  }
  handleChange = (event) => {
    this.setState({ selectedRadio: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    alert(`Bạn đã lựa chọn giới tính: ${this.state.selectedRadio}`);
  };

  render() {
    return (
      <div>
        <h3>Xử lý radio trong form</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            type="radio"
            name="gender"
            value={"Male"}
            checked={this.state.selectedRadio === "Male"}
            onChange={this.handleChange}
          />
          <label>Nam</label>
          <input
            type="radio"
            name="gender"
            value={"Female"}
            checked={this.state.selectedRadio === "Female"}
            onChange={this.handleChange}
          />
          <label>Nữ</label>
          <input
            type="radio"
            name="gender"
            value={"Other"}
            checked={this.state.selectedRadio === "Other"}
            onChange={this.handleChange}
          />
          <label>Khác</label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
