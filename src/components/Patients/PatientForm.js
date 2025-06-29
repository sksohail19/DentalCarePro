import React, { useState } from 'react';
import { Save, X } from 'lucide-react';
import { addPatient, updatePatient } from '../../utils/storage';

const PatientForm = ({ patient, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: patient?.firstName || '',
    lastName: patient?.lastName || '',
    dateOfBirth: patient?.dateOfBirth || '',
    email: patient?.email || '',
    phone: patient?.phone || '',
    address: patient?.address || '',
    emergencyContact: patient?.emergencyContact || '',
    emergencyPhone: patient?.emergencyPhone || '',
    medicalHistory: patient?.medicalHistory || '',
    allergies: patient?.allergies || '',
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const patientData = {
      id: patient?.id || `p${Date.now()}`,
      ...formData,
      createdAt: patient?.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    if (patient) {
      updatePatient(patient.id, patientData);
    } else {
      addPatient(patientData);
    }

    onClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="mb-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h3 fw-bold text-dark mb-0">{patient ? 'Edit Patient' : 'Add New Patient'}</h1>
        <button onClick={onClose} className="btn btn-link text-secondary p-0">
          <X size={24} />
        </button>
      </div>

      <div className="card shadow-sm border-0">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            {/* Personal Information */}
            <h5 className="fw-bold mb-3">Personal Information</h5>
            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <label htmlFor="firstName" className="form-label">First Name *</label>
                <input
                  type="text"
                  className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
              </div>

              <div className="col-md-6">
                <label htmlFor="lastName" className="form-label">Last Name *</label>
                <input
                  type="text"
                  className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
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

              <div className="col-md-6">
                <label htmlFor="email" className="form-label">Email *</label>
                <input
                  type="email"
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>

              <div className="col-md-6">
                <label htmlFor="phone" className="form-label">Phone Number *</label>
                <input
                  type="tel"
                  className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
              </div>

              <div className="col-12">
                <label htmlFor="address" className="form-label">Address *</label>
                <input
                  type="text"
                  className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
                {errors.address && <div className="invalid-feedback">{errors.address}</div>}
              </div>
            </div>

            {/* Emergency Contact */}
            <h5 className="fw-bold mb-3">Emergency Contact</h5>
            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <label htmlFor="emergencyContact" className="form-label">Contact Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="emergencyContact"
                  name="emergencyContact"
                  value={formData.emergencyContact}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="emergencyPhone" className="form-label">Contact Phone</label>
                <input
                  type="tel"
                  className="form-control"
                  id="emergencyPhone"
                  name="emergencyPhone"
                  value={formData.emergencyPhone}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Medical Information */}
            <h5 className="fw-bold mb-3">Medical Information</h5>
            <div className="mb-4">
              <label htmlFor="medicalHistory" className="form-label">Medical History</label>
              <textarea
                className="form-control"
                id="medicalHistory"
                name="medicalHistory"
                rows={3}
                value={formData.medicalHistory}
                onChange={handleChange}
                placeholder="Previous conditions, surgeries, medications..."
              />
            </div>

            <div className="mb-4">
              <label htmlFor="allergies" className="form-label">Allergies</label>
              <textarea
                className="form-control"
                id="allergies"
                name="allergies"
                rows={2}
                value={formData.allergies}
                onChange={handleChange}
                placeholder="Known allergies to medications, materials, etc."
              />
            </div>

            {/* Form Actions */}
            <div className="d-flex justify-content-end gap-2 pt-3 border-top">
              <button
                type="button"
                onClick={onClose}
                className="btn btn-secondary"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-primary d-flex align-items-center"
              >
                <Save size={16} className="me-2" />
                {patient ? 'Update Patient' : 'Add Patient'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PatientForm;
