import Sidebar from '../../components/Sidebar/Sidebar';
import DashboardCard from '../../components/Cards/DashboardCard';
import CourseCard from '../../components/Cards/CourseCard';
import BarChartComp from '../../components/Charts/BarChart';
import LineChartComp from '../../components/Charts/LineChart';
import { analyticsData, courses } from '../../data/dummyData';
import './student.css';

const links = [
  { to: '/student', label: 'Overview' },
  { to: '/student/courses', label: 'Courses' },
  { to: '/student/quizzes', label: 'Quizzes' },
  { to: '/student/assignments', label: 'Assignments' }
];

const StudentDashboard = () => (
  <section className="dash-wrap p-4 md:p-6 grid lg:grid-cols-[250px,1fr] gap-5 min-h-screen">
    <Sidebar links={links} />
    <div className="space-y-6">
      <div className="grid sm:grid-cols-3 gap-4">
        <DashboardCard title="CGPA" value="3.52" />
        <DashboardCard title="Attendance" value="90%" />
        <DashboardCard title="Pending Fee" value="$120" />
      </div>
      <div className="grid md:grid-cols-2 gap-4"><BarChartComp data={analyticsData} /><LineChartComp data={analyticsData} /></div>
      <div className="grid md:grid-cols-3 gap-4">{courses.map((course) => <CourseCard key={course.id} course={course} />)}</div>
    </div>
  </section>
);

export default StudentDashboard;
