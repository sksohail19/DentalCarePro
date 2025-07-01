# DentalCare Pro


DentalCare Pro is a comprehensive dental practice management application built with React. It provides a seamless interface for both clinic administrators (dentists) and patients. The application features role-based access control, allowing admins to manage patient records, and appointments, and view practice-wide statistics, while patients can view their appointment history, personal details, and request new appointments. All data is managed locally using the browser's `localStorage` for a complete front-end experience.

## Key Features

*   **Dual Dashboards:** Separate, feature-rich dashboards for Admins (Dentists) and Patients.
*   **Role-Based Authentication:** Secure login system differentiating between admin and patient users. Use the demo accounts on the login page to explore.
*   **Admin Dashboard:** At-a-glance view of total patients, appointments, monthly revenue, and completion rates. Includes quick access to upcoming appointments and recently added patients.
*   **Patient Management (Admin):** Full CRUD (Create, Read, Update, Delete) functionality for patient records including personal, contact, and medical information.
*   **Appointment Management (Admin):** A comprehensive system to schedule, view details, update status, and delete appointments. Includes forms for adding treatment details, costs, and file attachments.
*   **Interactive Calendar (Admin):** A visual calendar with month and week views to manage the clinic's appointment schedule effectively.
*   **Patient Portal:** Patients can view their personal information, upcoming appointments, and a complete history of past treatments and payments.
*   **Appointment Requests:** Patients can easily request new appointments from their dashboard, which will appear as "Pending Approval" for the admin.

## Tech Stack

*   **Frontend:** React.js
*   **Routing:** React Router
*   **Styling:** Bootstrap & Custom CSS
*   **Icons:** Lucide React
*   **State Management:** React Context API
*   **Data Persistence:** Browser `localStorage` is used to simulate a database.

## Directory Structure
Directory structure:
├── README.md
├── package.json
├── public
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── components
    │   ├── Appointments
    │   │   ├── AppointmentForm.jsx
    │   │   └── AppointmentList.jsx
    │   ├── Auth
    │   │   └── Login.jsx
    │   ├── Calendar
    │   │   ├── CalendarView.jsx
    │   │   └── calendar.css
    │   ├── Dashboard
    │   │   ├── AdminDashboard.jsx
    │   │   └── PatientDashboard.jsx
    │   ├── Layout
    │   │   └── Header.js
    │   └── Patients
    │       ├── PatientForm.js
    │       └── PatientList.js
    ├── contexts
    │   └── AuthContext.jsx
    ├── index.css
    ├── index.js
    ├── reportWebVitals.js
    ├── setupTests.js
    ├── types
    │   └── index.js
    └── utils
        └── storage.js

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Node.js and npm (or yarn) installed on your machine.

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/sksohail19/dentalcarepro.git
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd dentalcarepro
    ```
3.  **Install dependencies:**
    ```sh
    npm install
    ```

### Running the Application

To run the application in development mode:
```sh
npm start
```
This will start the development server and open the application in your default browser at `http://localhost:3000`.

## Usage & Demo Accounts

The application is pre-populated with demo data for both an admin and a patient. Use the demo buttons on the login screen or enter the following credentials manually:

#### Admin Access
*   **Email:** `admin@dentalcenter.com`
*   **Password:** `admin123`

#### Patient Access
*   **Email:** `patient@example.com`
*   **Password:** `patient123`


