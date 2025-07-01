import React, { useState, useEffect } from 'react';
import { Calendar, Search, Plus, Edit, Trash2, Eye, CheckCircle, X, User } from 'lucide-react';
import { getAppointments, getPatients, deleteAppointment, updateAppointment } from '../../utils/storage';
import AppointmentForm from './AppointmentForm';

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);
  const [filteredAppointments, setFilteredAppointments] = useState([]);
  const [patients, setPatients] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [showForm, setShowForm] = useState(false);
  const [editingAppointment, setEditingAppointment] = useState(null);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    let filtered = appointments;

    if (searchTerm) {
      filtered = filtered.filter(appointment =>
        appointment.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        appointment.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        appointment.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (statusFilter !== 'all') {
      filtered = filtered.filter(appointment => appointment.status === statusFilter);
    }

    setFilteredAppointments(filtered);
  }, [appointments, searchTerm, statusFilter]);

  const loadData = () => {
    const allPatients = getPatients();
    const allAppointments = getAppointments();
    setPatients(allPatients);

    const appointmentsWithPatients = allAppointments.map(appointment => {
      const patient = allPatients.find(p => p.id === appointment.patientId);
      return {
        ...appointment,
        patientName: patient ? `${patient.firstName} ${patient.lastName}` : 'Unknown Patient'
      };
    }).sort((a, b) => new Date(b.appointmentDate) - new Date(a.appointmentDate));

    setAppointments(appointmentsWithPatients);
  };

  const handleDelete = (appointmentId) => {
    if (window.confirm('Are you sure you want to delete this appointment?')) {
      deleteAppointment(appointmentId);
      loadData();
    }
  };

  const handleEdit = (appointment) => {
    setEditingAppointment(appointment);
    setShowForm(true);
  };

  const handleFormClose = () => {
    setShowForm(false);
    setEditingAppointment(null);
    loadData();
  };

  const handleStatusUpdate = (appointmentId, newStatus) => {
    const updates = { status: newStatus };
    if (newStatus === 'completed') updates.updatedAt = new Date().toISOString();
    updateAppointment(appointmentId, updates);
    loadData();
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'scheduled': return 'badge bg-primary';
      case 'in-progress': return 'badge bg-warning text-dark';
      case 'completed': return 'badge bg-success';
      case 'cancelled': return 'badge bg-danger';
      case 'pending-approval': return 'badge bg-secondary';
      default: return 'badge bg-light text-dark';
    }
  };

  if (showForm) {
    return (
      <AppointmentForm
        appointment={editingAppointment}
        patients={patients}
        onClose={handleFormClose}
      />
    );
  }

  if (selectedAppointment) {
    return (
      <div className="container py-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <button onClick={() => setSelectedAppointment(null)} className="btn btn-link">
            ← Back to Appointments
          </button>
          <button onClick={() => handleEdit(selectedAppointment)} className="btn btn-outline-primary">
            <Edit size={16} className="me-1" />
            Edit
          </button>
        </div>

        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between mb-3">
              <h2>{selectedAppointment.title}</h2>
              <span className={getStatusBadge(selectedAppointment.status)}>
                {selectedAppointment.status.replace('-', ' ')}
              </span>
            </div>
            <p><strong>Patient:</strong> {selectedAppointment.patientName}</p>
            <p><strong>Date & Time:</strong> {new Date(selectedAppointment.appointmentDate).toLocaleString()}</p>
            <p><strong>Description:</strong> {selectedAppointment.description}</p>
            <p><strong>Comments:</strong> {selectedAppointment.comments || 'No comments'}</p>
            <p><strong>Treatment:</strong> {selectedAppointment.treatment || 'Not specified'}</p>
            <p><strong>Cost:</strong> {selectedAppointment.cost ? `$${selectedAppointment.cost}` : 'Not specified'}</p>
            <p><strong>Next Appointment:</strong> {selectedAppointment.nextAppointmentDate ? new Date(selectedAppointment.nextAppointmentDate).toLocaleDateString() : 'Not scheduled'}</p>

            {selectedAppointment.files && selectedAppointment.files.length > 0 && (
              <div className="mt-4">
                <h5>Attachments:</h5>
                <ul className="list-group">
                  {selectedAppointment.files.map(file => (
                    <li key={file.id} className="list-group-item d-flex justify-content-between align-items-center">
                      {file.name}
                      <small className="text-muted">{new Date(file.uploadedAt).toLocaleDateString()}</small>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {selectedAppointment.status === 'pending-approval' && (
              <div className="alert alert-warning mt-4 d-flex justify-content-between align-items-center">
                <div>
                  <h6>Pending Approval</h6>
                  <p>This appointment was requested by the patient and needs approval.</p>
                </div>
                <div>
                  <button
                    onClick={() => handleStatusUpdate(selectedAppointment.id, 'scheduled')}
                    className="btn btn-success me-2"
                  >
                    <CheckCircle size={16} className="me-1" /> Approve
                  </button>
                  <button
                    onClick={() => handleStatusUpdate(selectedAppointment.id, 'cancelled')}
                    className="btn btn-danger"
                  >
                    <X size={16} className="me-1" /> Decline
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Appointments</h1>
        <button onClick={() => setShowForm(true)} className="btn btn-primary">
          <Plus size={16} className="me-2" />
          Schedule Appointment
        </button>
      </div>

      <div className="card mb-4">
        <div className="card-body row g-3">
          <div className="col-md-6 position-relative">
            <input
              type="text"
              className="form-control ps-5"
              placeholder="Search appointments..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" size={18} />
          </div>
          <div className="col-md-6">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="form-select"
            >
              <option value="all">All Statuses</option>
              <option value="pending-approval">Pending Approval</option>
              <option value="scheduled">Scheduled</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
        </div>
      </div>

      <div className="card">
        {filteredAppointments.length === 0 ? (
          <div className="card-body text-center">
            <Calendar size={48} className="text-muted mb-3" />
            <p className="text-muted mb-4">
              {searchTerm || statusFilter !== 'all' ? 'No appointments match your criteria.' : 'No appointments scheduled.'}
            </p>
            <button onClick={() => setShowForm(true)} className="btn btn-primary">
              <Plus size={16} className="me-2" /> Schedule First Appointment
            </button>
          </div>
        ) : (
          <div className="table-responsive">
            <table className="table table-hover table-bordered mb-0">
              <thead className="table-light">
                <tr>
                  <th>Patient & Appointment</th>
                  <th>Date & Time</th>
                  <th>Status</th>
                  <th>Cost</th>
                  <th className="text-end">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredAppointments.map((appointment) => (
                  <tr key={appointment.id}>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="bg-primary bg-opacity-10 rounded-circle d-flex justify-content-center align-items-center" style={{ width: '40px', height: '40px' }}>
                          <User size={20} className="text-primary" />
                        </div>
                        <div className="ms-3">
                          <div>{appointment.patientName}</div>
                          <small className="text-muted">{appointment.title}</small>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div>{new Date(appointment.appointmentDate).toLocaleDateString()}</div>
                      <small className="text-muted">{new Date(appointment.appointmentDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</small>
                    </td>
                    <td>
                      <span className={getStatusBadge(appointment.status)}>
                        {appointment.status.replace('-', ' ')}
                      </span>
                    </td>
                    <td>{appointment.cost ? `$${appointment.cost}` : '-'}</td>
                    <td className="text-end">
                      <div className="btn-group btn-group-sm">
                        <button onClick={() => setSelectedAppointment(appointment)} className="btn btn-outline-primary" title="View">
                          <Eye size={16} />
                        </button>
                        <button onClick={() => handleEdit(appointment)} className="btn btn-outline-secondary" title="Edit">
                          <Edit size={16} />
                        </button>
                        {appointment.status === 'scheduled' && (
                          <button onClick={() => handleStatusUpdate(appointment.id, 'completed')} className="btn btn-outline-success" title="Mark as Completed">
                            <CheckCircle size={16} />
                          </button>
                        )}
                        <button onClick={() => handleDelete(appointment.id)} className="btn btn-outline-danger" title="Delete">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppointmentList;
