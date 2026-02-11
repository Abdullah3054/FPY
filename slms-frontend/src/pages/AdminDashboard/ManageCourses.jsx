import { useState } from 'react';

const ManageCourses = () => {
  const [course, setCourse] = useState('');
  const [list, setList] = useState(['Web Engineering', 'Data Science']);

  const addCourse = (e) => {
    e.preventDefault();
    if (!course.trim()) return;
    setList((prev) => [...prev, course]);
    setCourse('');
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Manage Courses</h1>
      <form className="flex gap-2 mb-4" onSubmit={addCourse}>
        <input className="border rounded-lg px-3 py-2" value={course} onChange={(e) => setCourse(e.target.value)} placeholder="Add course" />
        <button className="px-4 py-2 bg-primary text-white rounded-lg">Add</button>
      </form>
      <ul className="bg-white rounded-xl card-shadow p-4 space-y-2">
        {list.map((item) => <li key={item} className="flex justify-between border-b pb-2">{item}<button className="text-red-500" onClick={() => setList((prev) => prev.filter((c) => c !== item))}>Remove</button></li>)}
      </ul>
    </div>
  );
};

export default ManageCourses;
