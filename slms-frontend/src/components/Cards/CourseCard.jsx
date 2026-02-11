const CourseCard = ({ course }) => (
  <article className="bg-white rounded-xl p-4 card-shadow hover:-translate-y-1 transition">
    <h3 className="font-semibold">{course.title}</h3>
    <p className="text-sm text-slate-500">{course.instructor}</p>
    <div className="mt-3 h-2 bg-slate-100 rounded-full">
      <div className="h-2 bg-primary rounded-full" style={{ width: `${course.progress}%` }} />
    </div>
    <p className="text-xs mt-2 text-slate-500">Progress: {course.progress}%</p>
  </article>
);

export default CourseCard;
