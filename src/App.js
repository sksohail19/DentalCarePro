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

  if (!isAuthenticated) {
    return <Login />;
  }

  return (
    <div className="min-vh-100 bg-light">
      <Header />
      <main className="container py-4">
        <Routes>
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
          <Route path="*" element={<Navigate to="/" />} />
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
