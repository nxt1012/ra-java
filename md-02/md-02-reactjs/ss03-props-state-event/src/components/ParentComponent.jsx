import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

export default class ParentComponent extends Component {
  // Props:
  // Props là viết tắt của properties
  // Dùng để lưu trữ các attributes
  // Giúp cho việc truyền dữ liệu từ component cha xuống component con
  // Giúp cho việc giao tiếp giữa các component với nhau
  // Giá trị của props không thay đổi
  // Parent => Child
  // + Gọi Child trong Parent
  // + Truyền dữ liệu vào theo dạng key=value (attribute)
  render() {
    const greeting = "Welcome to RA !!!";
    const person = {
      name: "Ánh",
      age: 30,
    };
    return (
      <div>
        <h2>ParentComponent</h2>
        <ChildComponent mes={greeting} course={"JavaScript"} person={person}>
          Hello World
        </ChildComponent>
      </div>
    );
  }
}
