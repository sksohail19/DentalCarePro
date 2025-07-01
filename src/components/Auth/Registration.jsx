import React, { useState } from 'react';
import { Eye, EyeOff, User, Mail, Lock, PhoneCallIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { getUsers, savePatients  } from '../../utils/storage';
const Registration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    phonenumber: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';
    if (!formData.phonenumber) newErrors.phonenumber = 'Phone number is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  if (!validateForm()) return;

  const users = getUsers();

  // Check if email already exists
  const existingUser = users.find(u => u.email.toLowerCase() === formData.email.toLowerCase());
  if (existingUser) {
    setErrors({ email: 'An account with this email already exists' });
    return;
  }

  const newUserId = `u${Date.now()}`;
  const newPatientId = `p${Date.now()}`;

  const newUser = {
    id: newUserId,
    email: formData.email,
    password: formData.password,  // In production, you'd hash this!
    role: 'patient',
    name: `${formData.firstName} ${formData.lastName}`,
    dataofbirth: formData.dateOfBirth,
    phonenumber: formData.phonenumber,
    patientId: newPatientId,
  };

  // Add user to dental_users
  const updatedUsers = [...users, newUser];
  localStorage.setItem('dental_users', JSON.stringify(updatedUsers));

  // Add corresponding patient record
  const newPatient = {
    id: newPatientId,
    firstName: formData.firstName,
    lastName: formData.lastName,
    dateOfBirth: formData.dateOfBirth, // Optional: you can extend your form to collect DOB
    email: formData.email,
    phone: formData.phonenumber,
    address: '',
    emergencyContact: '',
    emergencyPhone: '',
    medicalHistory: '',
    allergies: '',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  const patients = JSON.parse(localStorage.getItem('dental_patients') || '[]');
  const updatedPatients = [...patients, newPatient];
  localStorage.setItem('dental_patients', JSON.stringify(updatedPatients));

  console.log('Registration successful:', newUser);

  navigate('/login');
};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light py-5">
      <div className="container" style={{ maxWidth: '420px' }}>
        <div className="text-center mb-4">
          <h2 className="fw-bold text-dark mb-2">Create Account</h2>
          <p className="text-muted">Sign up to DentalCare Pro</p>
        </div>

        <div className="card shadow-sm">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              {/* First Name */}
              <div className="mb-3 position-relative">
                <label htmlFor="firstName" className="form-label">First Name *</label>
                <div className="position-absolute top-50 start-0 translate-middle-y ms-2 text-muted">
                  <User size={18} />
                </div>
                <input
                  type="text"
                  className={`form-control ps-5 ${errors.firstName ? 'is-invalid' : ''}`}
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First name"
                />
                {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
              </div>

              {/* Last Name */}
              <div className="mb-3 position-relative">
                <label htmlFor="lastName" className="form-label">Last Name *</label>
                <div className="position-absolute top-50 start-0 translate-middle-y ms-2 text-muted">
                  <User size={18} />
                </div>
                <input
                  type="text"
                  className={`form-control ps-5 ${errors.lastName ? 'is-invalid' : ''}`}
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last name"
                />
                {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
              </div>

              <div className="col-md-6">
                <label htmlFor="dateOfBirth" className="form-label">Date of Birth *</label>
                <input
                  type="date"
                  className={`form-control ${errors.dateOfBirth ? 'is-invalid' : ''}`}
                  id="dateOfBirth"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                />
                {errors.dateOfBirth && <div className="invalid-feedback">{errors.dateOfBirth}</div>}
              </div>

              <div className="col-md-6 mb-3 position-relative">
                <label htmlFor="phone" className="form-label">Phone Number *</label>
                <div className="position-absolute top-50 start-0 translate-middle-y ms-2 text-muted">
                  <PhoneCallIcon size={18} />
                </div>
                <input
                  type="tel"
                  className={`form-control ps-5 ${errors.phone ? 'is-invalid' : ''}`}
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
              </div>


              {/* Email */}
              <div className="mb-3 position-relative">
                <label htmlFor="email" className="form-label">Email *</label>
                <div className="position-absolute top-50 start-0 translate-middle-y ms-2 text-muted">
                  <Mail size={18} />
                </div>
                <input
                  type="email"
                  className={`form-control ps-5 ${errors.email ? 'is-invalid' : ''}`}
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>

              {/* Password */}
              <div className="mb-3 position-relative">
                <label htmlFor="password" className="form-label">Password *</label>
                <div className="position-absolute top-50 start-0 translate-middle-y ms-2 text-muted">
                  <Lock size={18} />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  className={`form-control ps-5 pe-5 ${errors.password ? 'is-invalid' : ''}`}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                />
                <button
                  type="button"
                  className="btn btn-link position-absolute top-50 end-0 translate-middle-y me-2 p-0 text-muted"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
                {errors.password && <div className="invalid-feedback">{errors.password}</div>}
              </div>

              {/* Confirm Password */}
              <div className="mb-4 position-relative">
                <label htmlFor="confirmPassword" className="form-label">Confirm Password *</label>
                <div className="position-absolute top-50 start-0 translate-middle-y ms-2 text-muted">
                  <Lock size={18} />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  className={`form-control ps-5 ${errors.confirmPassword ? 'is-invalid' : ''}`}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm password"
                />
                {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Sign Up
              </button>

              <div className="text-center mt-3">
                <small className="text-muted">
                  Already have an account? <a href="/login" className="text-decoration-none">Sign In</a>
                </small>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
