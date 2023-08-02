import React, { Component } from "react";
import Timer from "./components/Timer";
import Buttons from "./components/Buttons";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      time: 0,
      running: false,
    };
  }
  render() {
    return (
      <div>
        <Timer />
        <Buttons />
      </div>
    );
  }
}
