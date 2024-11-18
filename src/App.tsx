import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './components/auth/AuthContext';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import LoginForm from './components/auth/LoginForm';
import RegisterForm from './components/auth/RegisterForm';
import ActivitiesPage from './pages/ActivitiesPage';
import LandingPage from './pages/LandingPage';
import ProfilePage from './pages/ProfilePage';
import WelcomePage from './pages/WelcomePage';
import AdaptationsPage from './pages/AdaptationsPage';
import ResourcesPage from './pages/ResourcesPage';
import CommunityPage from './pages/CommunityPage';


// Componente para rutas protegidas
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

// Layout para rutas autenticadas
const AuthenticatedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
};

function App() {
  const { user } = useAuth();

  return (
    <Router>
      <Toaster position="top-right" />
      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={!user ? <LandingPage /> : <Navigate to="/welcome" />} />
        <Route path="/login" element={!user ? <LoginForm /> : <Navigate to="/welcome" />} />
        <Route path="/register" element={!user ? <RegisterForm /> : <Navigate to="/welcome" />} />

        {/* Rutas protegidas */}
        <Route path="/welcome" element={
          <ProtectedRoute>
            <AuthenticatedLayout>
              <WelcomePage />
            </AuthenticatedLayout>
          </ProtectedRoute>
        } />
        <Route path="/activities" element={
          <ProtectedRoute>
            <AuthenticatedLayout>
              <ActivitiesPage />
            </AuthenticatedLayout>
          </ProtectedRoute>
        } />
        <Route path="/adaptations" element={
          <ProtectedRoute>
            <AuthenticatedLayout>
              <AdaptationsPage />
            </AuthenticatedLayout>
          </ProtectedRoute>
        } />
        <Route path="/resources" element={
          <ProtectedRoute>
            <AuthenticatedLayout>
              <ResourcesPage />
            </AuthenticatedLayout>
          </ProtectedRoute>
        } />
        <Route path="/community" element={
          <ProtectedRoute>
            <AuthenticatedLayout>
              <CommunityPage />
            </AuthenticatedLayout>
          </ProtectedRoute>
        } />
        <Route path="/profile" element={
          <ProtectedRoute>
            <AuthenticatedLayout>
              <ProfilePage />
            </AuthenticatedLayout>
          </ProtectedRoute>
        } />

        {/* Ruta por defecto */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;