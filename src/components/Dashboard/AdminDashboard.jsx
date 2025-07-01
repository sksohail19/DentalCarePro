// AdminDashboard.jsx
import React, { useState, useEffect } from 'react';
import { Users, Calendar, DollarSign, TrendingUp, Clock, CheckCircle } from 'lucide-react';
import { getPatients, getAppointments } from '../../utils/storage';
import { useNavigate } from 'react-router-dom';
import AppointmentForm from '../Appointments/AppointmentForm';
import PatientForm from '../Patients/PatientForm';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    totalPatients: 0,
    totalAppointments: 0,
    completedAppointments: 0,
    pendingAppointments: 0,
    totalRevenue: 0,
    monthlyRevenue: 0,
  });
  const [upcomingAppointments, setUpcomingAppointments] = useState([]);
  const [recentPatients, setRecentPatients] = useState([]);
  const [patients, setPatients] = useState([]);
  const [showAppointmentForm, setShowAppointmentForm] = useState(false);
  const [showPatientForm, setShowPatientForm] = useState(false);
  const [showCompleteTreatment, setShowCompleteTreatment] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    const allPatients = getPatients();
    const appointments = getAppointments();
    setPatients(allPatients);

    const completedAppts = appointments.filter(a => a.status === 'completed');
    const pendingAppts = appointments.filter(a => ['scheduled', 'in-progress', 'pending-approval'].includes(a.status));
    const totalRevenue = completedAppts.reduce((sum, a) => sum + (a.cost || 0), 0);
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    const monthlyRevenue = completedAppts
      .filter(a => {
        const date = new Date(a.appointmentDate);
        return date.getMonth() === currentMonth && date.getFullYear() === currentYear;
      })
      .reduce((sum, a) => sum + (a.cost || 0), 0);

    setStats({
      totalPatients: allPatients.length,
      totalAppointments: appointments.length,
      completedAppointments: completedAppts.length,
      pendingAppointments: pendingAppts.length,
      totalRevenue,
      monthlyRevenue,
    });

    const upcoming = appointments
      .filter(a => new Date(a.appointmentDate) >= new Date() && ['scheduled', 'pending-approval'].includes(a.status))
      .sort((a, b) => new Date(a.appointmentDate) - new Date(b.appointmentDate))
      .slice(0, 10)
      .map(a => {
        const patient = allPatients.find(p => p.id === a.patientId);
        return {
          ...a,
          patientName: patient ? `${patient.firstName} ${patient.lastName}` : 'Unknown Patient'
        };
      });

    setUpcomingAppointments(upcoming);
    setRecentPatients(allPatients.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 5));
  };

  const handleCompleteTreatment = () => {
    const nextAppointment = upcomingAppointments.find(a => a.status === 'scheduled');
    if (nextAppointment) {
      setSelectedAppointment(nextAppointment);
      setShowCompleteTreatment(true);
    } else {
      setShowAppointmentForm(true);
    }
  };

  const handleFormClose = () => {
    setShowAppointmentForm(false);
    setShowPatientForm(false);
    setShowCompleteTreatment(false);
    setSelectedAppointment(null);
    loadData();
  };

  if (showAppointmentForm) return <AppointmentForm appointment={null} patients={patients} onClose={handleFormClose} />;
  if (showPatientForm) return <PatientForm patient={null} onClose={handleFormClose} />;
  if (showCompleteTreatment && selectedAppointment)
    return <AppointmentForm appointment={{ ...selectedAppointment, status: 'completed' }} patients={patients} onClose={handleFormClose} />;

  const statCards = [
    { title: 'Total Patients', value: stats.totalPatients, icon: Users, variant: 'primary' },
    { title: 'Total Appointments', value: stats.totalAppointments, icon: Calendar, variant: 'success' },
    { title: 'Monthly Revenue', value: `$${stats.monthlyRevenue.toLocaleString()}`, icon: DollarSign, variant: 'info' },
    { title: 'Completion Rate', value: `${stats.totalAppointments > 0 ? Math.round((stats.completedAppointments / stats.totalAppointments) * 100) : 0}%`, icon: TrendingUp, variant: 'warning' }
  ];

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Dashboard</h2>
        <small className="text-muted">Last updated: {new Date().toLocaleString()}</small>
      </div>

      <div className="row g-4 mb-4">
        {statCards.map(({ title, value, icon: Icon, variant }, i) => (
          <div key={i} className="col-md-3">
            <div className="card border-0 shadow-sm">
              <div className="card-body d-flex align-items-center">
                <div className={`bg-${variant} text-white rounded-circle d-flex align-items-center justify-content-center`} style={{ width: 40, height: 40 }}>
                  <Icon size={20} />
                </div>
                <div className="ms-3">
                  <h6 className="mb-0 text-muted">{title}</h6>
                  <h4 className="mb-0">{value}</h4>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="row g-4">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="mb-0"><Clock size={18} className="me-2 text-primary" /> Upcoming Appointments</h5>
              <button onClick={() => navigate('/appointments')} className="btn btn-link">View All</button>
            </div>
            <div className="card-body">
              {upcomingAppointments.length === 0 ? <p className="text-muted">No upcoming appointments</p> : (
                <ul className="list-group">
                  {upcomingAppointments.map(a => (
                    <li key={a.id} className="list-group-item d-flex justify-content-between align-items-center">
                      <div>
                        <strong>{a.patientName}</strong><br />
                        <small>{a.title}</small><br />
                        <small className="text-muted">
                          {new Date(a.appointmentDate).toLocaleDateString()} at {new Date(a.appointmentDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </small>
                      </div>
                      <span className={`badge bg-${a.status === 'pending-approval' ? 'warning' : 'primary'} text-uppercase`}>{a.status.replace('-', ' ')}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="mb-0"><Users size={18} className="me-2 text-success" /> Recent Patients</h5>
              <button onClick={() => navigate('/patients')} className="btn btn-link">View All</button>
            </div>
            <div className="card-body">
              {recentPatients.length === 0 ? <p className="text-muted">No patients found</p> : (
                <ul className="list-group">
                  {recentPatients.map(p => (
                    <li key={p.id} className="list-group-item">
                      <strong>{p.firstName} {p.lastName}</strong><br />
                      <small className="text-muted">{p.email}</small><br />
                      <small className="text-muted">Joined {new Date(p.createdAt).toLocaleDateString()}</small>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="card mt-4">
        <div className="card-body">
          <h5 className="card-title mb-3">Quick Actions</h5>
          <div className="d-flex gap-3">
            <button className="btn btn-outline-primary flex-fill" onClick={() => setShowPatientForm(true)}>
              <Users className="me-2" /> Add New Patient
            </button>
            <button className="btn btn-outline-success flex-fill" onClick={() => setShowAppointmentForm(true)}>
              <Calendar className="me-2" /> Schedule Appointment
            </button>
            <button className="btn btn-outline-warning flex-fill" onClick={handleCompleteTreatment}>
              <CheckCircle className="me-2" /> Complete Treatment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;