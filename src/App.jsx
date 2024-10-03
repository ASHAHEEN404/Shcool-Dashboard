import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import DashboardLayout from "./layout/DashboardLayout";
import AdminPage from "./features/dashboard/pages/admin/AdminPage";
import TeacherPage from "./features/dashboard/pages/teacher/TeacherPage";
import StudentPage from "./features/dashboard/pages/student/StudentPage";
import ParentPage from "./features/dashboard/pages/parent/ParentPage";
import TeachersList from "./features/dashboard/lists/TeachersList";
import StudentsList from "./features/dashboard/lists/StudentsList";
import ParentsList from "./features/dashboard/lists/ParentsList";
import SubjectsList from "./features/dashboard/lists/SubjectsList";
import AnnouncementList from "./features/dashboard/lists/AnnouncementList";
import ClassesList from "./features/dashboard/lists/ClassesList";
import ResultsList from "./features/dashboard/lists/ResultsList";
import TeacherDetails from "./features/dashboard/components/TeacherDetails";
import StudentsDetails from "./features/dashboard/components/StudentsDetails";
import MessagesList from "./features/dashboard/lists/MessagesList";
import ProfileList from "./features/dashboard/components/ProfileDetails";
import CreateCourseList from "./features/dashboard/lists/CreateCourseList";
import ExamsList from "./features/dashboard/lists/ExamsList";
import { role, transformedClasses } from "./lib/data";

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect to /dashboard/userHome by default */}
        <Route
          path="/"
          element={<Navigate to="/dashboard/userHome" replace />}
        />

        {/* Redirect based on role when accessing userHome */}
        <Route
          path="/dashboard/userHome"
          element={
            role ? (
              role === "admin" ? (
                <Navigate to="/dashboard/admin" />
              ) : role === "teacher" ? (
                <Navigate to="/dashboard/teacher" />
              ) : role === "student" ? (
                <Navigate to="/dashboard/student" />
              ) : role === "parent" ? (
                <Navigate to="/dashboard/parent" />
              ) : (
                <Navigate to="/dashboard/profile" />
              )
            ) : (
              <Navigate to="/" /> // Redirect to home or login if no role found
            )
          }
        />

        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="admin" element={<AdminPage />} />
          <Route path="teacher" element={<TeacherPage />} />
          <Route path="student" element={<StudentPage />} />
          <Route path="parent" element={<ParentPage />} />
          <Route path="profile" element={<ProfileList />} />
          <Route path="list/teachers" element={<TeachersList />} />
          <Route path="list/teachers/:id" element={<TeacherDetails />} />
          <Route path="list/students" element={<StudentsList />} />
          <Route path="list/students/:id" element={<StudentsDetails />} />
          <Route path="list/Parents" element={<ParentsList />} />
          <Route path="list/subjects" element={<SubjectsList />} />
          <Route path="list/messages" element={<MessagesList />} />
          <Route path="list/lessons" element={<CreateCourseList />} />
          <Route path="list/exams" element={<ExamsList />} />
          <Route
            path="list/announcements"
            element={<AnnouncementList userRole={role} />}
          />
          <Route
            path="list/classes"
            element={<ClassesList data={transformedClasses} />}
          />
          <Route path="list/results" element={<ResultsList />} />
        </Route>

        {/* Fallback to /dashboard/userHome for any unmatched routes */}
        <Route path="*" element={<Navigate to="/dashboard/userHome" />} />
      </Routes>
    </Router>
  );
}

export default App;
