import Header from '../../components/Header/Header';
import CourseCard from '../../components/Cards/CourseCard';
import { courses } from '../../data/dummyData';
import './courses.css';

const Courses = () => (
  <div>
    <Header />
    <main className="courses-wrap max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Courses</h1>
      <div className="grid md:grid-cols-3 gap-4">{courses.map((course) => <CourseCard key={course.id} course={course} />)}</div>
    </main>
  </div>
);

export default Courses;
