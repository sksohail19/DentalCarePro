import React, { useState, useEffect } from 'react';
import { Calendar, Clock, FileText, DollarSign, Phone, Mail, User, Plus } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { getPatients, getAppointments } from '../../utils/storage';
import AppointmentForm from '../Appointments/AppointmentForm';

const PatientDashboard = () => {
  const { user } = useAuth();
  const [patient, setPatient] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const [upcomingAppointments, setUpcomingAppointments] = useState([]);
  const [pastAppointments, setPastAppointments] = useState([]);
  const [showAppointmentForm, setShowAppointmentForm] = useState(false);

  useEffect(() => {
    if (user?.patientId) {
      loadData();
    }
  }, [user]);

  const loadData = () => {
    if (!user?.patientId) return;

    const patients = getPatients();
    const foundPatient = patients.find(p => p.id === user.patientId);
    setPatient(foundPatient || null);

    const allAppointments = getAppointments();
    const patientAppointments = allAppointments.filter(a => a.patientId === user.patientId);
    setAppointments(patientAppointments);

    const now = new Date();
    const upcoming = patientAppointments
      .filter(a => new Date(a.appointmentDate) >= now && a.status !== 'completed')
      .sort((a, b) => new Date(a.appointmentDate) - new Date(b.appointmentDate));

    const past = patientAppointments
      .filter(a => new Date(a.appointmentDate) < now || a.status === 'completed')
      .sort((a, b) => new Date(b.appointmentDate) - new Date(a.appointmentDate));

    setUpcomingAppointments(upcoming);
    setPastAppointments(past);
  };

  const handleFormClose = () => {
    setShowAppointmentForm(false);
    loadData();
  };

  if (showAppointmentForm) {
    return (
      <AppointmentForm
        appointment={null}
        patients={patient ? [patient] : []}
        onClose={handleFormClose}
        preSelectedPatientId={patient?.id}
      />
    );
  }

  if (!patient) {
    return (
      <div className="d-flex align-items-center justify-content-center min-vh-50">
        <div className="text-center">
          <User className="mb-3 text-secondary" size={48} />
          <p className="text-muted">Patient information not found</p>
        </div>
      </div>
    );
  }

  const totalCost = pastAppointments.reduce((sum, apt) => sum + (apt.cost || 0), 0);

  const getStatusColor = (status) => {
    switch (status) {
      case 'scheduled': return 'badge bg-primary';
      case 'in-progress': return 'badge bg-warning text-dark';
      case 'completed': return 'badge bg-success';
      case 'cancelled': return 'badge bg-danger';
      case 'pending-approval': return 'badge bg-orange';
      default: return 'badge bg-secondary';
    }
  };

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h3">My Dashboard</h1>
        <div className="d-flex align-items-center gap-3">
          <small className="text-muted">Welcome back, {patient.firstName}!</small>
          <button
            onClick={() => setShowAppointmentForm(true)}
            className="btn btn-primary btn-sm d-flex align-items-center"
          >
            <Plus className="me-2" size={16} />
            Request Appointment
          </button>
        </div>
      </div>

      {/* Patient Info Card */}
      <div className="card mb-4">
        <div className="card-header d-flex align-items-center">
          <User className="me-2 text-primary" />
          <h5 className="mb-0">Personal Information</h5>
        </div>
        <div className="card-body row g-4">
          <div className="col-md-6">
            <small className="text-muted">Full Name</small>
            <p className="fw-bold mb-0">{patient.firstName} {patient.lastName}</p>
          </div>
          <div className="col-md-6">
            <small className="text-muted">Date of Birth</small>
            <p className="fw-bold mb-0">{new Date(patient.dateOfBirth).toLocaleDateString()}</p>
          </div>
          <div className="col-md-6">
            <small className="text-muted">Email</small>
            <p className="fw-bold mb-0 d-flex align-items-center">
              <Mail className="me-2" size={16} />{patient.email}
            </p>
          </div>
          <div className="col-md-6">
            <small className="text-muted">Phone</small>
            <p className="fw-bold mb-0 d-flex align-items-center">
              <Phone className="me-2" size={16} />{patient.phone}
            </p>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="row g-4 mb-4">
        <div className="col-md-4">
          <div className="card text-center">
            <div className="card-body">
              <Calendar className="mb-2 text-primary" size={24} />
              <h6 className="text-muted">Total Appointments</h6>
              <h4 className="fw-bold">{appointments.length}</h4>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center">
            <div className="card-body">
              <Clock className="mb-2 text-success" size={24} />
              <h6 className="text-muted">Upcoming</h6>
              <h4 className="fw-bold">{upcomingAppointments.length}</h4>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center">
            <div className="card-body">
              <DollarSign className="mb-2 text-purple" size={24} />
              <h6 className="text-muted">Total Paid</h6>
              <h4 className="fw-bold">${totalCost.toLocaleString()}</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-4">
        {/* Upcoming Appointments */}
        <div className="col-lg-6">
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <Clock className="me-2 text-primary" />
                <h5 className="mb-0">Upcoming Appointments</h5>
              </div>
              <button
                onClick={() => setShowAppointmentForm(true)}
                className="btn btn-link p-0 text-decoration-none"
              >
                Request New
              </button>
            </div>
            <div className="card-body">
              {upcomingAppointments.length === 0 ? (
                <div className="text-center py-4">
                  <Calendar className="text-secondary mb-3" size={48} />
                  <p className="text-muted mb-3">No upcoming appointments</p>
                  <button
                    onClick={() => setShowAppointmentForm(true)}
                    className="btn btn-primary btn-sm d-flex align-items-center mx-auto"
                  >
                    <Plus className="me-2" size={16} /> Request Appointment
                  </button>
                </div>
              ) : (
                upcomingAppointments.map((appointment) => (
                  <div key={appointment.id} className="mb-3 p-3 border rounded bg-light">
                    <div className="d-flex justify-content-between align-items-start mb-1">
                      <h6 className="fw-bold mb-0">{appointment.title}</h6>
                      <span className={getStatusColor(appointment.status)}>
                        {appointment.status.replace('-', ' ')}
                      </span>
                    </div>
                    <p className="mb-1">{appointment.description}</p>
                    <small className="text-muted d-flex align-items-center">
                      <Calendar className="me-1" size={14} />
                      {new Date(appointment.appointmentDate).toLocaleDateString()} at{' '}
                      {new Date(appointment.appointmentDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </small>
                    {appointment.status === 'pending-approval' && (
                      <div className="mt-2 p-2 bg-warning bg-opacity-25 rounded text-warning">
                        <strong>Pending Approval:</strong> Your request is awaiting doctor confirmation.
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Treatment History */}
        <div className="col-lg-6">
          <div className="card">
            <div className="card-header d-flex align-items-center">
              <FileText className="me-2 text-success" />
              <h5 className="mb-0">Treatment History</h5>
            </div>
            <div className="card-body">
              {pastAppointments.length === 0 ? (
                <p className="text-muted text-center py-4">No treatment history</p>
              ) : (
                <div className="overflow-auto" style={{ maxHeight: '400px' }}>
                  {pastAppointments.map((appointment) => (
                    <div key={appointment.id} className="mb-3 p-3 border rounded bg-light">
                      <div className="d-flex justify-content-between align-items-start mb-1">
                        <h6 className="fw-bold mb-0">{appointment.title}</h6>
                        {appointment.cost && (
                          <span className="text-success fw-bold">${appointment.cost}</span>
                        )}
                      </div>
                      {appointment.treatment && <p className="mb-1">{appointment.treatment}</p>}
                      <small className="text-muted">
                        {new Date(appointment.appointmentDate).toLocaleDateString()}
                      </small>
                      {appointment.files && appointment.files.length > 0 && (
                        <div className="mt-2">
                          <small className="text-muted">Attachments:</small>
                          <div className="d-flex flex-wrap gap-2 mt-1">
                            {appointment.files.map((file) => (
                              <span key={file.id} className="badge bg-primary text-white">
                                {file.name}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
