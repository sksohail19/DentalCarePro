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
