import React, { Component } from "react";
import Controls from "./Controls";

export default class Table extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        { id: 1, studentID: "SV0001", name: "Peter", age: 17, gender: true },
        { id: 2, studentID: "SV0002", name: "Maria", age: 18, gender: false },
        { id: 3, studentID: "SV0003", name: "Hans", age: 23, gender: true },
        { id: 4, studentID: "SV0004", name: "Laura", age: 19, gender: false },
        { id: 5, studentID: "SV0005", name: "William", age: 18, gender: true },
        { id: 6, studentID: "SV0006", name: "Alexis", age: 20, gender: false },
        { id: 7, studentID: "SV0007", name: "Baker", age: 30, gender: true },
        { id: 8, studentID: "SV0008", name: "Clara", age: 22, gender: false },
        { id: 9, studentID: "SV0009", name: "David", age: 16, gender: true },
        { id: 10, studentID: "SV0010", name: "Elena", age: 25, gender: false },
        { id: 11, studentID: "SV0011", name: "Frank", age: 18, gender: true },
        { id: 12, studentID: "SV0012", name: "Gina", age: 31, gender: false },
      ],
      dataResult: [],
      searchValue: "",
      sortOrder: "ASC",
    };
  }
  getSortOrder(newSortOrder) {
    // this.setState({
    //   sortOrder: newSortOrder,
    // });
    this.setState({
      dataResult: this.state.data.sort((a, b) => a.name.localeCompare(b.name)),
    });
  }
  getSearchValue(searchValue) {
    this.setState({
      searchValue: searchValue,
    });
  }
  render() {
    return (
      <div>
        <h2 style={{ textTransform: "uppercase" }}>danh sách sinh viên</h2>
        <Controls getSortOrder={this.getSortOrder} />
        <table>
          <tr>
            <th>STT</th>
            <th>Mã sinh viên</th>
            <th>Tên</th>
            <th>Tuổi</th>
            <th>Giới tính</th>
          </tr>
          {this.state.dataResult.map((data, index) => (
            <tr>
              <td>{data.id}</td>
              <td>{data.studentID}</td>
              <td>{data.name}</td>
              <td>{data.age}</td>
              <td>{data.gender}</td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}
