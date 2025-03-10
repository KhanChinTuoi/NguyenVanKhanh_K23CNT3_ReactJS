import React, { Component } from 'react';

export default class NvkStudent extends Component {
  render() {
    let { renderNvkStudent, NvkIndex, onNvkHandleView, onNvkHandleEdit, onNvkHandleDelete } = this.props;

    return (
      <tr>
        <td>{NvkIndex}</td>
        <td>{renderNvkStudent.NvkID}</td>
        <td>{renderNvkStudent.NvkStudentName}</td>
        <td>{renderNvkStudent.NvkAge}</td>
        <td>{renderNvkStudent.NvkGender}</td>
        <td>
          <button className="btn btn-info btn-sm me-2" onClick={() => onNvkHandleView(renderNvkStudent)}>Xem</button>
          <button className="btn btn-warning btn-sm me-2" onClick={() => onNvkHandleEdit(renderNvkStudent)}>Sửa</button>
          <button className="btn btn-danger btn-sm" onClick={() => onNvkHandleDelete(renderNvkStudent.NvkID)}>Xóa</button>
        </td>
      </tr>
    );
  }
}