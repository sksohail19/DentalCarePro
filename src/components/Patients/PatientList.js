import React, { useState, useEffect } from 'react';
import { Users, Search, Plus, Edit, Trash2, Eye } from 'lucide-react';
import { getPatients, deletePatient } from '../../utils/storage';
import PatientForm from './PatientForm';

const PatientList = () => {
  const [patients, setPatients] = useState([]);
  const [filteredPatients, setFilteredPatients] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editingPatient, setEditingPatient] = useState(null);
  const [selectedPatient, setSelectedPatient] = useState(null);

  useEffect(() => {
    loadPatients();
  }, []);

  useEffect(() => {
    const filtered = patients.filter(patient =>
      `${patient.firstName} ${patient.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.phone.includes(searchTerm)
    );
    setFilteredPatients(filtered);
  }, [patients, searchTerm]);

  const loadPatients = () => {
    const allPatients = getPatients();
    setPatients(allPatients);
  };

  const handleDelete = (patientId) => {
    if (window.confirm('Are you sure you want to delete this patient?')) {
      deletePatient(patientId);
      loadPatients();
    }
  };

  const handleEdit = (patient) => {
    setEditingPatient(patient);
    setShowForm(true);
  };

  const handleFormClose = () => {
    setShowForm(false);
    setEditingPatient(null);
    loadPatients();
  };

  if (showForm) {
    return (
      <PatientForm
        patient={editingPatient}
        onClose={handleFormClose}
      />
    );
  }

  if (selectedPatient) {
    return (
      <div className="mb-4">
        <button
          onClick={() => setSelectedPatient(null)}
          className="btn btn-link text-primary fw-medium mb-3 p-0"
        >
          ← Back to Patients
        </button>

        <div className="card shadow-sm">
          <div className="card-body">
            <div className="d-flex align-items-center mb-4">
              <Users className="me-2 text-primary" size={24} />
              <h2 className="h4 fw-bold mb-0">
                {selectedPatient.firstName} {selectedPatient.lastName}
              </h2>
            </div>

            <div className="row gy-4">
              <div className="col-md-6">
                <h5 className="fw-bold mb-3">Personal Information</h5>
                <div className="mb-2">
                  <small className="text-muted">Date of Birth</small>
                  <p className="mb-0 fw-medium">{new Date(selectedPatient.dateOfBirth).toLocaleDateString()}</p>
                </div>
                <div className="mb-2">
                  <small className="text-muted">Email</small>
                  <p className="mb-0 fw-medium">{selectedPatient.email}</p>
                </div>
                <div className="mb-2">
                  <small className="text-muted">Phone</small>
                  <p className="mb-0 fw-medium">{selectedPatient.phone}</p>
                </div>
                <div className="mb-2">
                  <small className="text-muted">Address</small>
                  <p className="mb-0 fw-medium">{selectedPatient.address}</p>
                </div>
              </div>

              <div className="col-md-6">
                <h5 className="fw-bold mb-3">Emergency Contact</h5>
                <div className="mb-2">
                  <small className="text-muted">Contact Name</small>
                  <p className="mb-0 fw-medium">{selectedPatient.emergencyContact}</p>
                </div>
                <div className="mb-2">
                  <small className="text-muted">Contact Phone</small>
                  <p className="mb-0 fw-medium">{selectedPatient.emergencyPhone}</p>
                </div>

                <h5 className="fw-bold mt-4 mb-3">Medical Information</h5>
                <div className="mb-2">
                  <small className="text-muted">Medical History</small>
                  <p className="mb-0 fw-medium">{selectedPatient.medicalHistory}</p>
                </div>
                <div className="mb-2">
                  <small className="text-muted">Allergies</small>
                  <p className="mb-0 fw-medium">{selectedPatient.allergies}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mb-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1 className="h3 fw-bold text-dark mb-0">Patients</h1>
        <button
          onClick={() => setShowForm(true)}
          className="btn btn-primary d-flex align-items-center"
        >
          <Plus size={16} className="me-2" />
          Add Patient
        </button>
      </div>

      {/* Search */}
      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <div className="input-group">
            <span className="input-group-text bg-white border-end-0">
              <Search className="text-muted" size={16} />
            </span>
            <input
              type="text"
              className="form-control border-start-0"
              placeholder="Search patients by name, email, or phone..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Patients List */}
      <div className="card shadow-sm">
        <div className="table-responsive">
          {filteredPatients.length === 0 ? (
            <div className="text-center p-5">
              <Users className="text-muted mb-3" size={48} />
              <p className="text-muted">
                {searchTerm ? 'No patients found matching your search.' : 'No patients found.'}
              </p>
              <button
                onClick={() => setShowForm(true)}
                className="btn btn-primary d-flex align-items-center"
              >
                <Plus size={16} className="me-2" />
                Add First Patient
              </button>
            </div>
          ) : (
            <table className="table table-hover mb-0">
              <thead className="table-light">
                <tr>
                  <th>Patient</th>
                  <th>Contact</th>
                  <th>Date of Birth</th>
                  <th>Registration Date</th>
                  <th className="text-end">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredPatients.map((patient) => (
                  <tr key={patient.id}>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center" style={{width: '40px', height: '40px'}}>
                          <Users className="text-primary" size={20} />
                        </div>
                        <div className="ms-3 fw-medium">
                          {patient.firstName} {patient.lastName}
                        </div>
                      </div>
                    </td>
                    <td>
                      <div>{patient.email}</div>
                      <div className="text-muted">{patient.phone}</div>
                    </td>
                    <td>{new Date(patient.dateOfBirth).toLocaleDateString()}</td>
                    <td>{new Date(patient.createdAt).toLocaleDateString()}</td>
                    <td className="text-end">
                      <div className="d-flex justify-content-end gap-2">
                        <button
                          onClick={() => setSelectedPatient(patient)}
                          className="btn btn-link p-0 text-primary"
                          title="View Details"
                        >
                          <Eye size={16} />
                        </button>
                        <button
                          onClick={() => handleEdit(patient)}
                          className="btn btn-link p-0 text-info"
                          title="Edit"
                        >
                          <Edit size={16} />
                        </button>
                        <button
                          onClick={() => handleDelete(patient.id)}
                          className="btn btn-link p-0 text-danger"
                          title="Delete"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default PatientList;
