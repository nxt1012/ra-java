import React, { Component } from "react";

export default class Toggle extends Component {
  constructor() {
    super();
    this.state = {
      toggle: false,
    };
  }
  handleCheckAll = () => {
    const checkboxes = document.getElementsByClassName("checkbox");
    for (let i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = !this.state.toggle;
    }
    this.setState({
      toggle: !this.state.toggle,
    });
  };
  render() {
    return (
      <div>
        <h3>What do you have?</h3>
        <input
          type="checkbox"
          id="bike"
          className="checkbox"
          name="bike"
          value="bike"
        />
        <label htmlFor="bike">I have a bike</label>

        <br />
        <input
          type="checkbox"
          id="car"
          className="checkbox"
          name="car"
          value="car"
        />
        <label htmlFor="car">I have a car</label>

        <br />
        <input
          type="checkbox"
          id="boat"
          className="checkbox"
          name="boat"
          value="boat"
        />
        <label htmlFor="boat">I have a boat</label>

        <br />
        <button onClick={this.handleCheckAll}>
          {!this.state.toggle ? "I have all" : "I have nothing"}
        </button>
      </div>
    );
  }
}
