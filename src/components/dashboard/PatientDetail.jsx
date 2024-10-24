import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';  // Import Link to navigate to the Prior Authorization Form
import { getPatientById } from '../../services/api';  // API to get patient details

const PatientDetail = () => {
  const { id } = useParams();  // Get patient ID from URL
  const [patient, setPatient] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPatientDetails = async () => {
      try {
        const response = await getPatientById(id);  // Fetch patient details by ID
        setPatient(response);
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
    <div className="container my-4">
      {patient && (
        <div className="card" style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '20px' }}>
          <h4 className="card-title">{patient.name} - {patient.age} years old</h4>
          <p className="card-text"><strong>Condition:</strong> {patient.condition}</p>

          <div className="mt-3">
            <h5>Health Records</h5>
            <p><strong>Treatments:</strong> {patient.treatments?.join(', ')}</p>
            <p><strong>Medication History:</strong> {patient.medicalHistory?.join(', ')}</p>
            <p><strong>Lab Results:</strong> {patient.labResults}</p>
          </div>

       
            <Link to={`/patients/${patient._id}/authorizations`} className="btn btn-primary btn-sm mt-3">
            Submit Prior Authorization
          </Link>
        </div>
      )}
    </div>
  );
};

export default PatientDetail;