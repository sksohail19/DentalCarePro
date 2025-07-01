import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Login from './components/Auth/Login';
import Header from './components/Layout/Header';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import PatientDashboard from './components/Dashboard/PatientDashboard';
import PatientList from './components/Patients/PatientList';
import AppointmentList from './components/Appointments/AppointmentList';
import CalendarView from './components/Calendar/CalendarView';
import Registration from './components/Auth/Registration';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};

const AdminRoute = ({ children }) => {
  const { isAdmin } = useAuth();
  return isAdmin ? <>{children}</> : <Navigate to="/" />;
};

const AppContent = () => {
  const { isAuthenticated, isAdmin } = useAuth();

  return (
    <div className="min-vh-100 bg-light">
      {/* Show header only when authenticated */}
      {isAuthenticated && <Header />}
      <main className="container py-4">
        <Routes>
          {/* Public routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Registration />} />

          {/* Protected routes */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                {isAdmin ? <AdminDashboard /> : <PatientDashboard />}
              </ProtectedRoute>
            }
          />
          <Route
            path="/patients"
            element={
              <ProtectedRoute>
                <AdminRoute>
                  <PatientList />
                </AdminRoute>
              </ProtectedRoute>
            }
          />
          <Route
            path="/appointments"
            element={
              <ProtectedRoute>
                <AdminRoute>
                  <AppointmentList />
                </AdminRoute>
              </ProtectedRoute>
            }
          />
          <Route
            path="/calendar"
            element={
              <ProtectedRoute>
                <AdminRoute>
                  <CalendarView />
                </AdminRoute>
              </ProtectedRoute>
            }
          />

          {/* Catch-all: redirect unknown routes */}
          <Route
            path="*"
            element={<Navigate to={isAuthenticated ? "/" : "/login"} />}
          />
        </Routes>
      </main>
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;
