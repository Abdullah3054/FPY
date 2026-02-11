import Sidebar from '../../components/Sidebar/Sidebar';
import BarChartComp from '../../components/Charts/BarChart';
import LineChartComp from '../../components/Charts/LineChart';
import { analyticsData } from '../../data/dummyData';
import './admin.css';

const links = [
  { to: '/admin', label: 'Overview' },
  { to: '/admin/manage-students', label: 'Manage Students' },
  { to: '/admin/manage-teachers', label: 'Manage Teachers' },
  { to: '/admin/manage-courses', label: 'Manage Courses' }
];

const AdminDashboard = () => (
  <section className="admin-wrap p-4 md:p-6 grid lg:grid-cols-[250px,1fr] gap-5 min-h-screen">
    <Sidebar links={links} />
    <div className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4"><BarChartComp data={analyticsData} /><LineChartComp data={analyticsData} /></div>
      <div className="bg-white rounded-xl p-5 card-shadow">
        <h2 className="text-xl font-semibold">System Settings</h2>
        <p className="text-slate-600 mt-2">Configure semester timelines, grading rules, and permissions.</p>
      </div>
    </div>
  </section>
);

export default AdminDashboard;
