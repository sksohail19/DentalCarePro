import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Login from './components/Auth/Login';
import Header from './components/Layout/Header';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import PatientDashboard from './components/Dashboard/PatientDashboard';
import PatientList from './components/Patients/PatientList';

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
    <div className="bg-light min-vh-100 d-flex flex-column">
      <Header />
      <main className="container py-4 flex-grow-1">
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
                  <div className="text-center py-5">
                    <h2 className="h4 fw-bold text-dark mb-3">Appointments</h2>
                    <p className="text-muted">Appointment management coming soon...</p>
                  </div>
                </AdminRoute>
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/calendar" 
            element={
              <ProtectedRoute>
                <AdminRoute>
                  <div className="text-center py-5">
                    <h2 className="h4 fw-bold text-dark mb-3">Calendar</h2>
                    <p className="text-muted">Calendar view coming soon...</p>
                  </div>
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
