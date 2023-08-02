import React, { Component } from "react";

export default class Event extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.handleClick3 = this.handleClick3.bind(this);
  }

  handleClick1() {
    console.log("Button 01");
  }
  handleClick2() {
    console.log("Button 02");
  }
  handleClick3() {
    console.log("Button 03");
    this.setState({ count: 10 });
    console.log(this.state.count);
  }

  //   Chir thực thi 1 lần khi component render

  handleClick4(element) {
    console.log("Button 04");
    console.log(element);
  }
  handleClick5() {
    console.log("Button 05");
  }
  handleClick6(element) {
    console.log("Button 06");
    console.log(element);
  }
  render() {
    return (
      <div>
        {/* Không truyền đối số */}
        {/* Trường hợp 1 và 6 là hay dùng nhất */}
        <button onClick={this.handleClick1}>Button 01</button>{" "}
        {/* Hàm sẽ được gọi khi người dùng nhấn nút */}
        <button onClick={this.handleClick2()}>Button 02</button>{" "}
        {/* Hàm sẽ được gọi 1 lần khi component render */}
        <button onClick={this.handleClick3}>Button 03</button>{" "}
        {/* TODO: xem lý do vì sao nếu không binding thì hàm này không được chạy ngay cả khi đã click */}
        <button onClick={this.handleClick4("Bay lên nào")}>
          {" "}
          {/* Hàm sẽ được tự động gọi khi component render */}
          Button 04
        </button>{" "}
        {/*  */}
        {/* Truyền đối số lên */}
        <button onClick={() => this.handleClick5}>Button 05</button> {/*  */}
        <button onClick={() => this.handleClick6("Heyy Vân Anh !!!")}>
          {" "}
          {/*  */}
          Button 06
        </button>
      </div>
    );
  }
}
