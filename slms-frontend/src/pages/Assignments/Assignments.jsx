import Header from '../../components/Header/Header';
import './assignments.css';

const Assignments = () => (
  <div>
    <Header />
    <main className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">Assignments</h1>
      <div className="bg-white rounded-xl p-6 card-shadow">
        <p>Design-only assignment management with status tracking and submission action buttons.</p>
      </div>
    </main>
  </div>
);

export default Assignments;
