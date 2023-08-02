import React, { Component } from "react";
import "./DemoJSX.css";
export default class DemoJSX extends Component {
  // Trong react sử dụng cú pháp của JSX là cú pháp kết hợp giữa JavaScript và XML
  //
  render() {
    const greeting = "Hello world!!!!";
    const student = {
      name: "Vân Anh",
      age: 50,
    };
    // Lưu ý khi sử dụng css trong ReactJS
    // Khi sử dụng css inline, các thuộc tính CSS sẽ được viết theo dạng camelCase
    // Ví dụ: background-color: backgroundColor
    // Khi sử dụng external thì class được đổi thành className

    function f() {
        alert("Welcome to RA !!!");
    }

    return (
      <div>
        {/* Phép nội suy trong JSX */}
        <h2 style={{ backgroundColor: "pink" }}>{greeting}</h2>

        <p className="student-info">
          Student name: {student.name} - Student age: {student.age}
        </p>
        <button onClick={f}>Click me</button>
      </div>
    );
  }
}
