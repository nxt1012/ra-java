import React, { Component } from 'react'
import "./BaiTap01.css"
export default class BaiTap01 extends Component {
  render() {
    const course = ["HTML", "JavaScript", "Python", "C#"]
    return (
      <div className='course-list'>
        <div className='title'><h2>danh sách khóa học</h2></div>
        <ul>
            {course.map((element, index) => <li key={index}>{element}</li>)}
        </ul>
      </div>
    )
  }
}
