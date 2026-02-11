import { useState } from 'react';
import Button from '../UI/Button';

const RegisterForm = () => {
  const [registered, setRegistered] = useState(false);

  return registered ? (
    <p className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">Registration submitted successfully (mock).</p>
  ) : (
    <form onSubmit={(e) => { e.preventDefault(); setRegistered(true); }} className="space-y-4 bg-white p-6 rounded-xl card-shadow">
      <input className="w-full border rounded-lg px-3 py-2" placeholder="Full Name" required />
      <input className="w-full border rounded-lg px-3 py-2" placeholder="Email" type="email" required />
      <input className="w-full border rounded-lg px-3 py-2" placeholder="Password" type="password" required />
      <Button className="w-full" type="submit">Create Account</Button>
    </form>
  );
};

export default RegisterForm;
