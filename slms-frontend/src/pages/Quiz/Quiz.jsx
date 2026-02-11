import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { quizQuestions } from '../../data/dummyData';
import './quiz.css';

const Quiz = () => {
  const [answers, setAnswers] = useState({});
  const [seconds, setSeconds] = useState(900);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => setSeconds((prev) => (prev > 0 ? prev - 1 : 0)), 1000);
    return () => clearInterval(timer);
  }, []);

  const submitQuiz = () => {
    const score = answers[1] === quizQuestions[0].answer ? 1 : 0;
    navigate('/quiz/result', { state: { score, total: 2 } });
  };

  return (
    <div>
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold">Quiz</h1>
        <p className="text-slate-600 mt-1">Timer: {Math.floor(seconds / 60)}:{String(seconds % 60).padStart(2, '0')}</p>
        <div className="bg-white rounded-xl p-6 card-shadow mt-5 space-y-5">
          <div>
            <h2 className="font-semibold">1. {quizQuestions[0].question}</h2>
            <div className="grid gap-2 mt-3">{quizQuestions[0].options.map((option) => <button key={option} className={`text-left px-3 py-2 rounded border ${answers[1] === option ? 'border-primary bg-blue-50' : 'border-slate-200'}`} onClick={() => setAnswers((prev) => ({ ...prev, 1: option }))}>{option}</button>)}</div>
          </div>
          <div>
            <h2 className="font-semibold">2. {quizQuestions[1].question}</h2>
            <textarea className="w-full border rounded-lg px-3 py-2 mt-2" rows="4" onChange={(e) => setAnswers((prev) => ({ ...prev, 2: e.target.value }))} />
          </div>
          <button className="px-4 py-2 bg-primary text-white rounded-lg" onClick={submitQuiz}>Submit Quiz</button>
        </div>
      </main>
    </div>
  );
};

export default Quiz;
