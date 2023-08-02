import React, { Component } from "react";

export default class NavigationButton extends Component {
  render() {
    return (
      <h5 className="mb-3">
        <a href="#!" className="text-body">
          <i className="fas fa-long-arrow-alt-left me-2" />
          Continue shopping
        </a>
      </h5>
    );
  }
}
