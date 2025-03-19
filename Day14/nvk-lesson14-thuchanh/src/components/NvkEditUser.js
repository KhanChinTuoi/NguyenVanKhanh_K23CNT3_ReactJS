import { useState, useEffect } from 'react';
import { getUser, updateUser } from '../api/api';
import { useNavigate, useParams } from 'react-router-dom';

const NvkEditUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState({ NvkFullname: '', NvkEmail: '', NvkPhone: '', NvkActive: false });
  const navigate = useNavigate();

  useEffect(() => {
    getUser(id).then(response => setUser(response.data));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(id, user).then(() => navigate('/users'));
  };

  return (
    <div className="container">
      <h2 className="title">Sửa thông tin User</h2>
      <form onSubmit={handleSubmit} className="user-form">
        <input type="text" value={user.NvkFullname} onChange={e => setUser({...user, NvkFullname: e.target.value})} />
        <input type="email" value={user.NvkEmail} onChange={e => setUser({...user, NvkEmail: e.target.value})} />
        <input type="text" value={user.NvkPhone} onChange={e => setUser({...user, NvkPhone: e.target.value})} />
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
        <button type="submit" className="btn">Update</button>
        <button type="button" onClick={() => navigate('/users')} className="btn">Back</button>
      </form>
    </div>
  );
};

export default NvkEditUser;