## **Functional Graph**
{
  "visualization": {
    "cytoscape": {
      "elements": [
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/App.js:ProtectedRoute",
            "label": "ProtectedRoute",
            "file": "/tmp/gitprobe_l6t5uxrl/src/App.js",
            "type": "function",
            "language": "javascript"
          },
          "classes": "node-function lang-javascript"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/App.js:AdminRoute",
            "label": "AdminRoute",
            "file": "/tmp/gitprobe_l6t5uxrl/src/App.js",
            "type": "function",
            "language": "javascript"
          },
          "classes": "node-function lang-javascript"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/App.js:AppContent",
            "label": "AppContent",
            "file": "/tmp/gitprobe_l6t5uxrl/src/App.js",
            "type": "function",
            "language": "javascript"
          },
          "classes": "node-function lang-javascript"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/App.js:App",
            "label": "App",
            "file": "/tmp/gitprobe_l6t5uxrl/src/App.js",
            "type": "function",
            "language": "javascript"
          },
          "classes": "node-function lang-javascript"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentForm.jsx:AppointmentForm",
            "label": "AppointmentForm",
            "file": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentForm.jsx",
            "type": "function",
            "language": "javascript"
          },
          "classes": "node-function"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentForm.jsx:validateForm",
            "label": "validateForm",
            "file": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentForm.jsx",
            "type": "function",
            "language": "javascript"
          },
          "classes": "node-function"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentForm.jsx:handleSubmit",
            "label": "handleSubmit",
            "file": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentForm.jsx",
            "type": "function",
            "language": "javascript"
          },
          "classes": "node-function"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentForm.jsx:handleChange",
            "label": "handleChange",
            "file": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentForm.jsx",
            "type": "function",
            "language": "javascript"
          },
          "classes": "node-function"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentForm.jsx:handleFileUpload",
            "label": "handleFileUpload",
            "file": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentForm.jsx",
            "type": "function",
            "language": "javascript"
          },
          "classes": "node-function"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentForm.jsx:onload",
            "label": "onload",
            "file": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentForm.jsx",
            "type": "function",
            "language": "javascript"
          },
          "classes": "node-function"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentForm.jsx:removeFile",
            "label": "removeFile",
            "file": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentForm.jsx",
            "type": "function",
            "language": "javascript"
          },
          "classes": "node-function"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentList.jsx:AppointmentList",
            "label": "AppointmentList",
            "file": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentList.jsx",
            "type": "function",
            "language": "javascript"
          },
          "classes": "node-function"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentList.jsx:loadData",
            "label": "loadData",
            "file": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentList.jsx",
            "type": "function",
            "language": "javascript"
          },
          "classes": "node-function"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentList.jsx:handleDelete",
            "label": "handleDelete",
            "file": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentList.jsx",
            "type": "function",
            "language": "javascript"
          },
          "classes": "node-function"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentList.jsx:handleEdit",
            "label": "handleEdit",
            "file": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentList.jsx",
            "type": "function",
            "language": "javascript"
          },
          "classes": "node-function"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentList.jsx:handleFormClose",
            "label": "handleFormClose",
            "file": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentList.jsx",
            "type": "function",
            "language": "javascript"
          },
          "classes": "node-function"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentList.jsx:handleStatusUpdate",
            "label": "handleStatusUpdate",
            "file": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentList.jsx",
            "type": "function",
            "language": "javascript"
          },
          "classes": "node-function"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentList.jsx:getStatusBadge",
            "label": "getStatusBadge",
            "file": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentList.jsx",
            "type": "function",
            "language": "javascript"
          },
          "classes": "node-function"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Auth/Login.jsx:Login",
            "label": "Login",
            "file": "/tmp/gitprobe_l6t5uxrl/src/components/Auth/Login.jsx",
            "type": "function",
            "language": "javascript"
          },
          "classes": "node-function"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Auth/Login.jsx:handleSubmit",
            "label": "handleSubmit",
            "file": "/tmp/gitprobe_l6t5uxrl/src/components/Auth/Login.jsx",
            "type": "function",
            "language": "javascript"
          },
          "classes": "node-function"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Auth/Login.jsx:handleDemoLogin",
            "label": "handleDemoLogin",
            "file": "/tmp/gitprobe_l6t5uxrl/src/components/Auth/Login.jsx",
            "type": "function",
            "language": "javascript"
          },
          "classes": "node-function"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:CalendarView",
            "label": "CalendarView",
            "file": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx",
            "type": "function",
            "language": "javascript"
          },
          "classes": "node-function"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:loadData",
            "label": "loadData",
            "file": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx",
            "type": "function",
            "language": "javascript"
          },
          "classes": "node-function"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:generateCalendarEvents",
            "label": "generateCalendarEvents",
            "file": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx",
            "type": "function",
            "language": "javascript"
          },
          "classes": "node-function"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:getDaysInMonth",
            "label": "getDaysInMonth",
            "file": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx",
            "type": "function",
            "language": "javascript"
          },
          "classes": "node-function"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:getWeekDays",
            "label": "getWeekDays",
            "file": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx",
            "type": "function",
            "language": "javascript"
          },
          "classes": "node-function"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:getEventsForDate",
            "label": "getEventsForDate",
            "file": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx",
            "type": "function",
            "language": "javascript"
          },
          "classes": "node-function"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:navigateMonth",
            "label": "navigateMonth",
            "file": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx",
            "type": "function",
            "language": "javascript"
          },
          "classes": "node-function"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:navigateWeek",
            "label": "navigateWeek",
            "file": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx",
            "type": "function",
            "language": "javascript"
          },
          "classes": "node-function"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:handleDateClick",
            "label": "handleDateClick",
            "file": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx",
            "type": "function",
            "language": "javascript"
          },
          "classes": "node-function"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:handleNewAppointment",
            "label": "handleNewAppointment",
            "file": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx",
            "type": "function",
            "language": "javascript"
          },
          "classes": "node-function"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:handleFormClose",
            "label": "handleFormClose",
            "file": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx",
            "type": "function",
            "language": "javascript"
          },
          "classes": "node-function"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:getStatusColor",
            "label": "getStatusColor",
            "file": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx",
            "type": "function",
            "language": "javascript"
          },
          "classes": "node-function"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/AdminDashboard.jsx:AdminDashboard",
            "label": "AdminDashboard",
            "file": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/AdminDashboard.jsx",
            "type": "function",
            "language": "javascript"
          },
          "classes": "node-function"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/AdminDashboard.jsx:loadData",
            "label": "loadData",
            "file": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/AdminDashboard.jsx",
            "type": "function",
            "language": "javascript"
          },
          "classes": "node-function"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/AdminDashboard.jsx:handleCompleteTreatment",
            "label": "handleCompleteTreatment",
            "file": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/AdminDashboard.jsx",
            "type": "function",
            "language": "javascript"
          },
          "classes": "node-function"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/AdminDashboard.jsx:handleFormClose",
            "label": "handleFormClose",
            "file": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/AdminDashboard.jsx",
            "type": "function",
            "language": "javascript"
          },
          "classes": "node-function"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/PatientDashboard.jsx:PatientDashboard",
            "label": "PatientDashboard",
            "file": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/PatientDashboard.jsx",
            "type": "function",
            "language": "javascript"
          },
          "classes": "node-function"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/PatientDashboard.jsx:loadData",
            "label": "loadData",
            "file": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/PatientDashboard.jsx",
            "type": "function",
            "language": "javascript"
          },
          "classes": "node-function"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/PatientDashboard.jsx:handleFormClose",
            "label": "handleFormClose",
            "file": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/PatientDashboard.jsx",
            "type": "function",
            "language": "javascript"
          },
          "classes": "node-function"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/PatientDashboard.jsx:getStatusColor",
            "label": "getStatusColor",
            "file": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/PatientDashboard.jsx",
            "type": "function",
            "language": "javascript"
          },
          "classes": "node-function"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Layout/Header.js:Header",
            "label": "Header",
            "file": "/tmp/gitprobe_l6t5uxrl/src/components/Layout/Header.js",
            "type": "function",
            "language": "javascript"
          },
          "classes": "node-function lang-javascript"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientForm.js:PatientForm",
            "label": "PatientForm",
            "file": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientForm.js",
            "type": "function",
            "language": "javascript"
          },
          "classes": "node-function lang-javascript"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientForm.js:validateForm",
            "label": "validateForm",
            "file": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientForm.js",
            "type": "function",
            "language": "javascript"
          },
          "classes": "node-function lang-javascript"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientForm.js:handleSubmit",
            "label": "handleSubmit",
            "file": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientForm.js",
            "type": "function",
            "language": "javascript"
          },
          "classes": "node-function lang-javascript"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientForm.js:handleChange",
            "label": "handleChange",
            "file": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientForm.js",
            "type": "function",
            "language": "javascript"
          },
          "classes": "node-function lang-javascript"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientList.js:PatientList",
            "label": "PatientList",
            "file": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientList.js",
            "type": "function",
            "language": "javascript"
          },
          "classes": "node-function lang-javascript"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientList.js:loadPatients",
            "label": "loadPatients",
            "file": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientList.js",
            "type": "function",
            "language": "javascript"
          },
          "classes": "node-function lang-javascript"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientList.js:handleDelete",
            "label": "handleDelete",
            "file": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientList.js",
            "type": "function",
            "language": "javascript"
          },
          "classes": "node-function lang-javascript"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientList.js:handleEdit",
            "label": "handleEdit",
            "file": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientList.js",
            "type": "function",
            "language": "javascript"
          },
          "classes": "node-function lang-javascript"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientList.js:handleFormClose",
            "label": "handleFormClose",
            "file": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientList.js",
            "type": "function",
            "language": "javascript"
          },
          "classes": "node-function lang-javascript"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/contexts/AuthContext.jsx:useAuth",
            "label": "useAuth",
            "file": "/tmp/gitprobe_l6t5uxrl/src/contexts/AuthContext.jsx",
            "type": "function",
            "language": "javascript"
          },
          "classes": "node-function"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/contexts/AuthContext.jsx:AuthProvider",
            "label": "AuthProvider",
            "file": "/tmp/gitprobe_l6t5uxrl/src/contexts/AuthContext.jsx",
            "type": "function",
            "language": "javascript"
          },
          "classes": "node-function"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/contexts/AuthContext.jsx:login",
            "label": "login",
            "file": "/tmp/gitprobe_l6t5uxrl/src/contexts/AuthContext.jsx",
            "type": "function",
            "language": "javascript"
          },
          "classes": "node-function"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/contexts/AuthContext.jsx:logout",
            "label": "logout",
            "file": "/tmp/gitprobe_l6t5uxrl/src/contexts/AuthContext.jsx",
            "type": "function",
            "language": "javascript"
          },
          "classes": "node-function"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/reportWebVitals.js:reportWebVitals",
            "label": "reportWebVitals",
            "file": "/tmp/gitprobe_l6t5uxrl/src/reportWebVitals.js",
            "type": "function",
            "language": "javascript"
          },
          "classes": "node-function lang-javascript"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:initializeStorage",
            "label": "initializeStorage",
            "file": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js",
            "type": "function",
            "language": "javascript"
          },
          "classes": "node-function lang-javascript"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:getUsers",
            "label": "getUsers",
            "file": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js",
            "type": "function",
            "language": "javascript"
          },
          "classes": "node-function lang-javascript"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:getCurrentUser",
            "label": "getCurrentUser",
            "file": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js",
            "type": "function",
            "language": "javascript"
          },
          "classes": "node-function lang-javascript"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:setCurrentUser",
            "label": "setCurrentUser",
            "file": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js",
            "type": "function",
            "language": "javascript"
          },
          "classes": "node-function lang-javascript"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:getPatients",
            "label": "getPatients",
            "file": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js",
            "type": "function",
            "language": "javascript"
          },
          "classes": "node-function lang-javascript"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:savePatients",
            "label": "savePatients",
            "file": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js",
            "type": "function",
            "language": "javascript"
          },
          "classes": "node-function lang-javascript"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:addPatient",
            "label": "addPatient",
            "file": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js",
            "type": "function",
            "language": "javascript"
          },
          "classes": "node-function lang-javascript"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:updatePatient",
            "label": "updatePatient",
            "file": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js",
            "type": "function",
            "language": "javascript"
          },
          "classes": "node-function lang-javascript"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:deletePatient",
            "label": "deletePatient",
            "file": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js",
            "type": "function",
            "language": "javascript"
          },
          "classes": "node-function lang-javascript"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:getAppointments",
            "label": "getAppointments",
            "file": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js",
            "type": "function",
            "language": "javascript"
          },
          "classes": "node-function lang-javascript"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:saveAppointments",
            "label": "saveAppointments",
            "file": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js",
            "type": "function",
            "language": "javascript"
          },
          "classes": "node-function lang-javascript"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:addAppointment",
            "label": "addAppointment",
            "file": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js",
            "type": "function",
            "language": "javascript"
          },
          "classes": "node-function lang-javascript"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:updateAppointment",
            "label": "updateAppointment",
            "file": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js",
            "type": "function",
            "language": "javascript"
          },
          "classes": "node-function lang-javascript"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:deleteAppointment",
            "label": "deleteAppointment",
            "file": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js",
            "type": "function",
            "language": "javascript"
          },
          "classes": "node-function lang-javascript"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:getPatientAppointments",
            "label": "getPatientAppointments",
            "file": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js",
            "type": "function",
            "language": "javascript"
          },
          "classes": "node-function lang-javascript"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/App.js:ProtectedRoute->/tmp/gitprobe_l6t5uxrl/src/contexts/AuthContext.jsx:useAuth",
            "source": "/tmp/gitprobe_l6t5uxrl/src/App.js:ProtectedRoute",
            "target": "/tmp/gitprobe_l6t5uxrl/src/contexts/AuthContext.jsx:useAuth",
            "line": 13
          },
          "classes": "edge-call"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/App.js:AdminRoute->/tmp/gitprobe_l6t5uxrl/src/contexts/AuthContext.jsx:useAuth",
            "source": "/tmp/gitprobe_l6t5uxrl/src/App.js:AdminRoute",
            "target": "/tmp/gitprobe_l6t5uxrl/src/contexts/AuthContext.jsx:useAuth",
            "line": 18
          },
          "classes": "edge-call"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/App.js:AppContent->/tmp/gitprobe_l6t5uxrl/src/contexts/AuthContext.jsx:useAuth",
            "source": "/tmp/gitprobe_l6t5uxrl/src/App.js:AppContent",
            "target": "/tmp/gitprobe_l6t5uxrl/src/contexts/AuthContext.jsx:useAuth",
            "line": 23
          },
          "classes": "edge-call"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentForm.jsx:handleSubmit->/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientForm.js:validateForm",
            "source": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentForm.jsx:handleSubmit",
            "target": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientForm.js:validateForm",
            "line": 49
          },
          "classes": "edge-call"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentForm.jsx:handleSubmit->/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:updateAppointment",
            "source": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentForm.jsx:handleSubmit",
            "target": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:updateAppointment",
            "line": 69
          },
          "classes": "edge-call"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentForm.jsx:handleSubmit->/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:addAppointment",
            "source": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentForm.jsx:handleSubmit",
            "target": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:addAppointment",
            "line": 71
          },
          "classes": "edge-call"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentForm.jsx:AppointmentForm->/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentForm.jsx:removeFile",
            "source": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentForm.jsx:AppointmentForm",
            "target": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentForm.jsx:removeFile",
            "line": 266
          },
          "classes": "edge-call"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentList.jsx:AppointmentList->/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/PatientDashboard.jsx:loadData",
            "source": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentList.jsx:AppointmentList",
            "target": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/PatientDashboard.jsx:loadData",
            "line": 17
          },
          "classes": "edge-call"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentList.jsx:loadData->/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:getPatients",
            "source": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentList.jsx:loadData",
            "target": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:getPatients",
            "line": 39
          },
          "classes": "edge-call"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentList.jsx:loadData->/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:getAppointments",
            "source": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentList.jsx:loadData",
            "target": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:getAppointments",
            "line": 40
          },
          "classes": "edge-call"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentList.jsx:handleDelete->/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:deleteAppointment",
            "source": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentList.jsx:handleDelete",
            "target": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:deleteAppointment",
            "line": 56
          },
          "classes": "edge-call"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentList.jsx:handleDelete->/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/PatientDashboard.jsx:loadData",
            "source": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentList.jsx:handleDelete",
            "target": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/PatientDashboard.jsx:loadData",
            "line": 57
          },
          "classes": "edge-call"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentList.jsx:handleFormClose->/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/PatientDashboard.jsx:loadData",
            "source": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentList.jsx:handleFormClose",
            "target": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/PatientDashboard.jsx:loadData",
            "line": 69
          },
          "classes": "edge-call"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentList.jsx:handleStatusUpdate->/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:updateAppointment",
            "source": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentList.jsx:handleStatusUpdate",
            "target": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:updateAppointment",
            "line": 75
          },
          "classes": "edge-call"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentList.jsx:handleStatusUpdate->/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/PatientDashboard.jsx:loadData",
            "source": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentList.jsx:handleStatusUpdate",
            "target": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/PatientDashboard.jsx:loadData",
            "line": 76
          },
          "classes": "edge-call"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentList.jsx:AppointmentList->/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientList.js:handleEdit",
            "source": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentList.jsx:AppointmentList",
            "target": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientList.js:handleEdit",
            "line": 107
          },
          "classes": "edge-call"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentList.jsx:AppointmentList->/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentList.jsx:getStatusBadge",
            "source": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentList.jsx:AppointmentList",
            "target": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentList.jsx:getStatusBadge",
            "line": 117
          },
          "classes": "edge-call"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentList.jsx:AppointmentList->/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentList.jsx:handleStatusUpdate",
            "source": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentList.jsx:AppointmentList",
            "target": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentList.jsx:handleStatusUpdate",
            "line": 151
          },
          "classes": "edge-call"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentList.jsx:AppointmentList->/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientList.js:handleDelete",
            "source": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentList.jsx:AppointmentList",
            "target": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientList.js:handleDelete",
            "line": 270
          },
          "classes": "edge-call"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Auth/Login.jsx:Login->/tmp/gitprobe_l6t5uxrl/src/contexts/AuthContext.jsx:useAuth",
            "source": "/tmp/gitprobe_l6t5uxrl/src/components/Auth/Login.jsx:Login",
            "target": "/tmp/gitprobe_l6t5uxrl/src/contexts/AuthContext.jsx:useAuth",
            "line": 10
          },
          "classes": "edge-call"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Auth/Login.jsx:handleSubmit->/tmp/gitprobe_l6t5uxrl/src/contexts/AuthContext.jsx:login",
            "source": "/tmp/gitprobe_l6t5uxrl/src/components/Auth/Login.jsx:handleSubmit",
            "target": "/tmp/gitprobe_l6t5uxrl/src/contexts/AuthContext.jsx:login",
            "line": 21
          },
          "classes": "edge-call"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Auth/Login.jsx:Login->/tmp/gitprobe_l6t5uxrl/src/components/Auth/Login.jsx:handleDemoLogin",
            "source": "/tmp/gitprobe_l6t5uxrl/src/components/Auth/Login.jsx:Login",
            "target": "/tmp/gitprobe_l6t5uxrl/src/components/Auth/Login.jsx:handleDemoLogin",
            "line": 105
          },
          "classes": "edge-call"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:CalendarView->/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/PatientDashboard.jsx:loadData",
            "source": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:CalendarView",
            "target": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/PatientDashboard.jsx:loadData",
            "line": 18
          },
          "classes": "edge-call"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:CalendarView->/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:generateCalendarEvents",
            "source": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:CalendarView",
            "target": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:generateCalendarEvents",
            "line": 22
          },
          "classes": "edge-call"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:loadData->/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:getAppointments",
            "source": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:loadData",
            "target": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:getAppointments",
            "line": 26
          },
          "classes": "edge-call"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:loadData->/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:getPatients",
            "source": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:loadData",
            "target": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:getPatients",
            "line": 27
          },
          "classes": "edge-call"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:handleDateClick->/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:getEventsForDate",
            "source": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:handleDateClick",
            "target": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:getEventsForDate",
            "line": 98
          },
          "classes": "edge-call"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:handleFormClose->/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/PatientDashboard.jsx:loadData",
            "source": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:handleFormClose",
            "target": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/PatientDashboard.jsx:loadData",
            "line": 118
          },
          "classes": "edge-call"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:CalendarView->/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:handleNewAppointment",
            "source": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:CalendarView",
            "target": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:handleNewAppointment",
            "line": 169
          },
          "classes": "edge-call"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:CalendarView->/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:navigateMonth",
            "source": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:CalendarView",
            "target": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:navigateMonth",
            "line": 178
          },
          "classes": "edge-call"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:CalendarView->/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:navigateWeek",
            "source": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:CalendarView",
            "target": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:navigateWeek",
            "line": 178
          },
          "classes": "edge-call"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:CalendarView->/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:getDaysInMonth",
            "source": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:CalendarView",
            "target": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:getDaysInMonth",
            "line": 191
          },
          "classes": "edge-call"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:CalendarView->/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:getEventsForDate",
            "source": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:CalendarView",
            "target": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:getEventsForDate",
            "line": 193
          },
          "classes": "edge-call"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:CalendarView->/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:handleDateClick",
            "source": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:CalendarView",
            "target": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:handleDateClick",
            "line": 200
          },
          "classes": "edge-call"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:CalendarView->/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/PatientDashboard.jsx:getStatusColor",
            "source": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:CalendarView",
            "target": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/PatientDashboard.jsx:getStatusColor",
            "line": 207
          },
          "classes": "edge-call"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:CalendarView->/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:getWeekDays",
            "source": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:CalendarView",
            "target": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:getWeekDays",
            "line": 225
          },
          "classes": "edge-call"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/AdminDashboard.jsx:AdminDashboard->/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/PatientDashboard.jsx:loadData",
            "source": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/AdminDashboard.jsx:AdminDashboard",
            "target": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/PatientDashboard.jsx:loadData",
            "line": 28
          },
          "classes": "edge-call"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/AdminDashboard.jsx:loadData->/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:getPatients",
            "source": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/AdminDashboard.jsx:loadData",
            "target": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:getPatients",
            "line": 32
          },
          "classes": "edge-call"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/AdminDashboard.jsx:loadData->/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:getAppointments",
            "source": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/AdminDashboard.jsx:loadData",
            "target": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:getAppointments",
            "line": 33
          },
          "classes": "edge-call"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/AdminDashboard.jsx:handleFormClose->/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/PatientDashboard.jsx:loadData",
            "source": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/AdminDashboard.jsx:handleFormClose",
            "target": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/PatientDashboard.jsx:loadData",
            "line": 88
          },
          "classes": "edge-call"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/PatientDashboard.jsx:PatientDashboard->/tmp/gitprobe_l6t5uxrl/src/contexts/AuthContext.jsx:useAuth",
            "source": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/PatientDashboard.jsx:PatientDashboard",
            "target": "/tmp/gitprobe_l6t5uxrl/src/contexts/AuthContext.jsx:useAuth",
            "line": 8
          },
          "classes": "edge-call"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/PatientDashboard.jsx:PatientDashboard->/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/PatientDashboard.jsx:loadData",
            "source": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/PatientDashboard.jsx:PatientDashboard",
            "target": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/PatientDashboard.jsx:loadData",
            "line": 17
          },
          "classes": "edge-call"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/PatientDashboard.jsx:loadData->/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:getPatients",
            "source": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/PatientDashboard.jsx:loadData",
            "target": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:getPatients",
            "line": 24
          },
          "classes": "edge-call"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/PatientDashboard.jsx:loadData->/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:getAppointments",
            "source": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/PatientDashboard.jsx:loadData",
            "target": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:getAppointments",
            "line": 28
          },
          "classes": "edge-call"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/PatientDashboard.jsx:handleFormClose->/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/PatientDashboard.jsx:loadData",
            "source": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/PatientDashboard.jsx:handleFormClose",
            "target": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/PatientDashboard.jsx:loadData",
            "line": 47
          },
          "classes": "edge-call"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/PatientDashboard.jsx:PatientDashboard->/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/PatientDashboard.jsx:getStatusColor",
            "source": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/PatientDashboard.jsx:PatientDashboard",
            "target": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/PatientDashboard.jsx:getStatusColor",
            "line": 195
          },
          "classes": "edge-call"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Layout/Header.js:Header->/tmp/gitprobe_l6t5uxrl/src/contexts/AuthContext.jsx:useAuth",
            "source": "/tmp/gitprobe_l6t5uxrl/src/components/Layout/Header.js:Header",
            "target": "/tmp/gitprobe_l6t5uxrl/src/contexts/AuthContext.jsx:useAuth",
            "line": 7
          },
          "classes": "edge-call"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientForm.js:handleSubmit->/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientForm.js:validateForm",
            "source": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientForm.js:handleSubmit",
            "target": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientForm.js:validateForm",
            "line": 38
          },
          "classes": "edge-call"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientForm.js:handleSubmit->/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:updatePatient",
            "source": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientForm.js:handleSubmit",
            "target": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:updatePatient",
            "line": 48
          },
          "classes": "edge-call"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientForm.js:handleSubmit->/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:addPatient",
            "source": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientForm.js:handleSubmit",
            "target": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:addPatient",
            "line": 50
          },
          "classes": "edge-call"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientList.js:PatientList->/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientList.js:loadPatients",
            "source": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientList.js:PatientList",
            "target": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientList.js:loadPatients",
            "line": 15
          },
          "classes": "edge-call"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientList.js:loadPatients->/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:getPatients",
            "source": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientList.js:loadPatients",
            "target": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:getPatients",
            "line": 28
          },
          "classes": "edge-call"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientList.js:handleDelete->/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:deletePatient",
            "source": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientList.js:handleDelete",
            "target": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:deletePatient",
            "line": 34
          },
          "classes": "edge-call"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientList.js:handleDelete->/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientList.js:loadPatients",
            "source": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientList.js:handleDelete",
            "target": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientList.js:loadPatients",
            "line": 35
          },
          "classes": "edge-call"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientList.js:handleFormClose->/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientList.js:loadPatients",
            "source": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientList.js:handleFormClose",
            "target": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientList.js:loadPatients",
            "line": 47
          },
          "classes": "edge-call"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientList.js:PatientList->/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientList.js:handleEdit",
            "source": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientList.js:PatientList",
            "target": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientList.js:handleEdit",
            "line": 215
          },
          "classes": "edge-call"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientList.js:PatientList->/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientList.js:handleDelete",
            "source": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientList.js:PatientList",
            "target": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientList.js:handleDelete",
            "line": 222
          },
          "classes": "edge-call"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/contexts/AuthContext.jsx:AuthProvider->/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:initializeStorage",
            "source": "/tmp/gitprobe_l6t5uxrl/src/contexts/AuthContext.jsx:AuthProvider",
            "target": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:initializeStorage",
            "line": 18
          },
          "classes": "edge-call"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/contexts/AuthContext.jsx:AuthProvider->/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:getCurrentUser",
            "source": "/tmp/gitprobe_l6t5uxrl/src/contexts/AuthContext.jsx:AuthProvider",
            "target": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:getCurrentUser",
            "line": 19
          },
          "classes": "edge-call"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/contexts/AuthContext.jsx:login->/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:getUsers",
            "source": "/tmp/gitprobe_l6t5uxrl/src/contexts/AuthContext.jsx:login",
            "target": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:getUsers",
            "line": 24
          },
          "classes": "edge-call"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/contexts/AuthContext.jsx:login->/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:setCurrentUser",
            "source": "/tmp/gitprobe_l6t5uxrl/src/contexts/AuthContext.jsx:login",
            "target": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:setCurrentUser",
            "line": 29
          },
          "classes": "edge-call"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/contexts/AuthContext.jsx:logout->/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:setCurrentUser",
            "source": "/tmp/gitprobe_l6t5uxrl/src/contexts/AuthContext.jsx:logout",
            "target": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:setCurrentUser",
            "line": 37
          },
          "classes": "edge-call"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:addPatient->/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:getPatients",
            "source": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:addPatient",
            "target": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:getPatients",
            "line": 131
          },
          "classes": "edge-call"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:addPatient->/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:savePatients",
            "source": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:addPatient",
            "target": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:savePatients",
            "line": 133
          },
          "classes": "edge-call"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:updatePatient->/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:getPatients",
            "source": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:updatePatient",
            "target": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:getPatients",
            "line": 137
          },
          "classes": "edge-call"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:updatePatient->/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:savePatients",
            "source": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:updatePatient",
            "target": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:savePatients",
            "line": 141
          },
          "classes": "edge-call"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:deletePatient->/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:getPatients",
            "source": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:deletePatient",
            "target": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:getPatients",
            "line": 146
          },
          "classes": "edge-call"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:deletePatient->/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:savePatients",
            "source": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:deletePatient",
            "target": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:savePatients",
            "line": 147
          },
          "classes": "edge-call"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:addAppointment->/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:getAppointments",
            "source": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:addAppointment",
            "target": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:getAppointments",
            "line": 161
          },
          "classes": "edge-call"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:addAppointment->/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:saveAppointments",
            "source": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:addAppointment",
            "target": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:saveAppointments",
            "line": 163
          },
          "classes": "edge-call"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:updateAppointment->/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:getAppointments",
            "source": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:updateAppointment",
            "target": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:getAppointments",
            "line": 167
          },
          "classes": "edge-call"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:updateAppointment->/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:saveAppointments",
            "source": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:updateAppointment",
            "target": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:saveAppointments",
            "line": 171
          },
          "classes": "edge-call"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:deleteAppointment->/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:getAppointments",
            "source": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:deleteAppointment",
            "target": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:getAppointments",
            "line": 176
          },
          "classes": "edge-call"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:deleteAppointment->/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:saveAppointments",
            "source": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:deleteAppointment",
            "target": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:saveAppointments",
            "line": 177
          },
          "classes": "edge-call"
        },
        {
          "data": {
            "id": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:getPatientAppointments->/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:getAppointments",
            "source": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:getPatientAppointments",
            "target": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:getAppointments",
            "line": 181
          },
          "classes": "edge-call"
        }
      ]
    },
    "summary": {
      "total_nodes": 71,
      "total_edges": 75,
      "unresolved_calls": 235
    }
  },
  "functions": [
    {
      "name": "ProtectedRoute",
      "file_path": "/tmp/gitprobe_l6t5uxrl/src/App.js",
      "line_start": 12,
      "line_end": 15,
      "parameters": [],
      "docstring": null,
      "is_method": false,
      "class_name": null,
      "code_snippet": "ProtectedRoute = ({ children }) => {\n  const { isAuthenticated } = useAuth();\n  return isAuthenticated ? <>{children}</> : <Navigate to=\"/login\" />;\n}",
      "display_name": null
    },
    {
      "name": "AdminRoute",
      "file_path": "/tmp/gitprobe_l6t5uxrl/src/App.js",
      "line_start": 17,
      "line_end": 20,
      "parameters": [],
      "docstring": null,
      "is_method": false,
      "class_name": null,
      "code_snippet": "AdminRoute = ({ children }) => {\n  const { isAdmin } = useAuth();\n  return isAdmin ? <>{children}</> : <Navigate to=\"/\" />;\n}",
      "display_name": null
    },
    {
      "name": "AppContent",
      "file_path": "/tmp/gitprobe_l6t5uxrl/src/App.js",
      "line_start": 22,
      "line_end": 77,
      "parameters": [],
      "docstring": null,
      "is_method": false,
      "class_name": null,
      "code_snippet": "AppContent = () => {\n  const { isAuthenticated, isAdmin } = useAuth();\n\n  if (!isAuthenticated) {\n    return <Login />;\n  }\n\n  return (\n    <div className=\"min-vh-100 bg-light\">\n      <Header />\n      <main className=\"container py-4\">\n        <Routes>\n          <Route \n            path=\"/\" \n            element={\n              <ProtectedRoute>\n                {isAdmin ? <AdminDashboard /> : <PatientDashboard />}\n              </ProtectedRoute>\n            } \n          />\n          <Route \n            path=\"/patients\" \n            element={\n              <ProtectedRoute>\n                <AdminRoute>\n                  <PatientList />\n                </AdminRoute>\n              </ProtectedRoute>\n            } \n          />\n          <Route \n            path=\"/appointments\" \n            element={\n              <ProtectedRoute>\n                <AdminRoute>\n                  <AppointmentList />\n                </AdminRoute>\n              </ProtectedRoute>\n            } \n          />\n          <Route \n            path=\"/calendar\" \n            element={\n              <ProtectedRoute>\n                <AdminRoute>\n                  <CalendarView />\n                </AdminRoute>\n              </ProtectedRoute>\n            } \n          />\n          <Route path=\"*\" element={<Navigate to=\"/\" />} />\n        </Routes>\n      </main>\n    </div>\n  );\n}",
      "display_name": null
    },
    {
      "name": "App",
      "file_path": "/tmp/gitprobe_l6t5uxrl/src/App.js",
      "line_start": 79,
      "line_end": 87,
      "parameters": [],
      "docstring": null,
      "is_method": false,
      "class_name": null,
      "code_snippet": "function App() {\n  return (\n    <AuthProvider>\n      <Router>\n        <AppContent />\n      </Router>\n    </AuthProvider>\n  );\n}",
      "display_name": null
    },
    {
      "name": "AppointmentForm",
      "file_path": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentForm.jsx",
      "line_start": 5,
      "line_end": 287,
      "parameters": [],
      "docstring": null,
      "is_method": false,
      "class_name": null,
      "code_snippet": "AppointmentForm = ({ appointment, patients, onClose, preSelectedPatientId }) => {\n  const [formData, setFormData] = useState({\n    patientId: appointment?.patientId || preSelectedPatientId || '',\n    title: appointment?.title || '',\n    description: appointment?.description || '',\n    comments: appointment?.comments || '',\n    appointmentDate: appointment?.appointmentDate ? \n      new Date(appointment.appointmentDate).toISOString().slice(0, 16) : '',\n    status: appointment?.status || 'scheduled',\n    cost: appointment?.cost?.toString() || '',\n    treatment: appointment?.treatment || '',\n    nextAppointmentDate: appointment?.nextAppointmentDate ? \n      new Date(appointment.nextAppointmentDate).toISOString().slice(0, 16) : '',\n  });\n\n  const [files, setFiles] = useState(appointment?.files || []);\n  const [errors, setErrors] = useState({});\n\n  const validateForm = () => {\n    const newErrors = {};\n\n    if (!formData.patientId) newErrors.patientId = 'Patient is required';\n    if (!formData.title.trim()) newErrors.title = 'Title is required';\n    if (!formData.description.trim()) newErrors.description = 'Description is required';\n    if (!formData.appointmentDate) newErrors.appointmentDate = 'Appointment date is required';\n\n    if (formData.appointmentDate && !appointment) {\n      const appointmentDateTime = new Date(formData.appointmentDate);\n      const now = new Date();\n      if (appointmentDateTime < now) {\n        newErrors.appointmentDate = 'Appointment date cannot be in the past';\n      }\n    }\n\n    if (formData.cost && isNaN(Number(formData.cost))) {\n      newErrors.cost = 'Cost must be a valid number';\n    }\n\n    setErrors(newErrors);\n    return Object.keys(newErrors).length === 0;\n  };\n\n  const handleSubmit = (e) => {\n    e.preventDefault();\n    if (!validateForm()) return;\n\n    const appointmentData = {\n      id: appointment?.id || `a${Date.now()}`,\n      patientId: formData.patientId,\n      title: formData.title,\n      description: formData.description,\n      comments: formData.comments,\n      appointmentDate: new Date(formData.appointmentDate).toISOString(),\n      status: formData.status,\n      cost: formData.cost ? Number(formData.cost) : undefined,\n      treatment: formData.treatment,\n      nextAppointmentDate: formData.nextAppointmentDate ? new Date(formData.nextAppointmentDate).toISOString() : undefined,\n      files: files.length > 0 ? files : undefined,\n      createdAt: appointment?.createdAt || new Date().toISOString(),\n      updatedAt: new Date().toISOString(),\n      requestedBy: 'admin',\n    };\n\n    if (appointment) {\n      updateAppointment(appointment.id, appointmentData);\n    } else {\n      addAppointment(appointmentData);\n    }\n\n    onClose();\n  };\n\n  const handleChange = (e) => {\n    const { name, value } = e.target;\n    setFormData(prev => ({ ...prev, [name]: value }));\n    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));\n  };\n\n  const handleFileUpload = (e) => {\n    const uploadedFiles = Array.from(e.target.files || []);\n    uploadedFiles.forEach(file => {\n      const reader = new FileReader();\n      reader.onload = (event) => {\n        const newFile = {\n          id: `f${Date.now()}_${Math.random()}`,\n          name: file.name,\n          type: file.type,\n          data: event.target?.result,\n          uploadedAt: new Date().toISOString(),\n        };\n        setFiles(prev => [...prev, newFile]);\n      };\n      reader.readAsDataURL(file);\n    });\n  };\n\n  const removeFile = (fileId) => setFiles(prev => prev.filter(f => f.id !== fileId));\n\n  return (\n    <div className=\"container py-4\">\n      <div className=\"d-flex justify-content-between align-items-center mb-4\">\n        <h1 className=\"h3\">{appointment ? 'Edit Appointment' : 'Schedule New Appointment'}</h1>\n        <button onClick={onClose} className=\"btn btn-link text-secondary p-0\">\n          <X size={24} />\n        </button>\n      </div>\n\n      <div className=\"card shadow-sm\">\n        <div className=\"card-body\">\n          <form onSubmit={handleSubmit}>\n            <h5 className=\"mb-3\">Appointment Details</h5>\n            <div className=\"row g-3 mb-4\">\n              <div className=\"col-md-6\">\n                <label className=\"form-label\">Patient *</label>\n                <select\n                  className={`form-select ${errors.patientId ? 'is-invalid' : ''}`}\n                  name=\"patientId\"\n                  value={formData.patientId}\n                  onChange={handleChange}\n                >\n                  <option value=\"\">Select a patient</option>\n                  {patients.map(patient => (\n                    <option key={patient.id} value={patient.id}>\n                      {patient.firstName} {patient.lastName}\n                    </option>\n                  ))}\n                </select>\n                {errors.patientId && <div className=\"invalid-feedback\">{errors.patientId}</div>}\n              </div>\n\n              <div className=\"col-md-6\">\n                <label className=\"form-label\">Status</label>\n                <select\n                  className=\"form-select\"\n                  name=\"status\"\n                  value={formData.status}\n                  onChange={handleChange}\n                >\n                  <option value=\"scheduled\">Scheduled</option>\n                  <option value=\"in-progress\">In Progress</option>\n                  <option value=\"completed\">Completed</option>\n                  <option value=\"cancelled\">Cancelled</option>\n                </select>\n              </div>\n\n              <div className=\"col-md-6\">\n                <label className=\"form-label\">Title *</label>\n                <input\n                  type=\"text\"\n                  className={`form-control ${errors.title ? 'is-invalid' : ''}`}\n                  name=\"title\"\n                  value={formData.title}\n                  onChange={handleChange}\n                  placeholder=\"e.g., Regular Cleaning, Root Canal\"\n                />\n                {errors.title && <div className=\"invalid-feedback\">{errors.title}</div>}\n              </div>\n\n              <div className=\"col-md-6\">\n                <label className=\"form-label\">Appointment Date & Time *</label>\n                <input\n                  type=\"datetime-local\"\n                  className={`form-control ${errors.appointmentDate ? 'is-invalid' : ''}`}\n                  name=\"appointmentDate\"\n                  value={formData.appointmentDate}\n                  onChange={handleChange}\n                />\n                {errors.appointmentDate && <div className=\"invalid-feedback\">{errors.appointmentDate}</div>}\n              </div>\n\n              <div className=\"col-12\">\n                <label className=\"form-label\">Description *</label>\n                <textarea\n                  className={`form-control ${errors.description ? 'is-invalid' : ''}`}\n                  name=\"description\"\n                  rows={3}\n                  value={formData.description}\n                  onChange={handleChange}\n                  placeholder=\"Describe the appointment purpose and procedures\"\n                />\n                {errors.description && <div className=\"invalid-feedback\">{errors.description}</div>}\n              </div>\n\n              <div className=\"col-12\">\n                <label className=\"form-label\">Comments</label>\n                <textarea\n                  className=\"form-control\"\n                  name=\"comments\"\n                  rows={2}\n                  value={formData.comments}\n                  onChange={handleChange}\n                  placeholder=\"Additional notes or comments\"\n                />\n              </div>\n            </div>\n\n            <h5 className=\"mb-3\">Treatment Information</h5>\n            <div className=\"row g-3 mb-4\">\n              <div className=\"col-md-6\">\n                <label className=\"form-label\">Treatment Performed</label>\n                <input\n                  type=\"text\"\n                  className=\"form-control\"\n                  name=\"treatment\"\n                  value={formData.treatment}\n                  onChange={handleChange}\n                  placeholder=\"e.g., Dental cleaning, Filling, Crown\"\n                />\n              </div>\n\n              <div className=\"col-md-6\">\n                <label className=\"form-label\">Cost ($)</label>\n                <input\n                  type=\"number\"\n                  className={`form-control ${errors.cost ? 'is-invalid' : ''}`}\n                  name=\"cost\"\n                  value={formData.cost}\n                  onChange={handleChange}\n                  min=\"0\"\n                  step=\"0.01\"\n                  placeholder=\"0.00\"\n                />\n                {errors.cost && <div className=\"invalid-feedback\">{errors.cost}</div>}\n              </div>\n\n              <div className=\"col-12\">\n                <label className=\"form-label\">Next Appointment Date</label>\n                <input\n                  type=\"datetime-local\"\n                  className=\"form-control\"\n                  name=\"nextAppointmentDate\"\n                  value={formData.nextAppointmentDate}\n                  onChange={handleChange}\n                />\n              </div>\n            </div>\n\n            <h5 className=\"mb-3\">Attachments</h5>\n            <div className=\"mb-3\">\n              <label className=\"form-label\">Upload Files (Images, Documents, etc.)</label>\n              <input\n                type=\"file\"\n                className=\"form-control\"\n                multiple\n                accept=\"image/*,.pdf,.doc,.docx\"\n                onChange={handleFileUpload}\n              />\n            </div>\n\n            {files.length > 0 && (\n              <div className=\"mb-4\">\n                <h6>Uploaded Files</h6>\n                <ul className=\"list-group\">\n                  {files.map(file => (\n                    <li key={file.id} className=\"list-group-item d-flex justify-content-between align-items-center\">\n                      <div>\n                        <p className=\"mb-0 fw-bold\">{file.name}</p>\n                        <small className=\"text-muted\">\n                          Uploaded {new Date(file.uploadedAt).toLocaleDateString()}\n                        </small>\n                      </div>\n                      <button type=\"button\" className=\"btn btn-sm btn-outline-danger\" onClick={() => removeFile(file.id)}>\n                        <Trash2 size={16} />\n                      </button>\n                    </li>\n                  ))}\n                </ul>\n              </div>\n            )}\n\n            <div className=\"d-flex justify-content-end gap-2 pt-3 border-top\">\n              <button type=\"button\" className=\"btn btn-secondary\" onClick={onClose}>Cancel</button>\n              <button type=\"submit\" className=\"btn btn-primary d-flex align-items-center\">\n                <Save size={16} className=\"me-2\" />\n                {appointment ? 'Update Appointment' : 'Schedule Appointment'}\n              </button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  );\n}",
      "display_name": null
    },
    {
      "name": "validateForm",
      "file_path": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentForm.jsx",
      "line_start": 23,
      "line_end": 45,
      "parameters": [],
      "docstring": null,
      "is_method": false,
      "class_name": null,
      "code_snippet": "validateForm = () => {\n    const newErrors = {};\n\n    if (!formData.patientId) newErrors.patientId = 'Patient is required';\n    if (!formData.title.trim()) newErrors.title = 'Title is required';\n    if (!formData.description.trim()) newErrors.description = 'Description is required';\n    if (!formData.appointmentDate) newErrors.appointmentDate = 'Appointment date is required';\n\n    if (formData.appointmentDate && !appointment) {\n      const appointmentDateTime = new Date(formData.appointmentDate);\n      const now = new Date();\n      if (appointmentDateTime < now) {\n        newErrors.appointmentDate = 'Appointment date cannot be in the past';\n      }\n    }\n\n    if (formData.cost && isNaN(Number(formData.cost))) {\n      newErrors.cost = 'Cost must be a valid number';\n    }\n\n    setErrors(newErrors);\n    return Object.keys(newErrors).length === 0;\n  }",
      "display_name": null
    },
    {
      "name": "handleSubmit",
      "file_path": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentForm.jsx",
      "line_start": 47,
      "line_end": 75,
      "parameters": [
        "e"
      ],
      "docstring": null,
      "is_method": false,
      "class_name": null,
      "code_snippet": "handleSubmit = (e) => {\n    e.preventDefault();\n    if (!validateForm()) return;\n\n    const appointmentData = {\n      id: appointment?.id || `a${Date.now()}`,\n      patientId: formData.patientId,\n      title: formData.title,\n      description: formData.description,\n      comments: formData.comments,\n      appointmentDate: new Date(formData.appointmentDate).toISOString(),\n      status: formData.status,\n      cost: formData.cost ? Number(formData.cost) : undefined,\n      treatment: formData.treatment,\n      nextAppointmentDate: formData.nextAppointmentDate ? new Date(formData.nextAppointmentDate).toISOString() : undefined,\n      files: files.length > 0 ? files : undefined,\n      createdAt: appointment?.createdAt || new Date().toISOString(),\n      updatedAt: new Date().toISOString(),\n      requestedBy: 'admin',\n    };\n\n    if (appointment) {\n      updateAppointment(appointment.id, appointmentData);\n    } else {\n      addAppointment(appointmentData);\n    }\n\n    onClose();\n  }",
      "display_name": null
    },
    {
      "name": "handleChange",
      "file_path": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentForm.jsx",
      "line_start": 77,
      "line_end": 81,
      "parameters": [
        "e"
      ],
      "docstring": null,
      "is_method": false,
      "class_name": null,
      "code_snippet": "handleChange = (e) => {\n    const { name, value } = e.target;\n    setFormData(prev => ({ ...prev, [name]: value }));\n    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));\n  }",
      "display_name": null
    },
    {
      "name": "handleFileUpload",
      "file_path": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentForm.jsx",
      "line_start": 83,
      "line_end": 99,
      "parameters": [
        "e"
      ],
      "docstring": null,
      "is_method": false,
      "class_name": null,
      "code_snippet": "handleFileUpload = (e) => {\n    const uploadedFiles = Array.from(e.target.files || []);\n    uploadedFiles.forEach(file => {\n      const reader = new FileReader();\n      reader.onload = (event) => {\n        const newFile = {\n          id: `f${Date.now()}_${Math.random()}`,\n          name: file.name,\n          type: file.type,\n          data: event.target?.result,\n          uploadedAt: new Date().toISOString(),\n        };\n        setFiles(prev => [...prev, newFile]);\n      };\n      reader.readAsDataURL(file);\n    });\n  }",
      "display_name": null
    },
    {
      "name": "onload",
      "file_path": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentForm.jsx",
      "line_start": 87,
      "line_end": 96,
      "parameters": [
        "event"
      ],
      "docstring": null,
      "is_method": false,
      "class_name": null,
      "code_snippet": "reader.onload = (event) => {\n        const newFile = {\n          id: `f${Date.now()}_${Math.random()}`,\n          name: file.name,\n          type: file.type,\n          data: event.target?.result,\n          uploadedAt: new Date().toISOString(),\n        };\n        setFiles(prev => [...prev, newFile]);\n      }",
      "display_name": null
    },
    {
      "name": "removeFile",
      "file_path": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentForm.jsx",
      "line_start": 101,
      "line_end": 101,
      "parameters": [
        "fileId"
      ],
      "docstring": null,
      "is_method": false,
      "class_name": null,
      "code_snippet": "removeFile = (fileId) => setFiles(prev => prev.filter(f => f.id !== fileId))",
      "display_name": null
    },
    {
      "name": "AppointmentList",
      "file_path": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentList.jsx",
      "line_start": 6,
      "line_end": 284,
      "parameters": [],
      "docstring": null,
      "is_method": false,
      "class_name": null,
      "code_snippet": "AppointmentList = () => {\n  const [appointments, setAppointments] = useState([]);\n  const [filteredAppointments, setFilteredAppointments] = useState([]);\n  const [patients, setPatients] = useState([]);\n  const [searchTerm, setSearchTerm] = useState('');\n  const [statusFilter, setStatusFilter] = useState('all');\n  const [showForm, setShowForm] = useState(false);\n  const [editingAppointment, setEditingAppointment] = useState(null);\n  const [selectedAppointment, setSelectedAppointment] = useState(null);\n\n  useEffect(() => {\n    loadData();\n  }, []);\n\n  useEffect(() => {\n    let filtered = appointments;\n\n    if (searchTerm) {\n      filtered = filtered.filter(appointment =>\n        appointment.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||\n        appointment.title.toLowerCase().includes(searchTerm.toLowerCase()) ||\n        appointment.description.toLowerCase().includes(searchTerm.toLowerCase())\n      );\n    }\n\n    if (statusFilter !== 'all') {\n      filtered = filtered.filter(appointment => appointment.status === statusFilter);\n    }\n\n    setFilteredAppointments(filtered);\n  }, [appointments, searchTerm, statusFilter]);\n\n  const loadData = () => {\n    const allPatients = getPatients();\n    const allAppointments = getAppointments();\n    setPatients(allPatients);\n\n    const appointmentsWithPatients = allAppointments.map(appointment => {\n      const patient = allPatients.find(p => p.id === appointment.patientId);\n      return {\n        ...appointment,\n        patientName: patient ? `${patient.firstName} ${patient.lastName}` : 'Unknown Patient'\n      };\n    }).sort((a, b) => new Date(b.appointmentDate) - new Date(a.appointmentDate));\n\n    setAppointments(appointmentsWithPatients);\n  };\n\n  const handleDelete = (appointmentId) => {\n    if (window.confirm('Are you sure you want to delete this appointment?')) {\n      deleteAppointment(appointmentId);\n      loadData();\n    }\n  };\n\n  const handleEdit = (appointment) => {\n    setEditingAppointment(appointment);\n    setShowForm(true);\n  };\n\n  const handleFormClose = () => {\n    setShowForm(false);\n    setEditingAppointment(null);\n    loadData();\n  };\n\n  const handleStatusUpdate = (appointmentId, newStatus) => {\n    const updates = { status: newStatus };\n    if (newStatus === 'completed') updates.updatedAt = new Date().toISOString();\n    updateAppointment(appointmentId, updates);\n    loadData();\n  };\n\n  const getStatusBadge = (status) => {\n    switch (status) {\n      case 'scheduled': return 'badge bg-primary';\n      case 'in-progress': return 'badge bg-warning text-dark';\n      case 'completed': return 'badge bg-success';\n      case 'cancelled': return 'badge bg-danger';\n      case 'pending-approval': return 'badge bg-secondary';\n      default: return 'badge bg-light text-dark';\n    }\n  };\n\n  if (showForm) {\n    return (\n      <AppointmentForm\n        appointment={editingAppointment}\n        patients={patients}\n        onClose={handleFormClose}\n      />\n    );\n  }\n\n  if (selectedAppointment) {\n    return (\n      <div className=\"container py-4\">\n        <div className=\"d-flex justify-content-between align-items-center mb-4\">\n          <button onClick={() => setSelectedAppointment(null)} className=\"btn btn-link\">\n            ← Back to Appointments\n          </button>\n          <button onClick={() => handleEdit(selectedAppointment)} className=\"btn btn-outline-primary\">\n            <Edit size={16} className=\"me-1\" />\n            Edit\n          </button>\n        </div>\n\n        <div className=\"card\">\n          <div className=\"card-body\">\n            <div className=\"d-flex justify-content-between mb-3\">\n              <h2>{selectedAppointment.title}</h2>\n              <span className={getStatusBadge(selectedAppointment.status)}>\n                {selectedAppointment.status.replace('-', ' ')}\n              </span>\n            </div>\n            <p><strong>Patient:</strong> {selectedAppointment.patientName}</p>\n            <p><strong>Date & Time:</strong> {new Date(selectedAppointment.appointmentDate).toLocaleString()}</p>\n            <p><strong>Description:</strong> {selectedAppointment.description}</p>\n            <p><strong>Comments:</strong> {selectedAppointment.comments || 'No comments'}</p>\n            <p><strong>Treatment:</strong> {selectedAppointment.treatment || 'Not specified'}</p>\n            <p><strong>Cost:</strong> {selectedAppointment.cost ? `$${selectedAppointment.cost}` : 'Not specified'}</p>\n            <p><strong>Next Appointment:</strong> {selectedAppointment.nextAppointmentDate ? new Date(selectedAppointment.nextAppointmentDate).toLocaleDateString() : 'Not scheduled'}</p>\n\n            {selectedAppointment.files && selectedAppointment.files.length > 0 && (\n              <div className=\"mt-4\">\n                <h5>Attachments:</h5>\n                <ul className=\"list-group\">\n                  {selectedAppointment.files.map(file => (\n                    <li key={file.id} className=\"list-group-item d-flex justify-content-between align-items-center\">\n                      {file.name}\n                      <small className=\"text-muted\">{new Date(file.uploadedAt).toLocaleDateString()}</small>\n                    </li>\n                  ))}\n                </ul>\n              </div>\n            )}\n\n            {selectedAppointment.status === 'pending-approval' && (\n              <div className=\"alert alert-warning mt-4 d-flex justify-content-between align-items-center\">\n                <div>\n                  <h6>Pending Approval</h6>\n                  <p>This appointment was requested by the patient and needs approval.</p>\n                </div>\n                <div>\n                  <button\n                    onClick={() => handleStatusUpdate(selectedAppointment.id, 'scheduled')}\n                    className=\"btn btn-success me-2\"\n                  >\n                    <CheckCircle size={16} className=\"me-1\" /> Approve\n                  </button>\n                  <button\n                    onClick={() => handleStatusUpdate(selectedAppointment.id, 'cancelled')}\n                    className=\"btn btn-danger\"\n                  >\n                    <X size={16} className=\"me-1\" /> Decline\n                  </button>\n                </div>\n              </div>\n            )}\n          </div>\n        </div>\n      </div>\n    );\n  }\n\n  return (\n    <div className=\"container py-4\">\n      <div className=\"d-flex justify-content-between align-items-center mb-4\">\n        <h1>Appointments</h1>\n        <button onClick={() => setShowForm(true)} className=\"btn btn-primary\">\n          <Plus size={16} className=\"me-2\" />\n          Schedule Appointment\n        </button>\n      </div>\n\n      <div className=\"card mb-4\">\n        <div className=\"card-body row g-3\">\n          <div className=\"col-md-6 position-relative\">\n            <input\n              type=\"text\"\n              className=\"form-control ps-5\"\n              placeholder=\"Search appointments...\"\n              value={searchTerm}\n              onChange={(e) => setSearchTerm(e.target.value)}\n            />\n            <Search className=\"position-absolute top-50 start-0 translate-middle-y ms-3 text-muted\" size={18} />\n          </div>\n          <div className=\"col-md-6\">\n            <select\n              value={statusFilter}\n              onChange={(e) => setStatusFilter(e.target.value)}\n              className=\"form-select\"\n            >\n              <option value=\"all\">All Statuses</option>\n              <option value=\"pending-approval\">Pending Approval</option>\n              <option value=\"scheduled\">Scheduled</option>\n              <option value=\"in-progress\">In Progress</option>\n              <option value=\"completed\">Completed</option>\n              <option value=\"cancelled\">Cancelled</option>\n            </select>\n          </div>\n        </div>\n      </div>\n\n      <div className=\"card\">\n        {filteredAppointments.length === 0 ? (\n          <div className=\"card-body text-center\">\n            <Calendar size={48} className=\"text-muted mb-3\" />\n            <p className=\"text-muted mb-4\">\n              {searchTerm || statusFilter !== 'all' ? 'No appointments match your criteria.' : 'No appointments scheduled.'}\n            </p>\n            <button onClick={() => setShowForm(true)} className=\"btn btn-primary\">\n              <Plus size={16} className=\"me-2\" /> Schedule First Appointment\n            </button>\n          </div>\n        ) : (\n          <div className=\"table-responsive\">\n            <table className=\"table table-hover table-bordered mb-0\">\n              <thead className=\"table-light\">\n                <tr>\n                  <th>Patient & Appointment</th>\n                  <th>Date & Time</th>\n                  <th>Status</th>\n                  <th>Cost</th>\n                  <th className=\"text-end\">Actions</th>\n                </tr>\n              </thead>\n              <tbody>\n                {filteredAppointments.map((appointment) => (\n                  <tr key={appointment.id}>\n                    <td>\n                      <div className=\"d-flex align-items-center\">\n                        <div className=\"bg-primary bg-opacity-10 rounded-circle d-flex justify-content-center align-items-center\" style={{ width: '40px', height: '40px' }}>\n                          <User size={20} className=\"text-primary\" />\n                        </div>\n                        <div className=\"ms-3\">\n                          <div>{appointment.patientName}</div>\n                          <small className=\"text-muted\">{appointment.title}</small>\n                        </div>\n                      </div>\n                    </td>\n                    <td>\n                      <div>{new Date(appointment.appointmentDate).toLocaleDateString()}</div>\n                      <small className=\"text-muted\">{new Date(appointment.appointmentDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</small>\n                    </td>\n                    <td>\n                      <span className={getStatusBadge(appointment.status)}>\n                        {appointment.status.replace('-', ' ')}\n                      </span>\n                    </td>\n                    <td>{appointment.cost ? `$${appointment.cost}` : '-'}</td>\n                    <td className=\"text-end\">\n                      <div className=\"btn-group btn-group-sm\">\n                        <button onClick={() => setSelectedAppointment(appointment)} className=\"btn btn-outline-primary\" title=\"View\">\n                          <Eye size={16} />\n                        </button>\n                        <button onClick={() => handleEdit(appointment)} className=\"btn btn-outline-secondary\" title=\"Edit\">\n                          <Edit size={16} />\n                        </button>\n                        {appointment.status === 'scheduled' && (\n                          <button onClick={() => handleStatusUpdate(appointment.id, 'completed')} className=\"btn btn-outline-success\" title=\"Mark as Completed\">\n                            <CheckCircle size={16} />\n                          </button>\n                        )}\n                        <button onClick={() => handleDelete(appointment.id)} className=\"btn btn-outline-danger\" title=\"Delete\">\n                          <Trash2 size={16} />\n                        </button>\n                      </div>\n                    </td>\n                  </tr>\n                ))}\n              </tbody>\n            </table>\n          </div>\n        )}\n      </div>\n    </div>\n  );\n}",
      "display_name": null
    },
    {
      "name": "loadData",
      "file_path": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentList.jsx",
      "line_start": 38,
      "line_end": 52,
      "parameters": [],
      "docstring": null,
      "is_method": false,
      "class_name": null,
      "code_snippet": "loadData = () => {\n    const allPatients = getPatients();\n    const allAppointments = getAppointments();\n    setPatients(allPatients);\n\n    const appointmentsWithPatients = allAppointments.map(appointment => {\n      const patient = allPatients.find(p => p.id === appointment.patientId);\n      return {\n        ...appointment,\n        patientName: patient ? `${patient.firstName} ${patient.lastName}` : 'Unknown Patient'\n      };\n    }).sort((a, b) => new Date(b.appointmentDate) - new Date(a.appointmentDate));\n\n    setAppointments(appointmentsWithPatients);\n  }",
      "display_name": null
    },
    {
      "name": "handleDelete",
      "file_path": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentList.jsx",
      "line_start": 54,
      "line_end": 59,
      "parameters": [
        "appointmentId"
      ],
      "docstring": null,
      "is_method": false,
      "class_name": null,
      "code_snippet": "handleDelete = (appointmentId) => {\n    if (window.confirm('Are you sure you want to delete this appointment?')) {\n      deleteAppointment(appointmentId);\n      loadData();\n    }\n  }",
      "display_name": null
    },
    {
      "name": "handleEdit",
      "file_path": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentList.jsx",
      "line_start": 61,
      "line_end": 64,
      "parameters": [
        "appointment"
      ],
      "docstring": null,
      "is_method": false,
      "class_name": null,
      "code_snippet": "handleEdit = (appointment) => {\n    setEditingAppointment(appointment);\n    setShowForm(true);\n  }",
      "display_name": null
    },
    {
      "name": "handleFormClose",
      "file_path": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentList.jsx",
      "line_start": 66,
      "line_end": 70,
      "parameters": [],
      "docstring": null,
      "is_method": false,
      "class_name": null,
      "code_snippet": "handleFormClose = () => {\n    setShowForm(false);\n    setEditingAppointment(null);\n    loadData();\n  }",
      "display_name": null
    },
    {
      "name": "handleStatusUpdate",
      "file_path": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentList.jsx",
      "line_start": 72,
      "line_end": 77,
      "parameters": [
        "appointmentId",
        "newStatus"
      ],
      "docstring": null,
      "is_method": false,
      "class_name": null,
      "code_snippet": "handleStatusUpdate = (appointmentId, newStatus) => {\n    const updates = { status: newStatus };\n    if (newStatus === 'completed') updates.updatedAt = new Date().toISOString();\n    updateAppointment(appointmentId, updates);\n    loadData();\n  }",
      "display_name": null
    },
    {
      "name": "getStatusBadge",
      "file_path": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentList.jsx",
      "line_start": 79,
      "line_end": 88,
      "parameters": [
        "status"
      ],
      "docstring": null,
      "is_method": false,
      "class_name": null,
      "code_snippet": "getStatusBadge = (status) => {\n    switch (status) {\n      case 'scheduled': return 'badge bg-primary';\n      case 'in-progress': return 'badge bg-warning text-dark';\n      case 'completed': return 'badge bg-success';\n      case 'cancelled': return 'badge bg-danger';\n      case 'pending-approval': return 'badge bg-secondary';\n      default: return 'badge bg-light text-dark';\n    }\n  }",
      "display_name": null
    },
    {
      "name": "Login",
      "file_path": "/tmp/gitprobe_l6t5uxrl/src/components/Auth/Login.jsx",
      "line_start": 5,
      "line_end": 123,
      "parameters": [],
      "docstring": null,
      "is_method": false,
      "class_name": null,
      "code_snippet": "Login = () => {\n  const [email, setEmail] = useState('');\n  const [password, setPassword] = useState('');\n  const [showPassword, setShowPassword] = useState(false);\n  const [error, setError] = useState('');\n  const { login } = useAuth();\n\n  const handleSubmit = (e) => {\n    e.preventDefault();\n    setError('');\n\n    if (!email || !password) {\n      setError('Please enter both email and password');\n      return;\n    }\n\n    const success = login(email, password);\n    if (!success) {\n      setError('Invalid email or password');\n    }\n  };\n\n  const handleDemoLogin = (role) => {\n    if (role === 'admin') {\n      setEmail('admin@dentalcenter.com');\n      setPassword('admin123');\n    } else {\n      setEmail('patient@example.com');\n      setPassword('patient123');\n    }\n  };\n\n  return (\n    <div className=\"min-vh-100 d-flex align-items-center justify-content-center bg-light py-5\">\n      <div className=\"container\" style={{ maxWidth: '420px' }}>\n        <div className=\"text-center mb-4\">\n          <h2 className=\"fw-bold text-dark mb-2\">DentalCare Pro</h2>\n          <p className=\"text-muted\">Management Dashboard</p>\n        </div>\n\n        <div className=\"card shadow-sm\">\n          <div className=\"card-body\">\n            <form onSubmit={handleSubmit}>\n              {error && (\n                <div className=\"alert alert-danger small\">{error}</div>\n              )}\n\n              <div className=\"mb-3 position-relative\">\n                <label htmlFor=\"email\" className=\"form-label\">Email Address</label>\n                <div className=\"position-absolute top-50 start-0 translate-middle-y ms-2 text-muted\">\n                  <User size={18} />\n                </div>\n                <input\n                  id=\"email\"\n                  type=\"email\"\n                  className=\"form-control ps-5\"\n                  placeholder=\"Enter your email\"\n                  value={email}\n                  onChange={(e) => setEmail(e.target.value)}\n                />\n              </div>\n\n              <div className=\"mb-3 position-relative\">\n                <label htmlFor=\"password\" className=\"form-label\">Password</label>\n                <div className=\"position-absolute top-50 start-0 translate-middle-y ms-2 text-muted\">\n                  <Lock size={18} />\n                </div>\n                <input\n                  id=\"password\"\n                  type={showPassword ? 'text' : 'password'}\n                  className=\"form-control ps-5 pe-5\"\n                  placeholder=\"Enter your password\"\n                  value={password}\n                  onChange={(e) => setPassword(e.target.value)}\n                />\n                <button\n                  type=\"button\"\n                  className=\"btn btn-link position-absolute top-50 end-0 translate-middle-y me-2 p-0 text-muted\"\n                  onClick={() => setShowPassword(!showPassword)}\n                >\n                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}\n                </button>\n              </div>\n\n              <button type=\"submit\" className=\"btn btn-primary w-100\">\n                Sign In\n              </button>\n            </form>\n\n            <div className=\"my-4 text-center\">\n              <div className=\"d-flex align-items-center\">\n                <hr className=\"flex-grow-1\" />\n                <span className=\"mx-2 text-muted small\">Demo Accounts</span>\n                <hr className=\"flex-grow-1\" />\n              </div>\n            </div>\n\n            <div className=\"d-grid gap-2\">\n              <button\n                type=\"button\"\n                onClick={() => handleDemoLogin('admin')}\n                className=\"btn btn-outline-secondary\"\n              >\n                Admin Demo\n              </button>\n              <button\n                type=\"button\"\n                onClick={() => handleDemoLogin('patient')}\n                className=\"btn btn-outline-secondary\"\n              >\n                Patient Demo\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  );\n}",
      "display_name": null
    },
    {
      "name": "handleSubmit",
      "file_path": "/tmp/gitprobe_l6t5uxrl/src/components/Auth/Login.jsx",
      "line_start": 12,
      "line_end": 25,
      "parameters": [
        "e"
      ],
      "docstring": null,
      "is_method": false,
      "class_name": null,
      "code_snippet": "handleSubmit = (e) => {\n    e.preventDefault();\n    setError('');\n\n    if (!email || !password) {\n      setError('Please enter both email and password');\n      return;\n    }\n\n    const success = login(email, password);\n    if (!success) {\n      setError('Invalid email or password');\n    }\n  }",
      "display_name": null
    },
    {
      "name": "handleDemoLogin",
      "file_path": "/tmp/gitprobe_l6t5uxrl/src/components/Auth/Login.jsx",
      "line_start": 27,
      "line_end": 35,
      "parameters": [
        "role"
      ],
      "docstring": null,
      "is_method": false,
      "class_name": null,
      "code_snippet": "handleDemoLogin = (role) => {\n    if (role === 'admin') {\n      setEmail('admin@dentalcenter.com');\n      setPassword('admin123');\n    } else {\n      setEmail('patient@example.com');\n      setPassword('patient123');\n    }\n  }",
      "display_name": null
    },
    {
      "name": "CalendarView",
      "file_path": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx",
      "line_start": 7,
      "line_end": 275,
      "parameters": [],
      "docstring": null,
      "is_method": false,
      "class_name": null,
      "code_snippet": "CalendarView = () => {\n  const [currentDate, setCurrentDate] = useState(new Date());\n  const [view, setView] = useState('month');\n  const [appointments, setAppointments] = useState([]);\n  const [patients, setPatients] = useState([]);\n  const [calendarEvents, setCalendarEvents] = useState([]);\n  const [selectedDate, setSelectedDate] = useState(null);\n  const [showForm, setShowForm] = useState(false);\n  const [selectedAppointment, setSelectedAppointment] = useState(null);\n\n  useEffect(() => {\n    loadData();\n  }, []);\n\n  useEffect(() => {\n    generateCalendarEvents();\n  }, [appointments, patients]);\n\n  const loadData = () => {\n    const allAppointments = getAppointments();\n    const allPatients = getPatients();\n    setAppointments(allAppointments);\n    setPatients(allPatients);\n  };\n\n  const generateCalendarEvents = () => {\n    const events = appointments.map(appointment => {\n      const patient = patients.find(p => p.id === appointment.patientId);\n      const appointmentDate = new Date(appointment.appointmentDate);\n      return {\n        id: appointment.id,\n        title: appointment.title,\n        date: appointmentDate.toISOString().split('T')[0],\n        time: appointmentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),\n        patientName: patient ? `${patient.firstName} ${patient.lastName}` : 'Unknown Patient',\n        status: appointment.status,\n      };\n    });\n    setCalendarEvents(events);\n  };\n\n  const getDaysInMonth = (date) => {\n    const year = date.getFullYear();\n    const month = date.getMonth();\n    const firstDay = new Date(year, month, 1);\n    const lastDay = new Date(year, month + 1, 0);\n    const daysInMonth = lastDay.getDate();\n    const startingDayOfWeek = firstDay.getDay();\n    const days = [];\n    for (let i = 0; i < startingDayOfWeek; i++) days.push(null);\n    for (let day = 1; day <= daysInMonth; day++) days.push(new Date(year, month, day));\n    return days;\n  };\n\n  const getWeekDays = (date) => {\n    const startOfWeek = new Date(date);\n    const day = startOfWeek.getDay();\n    const diff = startOfWeek.getDate() - day;\n    startOfWeek.setDate(diff);\n    const days = [];\n    for (let i = 0; i < 7; i++) {\n      const day = new Date(startOfWeek);\n      day.setDate(startOfWeek.getDate() + i);\n      days.push(day);\n    }\n    return days;\n  };\n\n  const getEventsForDate = (date) => {\n    const dateString = date.toISOString().split('T')[0];\n    return calendarEvents.filter(event => event.date === dateString);\n  };\n\n  const navigateMonth = (direction) => {\n    setCurrentDate(prev => {\n      const newDate = new Date(prev);\n      newDate.setMonth(prev.getMonth() + (direction === 'next' ? 1 : -1));\n      return newDate;\n    });\n  };\n\n  const navigateWeek = (direction) => {\n    setCurrentDate(prev => {\n      const newDate = new Date(prev);\n      newDate.setDate(prev.getDate() + (direction === 'next' ? 7 : -7));\n      return newDate;\n    });\n  };\n\n  const handleDateClick = (date) => {\n    setSelectedDate(date);\n    const events = getEventsForDate(date);\n    if (events.length === 1) {\n      const appointment = appointments.find(a => a.id === events[0].id);\n      if (appointment) {\n        setSelectedAppointment(appointment);\n        setShowForm(true);\n      }\n    }\n  };\n\n  const handleNewAppointment = (date) => {\n    setSelectedDate(date || null);\n    setSelectedAppointment(null);\n    setShowForm(true);\n  };\n\n  const handleFormClose = () => {\n    setShowForm(false);\n    setSelectedAppointment(null);\n    setSelectedDate(null);\n    loadData();\n  };\n\n  const getStatusColor = (status) => {\n    switch (status) {\n      case 'scheduled': return 'status-scheduled';\n      case 'in-progress': return 'status-inprogress';\n      case 'completed': return 'status-completed';\n      case 'cancelled': return 'status-cancelled';\n      case 'pending-approval': return 'status-pending';\n      default: return 'status-unknown';\n    }\n  };\n\n  if (showForm) {\n    const preSelectedDate = selectedDate ? selectedDate.toISOString().slice(0, 16) : '';\n    const appointmentWithDate = selectedAppointment ? {\n      ...selectedAppointment,\n      appointmentDate: selectedAppointment.appointmentDate || preSelectedDate\n    } : null;\n    return (\n      <AppointmentForm\n        appointment={appointmentWithDate}\n        patients={patients}\n        onClose={handleFormClose}\n      />\n    );\n  }\n\n  const monthNames = [\n    'January', 'February', 'March', 'April', 'May', 'June',\n    'July', 'August', 'September', 'October', 'November', 'December'\n  ];\n\n  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];\n\n  return (\n    <div className=\"calendar-container\">\n      <div className=\"calendar-header\">\n        <h1 className=\"calendar-title\">Calendar</h1>\n        <div className=\"calendar-controls\">\n          <div className=\"view-toggle\">\n            <button\n              onClick={() => setView('month')}\n              className={view === 'month' ? 'toggle-btn active' : 'toggle-btn'}\n            >Month</button>\n            <button\n              onClick={() => setView('week')}\n              className={view === 'week' ? 'toggle-btn active' : 'toggle-btn'}\n            >Week</button>\n          </div>\n          <button className=\"new-appt-btn\" onClick={() => handleNewAppointment()}>\n            <Plus className=\"icon\" /> New Appointment\n          </button>\n        </div>\n      </div>\n\n      <div className=\"calendar-card\">\n        <div className=\"calendar-nav\">\n          <div className=\"nav-left\">\n            <button onClick={() => view === 'month' ? navigateMonth('prev') : navigateWeek('prev')}><ChevronLeft className=\"icon\" /></button>\n            <h2>{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}</h2>\n            <button onClick={() => view === 'month' ? navigateMonth('next') : navigateWeek('next')}><ChevronRight className=\"icon\" /></button>\n          </div>\n          <button className=\"today-btn\" onClick={() => setCurrentDate(new Date())}>Today</button>\n        </div>\n\n        <div className=\"calendar-body\">\n          {view === 'month' ? (\n            <div className=\"month-grid\">\n              {dayNames.map(day => (\n                <div key={day} className=\"day-header\">{day}</div>\n              ))}\n              {getDaysInMonth(currentDate).map((date, index) => {\n                if (!date) return <div key={index} className=\"day-cell empty\" />;\n                const events = getEventsForDate(date);\n                const isToday = date.toDateString() === new Date().toDateString();\n                const isCurrentMonth = date.getMonth() === currentDate.getMonth();\n                return (\n                  <div\n                    key={date.toISOString()}\n                    className={`day-cell ${isCurrentMonth ? '' : 'outside-month'}`}\n                    onClick={() => handleDateClick(date)}\n                  >\n                    <div className={`day-number ${isToday ? 'today' : ''}`}>{date.getDate()}</div>\n                    <div className=\"events-list\">\n                      {events.slice(0, 3).map(event => (\n                        <div\n                          key={event.id}\n                          className={`event-item ${getStatusColor(event.status)}`}\n                          title={`${event.time} - ${event.patientName}: ${event.title}`}\n                        >\n                          {event.time} {event.title}\n                        </div>\n                      ))}\n                      {events.length > 3 && (\n                        <div className=\"more-events\">+{events.length - 3} more</div>\n                      )}\n                    </div>\n                  </div>\n                );\n              })}\n            </div>\n          ) : (\n            <div className=\"week-view\">\n              <div className=\"week-header\">\n                <div className=\"time-column\">Time</div>\n                {getWeekDays(currentDate).map(date => {\n                  const isToday = date.toDateString() === new Date().toDateString();\n                  return (\n                    <div key={date.toISOString()} className=\"week-day\">\n                      <div>{dayNames[date.getDay()]}</div>\n                      <div className={`week-date ${isToday ? 'today' : ''}`}>{date.getDate()}</div>\n                    </div>\n                  );\n                })}\n              </div>\n              <div className=\"week-grid\">\n                <div className=\"time-column\">\n                  {Array.from({ length: 12 }, (_, i) => (\n                    <div key={i} className=\"time-slot\">{i + 8}:00</div>\n                  ))}\n                </div>\n                {getWeekDays(currentDate).map(date => (\n                  <div key={date.toISOString()} className=\"day-column\">\n                    {getEventsForDate(date).map(event => {\n                      const eventTime = new Date(`${event.date}T${event.time}`);\n                      const hour = eventTime.getHours();\n                      const minute = eventTime.getMinutes();\n                      const topPosition = ((hour - 8) * 48) + (minute * 0.8);\n                      return (\n                        <div\n                          key={event.id}\n                          className={`event-block ${getStatusColor(event.status)}`}\n                          style={{ top: `${topPosition}px` }}\n                          onClick={() => {\n                            const appointment = appointments.find(a => a.id === event.id);\n                            if (appointment) {\n                              setSelectedAppointment(appointment);\n                              setShowForm(true);\n                            }\n                          }}\n                        >\n                          <div>{event.title}</div>\n                          <div>{event.patientName}</div>\n                        </div>\n                      );\n                    })}\n                  </div>\n                ))}\n              </div>\n            </div>\n          )}\n        </div>\n      </div>\n    </div>\n  );\n}",
      "display_name": null
    },
    {
      "name": "loadData",
      "file_path": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx",
      "line_start": 25,
      "line_end": 30,
      "parameters": [],
      "docstring": null,
      "is_method": false,
      "class_name": null,
      "code_snippet": "loadData = () => {\n    const allAppointments = getAppointments();\n    const allPatients = getPatients();\n    setAppointments(allAppointments);\n    setPatients(allPatients);\n  }",
      "display_name": null
    },
    {
      "name": "generateCalendarEvents",
      "file_path": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx",
      "line_start": 32,
      "line_end": 46,
      "parameters": [],
      "docstring": null,
      "is_method": false,
      "class_name": null,
      "code_snippet": "generateCalendarEvents = () => {\n    const events = appointments.map(appointment => {\n      const patient = patients.find(p => p.id === appointment.patientId);\n      const appointmentDate = new Date(appointment.appointmentDate);\n      return {\n        id: appointment.id,\n        title: appointment.title,\n        date: appointmentDate.toISOString().split('T')[0],\n        time: appointmentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),\n        patientName: patient ? `${patient.firstName} ${patient.lastName}` : 'Unknown Patient',\n        status: appointment.status,\n      };\n    });\n    setCalendarEvents(events);\n  }",
      "display_name": null
    },
    {
      "name": "getDaysInMonth",
      "file_path": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx",
      "line_start": 48,
      "line_end": 59,
      "parameters": [
        "date"
      ],
      "docstring": null,
      "is_method": false,
      "class_name": null,
      "code_snippet": "getDaysInMonth = (date) => {\n    const year = date.getFullYear();\n    const month = date.getMonth();\n    const firstDay = new Date(year, month, 1);\n    const lastDay = new Date(year, month + 1, 0);\n    const daysInMonth = lastDay.getDate();\n    const startingDayOfWeek = firstDay.getDay();\n    const days = [];\n    for (let i = 0; i < startingDayOfWeek; i++) days.push(null);\n    for (let day = 1; day <= daysInMonth; day++) days.push(new Date(year, month, day));\n    return days;\n  }",
      "display_name": null
    },
    {
      "name": "getWeekDays",
      "file_path": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx",
      "line_start": 61,
      "line_end": 73,
      "parameters": [
        "date"
      ],
      "docstring": null,
      "is_method": false,
      "class_name": null,
      "code_snippet": "getWeekDays = (date) => {\n    const startOfWeek = new Date(date);\n    const day = startOfWeek.getDay();\n    const diff = startOfWeek.getDate() - day;\n    startOfWeek.setDate(diff);\n    const days = [];\n    for (let i = 0; i < 7; i++) {\n      const day = new Date(startOfWeek);\n      day.setDate(startOfWeek.getDate() + i);\n      days.push(day);\n    }\n    return days;\n  }",
      "display_name": null
    },
    {
      "name": "getEventsForDate",
      "file_path": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx",
      "line_start": 75,
      "line_end": 78,
      "parameters": [
        "date"
      ],
      "docstring": null,
      "is_method": false,
      "class_name": null,
      "code_snippet": "getEventsForDate = (date) => {\n    const dateString = date.toISOString().split('T')[0];\n    return calendarEvents.filter(event => event.date === dateString);\n  }",
      "display_name": null
    },
    {
      "name": "navigateMonth",
      "file_path": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx",
      "line_start": 80,
      "line_end": 86,
      "parameters": [
        "direction"
      ],
      "docstring": null,
      "is_method": false,
      "class_name": null,
      "code_snippet": "navigateMonth = (direction) => {\n    setCurrentDate(prev => {\n      const newDate = new Date(prev);\n      newDate.setMonth(prev.getMonth() + (direction === 'next' ? 1 : -1));\n      return newDate;\n    });\n  }",
      "display_name": null
    },
    {
      "name": "navigateWeek",
      "file_path": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx",
      "line_start": 88,
      "line_end": 94,
      "parameters": [
        "direction"
      ],
      "docstring": null,
      "is_method": false,
      "class_name": null,
      "code_snippet": "navigateWeek = (direction) => {\n    setCurrentDate(prev => {\n      const newDate = new Date(prev);\n      newDate.setDate(prev.getDate() + (direction === 'next' ? 7 : -7));\n      return newDate;\n    });\n  }",
      "display_name": null
    },
    {
      "name": "handleDateClick",
      "file_path": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx",
      "line_start": 96,
      "line_end": 106,
      "parameters": [
        "date"
      ],
      "docstring": null,
      "is_method": false,
      "class_name": null,
      "code_snippet": "handleDateClick = (date) => {\n    setSelectedDate(date);\n    const events = getEventsForDate(date);\n    if (events.length === 1) {\n      const appointment = appointments.find(a => a.id === events[0].id);\n      if (appointment) {\n        setSelectedAppointment(appointment);\n        setShowForm(true);\n      }\n    }\n  }",
      "display_name": null
    },
    {
      "name": "handleNewAppointment",
      "file_path": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx",
      "line_start": 108,
      "line_end": 112,
      "parameters": [
        "date"
      ],
      "docstring": null,
      "is_method": false,
      "class_name": null,
      "code_snippet": "handleNewAppointment = (date) => {\n    setSelectedDate(date || null);\n    setSelectedAppointment(null);\n    setShowForm(true);\n  }",
      "display_name": null
    },
    {
      "name": "handleFormClose",
      "file_path": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx",
      "line_start": 114,
      "line_end": 119,
      "parameters": [],
      "docstring": null,
      "is_method": false,
      "class_name": null,
      "code_snippet": "handleFormClose = () => {\n    setShowForm(false);\n    setSelectedAppointment(null);\n    setSelectedDate(null);\n    loadData();\n  }",
      "display_name": null
    },
    {
      "name": "getStatusColor",
      "file_path": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx",
      "line_start": 121,
      "line_end": 130,
      "parameters": [
        "status"
      ],
      "docstring": null,
      "is_method": false,
      "class_name": null,
      "code_snippet": "getStatusColor = (status) => {\n    switch (status) {\n      case 'scheduled': return 'status-scheduled';\n      case 'in-progress': return 'status-inprogress';\n      case 'completed': return 'status-completed';\n      case 'cancelled': return 'status-cancelled';\n      case 'pending-approval': return 'status-pending';\n      default: return 'status-unknown';\n    }\n  }",
      "display_name": null
    },
    {
      "name": "AdminDashboard",
      "file_path": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/AdminDashboard.jsx",
      "line_start": 9,
      "line_end": 197,
      "parameters": [],
      "docstring": null,
      "is_method": false,
      "class_name": null,
      "code_snippet": "AdminDashboard = () => {\n  const navigate = useNavigate();\n  const [stats, setStats] = useState({\n    totalPatients: 0,\n    totalAppointments: 0,\n    completedAppointments: 0,\n    pendingAppointments: 0,\n    totalRevenue: 0,\n    monthlyRevenue: 0,\n  });\n  const [upcomingAppointments, setUpcomingAppointments] = useState([]);\n  const [recentPatients, setRecentPatients] = useState([]);\n  const [patients, setPatients] = useState([]);\n  const [showAppointmentForm, setShowAppointmentForm] = useState(false);\n  const [showPatientForm, setShowPatientForm] = useState(false);\n  const [showCompleteTreatment, setShowCompleteTreatment] = useState(false);\n  const [selectedAppointment, setSelectedAppointment] = useState(null);\n\n  useEffect(() => {\n    loadData();\n  }, []);\n\n  const loadData = () => {\n    const allPatients = getPatients();\n    const appointments = getAppointments();\n    setPatients(allPatients);\n\n    const completedAppts = appointments.filter(a => a.status === 'completed');\n    const pendingAppts = appointments.filter(a => ['scheduled', 'in-progress', 'pending-approval'].includes(a.status));\n    const totalRevenue = completedAppts.reduce((sum, a) => sum + (a.cost || 0), 0);\n    const currentMonth = new Date().getMonth();\n    const currentYear = new Date().getFullYear();\n    const monthlyRevenue = completedAppts\n      .filter(a => {\n        const date = new Date(a.appointmentDate);\n        return date.getMonth() === currentMonth && date.getFullYear() === currentYear;\n      })\n      .reduce((sum, a) => sum + (a.cost || 0), 0);\n\n    setStats({\n      totalPatients: allPatients.length,\n      totalAppointments: appointments.length,\n      completedAppointments: completedAppts.length,\n      pendingAppointments: pendingAppts.length,\n      totalRevenue,\n      monthlyRevenue,\n    });\n\n    const upcoming = appointments\n      .filter(a => new Date(a.appointmentDate) >= new Date() && ['scheduled', 'pending-approval'].includes(a.status))\n      .sort((a, b) => new Date(a.appointmentDate) - new Date(b.appointmentDate))\n      .slice(0, 10)\n      .map(a => {\n        const patient = allPatients.find(p => p.id === a.patientId);\n        return {\n          ...a,\n          patientName: patient ? `${patient.firstName} ${patient.lastName}` : 'Unknown Patient'\n        };\n      });\n\n    setUpcomingAppointments(upcoming);\n    setRecentPatients(allPatients.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 5));\n  };\n\n  const handleCompleteTreatment = () => {\n    const nextAppointment = upcomingAppointments.find(a => a.status === 'scheduled');\n    if (nextAppointment) {\n      setSelectedAppointment(nextAppointment);\n      setShowCompleteTreatment(true);\n    } else {\n      setShowAppointmentForm(true);\n    }\n  };\n\n  const handleFormClose = () => {\n    setShowAppointmentForm(false);\n    setShowPatientForm(false);\n    setShowCompleteTreatment(false);\n    setSelectedAppointment(null);\n    loadData();\n  };\n\n  if (showAppointmentForm) return <AppointmentForm appointment={null} patients={patients} onClose={handleFormClose} />;\n  if (showPatientForm) return <PatientForm patient={null} onClose={handleFormClose} />;\n  if (showCompleteTreatment && selectedAppointment)\n    return <AppointmentForm appointment={{ ...selectedAppointment, status: 'completed' }} patients={patients} onClose={handleFormClose} />;\n\n  const statCards = [\n    { title: 'Total Patients', value: stats.totalPatients, icon: Users, variant: 'primary' },\n    { title: 'Total Appointments', value: stats.totalAppointments, icon: Calendar, variant: 'success' },\n    { title: 'Monthly Revenue', value: `$${stats.monthlyRevenue.toLocaleString()}`, icon: DollarSign, variant: 'info' },\n    { title: 'Completion Rate', value: `${stats.totalAppointments > 0 ? Math.round((stats.completedAppointments / stats.totalAppointments) * 100) : 0}%`, icon: TrendingUp, variant: 'warning' }\n  ];\n\n  return (\n    <div className=\"container py-4\">\n      <div className=\"d-flex justify-content-between align-items-center mb-4\">\n        <h2>Dashboard</h2>\n        <small className=\"text-muted\">Last updated: {new Date().toLocaleString()}</small>\n      </div>\n\n      <div className=\"row g-4 mb-4\">\n        {statCards.map(({ title, value, icon: Icon, variant }, i) => (\n          <div key={i} className=\"col-md-3\">\n            <div className=\"card border-0 shadow-sm\">\n              <div className=\"card-body d-flex align-items-center\">\n                <div className={`bg-${variant} text-white rounded-circle d-flex align-items-center justify-content-center`} style={{ width: 40, height: 40 }}>\n                  <Icon size={20} />\n                </div>\n                <div className=\"ms-3\">\n                  <h6 className=\"mb-0 text-muted\">{title}</h6>\n                  <h4 className=\"mb-0\">{value}</h4>\n                </div>\n              </div>\n            </div>\n          </div>\n        ))}\n      </div>\n\n      <div className=\"row g-4\">\n        <div className=\"col-lg-6\">\n          <div className=\"card\">\n            <div className=\"card-header d-flex justify-content-between align-items-center\">\n              <h5 className=\"mb-0\"><Clock size={18} className=\"me-2 text-primary\" /> Upcoming Appointments</h5>\n              <button onClick={() => navigate('/appointments')} className=\"btn btn-link\">View All</button>\n            </div>\n            <div className=\"card-body\">\n              {upcomingAppointments.length === 0 ? <p className=\"text-muted\">No upcoming appointments</p> : (\n                <ul className=\"list-group\">\n                  {upcomingAppointments.map(a => (\n                    <li key={a.id} className=\"list-group-item d-flex justify-content-between align-items-center\">\n                      <div>\n                        <strong>{a.patientName}</strong><br />\n                        <small>{a.title}</small><br />\n                        <small className=\"text-muted\">\n                          {new Date(a.appointmentDate).toLocaleDateString()} at {new Date(a.appointmentDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}\n                        </small>\n                      </div>\n                      <span className={`badge bg-${a.status === 'pending-approval' ? 'warning' : 'primary'} text-uppercase`}>{a.status.replace('-', ' ')}</span>\n                    </li>\n                  ))}\n                </ul>\n              )}\n            </div>\n          </div>\n        </div>\n\n        <div className=\"col-lg-6\">\n          <div className=\"card\">\n            <div className=\"card-header d-flex justify-content-between align-items-center\">\n              <h5 className=\"mb-0\"><Users size={18} className=\"me-2 text-success\" /> Recent Patients</h5>\n              <button onClick={() => navigate('/patients')} className=\"btn btn-link\">View All</button>\n            </div>\n            <div className=\"card-body\">\n              {recentPatients.length === 0 ? <p className=\"text-muted\">No patients found</p> : (\n                <ul className=\"list-group\">\n                  {recentPatients.map(p => (\n                    <li key={p.id} className=\"list-group-item\">\n                      <strong>{p.firstName} {p.lastName}</strong><br />\n                      <small className=\"text-muted\">{p.email}</small><br />\n                      <small className=\"text-muted\">Joined {new Date(p.createdAt).toLocaleDateString()}</small>\n                    </li>\n                  ))}\n                </ul>\n              )}\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div className=\"card mt-4\">\n        <div className=\"card-body\">\n          <h5 className=\"card-title mb-3\">Quick Actions</h5>\n          <div className=\"d-flex gap-3\">\n            <button className=\"btn btn-outline-primary flex-fill\" onClick={() => setShowPatientForm(true)}>\n              <Users className=\"me-2\" /> Add New Patient\n            </button>\n            <button className=\"btn btn-outline-success flex-fill\" onClick={() => setShowAppointmentForm(true)}>\n              <Calendar className=\"me-2\" /> Schedule Appointment\n            </button>\n            <button className=\"btn btn-outline-warning flex-fill\" onClick={handleCompleteTreatment}>\n              <CheckCircle className=\"me-2\" /> Complete Treatment\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  );\n}",
      "display_name": null
    },
    {
      "name": "loadData",
      "file_path": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/AdminDashboard.jsx",
      "line_start": 31,
      "line_end": 71,
      "parameters": [],
      "docstring": null,
      "is_method": false,
      "class_name": null,
      "code_snippet": "loadData = () => {\n    const allPatients = getPatients();\n    const appointments = getAppointments();\n    setPatients(allPatients);\n\n    const completedAppts = appointments.filter(a => a.status === 'completed');\n    const pendingAppts = appointments.filter(a => ['scheduled', 'in-progress', 'pending-approval'].includes(a.status));\n    const totalRevenue = completedAppts.reduce((sum, a) => sum + (a.cost || 0), 0);\n    const currentMonth = new Date().getMonth();\n    const currentYear = new Date().getFullYear();\n    const monthlyRevenue = completedAppts\n      .filter(a => {\n        const date = new Date(a.appointmentDate);\n        return date.getMonth() === currentMonth && date.getFullYear() === currentYear;\n      })\n      .reduce((sum, a) => sum + (a.cost || 0), 0);\n\n    setStats({\n      totalPatients: allPatients.length,\n      totalAppointments: appointments.length,\n      completedAppointments: completedAppts.length,\n      pendingAppointments: pendingAppts.length,\n      totalRevenue,\n      monthlyRevenue,\n    });\n\n    const upcoming = appointments\n      .filter(a => new Date(a.appointmentDate) >= new Date() && ['scheduled', 'pending-approval'].includes(a.status))\n      .sort((a, b) => new Date(a.appointmentDate) - new Date(b.appointmentDate))\n      .slice(0, 10)\n      .map(a => {\n        const patient = allPatients.find(p => p.id === a.patientId);\n        return {\n          ...a,\n          patientName: patient ? `${patient.firstName} ${patient.lastName}` : 'Unknown Patient'\n        };\n      });\n\n    setUpcomingAppointments(upcoming);\n    setRecentPatients(allPatients.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 5));\n  }",
      "display_name": null
    },
    {
      "name": "handleCompleteTreatment",
      "file_path": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/AdminDashboard.jsx",
      "line_start": 73,
      "line_end": 81,
      "parameters": [],
      "docstring": null,
      "is_method": false,
      "class_name": null,
      "code_snippet": "handleCompleteTreatment = () => {\n    const nextAppointment = upcomingAppointments.find(a => a.status === 'scheduled');\n    if (nextAppointment) {\n      setSelectedAppointment(nextAppointment);\n      setShowCompleteTreatment(true);\n    } else {\n      setShowAppointmentForm(true);\n    }\n  }",
      "display_name": null
    },
    {
      "name": "handleFormClose",
      "file_path": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/AdminDashboard.jsx",
      "line_start": 83,
      "line_end": 89,
      "parameters": [],
      "docstring": null,
      "is_method": false,
      "class_name": null,
      "code_snippet": "handleFormClose = () => {\n    setShowAppointmentForm(false);\n    setShowPatientForm(false);\n    setShowCompleteTreatment(false);\n    setSelectedAppointment(null);\n    loadData();\n  }",
      "display_name": null
    },
    {
      "name": "PatientDashboard",
      "file_path": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/PatientDashboard.jsx",
      "line_start": 7,
      "line_end": 263,
      "parameters": [],
      "docstring": null,
      "is_method": false,
      "class_name": null,
      "code_snippet": "PatientDashboard = () => {\n  const { user } = useAuth();\n  const [patient, setPatient] = useState(null);\n  const [appointments, setAppointments] = useState([]);\n  const [upcomingAppointments, setUpcomingAppointments] = useState([]);\n  const [pastAppointments, setPastAppointments] = useState([]);\n  const [showAppointmentForm, setShowAppointmentForm] = useState(false);\n\n  useEffect(() => {\n    if (user?.patientId) {\n      loadData();\n    }\n  }, [user]);\n\n  const loadData = () => {\n    if (!user?.patientId) return;\n\n    const patients = getPatients();\n    const foundPatient = patients.find(p => p.id === user.patientId);\n    setPatient(foundPatient || null);\n\n    const allAppointments = getAppointments();\n    const patientAppointments = allAppointments.filter(a => a.patientId === user.patientId);\n    setAppointments(patientAppointments);\n\n    const now = new Date();\n    const upcoming = patientAppointments\n      .filter(a => new Date(a.appointmentDate) >= now && a.status !== 'completed')\n      .sort((a, b) => new Date(a.appointmentDate) - new Date(b.appointmentDate));\n\n    const past = patientAppointments\n      .filter(a => new Date(a.appointmentDate) < now || a.status === 'completed')\n      .sort((a, b) => new Date(b.appointmentDate) - new Date(a.appointmentDate));\n\n    setUpcomingAppointments(upcoming);\n    setPastAppointments(past);\n  };\n\n  const handleFormClose = () => {\n    setShowAppointmentForm(false);\n    loadData();\n  };\n\n  if (showAppointmentForm) {\n    return (\n      <AppointmentForm\n        appointment={null}\n        patients={patient ? [patient] : []}\n        onClose={handleFormClose}\n        preSelectedPatientId={patient?.id}\n      />\n    );\n  }\n\n  if (!patient) {\n    return (\n      <div className=\"d-flex align-items-center justify-content-center min-vh-50\">\n        <div className=\"text-center\">\n          <User className=\"mb-3 text-secondary\" size={48} />\n          <p className=\"text-muted\">Patient information not found</p>\n        </div>\n      </div>\n    );\n  }\n\n  const totalCost = pastAppointments.reduce((sum, apt) => sum + (apt.cost || 0), 0);\n\n  const getStatusColor = (status) => {\n    switch (status) {\n      case 'scheduled': return 'badge bg-primary';\n      case 'in-progress': return 'badge bg-warning text-dark';\n      case 'completed': return 'badge bg-success';\n      case 'cancelled': return 'badge bg-danger';\n      case 'pending-approval': return 'badge bg-orange';\n      default: return 'badge bg-secondary';\n    }\n  };\n\n  return (\n    <div className=\"container py-4\">\n      <div className=\"d-flex justify-content-between align-items-center mb-4\">\n        <h1 className=\"h3\">My Dashboard</h1>\n        <div className=\"d-flex align-items-center gap-3\">\n          <small className=\"text-muted\">Welcome back, {patient.firstName}!</small>\n          <button\n            onClick={() => setShowAppointmentForm(true)}\n            className=\"btn btn-primary btn-sm d-flex align-items-center\"\n          >\n            <Plus className=\"me-2\" size={16} />\n            Request Appointment\n          </button>\n        </div>\n      </div>\n\n      {/* Patient Info Card */}\n      <div className=\"card mb-4\">\n        <div className=\"card-header d-flex align-items-center\">\n          <User className=\"me-2 text-primary\" />\n          <h5 className=\"mb-0\">Personal Information</h5>\n        </div>\n        <div className=\"card-body row g-4\">\n          <div className=\"col-md-6\">\n            <small className=\"text-muted\">Full Name</small>\n            <p className=\"fw-bold mb-0\">{patient.firstName} {patient.lastName}</p>\n          </div>\n          <div className=\"col-md-6\">\n            <small className=\"text-muted\">Date of Birth</small>\n            <p className=\"fw-bold mb-0\">{new Date(patient.dateOfBirth).toLocaleDateString()}</p>\n          </div>\n          <div className=\"col-md-6\">\n            <small className=\"text-muted\">Email</small>\n            <p className=\"fw-bold mb-0 d-flex align-items-center\">\n              <Mail className=\"me-2\" size={16} />{patient.email}\n            </p>\n          </div>\n          <div className=\"col-md-6\">\n            <small className=\"text-muted\">Phone</small>\n            <p className=\"fw-bold mb-0 d-flex align-items-center\">\n              <Phone className=\"me-2\" size={16} />{patient.phone}\n            </p>\n          </div>\n        </div>\n      </div>\n\n      {/* Stats Cards */}\n      <div className=\"row g-4 mb-4\">\n        <div className=\"col-md-4\">\n          <div className=\"card text-center\">\n            <div className=\"card-body\">\n              <Calendar className=\"mb-2 text-primary\" size={24} />\n              <h6 className=\"text-muted\">Total Appointments</h6>\n              <h4 className=\"fw-bold\">{appointments.length}</h4>\n            </div>\n          </div>\n        </div>\n        <div className=\"col-md-4\">\n          <div className=\"card text-center\">\n            <div className=\"card-body\">\n              <Clock className=\"mb-2 text-success\" size={24} />\n              <h6 className=\"text-muted\">Upcoming</h6>\n              <h4 className=\"fw-bold\">{upcomingAppointments.length}</h4>\n            </div>\n          </div>\n        </div>\n        <div className=\"col-md-4\">\n          <div className=\"card text-center\">\n            <div className=\"card-body\">\n              <DollarSign className=\"mb-2 text-purple\" size={24} />\n              <h6 className=\"text-muted\">Total Paid</h6>\n              <h4 className=\"fw-bold\">${totalCost.toLocaleString()}</h4>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div className=\"row g-4\">\n        {/* Upcoming Appointments */}\n        <div className=\"col-lg-6\">\n          <div className=\"card\">\n            <div className=\"card-header d-flex justify-content-between align-items-center\">\n              <div className=\"d-flex align-items-center\">\n                <Clock className=\"me-2 text-primary\" />\n                <h5 className=\"mb-0\">Upcoming Appointments</h5>\n              </div>\n              <button\n                onClick={() => setShowAppointmentForm(true)}\n                className=\"btn btn-link p-0 text-decoration-none\"\n              >\n                Request New\n              </button>\n            </div>\n            <div className=\"card-body\">\n              {upcomingAppointments.length === 0 ? (\n                <div className=\"text-center py-4\">\n                  <Calendar className=\"text-secondary mb-3\" size={48} />\n                  <p className=\"text-muted mb-3\">No upcoming appointments</p>\n                  <button\n                    onClick={() => setShowAppointmentForm(true)}\n                    className=\"btn btn-primary btn-sm d-flex align-items-center mx-auto\"\n                  >\n                    <Plus className=\"me-2\" size={16} /> Request Appointment\n                  </button>\n                </div>\n              ) : (\n                upcomingAppointments.map((appointment) => (\n                  <div key={appointment.id} className=\"mb-3 p-3 border rounded bg-light\">\n                    <div className=\"d-flex justify-content-between align-items-start mb-1\">\n                      <h6 className=\"fw-bold mb-0\">{appointment.title}</h6>\n                      <span className={getStatusColor(appointment.status)}>\n                        {appointment.status.replace('-', ' ')}\n                      </span>\n                    </div>\n                    <p className=\"mb-1\">{appointment.description}</p>\n                    <small className=\"text-muted d-flex align-items-center\">\n                      <Calendar className=\"me-1\" size={14} />\n                      {new Date(appointment.appointmentDate).toLocaleDateString()} at{' '}\n                      {new Date(appointment.appointmentDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}\n                    </small>\n                    {appointment.status === 'pending-approval' && (\n                      <div className=\"mt-2 p-2 bg-warning bg-opacity-25 rounded text-warning\">\n                        <strong>Pending Approval:</strong> Your request is awaiting doctor confirmation.\n                      </div>\n                    )}\n                  </div>\n                ))\n              )}\n            </div>\n          </div>\n        </div>\n\n        {/* Treatment History */}\n        <div className=\"col-lg-6\">\n          <div className=\"card\">\n            <div className=\"card-header d-flex align-items-center\">\n              <FileText className=\"me-2 text-success\" />\n              <h5 className=\"mb-0\">Treatment History</h5>\n            </div>\n            <div className=\"card-body\">\n              {pastAppointments.length === 0 ? (\n                <p className=\"text-muted text-center py-4\">No treatment history</p>\n              ) : (\n                <div className=\"overflow-auto\" style={{ maxHeight: '400px' }}>\n                  {pastAppointments.map((appointment) => (\n                    <div key={appointment.id} className=\"mb-3 p-3 border rounded bg-light\">\n                      <div className=\"d-flex justify-content-between align-items-start mb-1\">\n                        <h6 className=\"fw-bold mb-0\">{appointment.title}</h6>\n                        {appointment.cost && (\n                          <span className=\"text-success fw-bold\">${appointment.cost}</span>\n                        )}\n                      </div>\n                      {appointment.treatment && <p className=\"mb-1\">{appointment.treatment}</p>}\n                      <small className=\"text-muted\">\n                        {new Date(appointment.appointmentDate).toLocaleDateString()}\n                      </small>\n                      {appointment.files && appointment.files.length > 0 && (\n                        <div className=\"mt-2\">\n                          <small className=\"text-muted\">Attachments:</small>\n                          <div className=\"d-flex flex-wrap gap-2 mt-1\">\n                            {appointment.files.map((file) => (\n                              <span key={file.id} className=\"badge bg-primary text-white\">\n                                {file.name}\n                              </span>\n                            ))}\n                          </div>\n                        </div>\n                      )}\n                    </div>\n                  ))}\n                </div>\n              )}\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  );\n}",
      "display_name": null
    },
    {
      "name": "loadData",
      "file_path": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/PatientDashboard.jsx",
      "line_start": 21,
      "line_end": 43,
      "parameters": [],
      "docstring": null,
      "is_method": false,
      "class_name": null,
      "code_snippet": "loadData = () => {\n    if (!user?.patientId) return;\n\n    const patients = getPatients();\n    const foundPatient = patients.find(p => p.id === user.patientId);\n    setPatient(foundPatient || null);\n\n    const allAppointments = getAppointments();\n    const patientAppointments = allAppointments.filter(a => a.patientId === user.patientId);\n    setAppointments(patientAppointments);\n\n    const now = new Date();\n    const upcoming = patientAppointments\n      .filter(a => new Date(a.appointmentDate) >= now && a.status !== 'completed')\n      .sort((a, b) => new Date(a.appointmentDate) - new Date(b.appointmentDate));\n\n    const past = patientAppointments\n      .filter(a => new Date(a.appointmentDate) < now || a.status === 'completed')\n      .sort((a, b) => new Date(b.appointmentDate) - new Date(a.appointmentDate));\n\n    setUpcomingAppointments(upcoming);\n    setPastAppointments(past);\n  }",
      "display_name": null
    },
    {
      "name": "handleFormClose",
      "file_path": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/PatientDashboard.jsx",
      "line_start": 45,
      "line_end": 48,
      "parameters": [],
      "docstring": null,
      "is_method": false,
      "class_name": null,
      "code_snippet": "handleFormClose = () => {\n    setShowAppointmentForm(false);\n    loadData();\n  }",
      "display_name": null
    },
    {
      "name": "getStatusColor",
      "file_path": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/PatientDashboard.jsx",
      "line_start": 74,
      "line_end": 83,
      "parameters": [
        "status"
      ],
      "docstring": null,
      "is_method": false,
      "class_name": null,
      "code_snippet": "getStatusColor = (status) => {\n    switch (status) {\n      case 'scheduled': return 'badge bg-primary';\n      case 'in-progress': return 'badge bg-warning text-dark';\n      case 'completed': return 'badge bg-success';\n      case 'cancelled': return 'badge bg-danger';\n      case 'pending-approval': return 'badge bg-orange';\n      default: return 'badge bg-secondary';\n    }\n  }",
      "display_name": null
    },
    {
      "name": "Header",
      "file_path": "/tmp/gitprobe_l6t5uxrl/src/components/Layout/Header.js",
      "line_start": 6,
      "line_end": 93,
      "parameters": [],
      "docstring": null,
      "is_method": false,
      "class_name": null,
      "code_snippet": "Header = () => {\n  const { user, logout, isAdmin } = useAuth();\n  const location = useLocation();\n\n  const navigation = [\n    { name: 'Dashboard', href: '/', icon: BarChart3, adminOnly: false },\n    { name: 'Patients', href: '/patients', icon: Users, adminOnly: true },\n    { name: 'Appointments', href: '/appointments', icon: Calendar, adminOnly: true },\n    { name: 'Calendar', href: '/calendar', icon: Calendar, adminOnly: true },\n  ];\n\n  const filteredNavigation = navigation.filter(item => !item.adminOnly || isAdmin);\n\n  return (\n    <header className=\"border-bottom bg-white shadow-sm\">\n      <div className=\"container-fluid\">\n        <div className=\"d-flex justify-content-between align-items-center py-2\">\n          <div className=\"d-flex align-items-center\">\n            <h1 className=\"h4 mb-0 fw-bold text-primary\">DentalCare Pro</h1>\n\n            {/* Desktop nav */}\n            <nav className=\"d-none d-md-flex ms-4 gap-3\">\n              {filteredNavigation.map(item => {\n                const Icon = item.icon;\n                const isActive = location.pathname === item.href;\n                return (\n                  <Link\n                    key={item.name}\n                    to={item.href}\n                    className={`d-flex align-items-center px-3 py-2 rounded text-decoration-none transition ${\n                      isActive\n                        ? 'text-primary bg-primary bg-opacity-10'\n                        : 'text-dark text-opacity-75 hover-bg-light'\n                    }`}\n                  >\n                    <Icon size={16} className=\"me-2\" />\n                    <span className=\"small fw-medium\">{item.name}</span>\n                  </Link>\n                );\n              })}\n            </nav>\n          </div>\n\n          <div className=\"d-flex align-items-center gap-3\">\n            <div className=\"d-flex align-items-center gap-2\">\n              <User size={20} className=\"text-secondary\" />\n              <span className=\"small fw-medium text-dark\">{user?.name}</span>\n              <span className=\"badge bg-secondary text-capitalize\">\n                {user?.role === 'admin' ? 'Dentist' : 'Patient'}\n              </span>\n            </div>\n            <button\n              onClick={logout}\n              className=\"btn btn-sm btn-outline-danger d-flex align-items-center gap-2\"\n            >\n              <LogOut size={16} />\n              Logout\n            </button>\n          </div>\n        </div>\n      </div>\n\n      {/* Mobile nav */}\n      <div className=\"d-md-none border-top\">\n        <div className=\"container-fluid py-2\">\n          {filteredNavigation.map(item => {\n            const Icon = item.icon;\n            const isActive = location.pathname === item.href;\n            return (\n              <Link\n                key={item.name}\n                to={item.href}\n                className={`d-flex align-items-center px-3 py-2 rounded text-decoration-none transition ${\n                  isActive\n                    ? 'text-primary bg-primary bg-opacity-10'\n                    : 'text-dark text-opacity-75 hover-bg-light'\n                }`}\n              >\n                <Icon size={16} className=\"me-2\" />\n                <span className=\"small fw-medium\">{item.name}</span>\n              </Link>\n            );\n          })}\n        </div>\n      </div>\n    </header>\n  );\n}",
      "display_name": null
    },
    {
      "name": "PatientForm",
      "file_path": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientForm.js",
      "line_start": 5,
      "line_end": 236,
      "parameters": [],
      "docstring": null,
      "is_method": false,
      "class_name": null,
      "code_snippet": "PatientForm = ({ patient, onClose }) => {\n  const [formData, setFormData] = useState({\n    firstName: patient?.firstName || '',\n    lastName: patient?.lastName || '',\n    dateOfBirth: patient?.dateOfBirth || '',\n    email: patient?.email || '',\n    phone: patient?.phone || '',\n    address: patient?.address || '',\n    emergencyContact: patient?.emergencyContact || '',\n    emergencyPhone: patient?.emergencyPhone || '',\n    medicalHistory: patient?.medicalHistory || '',\n    allergies: patient?.allergies || '',\n  });\n\n  const [errors, setErrors] = useState({});\n\n  const validateForm = () => {\n    const newErrors = {};\n\n    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';\n    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';\n    if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';\n    if (!formData.email.trim()) newErrors.email = 'Email is required';\n    else if (!/\\S+@\\S+\\.\\S+/.test(formData.email)) newErrors.email = 'Email is invalid';\n    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';\n    if (!formData.address.trim()) newErrors.address = 'Address is required';\n\n    setErrors(newErrors);\n    return Object.keys(newErrors).length === 0;\n  };\n\n  const handleSubmit = (e) => {\n    e.preventDefault();\n    if (!validateForm()) return;\n\n    const patientData = {\n      id: patient?.id || `p${Date.now()}`,\n      ...formData,\n      createdAt: patient?.createdAt || new Date().toISOString(),\n      updatedAt: new Date().toISOString(),\n    };\n\n    if (patient) {\n      updatePatient(patient.id, patientData);\n    } else {\n      addPatient(patientData);\n    }\n\n    onClose();\n  };\n\n  const handleChange = (e) => {\n    const { name, value } = e.target;\n    setFormData(prev => ({ ...prev, [name]: value }));\n    if (errors[name]) {\n      setErrors(prev => ({ ...prev, [name]: '' }));\n    }\n  };\n\n  return (\n    <div className=\"mb-4\">\n      <div className=\"d-flex justify-content-between align-items-center mb-4\">\n        <h1 className=\"h3 fw-bold text-dark mb-0\">{patient ? 'Edit Patient' : 'Add New Patient'}</h1>\n        <button onClick={onClose} className=\"btn btn-link text-secondary p-0\">\n          <X size={24} />\n        </button>\n      </div>\n\n      <div className=\"card shadow-sm border-0\">\n        <div className=\"card-body\">\n          <form onSubmit={handleSubmit}>\n            {/* Personal Information */}\n            <h5 className=\"fw-bold mb-3\">Personal Information</h5>\n            <div className=\"row g-3 mb-4\">\n              <div className=\"col-md-6\">\n                <label htmlFor=\"firstName\" className=\"form-label\">First Name *</label>\n                <input\n                  type=\"text\"\n                  className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}\n                  id=\"firstName\"\n                  name=\"firstName\"\n                  value={formData.firstName}\n                  onChange={handleChange}\n                />\n                {errors.firstName && <div className=\"invalid-feedback\">{errors.firstName}</div>}\n              </div>\n\n              <div className=\"col-md-6\">\n                <label htmlFor=\"lastName\" className=\"form-label\">Last Name *</label>\n                <input\n                  type=\"text\"\n                  className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}\n                  id=\"lastName\"\n                  name=\"lastName\"\n                  value={formData.lastName}\n                  onChange={handleChange}\n                />\n                {errors.lastName && <div className=\"invalid-feedback\">{errors.lastName}</div>}\n              </div>\n\n              <div className=\"col-md-6\">\n                <label htmlFor=\"dateOfBirth\" className=\"form-label\">Date of Birth *</label>\n                <input\n                  type=\"date\"\n                  className={`form-control ${errors.dateOfBirth ? 'is-invalid' : ''}`}\n                  id=\"dateOfBirth\"\n                  name=\"dateOfBirth\"\n                  value={formData.dateOfBirth}\n                  onChange={handleChange}\n                />\n                {errors.dateOfBirth && <div className=\"invalid-feedback\">{errors.dateOfBirth}</div>}\n              </div>\n\n              <div className=\"col-md-6\">\n                <label htmlFor=\"email\" className=\"form-label\">Email *</label>\n                <input\n                  type=\"email\"\n                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}\n                  id=\"email\"\n                  name=\"email\"\n                  value={formData.email}\n                  onChange={handleChange}\n                />\n                {errors.email && <div className=\"invalid-feedback\">{errors.email}</div>}\n              </div>\n\n              <div className=\"col-md-6\">\n                <label htmlFor=\"phone\" className=\"form-label\">Phone Number *</label>\n                <input\n                  type=\"tel\"\n                  className={`form-control ${errors.phone ? 'is-invalid' : ''}`}\n                  id=\"phone\"\n                  name=\"phone\"\n                  value={formData.phone}\n                  onChange={handleChange}\n                />\n                {errors.phone && <div className=\"invalid-feedback\">{errors.phone}</div>}\n              </div>\n\n              <div className=\"col-12\">\n                <label htmlFor=\"address\" className=\"form-label\">Address *</label>\n                <input\n                  type=\"text\"\n                  className={`form-control ${errors.address ? 'is-invalid' : ''}`}\n                  id=\"address\"\n                  name=\"address\"\n                  value={formData.address}\n                  onChange={handleChange}\n                />\n                {errors.address && <div className=\"invalid-feedback\">{errors.address}</div>}\n              </div>\n            </div>\n\n            {/* Emergency Contact */}\n            <h5 className=\"fw-bold mb-3\">Emergency Contact</h5>\n            <div className=\"row g-3 mb-4\">\n              <div className=\"col-md-6\">\n                <label htmlFor=\"emergencyContact\" className=\"form-label\">Contact Name</label>\n                <input\n                  type=\"text\"\n                  className=\"form-control\"\n                  id=\"emergencyContact\"\n                  name=\"emergencyContact\"\n                  value={formData.emergencyContact}\n                  onChange={handleChange}\n                />\n              </div>\n\n              <div className=\"col-md-6\">\n                <label htmlFor=\"emergencyPhone\" className=\"form-label\">Contact Phone</label>\n                <input\n                  type=\"tel\"\n                  className=\"form-control\"\n                  id=\"emergencyPhone\"\n                  name=\"emergencyPhone\"\n                  value={formData.emergencyPhone}\n                  onChange={handleChange}\n                />\n              </div>\n            </div>\n\n            {/* Medical Information */}\n            <h5 className=\"fw-bold mb-3\">Medical Information</h5>\n            <div className=\"mb-4\">\n              <label htmlFor=\"medicalHistory\" className=\"form-label\">Medical History</label>\n              <textarea\n                className=\"form-control\"\n                id=\"medicalHistory\"\n                name=\"medicalHistory\"\n                rows={3}\n                value={formData.medicalHistory}\n                onChange={handleChange}\n                placeholder=\"Previous conditions, surgeries, medications...\"\n              />\n            </div>\n\n            <div className=\"mb-4\">\n              <label htmlFor=\"allergies\" className=\"form-label\">Allergies</label>\n              <textarea\n                className=\"form-control\"\n                id=\"allergies\"\n                name=\"allergies\"\n                rows={2}\n                value={formData.allergies}\n                onChange={handleChange}\n                placeholder=\"Known allergies to medications, materials, etc.\"\n              />\n            </div>\n\n            {/* Form Actions */}\n            <div className=\"d-flex justify-content-end gap-2 pt-3 border-top\">\n              <button\n                type=\"button\"\n                onClick={onClose}\n                className=\"btn btn-secondary\"\n              >\n                Cancel\n              </button>\n              <button\n                type=\"submit\"\n                className=\"btn btn-primary d-flex align-items-center\"\n              >\n                <Save size={16} className=\"me-2\" />\n                {patient ? 'Update Patient' : 'Add Patient'}\n              </button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  );\n}",
      "display_name": null
    },
    {
      "name": "validateForm",
      "file_path": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientForm.js",
      "line_start": 21,
      "line_end": 34,
      "parameters": [],
      "docstring": null,
      "is_method": false,
      "class_name": null,
      "code_snippet": "validateForm = () => {\n    const newErrors = {};\n\n    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';\n    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';\n    if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';\n    if (!formData.email.trim()) newErrors.email = 'Email is required';\n    else if (!/\\S+@\\S+\\.\\S+/.test(formData.email)) newErrors.email = 'Email is invalid';\n    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';\n    if (!formData.address.trim()) newErrors.address = 'Address is required';\n\n    setErrors(newErrors);\n    return Object.keys(newErrors).length === 0;\n  }",
      "display_name": null
    },
    {
      "name": "handleSubmit",
      "file_path": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientForm.js",
      "line_start": 36,
      "line_end": 54,
      "parameters": [
        "e"
      ],
      "docstring": null,
      "is_method": false,
      "class_name": null,
      "code_snippet": "handleSubmit = (e) => {\n    e.preventDefault();\n    if (!validateForm()) return;\n\n    const patientData = {\n      id: patient?.id || `p${Date.now()}`,\n      ...formData,\n      createdAt: patient?.createdAt || new Date().toISOString(),\n      updatedAt: new Date().toISOString(),\n    };\n\n    if (patient) {\n      updatePatient(patient.id, patientData);\n    } else {\n      addPatient(patientData);\n    }\n\n    onClose();\n  }",
      "display_name": null
    },
    {
      "name": "handleChange",
      "file_path": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientForm.js",
      "line_start": 56,
      "line_end": 62,
      "parameters": [
        "e"
      ],
      "docstring": null,
      "is_method": false,
      "class_name": null,
      "code_snippet": "handleChange = (e) => {\n    const { name, value } = e.target;\n    setFormData(prev => ({ ...prev, [name]: value }));\n    if (errors[name]) {\n      setErrors(prev => ({ ...prev, [name]: '' }));\n    }\n  }",
      "display_name": null
    },
    {
      "name": "PatientList",
      "file_path": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientList.js",
      "line_start": 6,
      "line_end": 239,
      "parameters": [],
      "docstring": null,
      "is_method": false,
      "class_name": null,
      "code_snippet": "PatientList = () => {\n  const [patients, setPatients] = useState([]);\n  const [filteredPatients, setFilteredPatients] = useState([]);\n  const [searchTerm, setSearchTerm] = useState('');\n  const [showForm, setShowForm] = useState(false);\n  const [editingPatient, setEditingPatient] = useState(null);\n  const [selectedPatient, setSelectedPatient] = useState(null);\n\n  useEffect(() => {\n    loadPatients();\n  }, []);\n\n  useEffect(() => {\n    const filtered = patients.filter(patient =>\n      `${patient.firstName} ${patient.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||\n      patient.email.toLowerCase().includes(searchTerm.toLowerCase()) ||\n      patient.phone.includes(searchTerm)\n    );\n    setFilteredPatients(filtered);\n  }, [patients, searchTerm]);\n\n  const loadPatients = () => {\n    const allPatients = getPatients();\n    setPatients(allPatients);\n  };\n\n  const handleDelete = (patientId) => {\n    if (window.confirm('Are you sure you want to delete this patient?')) {\n      deletePatient(patientId);\n      loadPatients();\n    }\n  };\n\n  const handleEdit = (patient) => {\n    setEditingPatient(patient);\n    setShowForm(true);\n  };\n\n  const handleFormClose = () => {\n    setShowForm(false);\n    setEditingPatient(null);\n    loadPatients();\n  };\n\n  if (showForm) {\n    return (\n      <PatientForm\n        patient={editingPatient}\n        onClose={handleFormClose}\n      />\n    );\n  }\n\n  if (selectedPatient) {\n    return (\n      <div className=\"mb-4\">\n        <button\n          onClick={() => setSelectedPatient(null)}\n          className=\"btn btn-link text-primary fw-medium mb-3 p-0\"\n        >\n          ← Back to Patients\n        </button>\n\n        <div className=\"card shadow-sm\">\n          <div className=\"card-body\">\n            <div className=\"d-flex align-items-center mb-4\">\n              <Users className=\"me-2 text-primary\" size={24} />\n              <h2 className=\"h4 fw-bold mb-0\">\n                {selectedPatient.firstName} {selectedPatient.lastName}\n              </h2>\n            </div>\n\n            <div className=\"row gy-4\">\n              <div className=\"col-md-6\">\n                <h5 className=\"fw-bold mb-3\">Personal Information</h5>\n                <div className=\"mb-2\">\n                  <small className=\"text-muted\">Date of Birth</small>\n                  <p className=\"mb-0 fw-medium\">{new Date(selectedPatient.dateOfBirth).toLocaleDateString()}</p>\n                </div>\n                <div className=\"mb-2\">\n                  <small className=\"text-muted\">Email</small>\n                  <p className=\"mb-0 fw-medium\">{selectedPatient.email}</p>\n                </div>\n                <div className=\"mb-2\">\n                  <small className=\"text-muted\">Phone</small>\n                  <p className=\"mb-0 fw-medium\">{selectedPatient.phone}</p>\n                </div>\n                <div className=\"mb-2\">\n                  <small className=\"text-muted\">Address</small>\n                  <p className=\"mb-0 fw-medium\">{selectedPatient.address}</p>\n                </div>\n              </div>\n\n              <div className=\"col-md-6\">\n                <h5 className=\"fw-bold mb-3\">Emergency Contact</h5>\n                <div className=\"mb-2\">\n                  <small className=\"text-muted\">Contact Name</small>\n                  <p className=\"mb-0 fw-medium\">{selectedPatient.emergencyContact}</p>\n                </div>\n                <div className=\"mb-2\">\n                  <small className=\"text-muted\">Contact Phone</small>\n                  <p className=\"mb-0 fw-medium\">{selectedPatient.emergencyPhone}</p>\n                </div>\n\n                <h5 className=\"fw-bold mt-4 mb-3\">Medical Information</h5>\n                <div className=\"mb-2\">\n                  <small className=\"text-muted\">Medical History</small>\n                  <p className=\"mb-0 fw-medium\">{selectedPatient.medicalHistory}</p>\n                </div>\n                <div className=\"mb-2\">\n                  <small className=\"text-muted\">Allergies</small>\n                  <p className=\"mb-0 fw-medium\">{selectedPatient.allergies}</p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    );\n  }\n\n  return (\n    <div className=\"mb-4\">\n      <div className=\"d-flex justify-content-between align-items-center mb-3\">\n        <h1 className=\"h3 fw-bold text-dark mb-0\">Patients</h1>\n        <button\n          onClick={() => setShowForm(true)}\n          className=\"btn btn-primary d-flex align-items-center\"\n        >\n          <Plus size={16} className=\"me-2\" />\n          Add Patient\n        </button>\n      </div>\n\n      {/* Search */}\n      <div className=\"card shadow-sm mb-4\">\n        <div className=\"card-body\">\n          <div className=\"input-group\">\n            <span className=\"input-group-text bg-white border-end-0\">\n              <Search className=\"text-muted\" size={16} />\n            </span>\n            <input\n              type=\"text\"\n              className=\"form-control border-start-0\"\n              placeholder=\"Search patients by name, email, or phone...\"\n              value={searchTerm}\n              onChange={(e) => setSearchTerm(e.target.value)}\n            />\n          </div>\n        </div>\n      </div>\n\n      {/* Patients List */}\n      <div className=\"card shadow-sm\">\n        <div className=\"table-responsive\">\n          {filteredPatients.length === 0 ? (\n            <div className=\"text-center p-5\">\n              <Users className=\"text-muted mb-3\" size={48} />\n              <p className=\"text-muted\">\n                {searchTerm ? 'No patients found matching your search.' : 'No patients found.'}\n              </p>\n              <button\n                onClick={() => setShowForm(true)}\n                className=\"btn btn-primary d-flex align-items-center\"\n              >\n                <Plus size={16} className=\"me-2\" />\n                Add First Patient\n              </button>\n            </div>\n          ) : (\n            <table className=\"table table-hover mb-0\">\n              <thead className=\"table-light\">\n                <tr>\n                  <th>Patient</th>\n                  <th>Contact</th>\n                  <th>Date of Birth</th>\n                  <th>Registration Date</th>\n                  <th className=\"text-end\">Actions</th>\n                </tr>\n              </thead>\n              <tbody>\n                {filteredPatients.map((patient) => (\n                  <tr key={patient.id}>\n                    <td>\n                      <div className=\"d-flex align-items-center\">\n                        <div className=\"bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center\" style={{width: '40px', height: '40px'}}>\n                          <Users className=\"text-primary\" size={20} />\n                        </div>\n                        <div className=\"ms-3 fw-medium\">\n                          {patient.firstName} {patient.lastName}\n                        </div>\n                      </div>\n                    </td>\n                    <td>\n                      <div>{patient.email}</div>\n                      <div className=\"text-muted\">{patient.phone}</div>\n                    </td>\n                    <td>{new Date(patient.dateOfBirth).toLocaleDateString()}</td>\n                    <td>{new Date(patient.createdAt).toLocaleDateString()}</td>\n                    <td className=\"text-end\">\n                      <div className=\"d-flex justify-content-end gap-2\">\n                        <button\n                          onClick={() => setSelectedPatient(patient)}\n                          className=\"btn btn-link p-0 text-primary\"\n                          title=\"View Details\"\n                        >\n                          <Eye size={16} />\n                        </button>\n                        <button\n                          onClick={() => handleEdit(patient)}\n                          className=\"btn btn-link p-0 text-info\"\n                          title=\"Edit\"\n                        >\n                          <Edit size={16} />\n                        </button>\n                        <button\n                          onClick={() => handleDelete(patient.id)}\n                          className=\"btn btn-link p-0 text-danger\"\n                          title=\"Delete\"\n                        >\n                          <Trash2 size={16} />\n                        </button>\n                      </div>\n                    </td>\n                  </tr>\n                ))}\n              </tbody>\n            </table>\n          )}\n        </div>\n      </div>\n    </div>\n  );\n}",
      "display_name": null
    },
    {
      "name": "loadPatients",
      "file_path": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientList.js",
      "line_start": 27,
      "line_end": 30,
      "parameters": [],
      "docstring": null,
      "is_method": false,
      "class_name": null,
      "code_snippet": "loadPatients = () => {\n    const allPatients = getPatients();\n    setPatients(allPatients);\n  }",
      "display_name": null
    },
    {
      "name": "handleDelete",
      "file_path": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientList.js",
      "line_start": 32,
      "line_end": 37,
      "parameters": [
        "patientId"
      ],
      "docstring": null,
      "is_method": false,
      "class_name": null,
      "code_snippet": "handleDelete = (patientId) => {\n    if (window.confirm('Are you sure you want to delete this patient?')) {\n      deletePatient(patientId);\n      loadPatients();\n    }\n  }",
      "display_name": null
    },
    {
      "name": "handleEdit",
      "file_path": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientList.js",
      "line_start": 39,
      "line_end": 42,
      "parameters": [
        "patient"
      ],
      "docstring": null,
      "is_method": false,
      "class_name": null,
      "code_snippet": "handleEdit = (patient) => {\n    setEditingPatient(patient);\n    setShowForm(true);\n  }",
      "display_name": null
    },
    {
      "name": "handleFormClose",
      "file_path": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientList.js",
      "line_start": 44,
      "line_end": 48,
      "parameters": [],
      "docstring": null,
      "is_method": false,
      "class_name": null,
      "code_snippet": "handleFormClose = () => {\n    setShowForm(false);\n    setEditingPatient(null);\n    loadPatients();\n  }",
      "display_name": null
    },
    {
      "name": "useAuth",
      "file_path": "/tmp/gitprobe_l6t5uxrl/src/contexts/AuthContext.jsx",
      "line_start": 6,
      "line_end": 12,
      "parameters": [],
      "docstring": null,
      "is_method": false,
      "class_name": null,
      "code_snippet": "useAuth = () => {\n  const context = useContext(AuthContext);\n  if (context === undefined) {\n    throw new Error('useAuth must be used within an AuthProvider');\n  }\n  return context;\n}",
      "display_name": null
    },
    {
      "name": "AuthProvider",
      "file_path": "/tmp/gitprobe_l6t5uxrl/src/contexts/AuthContext.jsx",
      "line_start": 14,
      "line_end": 53,
      "parameters": [],
      "docstring": null,
      "is_method": false,
      "class_name": null,
      "code_snippet": "AuthProvider = ({ children }) => {\n  const [user, setUser] = useState(null);\n\n  useEffect(() => {\n    initializeStorage();\n    const currentUser = getCurrentUser();\n    setUser(currentUser);\n  }, []);\n\n  const login = (email, password) => {\n    const users = getUsers();\n    const foundUser = users.find(u => u.email === email && u.password === password);\n\n    if (foundUser) {\n      setUser(foundUser);\n      setCurrentUser(foundUser);\n      return true;\n    }\n    return false;\n  };\n\n  const logout = () => {\n    setUser(null);\n    setCurrentUser(null);\n  };\n\n  const value = {\n    user,\n    login,\n    logout,\n    isAuthenticated: user !== null,\n    isAdmin: user?.role === 'admin'\n  };\n\n  return (\n    <AuthContext.Provider value={value}>\n      {children}\n    </AuthContext.Provider>\n  );\n}",
      "display_name": null
    },
    {
      "name": "login",
      "file_path": "/tmp/gitprobe_l6t5uxrl/src/contexts/AuthContext.jsx",
      "line_start": 23,
      "line_end": 33,
      "parameters": [
        "email",
        "password"
      ],
      "docstring": null,
      "is_method": false,
      "class_name": null,
      "code_snippet": "login = (email, password) => {\n    const users = getUsers();\n    const foundUser = users.find(u => u.email === email && u.password === password);\n\n    if (foundUser) {\n      setUser(foundUser);\n      setCurrentUser(foundUser);\n      return true;\n    }\n    return false;\n  }",
      "display_name": null
    },
    {
      "name": "logout",
      "file_path": "/tmp/gitprobe_l6t5uxrl/src/contexts/AuthContext.jsx",
      "line_start": 35,
      "line_end": 38,
      "parameters": [],
      "docstring": null,
      "is_method": false,
      "class_name": null,
      "code_snippet": "logout = () => {\n    setUser(null);\n    setCurrentUser(null);\n  }",
      "display_name": null
    },
    {
      "name": "reportWebVitals",
      "file_path": "/tmp/gitprobe_l6t5uxrl/src/reportWebVitals.js",
      "line_start": 1,
      "line_end": 11,
      "parameters": [],
      "docstring": null,
      "is_method": false,
      "class_name": null,
      "code_snippet": "reportWebVitals = onPerfEntry => {\n  if (onPerfEntry && onPerfEntry instanceof Function) {\n    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {\n      getCLS(onPerfEntry);\n      getFID(onPerfEntry);\n      getFCP(onPerfEntry);\n      getLCP(onPerfEntry);\n      getTTFB(onPerfEntry);\n    });\n  }\n}",
      "display_name": null
    },
    {
      "name": "initializeStorage",
      "file_path": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js",
      "line_start": 89,
      "line_end": 99,
      "parameters": [],
      "docstring": null,
      "is_method": false,
      "class_name": null,
      "code_snippet": "initializeStorage = () => {\n  if (!localStorage.getItem(STORAGE_KEYS.USERS)) {\n    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(defaultUsers));\n  }\n  if (!localStorage.getItem(STORAGE_KEYS.PATIENTS)) {\n    localStorage.setItem(STORAGE_KEYS.PATIENTS, JSON.stringify(defaultPatients));\n  }\n  if (!localStorage.getItem(STORAGE_KEYS.APPOINTMENTS)) {\n    localStorage.setItem(STORAGE_KEYS.APPOINTMENTS, JSON.stringify(defaultAppointments));\n  }\n}",
      "display_name": null
    },
    {
      "name": "getUsers",
      "file_path": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js",
      "line_start": 102,
      "line_end": 105,
      "parameters": [],
      "docstring": null,
      "is_method": false,
      "class_name": null,
      "code_snippet": "getUsers = () => {\n  const users = localStorage.getItem(STORAGE_KEYS.USERS);\n  return users ? JSON.parse(users) : [];\n}",
      "display_name": null
    },
    {
      "name": "getCurrentUser",
      "file_path": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js",
      "line_start": 107,
      "line_end": 110,
      "parameters": [],
      "docstring": null,
      "is_method": false,
      "class_name": null,
      "code_snippet": "getCurrentUser = () => {\n  const user = localStorage.getItem(STORAGE_KEYS.CURRENT_USER);\n  return user ? JSON.parse(user) : null;\n}",
      "display_name": null
    },
    {
      "name": "setCurrentUser",
      "file_path": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js",
      "line_start": 112,
      "line_end": 118,
      "parameters": [
        "user"
      ],
      "docstring": null,
      "is_method": false,
      "class_name": null,
      "code_snippet": "setCurrentUser = (user) => {\n  if (user) {\n    localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(user));\n  } else {\n    localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);\n  }\n}",
      "display_name": null
    },
    {
      "name": "getPatients",
      "file_path": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js",
      "line_start": 121,
      "line_end": 124,
      "parameters": [],
      "docstring": null,
      "is_method": false,
      "class_name": null,
      "code_snippet": "getPatients = () => {\n  const patients = localStorage.getItem(STORAGE_KEYS.PATIENTS);\n  return patients ? JSON.parse(patients) : [];\n}",
      "display_name": null
    },
    {
      "name": "savePatients",
      "file_path": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js",
      "line_start": 126,
      "line_end": 128,
      "parameters": [
        "patients"
      ],
      "docstring": null,
      "is_method": false,
      "class_name": null,
      "code_snippet": "savePatients = (patients) => {\n  localStorage.setItem(STORAGE_KEYS.PATIENTS, JSON.stringify(patients));\n}",
      "display_name": null
    },
    {
      "name": "addPatient",
      "file_path": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js",
      "line_start": 130,
      "line_end": 134,
      "parameters": [
        "patient"
      ],
      "docstring": null,
      "is_method": false,
      "class_name": null,
      "code_snippet": "addPatient = (patient) => {\n  const patients = getPatients();\n  patients.push(patient);\n  savePatients(patients);\n}",
      "display_name": null
    },
    {
      "name": "updatePatient",
      "file_path": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js",
      "line_start": 136,
      "line_end": 143,
      "parameters": [
        "patientId",
        "updates"
      ],
      "docstring": null,
      "is_method": false,
      "class_name": null,
      "code_snippet": "updatePatient = (patientId, updates) => {\n  const patients = getPatients();\n  const index = patients.findIndex(p => p.id === patientId);\n  if (index !== -1) {\n    patients[index] = { ...patients[index], ...updates, updatedAt: new Date().toISOString() };\n    savePatients(patients);\n  }\n}",
      "display_name": null
    },
    {
      "name": "deletePatient",
      "file_path": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js",
      "line_start": 145,
      "line_end": 148,
      "parameters": [
        "patientId"
      ],
      "docstring": null,
      "is_method": false,
      "class_name": null,
      "code_snippet": "deletePatient = (patientId) => {\n  const patients = getPatients().filter(p => p.id !== patientId);\n  savePatients(patients);\n}",
      "display_name": null
    },
    {
      "name": "getAppointments",
      "file_path": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js",
      "line_start": 151,
      "line_end": 154,
      "parameters": [],
      "docstring": null,
      "is_method": false,
      "class_name": null,
      "code_snippet": "getAppointments = () => {\n  const appointments = localStorage.getItem(STORAGE_KEYS.APPOINTMENTS);\n  return appointments ? JSON.parse(appointments) : [];\n}",
      "display_name": null
    },
    {
      "name": "saveAppointments",
      "file_path": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js",
      "line_start": 156,
      "line_end": 158,
      "parameters": [
        "appointments"
      ],
      "docstring": null,
      "is_method": false,
      "class_name": null,
      "code_snippet": "saveAppointments = (appointments) => {\n  localStorage.setItem(STORAGE_KEYS.APPOINTMENTS, JSON.stringify(appointments));\n}",
      "display_name": null
    },
    {
      "name": "addAppointment",
      "file_path": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js",
      "line_start": 160,
      "line_end": 164,
      "parameters": [
        "appointment"
      ],
      "docstring": null,
      "is_method": false,
      "class_name": null,
      "code_snippet": "addAppointment = (appointment) => {\n  const appointments = getAppointments();\n  appointments.push(appointment);\n  saveAppointments(appointments);\n}",
      "display_name": null
    },
    {
      "name": "updateAppointment",
      "file_path": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js",
      "line_start": 166,
      "line_end": 173,
      "parameters": [
        "appointmentId",
        "updates"
      ],
      "docstring": null,
      "is_method": false,
      "class_name": null,
      "code_snippet": "updateAppointment = (appointmentId, updates) => {\n  const appointments = getAppointments();\n  const index = appointments.findIndex(a => a.id === appointmentId);\n  if (index !== -1) {\n    appointments[index] = { ...appointments[index], ...updates, updatedAt: new Date().toISOString() };\n    saveAppointments(appointments);\n  }\n}",
      "display_name": null
    },
    {
      "name": "deleteAppointment",
      "file_path": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js",
      "line_start": 175,
      "line_end": 178,
      "parameters": [
        "appointmentId"
      ],
      "docstring": null,
      "is_method": false,
      "class_name": null,
      "code_snippet": "deleteAppointment = (appointmentId) => {\n  const appointments = getAppointments().filter(a => a.id !== appointmentId);\n  saveAppointments(appointments);\n}",
      "display_name": null
    },
    {
      "name": "getPatientAppointments",
      "file_path": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js",
      "line_start": 180,
      "line_end": 183,
      "parameters": [
        "patientId"
      ],
      "docstring": null,
      "is_method": false,
      "class_name": null,
      "code_snippet": "getPatientAppointments = (patientId) => {\n  const appointments = getAppointments();\n  return appointments.filter(a => a.patientId === patientId);\n}",
      "display_name": null
    }
  ],
  "relationships": [
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/App.js:ProtectedRoute",
      "callee": "/tmp/gitprobe_l6t5uxrl/src/contexts/AuthContext.jsx:useAuth",
      "call_line": 13,
      "is_resolved": true
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/App.js:AdminRoute",
      "callee": "/tmp/gitprobe_l6t5uxrl/src/contexts/AuthContext.jsx:useAuth",
      "call_line": 18,
      "is_resolved": true
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/App.js:AppContent",
      "callee": "/tmp/gitprobe_l6t5uxrl/src/contexts/AuthContext.jsx:useAuth",
      "call_line": 23,
      "is_resolved": true
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentForm.jsx:AppointmentForm",
      "callee": "useState",
      "call_line": 6,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentForm.jsx:AppointmentForm",
      "callee": "slice",
      "call_line": 12,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentForm.jsx:AppointmentForm",
      "callee": "toISOString",
      "call_line": 12,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentForm.jsx:AppointmentForm",
      "callee": "toString",
      "call_line": 14,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentForm.jsx:validateForm",
      "callee": "trim",
      "call_line": 27,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentForm.jsx:validateForm",
      "callee": "Number",
      "call_line": 39,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentForm.jsx:validateForm",
      "callee": "setErrors",
      "call_line": 43,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentForm.jsx:validateForm",
      "callee": "keys",
      "call_line": 44,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentForm.jsx:handleSubmit",
      "callee": "preventDefault",
      "call_line": 48,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentForm.jsx:handleSubmit",
      "callee": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientForm.js:validateForm",
      "call_line": 49,
      "is_resolved": true
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentForm.jsx:handleSubmit",
      "callee": "now",
      "call_line": 52,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentForm.jsx:handleSubmit",
      "callee": "toISOString",
      "call_line": 57,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentForm.jsx:handleSubmit",
      "callee": "Number",
      "call_line": 59,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentForm.jsx:handleSubmit",
      "callee": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:updateAppointment",
      "call_line": 69,
      "is_resolved": true
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentForm.jsx:handleSubmit",
      "callee": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:addAppointment",
      "call_line": 71,
      "is_resolved": true
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentForm.jsx:handleSubmit",
      "callee": "onClose",
      "call_line": 74,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentForm.jsx:handleChange",
      "callee": "setFormData",
      "call_line": 79,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentForm.jsx:handleChange",
      "callee": "setErrors",
      "call_line": 80,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentForm.jsx:handleFileUpload",
      "callee": "from",
      "call_line": 84,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentForm.jsx:handleFileUpload",
      "callee": "forEach",
      "call_line": 85,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentForm.jsx:onload",
      "callee": "now",
      "call_line": 89,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentForm.jsx:onload",
      "callee": "random",
      "call_line": 89,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentForm.jsx:onload",
      "callee": "toISOString",
      "call_line": 93,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentForm.jsx:onload",
      "callee": "setFiles",
      "call_line": 95,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentForm.jsx:handleFileUpload",
      "callee": "readAsDataURL",
      "call_line": 97,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentForm.jsx:removeFile",
      "callee": "setFiles",
      "call_line": 101,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentForm.jsx:removeFile",
      "callee": "filter",
      "call_line": 101,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentForm.jsx:AppointmentForm",
      "callee": "map",
      "call_line": 126,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentForm.jsx:AppointmentForm",
      "callee": "toLocaleDateString",
      "call_line": 263,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentForm.jsx:AppointmentForm",
      "callee": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentForm.jsx:removeFile",
      "call_line": 266,
      "is_resolved": true
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentList.jsx:AppointmentList",
      "callee": "useState",
      "call_line": 7,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentList.jsx:AppointmentList",
      "callee": "useEffect",
      "call_line": 16,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentList.jsx:AppointmentList",
      "callee": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/PatientDashboard.jsx:loadData",
      "call_line": 17,
      "is_resolved": true
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentList.jsx:AppointmentList",
      "callee": "filter",
      "call_line": 24,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentList.jsx:AppointmentList",
      "callee": "includes",
      "call_line": 25,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentList.jsx:AppointmentList",
      "callee": "toLowerCase",
      "call_line": 25,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentList.jsx:AppointmentList",
      "callee": "setFilteredAppointments",
      "call_line": 35,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentList.jsx:loadData",
      "callee": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:getPatients",
      "call_line": 39,
      "is_resolved": true
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentList.jsx:loadData",
      "callee": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:getAppointments",
      "call_line": 40,
      "is_resolved": true
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentList.jsx:loadData",
      "callee": "setPatients",
      "call_line": 41,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentList.jsx:loadData",
      "callee": "sort",
      "call_line": 43,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentList.jsx:loadData",
      "callee": "map",
      "call_line": 43,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentList.jsx:loadData",
      "callee": "find",
      "call_line": 44,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentList.jsx:loadData",
      "callee": "setAppointments",
      "call_line": 51,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentList.jsx:handleDelete",
      "callee": "confirm",
      "call_line": 55,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentList.jsx:handleDelete",
      "callee": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:deleteAppointment",
      "call_line": 56,
      "is_resolved": true
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentList.jsx:handleDelete",
      "callee": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/PatientDashboard.jsx:loadData",
      "call_line": 57,
      "is_resolved": true
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentList.jsx:handleEdit",
      "callee": "setEditingAppointment",
      "call_line": 62,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentList.jsx:handleEdit",
      "callee": "setShowForm",
      "call_line": 63,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentList.jsx:handleFormClose",
      "callee": "setShowForm",
      "call_line": 67,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentList.jsx:handleFormClose",
      "callee": "setEditingAppointment",
      "call_line": 68,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentList.jsx:handleFormClose",
      "callee": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/PatientDashboard.jsx:loadData",
      "call_line": 69,
      "is_resolved": true
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentList.jsx:handleStatusUpdate",
      "callee": "toISOString",
      "call_line": 74,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentList.jsx:handleStatusUpdate",
      "callee": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:updateAppointment",
      "call_line": 75,
      "is_resolved": true
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentList.jsx:handleStatusUpdate",
      "callee": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/PatientDashboard.jsx:loadData",
      "call_line": 76,
      "is_resolved": true
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentList.jsx:AppointmentList",
      "callee": "setSelectedAppointment",
      "call_line": 104,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentList.jsx:AppointmentList",
      "callee": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientList.js:handleEdit",
      "call_line": 107,
      "is_resolved": true
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentList.jsx:AppointmentList",
      "callee": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentList.jsx:getStatusBadge",
      "call_line": 117,
      "is_resolved": true
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentList.jsx:AppointmentList",
      "callee": "replace",
      "call_line": 118,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentList.jsx:AppointmentList",
      "callee": "toLocaleString",
      "call_line": 122,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentList.jsx:AppointmentList",
      "callee": "toLocaleDateString",
      "call_line": 127,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentList.jsx:AppointmentList",
      "callee": "map",
      "call_line": 133,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentList.jsx:AppointmentList",
      "callee": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentList.jsx:handleStatusUpdate",
      "call_line": 151,
      "is_resolved": true
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentList.jsx:AppointmentList",
      "callee": "setShowForm",
      "call_line": 175,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentList.jsx:AppointmentList",
      "callee": "setSearchTerm",
      "call_line": 189,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentList.jsx:AppointmentList",
      "callee": "setStatusFilter",
      "call_line": 196,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentList.jsx:AppointmentList",
      "callee": "toLocaleTimeString",
      "call_line": 249,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Appointments/AppointmentList.jsx:AppointmentList",
      "callee": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientList.js:handleDelete",
      "call_line": 270,
      "is_resolved": true
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Auth/Login.jsx:Login",
      "callee": "useState",
      "call_line": 6,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Auth/Login.jsx:Login",
      "callee": "/tmp/gitprobe_l6t5uxrl/src/contexts/AuthContext.jsx:useAuth",
      "call_line": 10,
      "is_resolved": true
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Auth/Login.jsx:handleSubmit",
      "callee": "preventDefault",
      "call_line": 13,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Auth/Login.jsx:handleSubmit",
      "callee": "setError",
      "call_line": 14,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Auth/Login.jsx:handleSubmit",
      "callee": "/tmp/gitprobe_l6t5uxrl/src/contexts/AuthContext.jsx:login",
      "call_line": 21,
      "is_resolved": true
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Auth/Login.jsx:handleDemoLogin",
      "callee": "setEmail",
      "call_line": 29,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Auth/Login.jsx:handleDemoLogin",
      "callee": "setPassword",
      "call_line": 30,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Auth/Login.jsx:Login",
      "callee": "setEmail",
      "call_line": 63,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Auth/Login.jsx:Login",
      "callee": "setPassword",
      "call_line": 78,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Auth/Login.jsx:Login",
      "callee": "setShowPassword",
      "call_line": 83,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Auth/Login.jsx:Login",
      "callee": "/tmp/gitprobe_l6t5uxrl/src/components/Auth/Login.jsx:handleDemoLogin",
      "call_line": 105,
      "is_resolved": true
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:CalendarView",
      "callee": "useState",
      "call_line": 8,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:CalendarView",
      "callee": "useEffect",
      "call_line": 17,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:CalendarView",
      "callee": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/PatientDashboard.jsx:loadData",
      "call_line": 18,
      "is_resolved": true
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:CalendarView",
      "callee": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:generateCalendarEvents",
      "call_line": 22,
      "is_resolved": true
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:loadData",
      "callee": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:getAppointments",
      "call_line": 26,
      "is_resolved": true
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:loadData",
      "callee": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:getPatients",
      "call_line": 27,
      "is_resolved": true
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:loadData",
      "callee": "setAppointments",
      "call_line": 28,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:loadData",
      "callee": "setPatients",
      "call_line": 29,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:generateCalendarEvents",
      "callee": "map",
      "call_line": 33,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:generateCalendarEvents",
      "callee": "find",
      "call_line": 34,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:generateCalendarEvents",
      "callee": "split",
      "call_line": 39,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:generateCalendarEvents",
      "callee": "toISOString",
      "call_line": 39,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:generateCalendarEvents",
      "callee": "toLocaleTimeString",
      "call_line": 40,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:generateCalendarEvents",
      "callee": "setCalendarEvents",
      "call_line": 45,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:getDaysInMonth",
      "callee": "getFullYear",
      "call_line": 49,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:getDaysInMonth",
      "callee": "getMonth",
      "call_line": 50,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:getDaysInMonth",
      "callee": "getDate",
      "call_line": 53,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:getDaysInMonth",
      "callee": "getDay",
      "call_line": 54,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:getDaysInMonth",
      "callee": "push",
      "call_line": 56,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:getWeekDays",
      "callee": "getDay",
      "call_line": 63,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:getWeekDays",
      "callee": "getDate",
      "call_line": 64,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:getWeekDays",
      "callee": "setDate",
      "call_line": 65,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:getWeekDays",
      "callee": "push",
      "call_line": 70,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:getEventsForDate",
      "callee": "split",
      "call_line": 76,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:getEventsForDate",
      "callee": "toISOString",
      "call_line": 76,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:getEventsForDate",
      "callee": "filter",
      "call_line": 77,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:navigateMonth",
      "callee": "setCurrentDate",
      "call_line": 81,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:navigateMonth",
      "callee": "setMonth",
      "call_line": 83,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:navigateMonth",
      "callee": "getMonth",
      "call_line": 83,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:navigateWeek",
      "callee": "setCurrentDate",
      "call_line": 89,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:navigateWeek",
      "callee": "setDate",
      "call_line": 91,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:navigateWeek",
      "callee": "getDate",
      "call_line": 91,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:handleDateClick",
      "callee": "setSelectedDate",
      "call_line": 97,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:handleDateClick",
      "callee": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:getEventsForDate",
      "call_line": 98,
      "is_resolved": true
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:handleDateClick",
      "callee": "find",
      "call_line": 100,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:handleDateClick",
      "callee": "setSelectedAppointment",
      "call_line": 102,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:handleDateClick",
      "callee": "setShowForm",
      "call_line": 103,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:handleNewAppointment",
      "callee": "setSelectedDate",
      "call_line": 109,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:handleNewAppointment",
      "callee": "setSelectedAppointment",
      "call_line": 110,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:handleNewAppointment",
      "callee": "setShowForm",
      "call_line": 111,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:handleFormClose",
      "callee": "setShowForm",
      "call_line": 115,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:handleFormClose",
      "callee": "setSelectedAppointment",
      "call_line": 116,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:handleFormClose",
      "callee": "setSelectedDate",
      "call_line": 117,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:handleFormClose",
      "callee": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/PatientDashboard.jsx:loadData",
      "call_line": 118,
      "is_resolved": true
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:CalendarView",
      "callee": "slice",
      "call_line": 133,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:CalendarView",
      "callee": "toISOString",
      "call_line": 133,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:CalendarView",
      "callee": "setView",
      "call_line": 161,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:CalendarView",
      "callee": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:handleNewAppointment",
      "call_line": 169,
      "is_resolved": true
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:CalendarView",
      "callee": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:navigateMonth",
      "call_line": 178,
      "is_resolved": true
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:CalendarView",
      "callee": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:navigateWeek",
      "call_line": 178,
      "is_resolved": true
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:CalendarView",
      "callee": "getMonth",
      "call_line": 179,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:CalendarView",
      "callee": "getFullYear",
      "call_line": 179,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:CalendarView",
      "callee": "setCurrentDate",
      "call_line": 182,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:CalendarView",
      "callee": "map",
      "call_line": 188,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:CalendarView",
      "callee": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:getDaysInMonth",
      "call_line": 191,
      "is_resolved": true
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:CalendarView",
      "callee": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:getEventsForDate",
      "call_line": 193,
      "is_resolved": true
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:CalendarView",
      "callee": "toDateString",
      "call_line": 194,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:CalendarView",
      "callee": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:handleDateClick",
      "call_line": 200,
      "is_resolved": true
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:CalendarView",
      "callee": "getDate",
      "call_line": 202,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:CalendarView",
      "callee": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/PatientDashboard.jsx:getStatusColor",
      "call_line": 207,
      "is_resolved": true
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:CalendarView",
      "callee": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:getWeekDays",
      "call_line": 225,
      "is_resolved": true
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:CalendarView",
      "callee": "getDay",
      "call_line": 229,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:CalendarView",
      "callee": "from",
      "call_line": 237,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:CalendarView",
      "callee": "getHours",
      "call_line": 245,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:CalendarView",
      "callee": "getMinutes",
      "call_line": 246,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:CalendarView",
      "callee": "find",
      "call_line": 254,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:CalendarView",
      "callee": "setSelectedAppointment",
      "call_line": 256,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Calendar/CalendarView.jsx:CalendarView",
      "callee": "setShowForm",
      "call_line": 257,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/AdminDashboard.jsx:AdminDashboard",
      "callee": "useNavigate",
      "call_line": 10,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/AdminDashboard.jsx:AdminDashboard",
      "callee": "useState",
      "call_line": 11,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/AdminDashboard.jsx:AdminDashboard",
      "callee": "useEffect",
      "call_line": 27,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/AdminDashboard.jsx:AdminDashboard",
      "callee": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/PatientDashboard.jsx:loadData",
      "call_line": 28,
      "is_resolved": true
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/AdminDashboard.jsx:loadData",
      "callee": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:getPatients",
      "call_line": 32,
      "is_resolved": true
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/AdminDashboard.jsx:loadData",
      "callee": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:getAppointments",
      "call_line": 33,
      "is_resolved": true
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/AdminDashboard.jsx:loadData",
      "callee": "setPatients",
      "call_line": 34,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/AdminDashboard.jsx:loadData",
      "callee": "filter",
      "call_line": 36,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/AdminDashboard.jsx:loadData",
      "callee": "includes",
      "call_line": 37,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/AdminDashboard.jsx:loadData",
      "callee": "reduce",
      "call_line": 38,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/AdminDashboard.jsx:loadData",
      "callee": "getMonth",
      "call_line": 39,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/AdminDashboard.jsx:loadData",
      "callee": "getFullYear",
      "call_line": 40,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/AdminDashboard.jsx:loadData",
      "callee": "setStats",
      "call_line": 48,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/AdminDashboard.jsx:loadData",
      "callee": "map",
      "call_line": 57,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/AdminDashboard.jsx:loadData",
      "callee": "slice",
      "call_line": 57,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/AdminDashboard.jsx:loadData",
      "callee": "sort",
      "call_line": 57,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/AdminDashboard.jsx:loadData",
      "callee": "find",
      "call_line": 62,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/AdminDashboard.jsx:loadData",
      "callee": "setUpcomingAppointments",
      "call_line": 69,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/AdminDashboard.jsx:loadData",
      "callee": "setRecentPatients",
      "call_line": 70,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/AdminDashboard.jsx:handleCompleteTreatment",
      "callee": "find",
      "call_line": 74,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/AdminDashboard.jsx:handleCompleteTreatment",
      "callee": "setSelectedAppointment",
      "call_line": 76,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/AdminDashboard.jsx:handleCompleteTreatment",
      "callee": "setShowCompleteTreatment",
      "call_line": 77,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/AdminDashboard.jsx:handleCompleteTreatment",
      "callee": "setShowAppointmentForm",
      "call_line": 79,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/AdminDashboard.jsx:handleFormClose",
      "callee": "setShowAppointmentForm",
      "call_line": 84,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/AdminDashboard.jsx:handleFormClose",
      "callee": "setShowPatientForm",
      "call_line": 85,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/AdminDashboard.jsx:handleFormClose",
      "callee": "setShowCompleteTreatment",
      "call_line": 86,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/AdminDashboard.jsx:handleFormClose",
      "callee": "setSelectedAppointment",
      "call_line": 87,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/AdminDashboard.jsx:handleFormClose",
      "callee": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/PatientDashboard.jsx:loadData",
      "call_line": 88,
      "is_resolved": true
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/AdminDashboard.jsx:AdminDashboard",
      "callee": "toLocaleString",
      "call_line": 99,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/AdminDashboard.jsx:AdminDashboard",
      "callee": "round",
      "call_line": 100,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/AdminDashboard.jsx:AdminDashboard",
      "callee": "map",
      "call_line": 111,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/AdminDashboard.jsx:AdminDashboard",
      "callee": "navigate",
      "call_line": 133,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/AdminDashboard.jsx:AdminDashboard",
      "callee": "toLocaleDateString",
      "call_line": 144,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/AdminDashboard.jsx:AdminDashboard",
      "callee": "toLocaleTimeString",
      "call_line": 144,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/AdminDashboard.jsx:AdminDashboard",
      "callee": "replace",
      "call_line": 147,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/AdminDashboard.jsx:AdminDashboard",
      "callee": "setShowPatientForm",
      "call_line": 183,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/AdminDashboard.jsx:AdminDashboard",
      "callee": "setShowAppointmentForm",
      "call_line": 186,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/PatientDashboard.jsx:PatientDashboard",
      "callee": "/tmp/gitprobe_l6t5uxrl/src/contexts/AuthContext.jsx:useAuth",
      "call_line": 8,
      "is_resolved": true
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/PatientDashboard.jsx:PatientDashboard",
      "callee": "useState",
      "call_line": 9,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/PatientDashboard.jsx:PatientDashboard",
      "callee": "useEffect",
      "call_line": 15,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/PatientDashboard.jsx:PatientDashboard",
      "callee": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/PatientDashboard.jsx:loadData",
      "call_line": 17,
      "is_resolved": true
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/PatientDashboard.jsx:loadData",
      "callee": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:getPatients",
      "call_line": 24,
      "is_resolved": true
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/PatientDashboard.jsx:loadData",
      "callee": "find",
      "call_line": 25,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/PatientDashboard.jsx:loadData",
      "callee": "setPatient",
      "call_line": 26,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/PatientDashboard.jsx:loadData",
      "callee": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:getAppointments",
      "call_line": 28,
      "is_resolved": true
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/PatientDashboard.jsx:loadData",
      "callee": "filter",
      "call_line": 29,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/PatientDashboard.jsx:loadData",
      "callee": "setAppointments",
      "call_line": 30,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/PatientDashboard.jsx:loadData",
      "callee": "sort",
      "call_line": 33,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/PatientDashboard.jsx:loadData",
      "callee": "setUpcomingAppointments",
      "call_line": 41,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/PatientDashboard.jsx:loadData",
      "callee": "setPastAppointments",
      "call_line": 42,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/PatientDashboard.jsx:handleFormClose",
      "callee": "setShowAppointmentForm",
      "call_line": 46,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/PatientDashboard.jsx:handleFormClose",
      "callee": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/PatientDashboard.jsx:loadData",
      "call_line": 47,
      "is_resolved": true
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/PatientDashboard.jsx:PatientDashboard",
      "callee": "reduce",
      "call_line": 72,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/PatientDashboard.jsx:PatientDashboard",
      "callee": "setShowAppointmentForm",
      "call_line": 92,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/PatientDashboard.jsx:PatientDashboard",
      "callee": "toLocaleDateString",
      "call_line": 114,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/PatientDashboard.jsx:PatientDashboard",
      "callee": "toLocaleString",
      "call_line": 156,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/PatientDashboard.jsx:PatientDashboard",
      "callee": "map",
      "call_line": 191,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/PatientDashboard.jsx:PatientDashboard",
      "callee": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/PatientDashboard.jsx:getStatusColor",
      "call_line": 195,
      "is_resolved": true
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/PatientDashboard.jsx:PatientDashboard",
      "callee": "replace",
      "call_line": 196,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Dashboard/PatientDashboard.jsx:PatientDashboard",
      "callee": "toLocaleTimeString",
      "call_line": 203,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Layout/Header.js:Header",
      "callee": "/tmp/gitprobe_l6t5uxrl/src/contexts/AuthContext.jsx:useAuth",
      "call_line": 7,
      "is_resolved": true
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Layout/Header.js:Header",
      "callee": "useLocation",
      "call_line": 8,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Layout/Header.js:Header",
      "callee": "filter",
      "call_line": 17,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Layout/Header.js:Header",
      "callee": "map",
      "call_line": 28,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientForm.js:PatientForm",
      "callee": "useState",
      "call_line": 6,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientForm.js:validateForm",
      "callee": "trim",
      "call_line": 24,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientForm.js:validateForm",
      "callee": "test",
      "call_line": 28,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientForm.js:validateForm",
      "callee": "setErrors",
      "call_line": 32,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientForm.js:validateForm",
      "callee": "keys",
      "call_line": 33,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientForm.js:handleSubmit",
      "callee": "preventDefault",
      "call_line": 37,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientForm.js:handleSubmit",
      "callee": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientForm.js:validateForm",
      "call_line": 38,
      "is_resolved": true
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientForm.js:handleSubmit",
      "callee": "now",
      "call_line": 41,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientForm.js:handleSubmit",
      "callee": "toISOString",
      "call_line": 43,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientForm.js:handleSubmit",
      "callee": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:updatePatient",
      "call_line": 48,
      "is_resolved": true
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientForm.js:handleSubmit",
      "callee": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:addPatient",
      "call_line": 50,
      "is_resolved": true
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientForm.js:handleSubmit",
      "callee": "onClose",
      "call_line": 53,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientForm.js:handleChange",
      "callee": "setFormData",
      "call_line": 58,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientForm.js:handleChange",
      "callee": "setErrors",
      "call_line": 60,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientList.js:PatientList",
      "callee": "useState",
      "call_line": 7,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientList.js:PatientList",
      "callee": "useEffect",
      "call_line": 14,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientList.js:PatientList",
      "callee": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientList.js:loadPatients",
      "call_line": 15,
      "is_resolved": true
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientList.js:PatientList",
      "callee": "filter",
      "call_line": 19,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientList.js:PatientList",
      "callee": "includes",
      "call_line": 20,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientList.js:PatientList",
      "callee": "toLowerCase",
      "call_line": 20,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientList.js:PatientList",
      "callee": "setFilteredPatients",
      "call_line": 24,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientList.js:loadPatients",
      "callee": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:getPatients",
      "call_line": 28,
      "is_resolved": true
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientList.js:loadPatients",
      "callee": "setPatients",
      "call_line": 29,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientList.js:handleDelete",
      "callee": "confirm",
      "call_line": 33,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientList.js:handleDelete",
      "callee": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:deletePatient",
      "call_line": 34,
      "is_resolved": true
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientList.js:handleDelete",
      "callee": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientList.js:loadPatients",
      "call_line": 35,
      "is_resolved": true
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientList.js:handleEdit",
      "callee": "setEditingPatient",
      "call_line": 40,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientList.js:handleEdit",
      "callee": "setShowForm",
      "call_line": 41,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientList.js:handleFormClose",
      "callee": "setShowForm",
      "call_line": 45,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientList.js:handleFormClose",
      "callee": "setEditingPatient",
      "call_line": 46,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientList.js:handleFormClose",
      "callee": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientList.js:loadPatients",
      "call_line": 47,
      "is_resolved": true
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientList.js:PatientList",
      "callee": "setSelectedPatient",
      "call_line": 63,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientList.js:PatientList",
      "callee": "toLocaleDateString",
      "call_line": 83,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientList.js:PatientList",
      "callee": "setShowForm",
      "call_line": 132,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientList.js:PatientList",
      "callee": "setSearchTerm",
      "call_line": 152,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientList.js:PatientList",
      "callee": "map",
      "call_line": 187,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientList.js:PatientList",
      "callee": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientList.js:handleEdit",
      "call_line": 215,
      "is_resolved": true
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientList.js:PatientList",
      "callee": "/tmp/gitprobe_l6t5uxrl/src/components/Patients/PatientList.js:handleDelete",
      "call_line": 222,
      "is_resolved": true
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/contexts/AuthContext.jsx:useAuth",
      "callee": "useContext",
      "call_line": 7,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/contexts/AuthContext.jsx:AuthProvider",
      "callee": "useState",
      "call_line": 15,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/contexts/AuthContext.jsx:AuthProvider",
      "callee": "useEffect",
      "call_line": 17,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/contexts/AuthContext.jsx:AuthProvider",
      "callee": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:initializeStorage",
      "call_line": 18,
      "is_resolved": true
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/contexts/AuthContext.jsx:AuthProvider",
      "callee": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:getCurrentUser",
      "call_line": 19,
      "is_resolved": true
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/contexts/AuthContext.jsx:AuthProvider",
      "callee": "setUser",
      "call_line": 20,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/contexts/AuthContext.jsx:login",
      "callee": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:getUsers",
      "call_line": 24,
      "is_resolved": true
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/contexts/AuthContext.jsx:login",
      "callee": "find",
      "call_line": 25,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/contexts/AuthContext.jsx:login",
      "callee": "setUser",
      "call_line": 28,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/contexts/AuthContext.jsx:login",
      "callee": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:setCurrentUser",
      "call_line": 29,
      "is_resolved": true
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/contexts/AuthContext.jsx:logout",
      "callee": "setUser",
      "call_line": 36,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/contexts/AuthContext.jsx:logout",
      "callee": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:setCurrentUser",
      "call_line": 37,
      "is_resolved": true
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/reportWebVitals.js:reportWebVitals",
      "callee": "then",
      "call_line": 3,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/reportWebVitals.js:reportWebVitals",
      "callee": "getCLS",
      "call_line": 4,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/reportWebVitals.js:reportWebVitals",
      "callee": "getFID",
      "call_line": 5,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/reportWebVitals.js:reportWebVitals",
      "callee": "getFCP",
      "call_line": 6,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/reportWebVitals.js:reportWebVitals",
      "callee": "getLCP",
      "call_line": 7,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/reportWebVitals.js:reportWebVitals",
      "callee": "getTTFB",
      "call_line": 8,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:initializeStorage",
      "callee": "getItem",
      "call_line": 90,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:initializeStorage",
      "callee": "setItem",
      "call_line": 91,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:initializeStorage",
      "callee": "stringify",
      "call_line": 91,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:getUsers",
      "callee": "getItem",
      "call_line": 103,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:getUsers",
      "callee": "parse",
      "call_line": 104,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:getCurrentUser",
      "callee": "getItem",
      "call_line": 108,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:getCurrentUser",
      "callee": "parse",
      "call_line": 109,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:setCurrentUser",
      "callee": "setItem",
      "call_line": 114,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:setCurrentUser",
      "callee": "stringify",
      "call_line": 114,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:setCurrentUser",
      "callee": "removeItem",
      "call_line": 116,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:getPatients",
      "callee": "getItem",
      "call_line": 122,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:getPatients",
      "callee": "parse",
      "call_line": 123,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:savePatients",
      "callee": "setItem",
      "call_line": 127,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:savePatients",
      "callee": "stringify",
      "call_line": 127,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:addPatient",
      "callee": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:getPatients",
      "call_line": 131,
      "is_resolved": true
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:addPatient",
      "callee": "push",
      "call_line": 132,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:addPatient",
      "callee": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:savePatients",
      "call_line": 133,
      "is_resolved": true
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:updatePatient",
      "callee": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:getPatients",
      "call_line": 137,
      "is_resolved": true
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:updatePatient",
      "callee": "findIndex",
      "call_line": 138,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:updatePatient",
      "callee": "toISOString",
      "call_line": 140,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:updatePatient",
      "callee": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:savePatients",
      "call_line": 141,
      "is_resolved": true
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:deletePatient",
      "callee": "filter",
      "call_line": 146,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:deletePatient",
      "callee": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:getPatients",
      "call_line": 146,
      "is_resolved": true
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:deletePatient",
      "callee": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:savePatients",
      "call_line": 147,
      "is_resolved": true
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:getAppointments",
      "callee": "getItem",
      "call_line": 152,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:getAppointments",
      "callee": "parse",
      "call_line": 153,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:saveAppointments",
      "callee": "setItem",
      "call_line": 157,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:saveAppointments",
      "callee": "stringify",
      "call_line": 157,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:addAppointment",
      "callee": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:getAppointments",
      "call_line": 161,
      "is_resolved": true
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:addAppointment",
      "callee": "push",
      "call_line": 162,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:addAppointment",
      "callee": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:saveAppointments",
      "call_line": 163,
      "is_resolved": true
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:updateAppointment",
      "callee": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:getAppointments",
      "call_line": 167,
      "is_resolved": true
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:updateAppointment",
      "callee": "findIndex",
      "call_line": 168,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:updateAppointment",
      "callee": "toISOString",
      "call_line": 170,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:updateAppointment",
      "callee": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:saveAppointments",
      "call_line": 171,
      "is_resolved": true
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:deleteAppointment",
      "callee": "filter",
      "call_line": 176,
      "is_resolved": false
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:deleteAppointment",
      "callee": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:getAppointments",
      "call_line": 176,
      "is_resolved": true
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:deleteAppointment",
      "callee": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:saveAppointments",
      "call_line": 177,
      "is_resolved": true
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:getPatientAppointments",
      "callee": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:getAppointments",
      "call_line": 181,
      "is_resolved": true
    },
    {
      "caller": "/tmp/gitprobe_l6t5uxrl/src/utils/storage.js:getPatientAppointments",
      "callee": "filter",
      "call_line": 182,
      "is_resolved": false
    }
  ],
  "summary": {
    "total_files": 25,
    "total_size_kb": 98.6640625,
    "total_functions": 71,
    "total_calls": 310,
    "languages_found": [
      "javascript"
    ],
    "files_analyzed": 15,
    "analysis_approach": "relationship_maximizing",
    "supported_languages": [
      "python",
      "javascript",
      "typescript",
      "c",
      "cpp",
      "go",
      "rust"
    ],
    "unsupported_files": 0,
    "analysis_type": "full",
    "languages_analyzed": [
      "javascript"
    ]
  }
}

## Summary
Repository: DentalCarePro
Analysis ID: sksohail19-DentalCarePro

📊 Analysis Summary:
• Total files: 25
• Files analyzed: 15
• Total size: 98.7 KB
• Functions found: 71
• Function calls: 310
