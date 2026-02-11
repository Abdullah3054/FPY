import Header from '../../components/Header/Header';
import RegisterForm from '../../components/Forms/RegisterForm';
import './register.css';

const Register = () => (
  <div>
    <Header />
    <main className="register-page px-4 py-16 min-h-[80vh] grid place-items-center">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">Create Account</h1>
        <RegisterForm />
      </div>
    </main>
  </div>
);

export default Register;
