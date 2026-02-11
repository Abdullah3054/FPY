import { users } from '../../data/dummyData';

const ManageTeachers = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold mb-4">Manage Teachers</h1>
    <div className="bg-white rounded-xl card-shadow overflow-auto">
      <table className="w-full text-left">
        <thead className="bg-indigo-50"><tr><th className="p-3">Name</th><th>Email</th><th>Department</th></tr></thead>
        <tbody>{users.teachers.map((teacher) => <tr key={teacher.id} className="border-t"><td className="p-3">{teacher.name}</td><td>{teacher.email}</td><td>{teacher.department}</td></tr>)}</tbody>
      </table>
    </div>
  </div>
);

export default ManageTeachers;
