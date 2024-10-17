import React from 'react';
import PatientList from '../components/dashboard/PatientList';

const PatientDashboard = () => {
  return (
    <div className="container">
      <h3 className="my-4">Patient Dashboard</h3>
      <PatientList />
    </div>
  );
};

export default PatientDashboard;
