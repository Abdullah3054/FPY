import { users } from '../../data/dummyData';

const ManageStudents = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold mb-4">Manage Students</h1>
    <div className="bg-white rounded-xl card-shadow overflow-auto">
      <table className="w-full text-left">
        <thead className="bg-indigo-50"><tr><th className="p-3">Name</th><th>Email</th><th>Status</th></tr></thead>
        <tbody>{users.students.map((student) => <tr key={student.id} className="border-t"><td className="p-3">{student.name}</td><td>{student.email}</td><td>{student.status}</td></tr>)}</tbody>
      </table>
    </div>
  </div>
);

export default ManageStudents;
