
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPatientById } from '../services/api';  // API to get patient details
import PriorAuthorizationForm from '../components/forms/PriorAuthorizationForm';

const PriorAuthorization = () => {
  const { id } = useParams();  // Get patient ID from URL
  const [patient, setPatient] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPatientDetails = async () => {
      try {
        const response = await getPatientById(id);  // Fetch patient details by ID
        setPatient(response);  // Store the patient details in state
        setLoading(false);
      } catch (error) {
        setError('Error fetching patient details');
        setLoading(false);
      }
    };

    fetchPatientDetails();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container">
      {patient && (
        <>
          <h2>Submit Prior Authorization for {patient.name}</h2>

          {/* Display patient details */}
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Patient: {patient.name}</h5>
              <p className="card-text">Age: {patient.age}</p>
              <p className="card-text">Condition: {patient.condition}</p>
            </div>
          </div>

          {/* Prior Authorization Form */}
          <PriorAuthorizationForm patientId={id} />
        </>
      )}
    </div>
  );
};

export default PriorAuthorization;
