import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Eye, EyeOff, User, Lock } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }

    const success = login(email, password);
    if (!success) {
      setError('Invalid email or password');
    }
  };

  const handleDemoLogin = (role) => {
    if (role === 'admin') {
      setEmail('admin@dentalcenter.com');
      setPassword('admin123');
    } else {
      setEmail('patient@example.com');
      setPassword('patient123');
    }
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light py-5">
      <div className="container" style={{ maxWidth: '420px' }}>
        <div className="text-center mb-4">
          <h2 className="fw-bold text-dark mb-2">DentalCare Pro</h2>
          <p className="text-muted">Management Dashboard</p>
        </div>

        <div className="card shadow-sm">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              {error && (
                <div className="alert alert-danger small">{error}</div>
              )}

              <div className="mb-3 position-relative">
                <label htmlFor="email" className="form-label">Email Address</label>
                <div className="position-absolute top-50 start-0 translate-middle-y ms-2 text-muted">
                  <User size={18} />
                </div>
                <input
                  id="email"
                  type="email"
                  className="form-control ps-5"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-3 position-relative">
                <label htmlFor="password" className="form-label">Password</label>
                <div className="position-absolute top-50 start-0 translate-middle-y ms-2 text-muted">
                  <Lock size={18} />
                </div>
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  className="form-control ps-5 pe-5"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="btn btn-link position-absolute top-50 end-0 translate-middle-y me-2 p-0 text-muted"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Sign In
              </button>
            </form>

            <div className="my-4 text-center">
              <div className="d-flex align-items-center">
                <hr className="flex-grow-1" />
                <span className="mx-2 text-muted small">Demo Accounts</span>
                <hr className="flex-grow-1" />
              </div>
            </div>

            <div className="d-grid gap-2">
              <button
                type="button"
                onClick={() => handleDemoLogin('admin')}
                className="btn btn-outline-secondary"
              >
                Admin Demo
              </button>
              <button
                type="button"
                onClick={() => handleDemoLogin('patient')}
                className="btn btn-outline-secondary"
              >
                Patient Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
