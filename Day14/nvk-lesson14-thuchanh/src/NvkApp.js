import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NvkNavBar from './components/NvkNavBar';
import NvkHome from './components/NvkHome';
import NvkListUsers from './components/NvkListUsers';
import NvkCreateUser from './components/NvkCreateUser';
import NvkEditUser from './components/NvkEditUser';
import './styles.css';

const NvkApp = () => (
  <Router>
    <NvkNavBar />
    <Routes>
      <Route path="/" element={<NvkHome />} />
      <Route path="/users" element={<NvkListUsers />} />
      <Route path="/create" element={<NvkCreateUser />} />
      <Route path="/edit/:id" element={<NvkEditUser />} />
    </Routes>
  </Router>
);

export default NvkApp;