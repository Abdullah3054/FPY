import { courses } from '../../data/dummyData';
import CourseCard from '../../components/Cards/CourseCard';

const StudentCourses = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold mb-4">My Courses</h1>
    <div className="grid md:grid-cols-3 gap-4">{courses.map((course) => <CourseCard key={course.id} course={course} />)}</div>
  </div>
);

export default StudentCourses;
