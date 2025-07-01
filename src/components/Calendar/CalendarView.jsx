import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import { getAppointments, getPatients } from '../../utils/storage';
import AppointmentForm from '../Appointments/AppointmentForm';
import './calendar.css';

const CalendarView = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [view, setView] = useState('month');
  const [appointments, setAppointments] = useState([]);
  const [patients, setPatients] = useState([]);
  const [calendarEvents, setCalendarEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    generateCalendarEvents();
  }, [appointments, patients]);

  const loadData = () => {
    const allAppointments = getAppointments();
    const allPatients = getPatients();
    setAppointments(allAppointments);
    setPatients(allPatients);
  };

  const generateCalendarEvents = () => {
    const events = appointments.map(appointment => {
      const patient = patients.find(p => p.id === appointment.patientId);
      const appointmentDate = new Date(appointment.appointmentDate);
      return {
        id: appointment.id,
        title: appointment.title,
        date: appointmentDate.toISOString().split('T')[0],
        time: appointmentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        patientName: patient ? `${patient.firstName} ${patient.lastName}` : 'Unknown Patient',
        status: appointment.status,
      };
    });
    setCalendarEvents(events);
  };

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    const days = [];
    for (let i = 0; i < startingDayOfWeek; i++) days.push(null);
    for (let day = 1; day <= daysInMonth; day++) days.push(new Date(year, month, day));
    return days;
  };

  const getWeekDays = (date) => {
    const startOfWeek = new Date(date);
    const day = startOfWeek.getDay();
    const diff = startOfWeek.getDate() - day;
    startOfWeek.setDate(diff);
    const days = [];
    for (let i = 0; i < 7; i++) {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + i);
      days.push(day);
    }
    return days;
  };

  const getEventsForDate = (date) => {
    const dateString = date.toISOString().split('T')[0];
    return calendarEvents.filter(event => event.date === dateString);
  };

  const navigateMonth = (direction) => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + (direction === 'next' ? 1 : -1));
      return newDate;
    });
  };

  const navigateWeek = (direction) => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      newDate.setDate(prev.getDate() + (direction === 'next' ? 7 : -7));
      return newDate;
    });
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
    const events = getEventsForDate(date);
    if (events.length === 1) {
      const appointment = appointments.find(a => a.id === events[0].id);
      if (appointment) {
        setSelectedAppointment(appointment);
        setShowForm(true);
      }
    }
  };

  const handleNewAppointment = (date) => {
    setSelectedDate(date || null);
    setSelectedAppointment(null);
    setShowForm(true);
  };

  const handleFormClose = () => {
    setShowForm(false);
    setSelectedAppointment(null);
    setSelectedDate(null);
    loadData();
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'scheduled': return 'status-scheduled';
      case 'in-progress': return 'status-inprogress';
      case 'completed': return 'status-completed';
      case 'cancelled': return 'status-cancelled';
      case 'pending-approval': return 'status-pending';
      default: return 'status-unknown';
    }
  };

  if (showForm) {
    const preSelectedDate = selectedDate ? selectedDate.toISOString().slice(0, 16) : '';
    const appointmentWithDate = selectedAppointment ? {
      ...selectedAppointment,
      appointmentDate: selectedAppointment.appointmentDate || preSelectedDate
    } : null;
    return (
      <AppointmentForm
        appointment={appointmentWithDate}
        patients={patients}
        onClose={handleFormClose}
      />
    );
  }

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <h1 className="calendar-title">Calendar</h1>
        <div className="calendar-controls">
          <div className="view-toggle">
            <button
              onClick={() => setView('month')}
              className={view === 'month' ? 'toggle-btn active' : 'toggle-btn'}
            >Month</button>
            <button
              onClick={() => setView('week')}
              className={view === 'week' ? 'toggle-btn active' : 'toggle-btn'}
            >Week</button>
          </div>
          <button className="new-appt-btn" onClick={() => handleNewAppointment()}>
            <Plus className="icon" /> New Appointment
          </button>
        </div>
      </div>

      <div className="calendar-card">
        <div className="calendar-nav">
          <div className="nav-left">
            <button onClick={() => view === 'month' ? navigateMonth('prev') : navigateWeek('prev')}><ChevronLeft className="icon" /></button>
            <h2>{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}</h2>
            <button onClick={() => view === 'month' ? navigateMonth('next') : navigateWeek('next')}><ChevronRight className="icon" /></button>
          </div>
          <button className="today-btn" onClick={() => setCurrentDate(new Date())}>Today</button>
        </div>

        <div className="calendar-body">
          {view === 'month' ? (
            <div className="month-grid">
              {dayNames.map(day => (
                <div key={day} className="day-header">{day}</div>
              ))}
              {getDaysInMonth(currentDate).map((date, index) => {
                if (!date) return <div key={index} className="day-cell empty" />;
                const events = getEventsForDate(date);
                const isToday = date.toDateString() === new Date().toDateString();
                const isCurrentMonth = date.getMonth() === currentDate.getMonth();
                return (
                  <div
                    key={date.toISOString()}
                    className={`day-cell ${isCurrentMonth ? '' : 'outside-month'}`}
                    onClick={() => handleDateClick(date)}
                  >
                    <div className={`day-number ${isToday ? 'today' : ''}`}>{date.getDate()}</div>
                    <div className="events-list">
                      {events.slice(0, 3).map(event => (
                        <div
                          key={event.id}
                          className={`event-item ${getStatusColor(event.status)}`}
                          title={`${event.time} - ${event.patientName}: ${event.title}`}
                        >
                          {event.time} {event.title}
                        </div>
                      ))}
                      {events.length > 3 && (
                        <div className="more-events">+{events.length - 3} more</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="week-view">
              <div className="week-header">
                <div className="time-column">Time</div>
                {getWeekDays(currentDate).map(date => {
                  const isToday = date.toDateString() === new Date().toDateString();
                  return (
                    <div key={date.toISOString()} className="week-day">
                      <div>{dayNames[date.getDay()]}</div>
                      <div className={`week-date ${isToday ? 'today' : ''}`}>{date.getDate()}</div>
                    </div>
                  );
                })}
              </div>
              <div className="week-grid">
                <div className="time-column">
                  {Array.from({ length: 12 }, (_, i) => (
                    <div key={i} className="time-slot">{i + 8}:00</div>
                  ))}
                </div>
                {getWeekDays(currentDate).map(date => (
                  <div key={date.toISOString()} className="day-column">
                    {getEventsForDate(date).map(event => {
                      const eventTime = new Date(`${event.date}T${event.time}`);
                      const hour = eventTime.getHours();
                      const minute = eventTime.getMinutes();
                      const topPosition = ((hour - 8) * 48) + (minute * 0.8);
                      return (
                        <div
                          key={event.id}
                          className={`event-block ${getStatusColor(event.status)}`}
                          style={{ top: `${topPosition}px` }}
                          onClick={() => {
                            const appointment = appointments.find(a => a.id === event.id);
                            if (appointment) {
                              setSelectedAppointment(appointment);
                              setShowForm(true);
                            }
                          }}
                        >
                          <div>{event.title}</div>
                          <div>{event.patientName}</div>
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CalendarView;
