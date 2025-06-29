import React, { useState, useEffect } from 'react';
import { Calendar, Clock, FileText, DollarSign, Phone, Mail, User } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { getPatients, getAppointments } from '../../utils/storage';

const PatientDashboard = () => {
  const { user } = useAuth();
  const [patient, setPatient] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const [upcomingAppointments, setUpcomingAppointments] = useState([]);
  const [pastAppointments, setPastAppointments] = useState([]);

  useEffect(() => {
    if (user?.patientId) {
      const patients = getPatients();
      const foundPatient = patients.find(p => p.id === user.patientId);
      setPatient(foundPatient || null);

      const allAppointments = getAppointments();
      const patientAppointments = allAppointments.filter(a => a.patientId === user.patientId);
      setAppointments(patientAppointments);

      const now = new Date();
      const upcoming = patientAppointments
        .filter(a => new Date(a.appointmentDate) >= now)
        .sort((a, b) => new Date(a.appointmentDate) - new Date(b.appointmentDate));

      const past = patientAppointments
        .filter(a => new Date(a.appointmentDate) < now || a.status === 'completed')
        .sort((a, b) => new Date(b.appointmentDate) - new Date(a.appointmentDate));

      setUpcomingAppointments(upcoming);
      setPastAppointments(past);
    }
  }, [user]);

  if (!patient) {
    return (
      <div className="d-flex align-items-center justify-content-center min-vh-50">
        <div className="text-center">
          <User size={48} className="text-secondary mb-3" />
          <p className="text-muted">Patient information not found</p>
        </div>
      </div>
    );
  }

  const totalCost = pastAppointments.reduce((sum, apt) => sum + (apt.cost || 0), 0);

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h3 fw-bold">My Dashboard</h1>
        <small className="text-muted">Welcome back, {patient.firstName}!</small>
      </div>

      {/* Personal Info Card */}
      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <div className="d-flex align-items-center mb-3">
            <User size={24} className="text-primary me-2" />
            <h5 className="mb-0 fw-bold">Personal Information</h5>
          </div>
          <div className="row g-4">
            <div className="col-12 col-md-6">
              <p className="small text-muted mb-1">Full Name</p>
              <p className="fw-medium">{patient.firstName} {patient.lastName}</p>
            </div>
            <div className="col-12 col-md-6">
              <p className="small text-muted mb-1">Date of Birth</p>
              <p className="fw-medium">{new Date(patient.dateOfBirth).toLocaleDateString()}</p>
            </div>
            <div className="col-12 col-md-6">
              <p className="small text-muted mb-1">Email</p>
              <p className="fw-medium d-flex align-items-center">
                <Mail size={16} className="me-1" />
                {patient.email}
              </p>
            </div>
            <div className="col-12 col-md-6">
              <p className="small text-muted mb-1">Phone</p>
              <p className="fw-medium d-flex align-items-center">
                <Phone size={16} className="me-1" />
                {patient.phone}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="row g-4 mb-4">
        <div className="col-12 col-md-4">
          <div className="card shadow-sm h-100">
            <div className="card-body d-flex align-items-center">
              <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center me-3" style={{ width: 50, height: 50 }}>
                <Calendar size={24} />
              </div>
              <div>
                <p className="small text-muted mb-1">Total Appointments</p>
                <h5 className="fw-bold mb-0">{appointments.length}</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="card shadow-sm h-100">
            <div className="card-body d-flex align-items-center">
              <div className="rounded-circle bg-success text-white d-flex align-items-center justify-content-center me-3" style={{ width: 50, height: 50 }}>
                <Clock size={24} />
              </div>
              <div>
                <p className="small text-muted mb-1">Upcoming</p>
                <h5 className="fw-bold mb-0">{upcomingAppointments.length}</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="card shadow-sm h-100">
            <div className="card-body d-flex align-items-center">
              <div className="rounded-circle bg-purple text-white d-flex align-items-center justify-content-center me-3" style={{ width: 50, height: 50 }}>
                <DollarSign size={24} />
              </div>
              <div>
                <p className="small text-muted mb-1">Total Paid</p>
                <h5 className="fw-bold mb-0">${totalCost.toLocaleString()}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-4">
        {/* Upcoming Appointments */}
        <div className="col-12 col-lg-6">
          <div className="card shadow-sm h-100">
            <div className="card-header bg-white d-flex align-items-center">
              <Clock className="text-primary me-2" size={20} />
              <h5 className="mb-0 fw-bold">Upcoming Appointments</h5>
            </div>
            <div className="card-body">
              {upcomingAppointments.length === 0 ? (
                <p className="text-center text-muted py-3">No upcoming appointments</p>
              ) : (
                <div className="d-flex flex-column gap-3">
                  {upcomingAppointments.map(appt => (
                    <div key={appt.id} className="border rounded p-3 bg-light">
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <h6 className="fw-bold mb-0">{appt.title}</h6>
                        <span className="badge bg-primary text-capitalize">{appt.status}</span>
                      </div>
                      <p className="small mb-2">{appt.description}</p>
                      <small className="text-muted d-flex align-items-center">
                        <Calendar size={16} className="me-1" />
                        {new Date(appt.appointmentDate).toLocaleDateString()} at {new Date(appt.appointmentDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </small>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Treatment History */}
        <div className="col-12 col-lg-6">
          <div className="card shadow-sm h-100">
            <div className="card-header bg-white d-flex align-items-center">
              <FileText className="text-success me-2" size={20} />
              <h5 className="mb-0 fw-bold">Treatment History</h5>
            </div>
            <div className="card-body overflow-auto" style={{ maxHeight: 400 }}>
              {pastAppointments.length === 0 ? (
                <p className="text-center text-muted py-3">No treatment history</p>
              ) : (
                <div className="d-flex flex-column gap-3">
                  {pastAppointments.map(appt => (
                    <div key={appt.id} className="border rounded p-3 bg-light">
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <h6 className="fw-bold mb-0">{appt.title}</h6>
                        {appt.cost && (
                          <span className="small fw-medium text-success">${appt.cost}</span>
                        )}
                      </div>
                      {appt.treatment && <p className="small mb-2">{appt.treatment}</p>}
                      <small className="text-muted d-block mb-2">{new Date(appt.appointmentDate).toLocaleDateString()}</small>
                      {appt.files?.length > 0 && (
                        <div>
                          <small className="text-muted d-block mb-1">Attachments:</small>
                          <div className="d-flex flex-wrap gap-2">
                            {appt.files.map(file => (
                              <span key={file.id} className="badge bg-primary">{file.name}</span>
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
