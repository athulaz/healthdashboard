# **Patient Health Dashboard for Prior Authorization**

## **Project Overview**
The **Patient Health Dashboard for Prior Authorization** is a full-stack web application that enables healthcare providers to view and manage patient health data. It focuses on workflows related to submitting and managing prior authorization requests for treatments. The application is built using the **MERN** stack (MongoDB, Express, React, Node.js) and provides a responsive, user-friendly interface for handling patient data and authorization requests.

## **Features**
- **Patient Dashboard**: View and manage a list of patients, along with their medical history and treatment plans.
- **Prior Authorization Requests**: Submit and manage prior authorization requests for specific treatments.
- **Authentication**: Healthcare providers must log in to access the dashboard using JWT-based authentication.
- **Search and Filter**: Easily search for patients and filter health records.
- **Responsive Design**: The app is optimized for various devices using **Bootstrap** for responsive layouts.

## **Tech Stack**
### **Frontend**
- **Vite React**: JavaScript library for building interactive user interfaces.
- **Bootstrap**: CSS framework for building responsive, mobile-first designs.
- **Axios**: For making HTTP requests to the backend.
- **React Router**: For managing routes and page navigation.

### **Backend**
- **Node.js**: JavaScript runtime for building scalable network applications.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing patient and authorization request data.
- **JWT**: JSON Web Tokens for secure user authentication.


## **API Integration**
- The frontend interacts with the backend APIs to fetch patient data, submit prior authorization requests, and manage authentication.
- **Base URL**: All API calls are made to the base URL defined in the `.env` file 

### **Main API Endpoints Used**:
1. **Get Patients List**:
   - **URL**: `/api/patients`
   - **Method**: `GET`
   - **Description**: Fetches the list of all patients.

2. **Get Patient Details**:
   - **URL**: `/api/patients/:id`
   - **Method**: `GET`
   - **Description**: Fetches detailed information about a specific patient.

3. **Submit Prior Authorization**:
   - **URL**: `/api/authorizations`
   - **Method**: `POST`
   - **Description**: Submits a new prior authorization request for a patient.

## **Live Demo**
You can access the live version of the application here:  
[https://healthdashboard-seven.vercel.app/](https://healthdashboard-seven.vercel.app/)

### **Test Credentials**
- **Email**: `ath@gmail.com`
- **Password**: `ath`

## **GitHub Repository**
The source code for this project can be found on GitHub:  
[https://github.com/athulaz/patient-health-dashboard](https://github.com/athulaz/patient-health-dashboard)


## **License**
This project is licensed under the MIT License.

## **Contact**
For questions or support, feel free to contact me:
- **GitHub**: https://github.com/athulaz
- **Email**:athul8589@gmail.com


