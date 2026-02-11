const CreateQuiz = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold mb-4">Create Quiz</h1>
    <form className="bg-white rounded-xl p-6 card-shadow grid gap-4 max-w-2xl">
      <input className="border rounded-lg px-3 py-2" placeholder="Quiz title" />
      <textarea className="border rounded-lg px-3 py-2" rows="4" placeholder="Add MCQ / short questions" />
      <input className="border rounded-lg px-3 py-2" type="date" />
      <button className="px-4 py-2 bg-primary text-white rounded-lg w-fit">Publish Quiz</button>
    </form>
  </div>
);

export default CreateQuiz;
