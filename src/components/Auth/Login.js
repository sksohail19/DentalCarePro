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
    <div className="container d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div className="card shadow p-4" style={{ maxWidth: '400px', width: '100%' }}>
        <div className="text-center mb-4">
          <h2 className="fw-bold text-primary">DentalCare Pro</h2>
          <p className="text-muted">Management Dashboard</p>
        </div>

        <form onSubmit={handleSubmit}>
          {error && (
            <div className="alert alert-danger py-2 small mb-3">{error}</div>
          )}

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email Address</label>
            <div className="input-group">
              <span className="input-group-text">
                <User size={16} />
              </span>
              <input
                id="email"
                name="email"
                type="email"
                className="form-control"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <div className="input-group">
              <span className="input-group-text">
                <Lock size={16} />
              </span>
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                className="form-control"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => setShowPassword(!showPassword)}
                tabIndex={-1} // exclude from tab order
              >
                {showPassword ? (
                  <EyeOff size={16} />
                ) : (
                  <Eye size={16} />
                )}
              </button>
            </div>
          </div>

          <div className="d-grid mb-4">
            <button type="submit" className="btn btn-primary">
              Sign In
            </button>
          </div>
        </form>

        <div className="text-center my-3 text-muted small">
          — Demo Accounts —
        </div>

        <div className="d-flex gap-2">
          <button
            type="button"
            className="btn btn-outline-secondary flex-fill"
            onClick={() => handleDemoLogin('admin')}
          >
            Admin Demo
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary flex-fill"
            onClick={() => handleDemoLogin('patient')}
          >
            Patient Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
