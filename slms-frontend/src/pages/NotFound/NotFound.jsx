import { Link } from 'react-router-dom';

const NotFound = () => (
  <main className="min-h-screen grid place-items-center bg-slate-950 text-white p-4">
    <div className="text-center">
      <p className="text-indigo-300 font-semibold">404 Error</p>
      <h1 className="text-5xl font-bold mt-2">Page Not Found</h1>
      <p className="text-slate-300 mt-3">The page you requested does not exist or has been moved.</p>
      <Link to="/" className="inline-block mt-6 px-4 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-600">Back to Home</Link>
    </div>
  </main>
);

export default NotFound;
