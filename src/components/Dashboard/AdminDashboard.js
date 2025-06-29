import React, { useState, useEffect } from 'react';
import { Users, Calendar, DollarSign, TrendingUp, Clock, CheckCircle } from 'lucide-react';
import { getPatients, getAppointments } from "../../utils/storage";

const AdminDashboard = () => {
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

    useEffect(() => {
        const patients = getPatients();
        const appointments = getAppointments();

        const completedAppts = appointments.filter(a => a.status === 'completed');
        const pendingAppts = appointments.filter(a => ['scheduled', 'in-progress'].includes(a.status));
        const totalRevenue = completedAppts.reduce((sum, a) => sum + (a.cost || 0), 0);

        const now = new Date();
        const currentMonth = now.getMonth();
        const currentYear = now.getFullYear();
        const monthlyRevenue = completedAppts
            .filter(a => {
                const date = new Date(a.appointmentDate);
                return date.getMonth() === currentMonth && date.getFullYear() === currentYear;
            })
            .reduce((sum, a) => sum + (a.cost || 0), 0);

        setStats({
            totalPatients: patients.length,
            totalAppointments: appointments.length,
            completedAppointments: completedAppts.length,
            pendingAppointments: pendingAppts.length,
            totalRevenue,
            monthlyRevenue,
        });

        const upcoming = appointments
            .filter(a => new Date(a.appointmentDate) >= now && a.status === 'scheduled')
            .sort((a, b) => new Date(a.appointmentDate) - new Date(b.appointmentDate))
            .slice(0, 10)
            .map(appointment => {
                const patient = patients.find(p => p.id === appointment.patientId);
                return {
                    ...appointment,
                    patientName: patient ? `${patient.firstName} ${patient.lastName}` : 'Unknown Patient'
                };
            });
        setUpcomingAppointments(upcoming);

        const recent = [...patients]
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            .slice(0, 5);
        setRecentPatients(recent);
    }, []);

    const statCards = [
        {
            title: 'Total Patients',
            value: stats.totalPatients,
            icon: Users,
            bg: 'bg-primary',
            change: '+12%'
        },
        {
            title: 'Total Appointments',
            value: stats.totalAppointments,
            icon: Calendar,
            bg: 'bg-success',
            change: '+8%'
        },
        {
            title: 'Monthly Revenue',
            value: `$${stats.monthlyRevenue.toLocaleString()}`,
            icon: DollarSign,
            bg: 'bg-purple',
            change: '+15%'
        },
        {
            title: 'Completion Rate',
            value: `${stats.totalAppointments > 0 ? Math.round((stats.completedAppointments / stats.totalAppointments) * 100) : 0}%`,
            icon: TrendingUp,
            bg: 'bg-warning',
            change: '+5%'
        }
    ];

    return (
        <div className="container py-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1 className="h3 fw-bold">Dashboard</h1>
                <small className="text-muted">
                    Last updated: {new Date().toLocaleString()}
                </small>
            </div>

            {/* Stat Cards */}
            <div className="row g-4 mb-4">
                {statCards.map((stat, idx) => {
                    const Icon = stat.icon;
                    return (
                        <div key={idx} className="col-12 col-md-6 col-lg-3">
                            <div className="card shadow-sm">
                                <div className="card-body d-flex align-items-center">
                                    <div className={`rounded-circle d-flex align-items-center justify-content-center me-3 ${stat.bg} text-white`} style={{ width: 50, height: 50 }}>
                                        <Icon size={24} />
                                    </div>
                                    <div>
                                        <p className="mb-1 text-muted small">{stat.title}</p>
                                        <h5 className="mb-0 fw-bold">{stat.value}</h5>
                                    </div>
                                </div>
                                <div className="card-footer small text-success">
                                    {stat.change} <span className="text-muted"> from last month</span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="row g-4 mb-4">
                {/* Upcoming Appointments */}
                <div className="col-12 col-lg-6">
                    <div className="card shadow-sm h-100">
                        <div className="card-header d-flex align-items-center bg-white">
                            <Clock className="me-2 text-primary" size={20} />
                            <h5 className="mb-0 fw-bold">Upcoming Appointments</h5>
                        </div>
                        <div className="card-body">
                            {upcomingAppointments.length === 0 ? (
                                <p className="text-center text-muted py-3">No upcoming appointments</p>
                            ) : (
                                <ul className="list-group list-group-flush">
                                    {upcomingAppointments.map(appt => (
                                        <li key={appt.id} className="list-group-item d-flex justify-content-between align-items-start">
                                            <div className="flex-grow-1">
                                                <div className="fw-bold">{appt.patientName}</div>
                                                <div className="small text-muted">{appt.title}</div>
                                                <div className="text-muted small">
                                                    {new Date(appt.appointmentDate).toLocaleDateString()} at {new Date(appt.appointmentDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                                </div>
                                            </div>
                                            <span className="badge bg-primary text-capitalize">{appt.status}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                </div>

                {/* Recent Patients */}
                <div className="col-12 col-lg-6">
                    <div className="card shadow-sm h-100">
                        <div className="card-header d-flex align-items-center bg-white">
                            <Users className="me-2 text-success" size={20} />
                            <h5 className="mb-0 fw-bold">Recent Patients</h5>
                        </div>
                        <div className="card-body">
                            {recentPatients.length === 0 ? (
                                <p className="text-center text-muted py-3">No patients found</p>
                            ) : (
                                <ul className="list-group list-group-flush">
                                    {recentPatients.map(patient => (
                                        <li key={patient.id} className="list-group-item d-flex align-items-center">
                                            <div className="rounded-circle d-flex align-items-center justify-content-center bg-success text-white me-3" style={{ width: 40, height: 40 }}>
                                                <Users size={16} />
                                            </div>
                                            <div>
                                                <div className="fw-bold">{patient.firstName} {patient.lastName}</div>
                                                <div className="small text-muted">{patient.email}</div>
                                                <div className="text-muted small">Joined {new Date(patient.createdAt).toLocaleDateString()}</div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="card shadow-sm">
                <div className="card-body">
                    <h5 className="fw-bold mb-4">Quick Actions</h5>
                    <div className="row g-3">
                        <div className="col-12 col-md-4">
                            <button className="btn btn-outline-secondary w-100 py-3 d-flex flex-column align-items-center justify-content-center">
                                <Users size={24} className="mb-2 text-secondary" />
                                <span className="small fw-medium">Add New Patient</span>
                            </button>
                        </div>
                        <div className="col-12 col-md-4">
                            <button className="btn btn-outline-success w-100 py-3 d-flex flex-column align-items-center justify-content-center">
                                <Calendar size={24} className="mb-2 text-success" />
                                <span className="small fw-medium">Schedule Appointment</span>
                            </button>
                        </div>
                        <div className="col-12 col-md-4">
                            <button className="btn btn-outline-primary w-100 py-3 d-flex flex-column align-items-center justify-content-center">
                                <CheckCircle size={24} className="mb-2 text-primary" />
                                <span className="small fw-medium">Complete Treatment</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;
