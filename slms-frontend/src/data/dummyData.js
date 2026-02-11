export const features = [
  { title: 'Smart Progress Tracking', description: 'View performance analytics and completion trends for every learner.' },
  { title: 'Role-Based Dashboards', description: 'Dedicated student, teacher, and admin experiences with actionable insights.' },
  { title: 'Assessments & Assignments', description: 'Integrated quizzes and assignment workflows with instant feedback.' }
];

export const courses = [
  { id: 1, title: 'Web Engineering', instructor: 'Dr. Hina Shah', progress: 78 },
  { id: 2, title: 'Artificial Intelligence', instructor: 'Prof. Asad Khan', progress: 62 },
  { id: 3, title: 'Database Systems', instructor: 'Dr. Sara Ahmed', progress: 48 }
];

export const analyticsData = [
  { name: 'Jan', score: 62, attendance: 72 },
  { name: 'Feb', score: 74, attendance: 79 },
  { name: 'Mar', score: 68, attendance: 84 },
  { name: 'Apr', score: 82, attendance: 88 },
  { name: 'May', score: 87, attendance: 90 }
];

export const pieData = [
  { name: 'Completed', value: 65 },
  { name: 'In Progress', value: 25 },
  { name: 'Pending', value: 10 }
];

export const users = {
  students: [
    { id: 1, name: 'Areeba Malik', email: 'areeba@slms.edu', status: 'Active' },
    { id: 2, name: 'Bilal Noor', email: 'bilal@slms.edu', status: 'Active' }
  ],
  teachers: [
    { id: 1, name: 'Dr. Asif Ali', email: 'asif@slms.edu', department: 'CS' },
    { id: 2, name: 'Ms. Sana Tariq', email: 'sana@slms.edu', department: 'IT' }
  ]
};

export const quizQuestions = [
  {
    id: 1,
    type: 'mcq',
    question: 'Which hook is used to manage local component state?',
    options: ['useRef', 'useMemo', 'useState', 'useContext'],
    answer: 'useState'
  },
  {
    id: 2,
    type: 'short',
    question: 'Briefly describe why reusable components are important in frontend engineering.'
  }
];
