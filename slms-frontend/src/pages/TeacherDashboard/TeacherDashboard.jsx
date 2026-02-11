import Sidebar from '../../components/Sidebar/Sidebar';
import PieChartComp from '../../components/Charts/PieChart';
import BarChartComp from '../../components/Charts/BarChart';
import { analyticsData, pieData } from '../../data/dummyData';
import './teacher.css';

const links = [
  { to: '/teacher', label: 'Overview' },
  { to: '/teacher/upload-material', label: 'Upload Material' },
  { to: '/teacher/create-quiz', label: 'Create Quiz' }
];

const TeacherDashboard = () => (
  <section className="teacher-wrap p-4 md:p-6 grid lg:grid-cols-[250px,1fr] gap-5 min-h-screen">
    <Sidebar links={links} />
    <div className="grid md:grid-cols-2 gap-4">
      <BarChartComp data={analyticsData} />
      <PieChartComp data={pieData} />
      <div className="md:col-span-2 bg-white rounded-xl p-5 card-shadow">
        <h2 className="text-xl font-semibold">Course Management</h2>
        <p className="text-slate-600 mt-2">Manage modules, material links, and classroom announcements from a single place.</p>
      </div>
    </div>
  </section>
);

export default TeacherDashboard;
