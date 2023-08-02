import React, { Component } from "react";
import Button from "./Button";

export default class Application extends Component {
  render() {
    const info = {
      backgroundColor: "blue",
      color: "red",
      buttonText: "Click me",
    };
    return (
      <div>
        <Button info={info} />
      </div>
    );
  }
}
