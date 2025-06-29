/**
 * @typedef {Object} User
 * @property {string} id
 * @property {string} email
 * @property {string} password
 * @property {'admin' | 'patient'} role
 * @property {string} name
 * @property {string} [patientId] // Only for patient users
 */

/**
 * @typedef {Object} Patient
 * @property {string} id
 * @property {string} firstName
 * @property {string} lastName
 * @property {string} dateOfBirth
 * @property {string} email
 * @property {string} phone
 * @property {string} address
 * @property {string} emergencyContact
 * @property {string} emergencyPhone
 * @property {string} medicalHistory
 * @property {string} allergies
 * @property {string} createdAt
 * @property {string} updatedAt
 */

/**
 * @typedef {Object} Appointment
 * @property {string} id
 * @property {string} patientId
 * @property {string} title
 * @property {string} description
 * @property {string} comments
 * @property {string} appointmentDate
 * @property {'scheduled' | 'in-progress' | 'completed' | 'cancelled'} status
 * @property {number} [cost]
 * @property {string} [treatment]
 * @property {string} [nextAppointmentDate]
 * @property {FileUpload[]} [files]
 * @property {string} createdAt
 * @property {string} updatedAt
 */

/**
 * @typedef {Object} FileUpload
 * @property {string} id
 * @property {string} name
 * @property {string} type
 * @property {string} data // base64 encoded
 * @property {string} uploadedAt
 */

/**
 * @typedef {Object} DashboardStats
 * @property {number} totalPatients
 * @property {number} totalAppointments
 * @property {number} completedAppointments
 * @property {number} pendingAppointments
 * @property {number} totalRevenue
 * @property {number} monthlyRevenue
 */
