import React, { Component } from 'react';
import NvkStudent from './NvkStudent';

export default class NvkStudentList extends Component {
  render() {
    let { renderNvkStudents, onNvkHandleView, onNvkHandleEdit, onNvkHandleDelete } = this.props;

    return (
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>STT</th>
            <th>Mã SV</th>
            <th>Họ tên</th>
            <th>Tuổi</th>
            <th>Giới tính</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {renderNvkStudents.map((student, index) => (
            <NvkStudent
              key={student.NvkID}
              NvkIndex={index + 1}
              renderNvkStudent={student}
              onNvkHandleView={onNvkHandleView}
              onNvkHandleEdit={onNvkHandleEdit}
              onNvkHandleDelete={onNvkHandleDelete}
            />
          ))}
        </tbody>
      </table>
    );
  }
}