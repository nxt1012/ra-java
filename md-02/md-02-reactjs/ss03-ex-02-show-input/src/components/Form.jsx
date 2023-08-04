import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
    };
  }
  handleInputChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };
  render() {
    return (
      <div>
        <input
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        />
        <button
          onClick={() => this.props.handleGetValue(this.state.inputValue)}
        >
          Get !!!
        </button>
      </div>
    );
  }
}
