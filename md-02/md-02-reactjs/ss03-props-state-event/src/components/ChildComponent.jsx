import React, { Component } from "react";

export default class ChildComponent extends Component {
  // Dùng để lưu trữ dữ liệu trong component => sẽ chỉ có dữ liệu trong component đấy và dữ liệu có thể thay đổi được
  // Để khai báo state cần phải khởi tạo lớp => cần sử dụng constructor
  // Sử dụng super() để gọi lớp cha
  constructor() {
    super();
    // Khai báo state
    this.state = {
      student: "Vân Anh",
      question: "Hay trốn?",
      answer: "Không",
      // Tạo một toggle để bật tắt
      toggle: false,
    };
    this.handleChangeState = this.handleChangeState.bind(this);
  }
  // hàm xử lý sự kiện viết ở ngoài constructor, loại từ khóa this
  // phải sử dụng arrow function
  //   handleChangeState = () => {
  //     this.setState({
  //       answer: "Có",
  //     });
  //   };

  // trường hợp không viết bằng arrow function thì cần bind trong constructor
  handleChangeState() {
    this.setState({
      answer: "Có",
    });
  }
  handleToggle = () => {
    this.setState({
      toggle: !this.state.toggle,
    });
  };
  render() {
    return (
      <div>
        <h2>Child Component</h2>
        <h3>Props</h3>
        <p>
          {this.props.mes} - Course: {this.props.course} - {this.props.children}
        </p>
        <p>
          Học viên {this.props.person.name} - {this.props.person.age} tuổi
        </p>
        <h3>State</h3>
        <p>
          {this.state.student} - Có {this.state.question}
        </p>
        <p>Answer: {this.state.answer}</p>
        <button onClick={this.handleChangeState}>Click me !!!</button>
        <h2>Toán tử 3 ngôi trong ReactJS</h2>
        <h3>Có đẹp trai không??</h3>
        {this.state.toggle ? (
          <div>
            <p>Có</p>
            <button onClick={this.handleToggle}>Click me !!!</button>
          </div>
        ) : (
          <div>
            <p>Cóooooooooo</p>
            <button onClick={this.handleToggle}>Click me !!!</button>
          </div>
        )}
      </div>
    );
  }
}
