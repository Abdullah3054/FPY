import { useLocation, Link } from 'react-router-dom';
import Header from '../../components/Header/Header';

const QuizResult = () => {
  const { state } = useLocation();
  const score = state?.score ?? 0;
  const total = state?.total ?? 0;

  return (
    <div>
      <Header />
      <main className="max-w-xl mx-auto p-8">
        <div className="bg-white rounded-xl p-6 card-shadow text-center">
          <h1 className="text-3xl font-bold">Quiz Result</h1>
          <p className="text-4xl text-primary font-bold mt-4">{score}/{total}</p>
          <p className="text-slate-600 mt-2">Great effort! Keep improving with consistent practice.</p>
          <Link to="/quiz" className="inline-block mt-5 px-4 py-2 bg-primary text-white rounded-lg">Retry Quiz</Link>
        </div>
      </main>
    </div>
  );
};

export default QuizResult;
