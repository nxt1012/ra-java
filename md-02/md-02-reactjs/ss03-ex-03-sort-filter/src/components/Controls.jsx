import React, { Component } from "react";

export default class Controls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortOrder: "ASC",
    };
  }
  handleChangeInput = (e) => {
    this.setState({
      sortOrder: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <input type="text" />
        <button>Search</button>
        <button onClick={this.props.getSortOrder(this.state.sortOrder)}>
          Sort name by
        </button>
        <select
          defaultValue={this.state.sortOrder}
          onChange={this.handleChangeInput}
        >
          <option value="ASC">ASC</option>
          <option value="DES">DES</option>
        </select>
      </div>
    );
  }
}
