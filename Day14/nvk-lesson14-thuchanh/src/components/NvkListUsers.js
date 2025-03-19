import { useEffect, useState } from 'react';
import { getUsers, deleteUser } from '../api/api';
import { Link } from 'react-router-dom';

const NvkListUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(response => setUsers(response.data));
  }, []);

  const handleDelete = (NvkId) => {
    deleteUser(NvkId).then(() => setUsers(users.filter(user => user.NvkId !== NvkId)));
  };

  return (
    <div className="container">
      <h2>Danh sách User</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>Họ tên</th>
            <th>Email</th>
            <th>Điện thoại</th>
            <th>Trạng thái</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.NvkId}>
              <td>{user.NvkFullname}</td>
              <td>{user.NvkEmail}</td>
              <td>{user.NvkPhone}</td>
              <td>{user.NvkActive ? "Hoạt động" : "Đang khóa"}</td>
              <td>
                <Link to={`/edit/${user.NvkId}`} className="btn">Sửa</Link>
                <button onClick={() => handleDelete(user.NvkId)} className="btn">Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NvkListUsers;