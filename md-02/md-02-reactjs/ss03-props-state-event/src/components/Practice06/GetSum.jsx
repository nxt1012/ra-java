import React, { Component } from "react";

export default class GetSum extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
      sumOfValue: 0,
    };
  }
  handleInputChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };
  handleClick = () => {
    let sum = 0;
    let nums = this.state.inputValue.split("+");
    for (let i = 0; i < nums.length; i++) {
      sum += Number(nums[i]);
    }
    this.setState({
      sumOfValue: sum,
    });
  };
  render() {
    return (
      <div>
        <label htmlFor="inputValue">Nhập biểu thức: </label>
        <input
          id="inputValue"
          type="text"
          placeholder="Vd: 1+2+3+4"
          onChange={this.handleInputChange}
          value={this.state.inputValue}
        />
        <button onClick={this.handleClick}>Sum</button>
        {this.state.inputValue ? (
          <div>
            <p>Kết quả</p>
            <p style={{ color: "red" }}>{this.state.sumOfValue}</p>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}
