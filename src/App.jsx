import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './services/AuthContext';
import DashboardLayout from './layouts/DashboardLayout';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import Students from './pages/Students/Students';
import Lessons from './pages/Lessons/Lessons';
import Stories from './pages/Stories/Stories';
import Roadmap from './pages/Roadmap/Roadmap';
import Messages from './pages/Messages/Messages';
import Inspector from './pages/Inspector/Inspector';
import Meetings from './pages/Meetings/Meetings';
import Analytics from './pages/Analytics/Analytics';
import './App.css';

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return children;
}

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      
      <Route path="/" element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>}>
        <Route index element={<Dashboard />} />
        <Route path="students" element={<Students />} />
        <Route path="lessons" element={<Lessons />} />
        <Route path="stories" element={<Stories />} />
        <Route path="roadmap" element={<Roadmap />} />
        <Route path="messages" element={<Messages />} />
        <Route path="inspector" element={<Inspector />} />
        <Route path="meetings" element={<Meetings />} />
        <Route path="analytics" element={<Analytics />} />
      </Route>
      
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;
