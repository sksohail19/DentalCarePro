// Default data
const defaultUsers = [
  {
    id: '1',
    email: 'admin@dentalcenter.com',
    password: 'admin123',
    role: 'admin',
    name: 'Dr. Sarah Johnson'
  },
  {
    id: '2',
    email: 'patient@example.com',
    password: 'patient123',
    role: 'patient',
    name: 'John Smith',
    patientId: 'p1'
  }
];

const defaultPatients = [
  {
    id: 'p1',
    firstName: 'John',
    lastName: 'Smith',
    dateOfBirth: '1985-06-15',
    email: 'patient@example.com',
    phone: '+1-555-0123',
    address: '123 Main St, Anytown, USA',
    emergencyContact: 'Jane Smith',
    emergencyPhone: '+1-555-0124',
    medicalHistory: 'No significant medical history',
    allergies: 'None known',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'p2',
    firstName: 'Emily',
    lastName: 'Davis',
    dateOfBirth: '1992-03-22',
    email: 'emily.davis@email.com',
    phone: '+1-555-0125',
    address: '456 Oak Ave, Somewhere, USA',
    emergencyContact: 'Michael Davis',
    emergencyPhone: '+1-555-0126',
    medicalHistory: 'Diabetes Type 2',
    allergies: 'Penicillin',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];

const defaultAppointments = [
  {
    id: 'a1',
    patientId: 'p1',
    title: 'Regular Cleaning',
    description: 'Routine dental cleaning and examination',
    comments: 'Patient reports some sensitivity',
    appointmentDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'scheduled',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'a2',
    patientId: 'p2',
    title: 'Filling Replacement',
    description: 'Replace old amalgam filling',
    comments: 'Old filling showing wear',
    appointmentDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'scheduled',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];

// Storage keys

export const STORAGE_KEYS = {
  USERS: 'dental_users',
  PATIENTS: 'dental_patients',
  APPOINTMENTS: 'dental_appointments',
  CURRENT_USER: 'dental_current_user',
};


// Initialize storage if empty
export const initializeStorage = () => {
  if (!localStorage.getItem(STORAGE_KEYS.USERS)) {
    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(defaultUsers));
  }
  if (!localStorage.getItem(STORAGE_KEYS.PATIENTS)) {
    localStorage.setItem(STORAGE_KEYS.PATIENTS, JSON.stringify(defaultPatients));
  }
  if (!localStorage.getItem(STORAGE_KEYS.APPOINTMENTS)) {
    localStorage.setItem(STORAGE_KEYS.APPOINTMENTS, JSON.stringify(defaultAppointments));
  }
};

// User operations
export const getUsers = () => {
  const users = localStorage.getItem(STORAGE_KEYS.USERS);
  return users ? JSON.parse(users) : [];
};

export const getCurrentUser = () => {
  const user = localStorage.getItem(STORAGE_KEYS.CURRENT_USER);
  return user ? JSON.parse(user) : null;
};

export const setCurrentUser = (user) => {
  if (user) {
    localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(user));
  } else {
    localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
  }
};

// Patient operations
export const getPatients = () => {
  const patients = localStorage.getItem(STORAGE_KEYS.PATIENTS);
  return patients ? JSON.parse(patients) : [];
};

export const savePatients = (patients) => {
  localStorage.setItem(STORAGE_KEYS.PATIENTS, JSON.stringify(patients));
};

export const addPatient = (patient) => {
  const patients = getPatients();
  patients.push(patient);
  savePatients(patients);
};

export const updatePatient = (patientId, updates) => {
  const patients = getPatients();
  const index = patients.findIndex(p => p.id === patientId);
  if (index !== -1) {
    patients[index] = { ...patients[index], ...updates, updatedAt: new Date().toISOString() };
    savePatients(patients);
  }
};

export const deletePatient = (patientId) => {
  const patients = getPatients().filter(p => p.id !== patientId);
  savePatients(patients);
};

// Appointment operations
export const getAppointments = () => {
  const appointments = localStorage.getItem(STORAGE_KEYS.APPOINTMENTS);
  return appointments ? JSON.parse(appointments) : [];
};

export const saveAppointments = (appointments) => {
  localStorage.setItem(STORAGE_KEYS.APPOINTMENTS, JSON.stringify(appointments));
};

export const addAppointment = (appointment) => {
  const appointments = getAppointments();
  appointments.push(appointment);
  saveAppointments(appointments);
};

export const updateAppointment = (appointmentId, updates) => {
  const appointments = getAppointments();
  const index = appointments.findIndex(a => a.id === appointmentId);
  if (index !== -1) {
    appointments[index] = { ...appointments[index], ...updates, updatedAt: new Date().toISOString() };
    saveAppointments(appointments);
  }
};

export const deleteAppointment = (appointmentId) => {
  const appointments = getAppointments().filter(a => a.id !== appointmentId);
  saveAppointments(appointments);
};

export const getPatientAppointments = (patientId) => {
  const appointments = getAppointments();
  return appointments.filter(a => a.patientId === patientId);
};