import React, { Component } from "react";

export default class User extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <tr>
        <td className="pl-4">1</td>
        <td>
          <h6 className="font-medium mb-0">{this.props.name}</h6>
        </td>
        <td>
          <span className="text-muted">Visual Designer</span>
          <br />
          <span className="text-muted">Past : teacher</span>
        </td>
        <td>
          <span className="text-muted">daniel@website.com</span>
          <br />
        </td>
        <td>
          <span className="text-muted">{this.props.dateOfBirth}</span>
          <br />
        </td>
        <td>
          <select
            className="form-control category-select"
            id="exampleFormControlSelect1"
          >
            <option>Modulator</option>
            <option>Admin</option>
            <option>User</option>
            <option>Subscriber</option>
          </select>
        </td>
        <td>
          <button
            type="button"
            className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"
          >
            <i className="fa fa-trash" />{" "}
          </button>
          <button
            type="button"
            className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"
          >
            <i className="fa fa-edit" />{" "}
          </button>
        </td>
      </tr>
    );
  }
}
