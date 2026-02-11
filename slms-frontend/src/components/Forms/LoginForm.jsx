import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { ROLE_PATHS } from '../../utils/constants';
import Button from '../UI/Button';

const LoginForm = () => {
  const [form, setForm] = useState({ email: '', role: 'student' });
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(form.email || 'demo@slms.edu', form.role);
    navigate(ROLE_PATHS[form.role]);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl card-shadow">
      <input className="w-full border rounded-lg px-3 py-2" placeholder="Email" type="email" onChange={(e) => setForm({ ...form, email: e.target.value })} required />
      <select className="w-full border rounded-lg px-3 py-2" onChange={(e) => setForm({ ...form, role: e.target.value })}>
        <option value="student">Student</option>
        <option value="teacher">Teacher</option>
        <option value="admin">Admin</option>
      </select>
      <Button className="w-full" type="submit">Sign In</Button>
    </form>
  );
};

export default LoginForm;
