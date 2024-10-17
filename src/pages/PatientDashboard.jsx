import React from 'react';
import PatientList from '../components/dashboard/PatientList';

const PatientDashboard = () => {
  return (
    <div className="container">
      <h1 className="my-4">Patient Dashboard</h1>
      <PatientList />
    </div>
  );
};

export default PatientDashboard;
