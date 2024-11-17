# Full Stack Employee Management Application

This repository contains a Full Stack application built with **Node.js**, **MongoDB**, and **React**. The application meets the following specifications:

## Features

### Home Page
1. **Top Navigation Menu:**
   - A navigation bar at the top of the page for seamless navigation between different sections.

2. **Image Slider:**
   - A visually appealing image slider using your preferred package or library.

---

### Employees Page
1. **Employees Table:**
   - A paginated table to display employee details.

2. **Employee Management Functionalities:**
   - **Add Employee:** Add new employee records.
   - **Edit Employee:** Modify existing employee details using a modal window.
   - **Delete Employee:** Remove employee records with a confirmation prompt to avoid accidental deletions.

---

## Technologies Used

### Backend:
- **Node.js**: For building the server-side application.
- **MongoDB**: As the database to store employee records.

### Frontend:
- **React**: For building the user interface.
- **React Libraries**: To implement features like the image slider, modal, and table with pagination.
- **Ant Design** :  For styling the UI components.
- **Tailwind** : For styling the UI components.

---

## Directory Structure
### Root Directory
- /BackEnd/employees-back: Contains the backend application code.
- /FrontEnd/employees-front: Contains the frontend application code.

## Getting Started

### Prerequisites
- **Node.js** installed on your machine.
- **MongoDB** set up locally or using a cloud service (e.g., MongoDB Atlas).

### Installation
1. Clone this repository:
   ```bash
   git clone <repo-url>
   cd <repo-directory>
   ```

2. Install dependencies:
   ```bash
   # For backend
   cd BackEnd/employees-back
   npm install --save-dev nodemon
   npm install

   # For frontend
   cd FrontEnd/employees-front
   npm install
   ```

3. Start the development servers:
   ```bash
   # Backend
   cd BackEnd/employees-back
   nodemon serve

   # Frontend
   cd FrontEnd/employees-front
   npm start
   ```

4. Access the application:
   - Frontend: `http://localhost:3000`
   - Backend: `http://localhost:3005` 

---

## Project Structure

### Backend (`BackEnd/employees-back`)
- **routes**: RESTful APIs for employee management.
- **models**: MongoDB schemas for employee data.
- **controllers**: Business logic for handling requests.

### Frontend (`FrontEnd/employees-front/src`)

- **API**: Contains API service files and configurations for server communication.
- **Core**: Utility files such as constants,global configurations or shared reusable components used across multiple features or pages .
- **Features**: Feature-specific components and logic, organized by functionality (e.g., `Employees` for employee management, `Slider` for the image slider).
- **Pages**: High-level components representing full pages, combining layout and feature components (e.g., `HomePage.jsx`, `EmployeesPage.jsx`).
- **App.js**: Main application file that handles routing and high-level structure.
- **index.js**: Entry point for rendering the React application.

---

## Future Improvements
- Add authentication for secured access.
- Enhance the UI with animations and advanced styling.
- Implement filtering and searching capabilities for employees.
