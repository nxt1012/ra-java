import React, { Component } from "react";

export default class Button extends Component {
  render() {
    return (
      <div>
        <button
          style={{
            backgroundColor: this.props.info.backgroundColor,
            color: this.props.info.color,
          }}
        >
          {this.props.info.buttonText}
        </button>
      </div>
    );
  }
}
