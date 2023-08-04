import React, { Component } from "react";

export default class DemoForm5 extends Component {
  constructor() {
    super();
    this.state = {
      checkedItems: [],
    };
  }
  handleChange = (e) => {
    if (this.state.checkedItems.includes(e.target.value)) {
      // TODO: xóa giá trị ra khỏi state
      let newCheckedItems = this.state.checkedItems.filter(
        (item) => item !== e.target.value
      );
      let newState = {
        checkedItems: newCheckedItems,
      };
      this.setState(newState);
    } else {
      // TODO: thêm giá trị vào state
      this.setState({
        checkedItems: [...this.state.checkedItems, e.target.value],
      });
    }
  };
  handleSubmit = (e) => {
    e.preventDefault();
    alert(`You have: ${this.state.checkedItems.join(", ")}.`);
    this.setState({
      checkedItems: [],
    });
  };
  render() {
    console.log(this.state.checkedItems);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="checkbox"
            name="bike"
            value="bike"
            checked={this.state.checkedItems.includes("bike")}
            onChange={this.handleChange}
          />
          <label>Bike</label>
          <input
            type="checkbox"
            name="car"
            value="car"
            checked={this.state.checkedItems.includes("car")}
            onChange={this.handleChange}
          />
          <label>Car</label>
          <input
            type="checkbox"
            name="bicycle"
            value="bicycle"
            checked={this.state.checkedItems.includes("bicycle")}
            onChange={this.handleChange}
          />
          <label>Bicycle</label>
          <input
            type="checkbox"
            name="boat"
            value="boat"
            checked={this.state.checkedItems.includes("boat")}
            onChange={this.handleChange}
          />
          <label>Boat</label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
