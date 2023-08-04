import React, { Component } from "react";

export default class DemoLifeCycle extends Component {
  // Vòng đời của một component:
  // => Khởi tạo => Mounting (render lần đầu tiên) => Updating (re-render) = Unmounting (Tháo gỡ)
  //
  // Các phương thức trong từng giai đoạn
  // 1. Khởi tạo: khai báo các state...
  // 2. Mounting: componentWillMount=> render=> componentDidMount

  UNSAFE_componentWillMount() {
    console.log("componentWillMount được chạy");
  }
  componentDidMount() {
    console.log("componentDidMount được chạy");
  }
  // 3. ComponentDidUpdate
  // 4. Unmounting: componentWillUnmount
  //
  //
  //
  //

  render() {
    console.log("render được chạy");
    return <div>DemoLifeCycle</div>;
  }
}
