// src/hooks/usePatientData.jsx
import { useState, useEffect } from 'react';
import api from '../services/api';

const usePatientData = (patientId) => {
  const [patient, setPatient] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const { data } = await api.get(`/patients/${patientId}`);
        setPatient(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching patient data');
        setLoading(false);
      }
    };
    fetchPatient();
  }, [patientId]);

  return { patient, loading };
};

export default usePatientData;
