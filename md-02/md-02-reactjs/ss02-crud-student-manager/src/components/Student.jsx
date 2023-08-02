import React, { Component } from "react";

export default class Student extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.id}</td>
        <td>{this.props.studentCode}</td>
        <td>{this.props.studentName}</td>
        <td>{this.props.studentAge}</td>
        <td>{this.props.studentGender}</td>
        <td>
          <div className="template-demo">
            <button type="button" className="btn btn-danger btn-icon-text">
              Xem
            </button>
            <button type="button" className="btn btn-warning btn-icon-text">
              Sửa
            </button>
            <button type="button" className="btn btn-success btn-icon-text">
              Xóa
            </button>
          </div>
        </td>
      </tr>
    );
  }
}
