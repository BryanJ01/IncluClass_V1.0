import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import LoginForm from './components/auth/LoginForm';
import RegisterForm from './components/auth/RegisterForm';
import ActivitiesPage from './pages/ActivitiesPage';
import AdaptationsPage from './pages/AdaptationsPage';
import CommunityPage from './pages/CommunityPage';
import ResourcesPage from './pages/ResourcesPage';
import ProfilePage from './pages/ProfilePage';
import MainContent from './components/MainContent';

/*function App() {
  // Simple auth state management (you'd want to use a proper auth system in production)
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  if (!isAuthenticated) {
    return (
      <Router>
        <Routes>
          <Route path="/register" element={<RegisterForm />} />
          <Route path="*" element={<LoginForm />} />
        </Routes>
      </Router>
    );
  }

  return (
    <Router>
      <div className="min-h-screen bg-slate-50">
        <Navbar />
        <div className="flex">
          <Sidebar />
          <Routes>
            <Route path="/activities" element={<ActivitiesPage />} />
            <Route path="/adaptations" element={<AdaptationsPage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/" element={<ActivitiesPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}*/

function App() {
  // Cambia a true para simular que el usuario está autenticado
  const [isAuthenticated, setIsAuthenticated] = React.useState(true); 

  if (!isAuthenticated) {
    return (
      <Router>
        <Routes>
          <Route path="/register" element={<RegisterForm />} />
          <Route path="*" element={<LoginForm />} />
        </Routes>
      </Router>
    );
  }

  return (
    <Router>
      <div className="min-h-screen bg-slate-50">
        <Navbar />
        <div className="flex">
          <Sidebar />
          <Routes>
            <Route path="/activities" element={<ActivitiesPage />} />
            <Route path="/adaptations" element={<AdaptationsPage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/" element={<ActivitiesPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
  


export default App;