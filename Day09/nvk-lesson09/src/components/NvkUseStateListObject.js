import React, { useState } from "react";

const NvkUseStateListObject = () => {
  const [students, setStudents] = useState([
    { id: "SV001", name: "Nguyễn Văn Khánh", age: 20, class: "K23CNT3" },
    { id: "SV002", name: "Nguyễn Văn A2", age: 23, class: "K23CNT1" },
    { id: "SV003", name: "Nguyễn Thị B2", age: 21, class: "K23CNT2" },
    { id: "SV004", name: "Nguyễn Trần C3", age: 23, class: "K23CNT1" }
  ]);

  return (
    <div>
      <h3>Danh sách sinh viên</h3>
      <table border="1" width="100%">
        <thead>
          <tr>
            <th>STT</th>
            <th>NvkID</th>
            <th>NvkName</th>
            <th>NvkAge</th>
            <th>NvkClass</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student.id}>
              <td>{index + 1}</td>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.class}</td>
              <td>
                <button>Sửa</button>
                <button>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NvkUseStateListObject;