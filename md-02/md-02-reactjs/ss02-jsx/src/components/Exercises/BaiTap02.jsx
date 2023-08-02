import React, { Component } from 'react'
import "./BaiTap02.css"
export default class BaiTap02 extends Component {
  render() {
    const num1 = +prompt("Nhập số thứ 1");
    const num2 = +prompt("Nhập số thứ 2");;
    return (
      <div className='sum'>
        <h1>Tổng của {num1} và {num2} là : {num1 + num2}</h1>
      </div>
    )
  }
}
