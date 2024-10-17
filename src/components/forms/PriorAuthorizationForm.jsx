
import React, { useState } from 'react';
import { submitPriorAuthorization } from '../../services/api';  // API call to submit authorization

const PriorAuthorizationForm = ({ patientId }) => {
  const [formData, setFormData] = useState({
    treatmentType: '',
    insurancePlan: '',
    dateOfService: '',
    diagnosisCode: '',
    notes: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission with basic validation
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Log the form data before submission to check if dateOfService is present
    console.log('Form Data before submission:', formData);

    // Basic client-side validation
    if (!formData.treatmentType || !formData.insurancePlan || !formData.dateOfService || !formData.diagnosisCode) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    try {
      const dataToSubmit = { ...formData, patientId };  // Include patientId in the request
      
      // Log the data being submitted to backend (including dateOfService)
      console.log('Data to be submitted:', dataToSubmit);
      
      await submitPriorAuthorization(dataToSubmit);  // API call
      setSuccessMessage('Authorization request submitted successfully!');
      setErrorMessage('');  // Clear any previous error messages
    } catch (error) {
      setErrorMessage('Failed to submit authorization request. Please try again.');
      setSuccessMessage('');  // Clear success message if there’s an error
    }
  };

  return (
    <div className="container">
      <h2>Submit Prior Authorization Request</h2>

      {/* Display success or error messages */}
      {successMessage && <div className="alert alert-success">{successMessage}</div>}
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

      {/* Prior Authorization Form */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Treatment Type *</label>
          <input
            type="text"
            className="form-control"
            name="treatmentType"
            value={formData.treatmentType}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Insurance Plan *</label>
          <input
            type="text"
            className="form-control"
            name="insurancePlan"
            value={formData.insurancePlan}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Date of Service *</label>
          <input
            type="date"
            className="form-control"
            name="dateOfService"
            value={formData.dateOfService}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Diagnosis Code *</label>
          <input
            type="text"
            className="form-control"
            name="diagnosisCode"
            value={formData.diagnosisCode}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Doctor's Notes</label>
          <textarea
            className="form-control"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            rows="4"
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary mt-3">
          Submit Request
        </button>
      </form>
    </div>
  );
};

export default PriorAuthorizationForm;
