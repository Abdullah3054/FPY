import Header from '../../components/Header/Header';
import LoginForm from '../../components/Forms/LoginForm';
import './login.css';

const Login = () => (
  <div>
    <Header />
    <main className="auth-page px-4 py-16 min-h-[80vh] grid place-items-center">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">Login to SLMS</h1>
        <LoginForm />
      </div>
    </main>
  </div>
);

export default Login;
