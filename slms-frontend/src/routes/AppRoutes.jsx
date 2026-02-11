import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import StudentDashboard from '../pages/StudentDashboard/StudentDashboard';
import StudentCourses from '../pages/StudentDashboard/StudentCourses';
import StudentQuizzes from '../pages/StudentDashboard/StudentQuizzes';
import StudentAssignments from '../pages/StudentDashboard/StudentAssignments';
import TeacherDashboard from '../pages/TeacherDashboard/TeacherDashboard';
import UploadMaterial from '../pages/TeacherDashboard/UploadMaterial';
import CreateQuiz from '../pages/TeacherDashboard/CreateQuiz';
import AdminDashboard from '../pages/AdminDashboard/AdminDashboard';
import ManageStudents from '../pages/AdminDashboard/ManageStudents';
import ManageTeachers from '../pages/AdminDashboard/ManageTeachers';
import ManageCourses from '../pages/AdminDashboard/ManageCourses';
import Courses from '../pages/Courses/Courses';
import Quiz from '../pages/Quiz/Quiz';
import QuizResult from '../pages/Quiz/QuizResult';
import Assignments from '../pages/Assignments/Assignments';
import Contact from '../pages/Contact/Contact';
import NotFound from '../pages/NotFound/NotFound';
import ProtectedRoute from './ProtectedRoute';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/courses" element={<Courses />} />
    <Route path="/quiz" element={<Quiz />} />
    <Route path="/quiz/result" element={<QuizResult />} />
    <Route path="/assignments" element={<Assignments />} />
    <Route path="/contact" element={<Contact />} />

    <Route path="/student" element={<ProtectedRoute allowedRoles={['student']}><StudentDashboard /></ProtectedRoute>} />
    <Route path="/student/courses" element={<ProtectedRoute allowedRoles={['student']}><StudentCourses /></ProtectedRoute>} />
    <Route path="/student/quizzes" element={<ProtectedRoute allowedRoles={['student']}><StudentQuizzes /></ProtectedRoute>} />
    <Route path="/student/assignments" element={<ProtectedRoute allowedRoles={['student']}><StudentAssignments /></ProtectedRoute>} />

    <Route path="/teacher" element={<ProtectedRoute allowedRoles={['teacher']}><TeacherDashboard /></ProtectedRoute>} />
    <Route path="/teacher/upload-material" element={<ProtectedRoute allowedRoles={['teacher']}><UploadMaterial /></ProtectedRoute>} />
    <Route path="/teacher/create-quiz" element={<ProtectedRoute allowedRoles={['teacher']}><CreateQuiz /></ProtectedRoute>} />

    <Route path="/admin" element={<ProtectedRoute allowedRoles={['admin']}><AdminDashboard /></ProtectedRoute>} />
    <Route path="/admin/manage-students" element={<ProtectedRoute allowedRoles={['admin']}><ManageStudents /></ProtectedRoute>} />
    <Route path="/admin/manage-teachers" element={<ProtectedRoute allowedRoles={['admin']}><ManageTeachers /></ProtectedRoute>} />
    <Route path="/admin/manage-courses" element={<ProtectedRoute allowedRoles={['admin']}><ManageCourses /></ProtectedRoute>} />

    <Route path="/home" element={<Navigate to="/" />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
