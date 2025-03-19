import { useState } from 'react';
import { createUser } from '../api/api';
import { useNavigate } from 'react-router-dom';

const NvkCreateUser = () => {
  const [user, setUser] = useState({ NvkFullname: '', NvkEmail: '', NvkPhone: '', NvkActive: false });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(user).then(() => navigate('/users'));
  };

  return (
    <div className="container">
      <h2 className="title">Thêm mới thông tin User</h2>
      <form onSubmit={handleSubmit} className="user-form">
        <input type="text" placeholder="Full Name" onChange={e => setUser({...user, NvkFullname: e.target.value})} />
        <input type="email" placeholder="Email" onChange={e => setUser({...user, NvkEmail: e.target.value})} />
        <input type="text" placeholder="Phone" onChange={e => setUser({...user, NvkPhone: e.target.value})} />
        <div>
          <label>
            <input type="radio" name="active" checked={user.NvkActive} onChange={() => setUser({...user, NvkActive: true})} />
            Hoạt động
          </label>
          <label>
            <input type="radio" name="active" checked={!user.NvkActive} onChange={() => setUser({...user, NvkActive: false})} />
            Đang khóa
          </label>
        </div>
        <button type="submit" className="btn">Create</button>
        <button type="button" onClick={() => navigate('/users')} className="btn">Back</button>
      </form>
    </div>
  );
};

export default NvkCreateUser;