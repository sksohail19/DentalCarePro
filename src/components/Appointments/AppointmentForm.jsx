import React, { useState } from 'react';
import { Save, X, Upload, Trash2 } from 'lucide-react';
import { addAppointment, updateAppointment } from '../../utils/storage';

const AppointmentForm = ({ appointment, patients, onClose, preSelectedPatientId }) => {
  const [formData, setFormData] = useState({
    patientId: appointment?.patientId || preSelectedPatientId || '',
    title: appointment?.title || '',
    description: appointment?.description || '',
    comments: appointment?.comments || '',
    appointmentDate: appointment?.appointmentDate ? 
      new Date(appointment.appointmentDate).toISOString().slice(0, 16) : '',
    status: appointment?.status || 'scheduled',
    cost: appointment?.cost?.toString() || '',
    treatment: appointment?.treatment || '',
    nextAppointmentDate: appointment?.nextAppointmentDate ? 
      new Date(appointment.nextAppointmentDate).toISOString().slice(0, 16) : '',
  });

  const [files, setFiles] = useState(appointment?.files || []);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.patientId) newErrors.patientId = 'Patient is required';
    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    if (!formData.appointmentDate) newErrors.appointmentDate = 'Appointment date is required';

    if (formData.appointmentDate && !appointment) {
      const appointmentDateTime = new Date(formData.appointmentDate);
      const now = new Date();
      if (appointmentDateTime < now) {
        newErrors.appointmentDate = 'Appointment date cannot be in the past';
      }
    }

    if (formData.cost && isNaN(Number(formData.cost))) {
      newErrors.cost = 'Cost must be a valid number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const appointmentData = {
      id: appointment?.id || `a${Date.now()}`,
      patientId: formData.patientId,
      title: formData.title,
      description: formData.description,
      comments: formData.comments,
      appointmentDate: new Date(formData.appointmentDate).toISOString(),
      status: formData.status,
      cost: formData.cost ? Number(formData.cost) : undefined,
      treatment: formData.treatment,
      nextAppointmentDate: formData.nextAppointmentDate ? new Date(formData.nextAppointmentDate).toISOString() : undefined,
      files: files.length > 0 ? files : undefined,
      createdAt: appointment?.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      requestedBy: 'admin',
    };

    if (appointment) {
      updateAppointment(appointment.id, appointmentData);
    } else {
      addAppointment(appointmentData);
    }

    onClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleFileUpload = (e) => {
    const uploadedFiles = Array.from(e.target.files || []);
    uploadedFiles.forEach(file => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const newFile = {
          id: `f${Date.now()}_${Math.random()}`,
          name: file.name,
          type: file.type,
          data: event.target?.result,
          uploadedAt: new Date().toISOString(),
        };
        setFiles(prev => [...prev, newFile]);
      };
      reader.readAsDataURL(file);
    });
  };

  const removeFile = (fileId) => setFiles(prev => prev.filter(f => f.id !== fileId));

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h3">{appointment ? 'Edit Appointment' : 'Schedule New Appointment'}</h1>
        <button onClick={onClose} className="btn btn-link text-secondary p-0">
          <X size={24} />
        </button>
      </div>

      <div className="card shadow-sm">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <h5 className="mb-3">Appointment Details</h5>
            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <label className="form-label">Patient *</label>
                <select
                  className={`form-select ${errors.patientId ? 'is-invalid' : ''}`}
                  name="patientId"
                  value={formData.patientId}
                  onChange={handleChange}
                >
                  <option value="">Select a patient</option>
                  {patients.map(patient => (
                    <option key={patient.id} value={patient.id}>
                      {patient.firstName} {patient.lastName}
                    </option>
                  ))}
                </select>
                {errors.patientId && <div className="invalid-feedback">{errors.patientId}</div>}
              </div>

              <div className="col-md-6">
                <label className="form-label">Status</label>
                <select
                  className="form-select"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                >
                  <option value="scheduled">Scheduled</option>
                  <option value="in-progress">In Progress</option>
                  <option value="completed">Completed</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>

              <div className="col-md-6">
                <label className="form-label">Title *</label>
                <input
                  type="text"
                  className={`form-control ${errors.title ? 'is-invalid' : ''}`}
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="e.g., Regular Cleaning, Root Canal"
                />
                {errors.title && <div className="invalid-feedback">{errors.title}</div>}
              </div>

              <div className="col-md-6">
                <label className="form-label">Appointment Date & Time *</label>
                <input
                  type="datetime-local"
                  className={`form-control ${errors.appointmentDate ? 'is-invalid' : ''}`}
                  name="appointmentDate"
                  value={formData.appointmentDate}
                  onChange={handleChange}
                />
                {errors.appointmentDate && <div className="invalid-feedback">{errors.appointmentDate}</div>}
              </div>

              <div className="col-12">
                <label className="form-label">Description *</label>
                <textarea
                  className={`form-control ${errors.description ? 'is-invalid' : ''}`}
                  name="description"
                  rows={3}
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Describe the appointment purpose and procedures"
                />
                {errors.description && <div className="invalid-feedback">{errors.description}</div>}
              </div>

              <div className="col-12">
                <label className="form-label">Comments</label>
                <textarea
                  className="form-control"
                  name="comments"
                  rows={2}
                  value={formData.comments}
                  onChange={handleChange}
                  placeholder="Additional notes or comments"
                />
              </div>
            </div>

            <h5 className="mb-3">Treatment Information</h5>
            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <label className="form-label">Treatment Performed</label>
                <input
                  type="text"
                  className="form-control"
                  name="treatment"
                  value={formData.treatment}
                  onChange={handleChange}
                  placeholder="e.g., Dental cleaning, Filling, Crown"
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Cost ($)</label>
                <input
                  type="number"
                  className={`form-control ${errors.cost ? 'is-invalid' : ''}`}
                  name="cost"
                  value={formData.cost}
                  onChange={handleChange}
                  min="0"
                  step="0.01"
                  placeholder="0.00"
                />
                {errors.cost && <div className="invalid-feedback">{errors.cost}</div>}
              </div>

              <div className="col-12">
                <label className="form-label">Next Appointment Date</label>
                <input
                  type="datetime-local"
                  className="form-control"
                  name="nextAppointmentDate"
                  value={formData.nextAppointmentDate}
                  onChange={handleChange}
                />
              </div>
            </div>

            <h5 className="mb-3">Attachments</h5>
            <div className="mb-3">
              <label className="form-label">Upload Files (Images, Documents, etc.)</label>
              <input
                type="file"
                className="form-control"
                multiple
                accept="image/*,.pdf,.doc,.docx"
                onChange={handleFileUpload}
              />
            </div>

            {files.length > 0 && (
              <div className="mb-4">
                <h6>Uploaded Files</h6>
                <ul className="list-group">
                  {files.map(file => (
                    <li key={file.id} className="list-group-item d-flex justify-content-between align-items-center">
                      <div>
                        <p className="mb-0 fw-bold">{file.name}</p>
                        <small className="text-muted">
                          Uploaded {new Date(file.uploadedAt).toLocaleDateString()}
                        </small>
                      </div>
                      <button type="button" className="btn btn-sm btn-outline-danger" onClick={() => removeFile(file.id)}>
                        <Trash2 size={16} />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="d-flex justify-content-end gap-2 pt-3 border-top">
              <button type="button" className="btn btn-secondary" onClick={onClose}>Cancel</button>
              <button type="submit" className="btn btn-primary d-flex align-items-center">
                <Save size={16} className="me-2" />
                {appointment ? 'Update Appointment' : 'Schedule Appointment'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AppointmentForm;
