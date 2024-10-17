import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import PrivateRoute from './components/common/PrivateRoute';
import Login from './components/forms/Login';
import PatientDashboard from './pages/PatientDashboard';
import PriorAuthorization from './pages/PriorAuthorization';
import PatientDetail from './components/dashboard/PatientDetail';
import AuthorizationList from './pages/AuthorizationList';
import './bootstrap.min.css'

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container mt-4">
          <Routes>
            {/* Public Route - Login */}
            <Route path="/login" element={<Login />} />

            {/* Private Route - Patient Dashboard */}
            <Route
              path="/patients"
              element={
                <PrivateRoute>
                  <PatientDashboard />
                </PrivateRoute>
              }
            />

            {/* Private Route - Patient Details */}
            <Route
              path="/patients/:id"
              element={
                <PrivateRoute>
                  <PatientDetail />
                </PrivateRoute>
              }
            />

            {/* Private Route - Prior Authorization Form for a specific patient */}
            <Route
              path="/patients/:id/authorizations"
              element={
                <PrivateRoute>
                  <PriorAuthorization />
                </PrivateRoute>
              }
            />
             {/* Private Route - Authorization List */}
             <Route
              path="/authorizations"
              element={
                <PrivateRoute>
                  <AuthorizationList />
                </PrivateRoute>
              }
              />
            {/* Default Route (Redirect to /login) */}
            <Route path="*" element={<Login />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
