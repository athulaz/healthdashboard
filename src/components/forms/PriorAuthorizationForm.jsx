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

    // Basic client-side validation
    if (!formData.treatmentType || !formData.insurancePlan || !formData.dateOfService || !formData.diagnosisCode) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    try {
      const dataToSubmit = { ...formData, patientId };  // Include patientId in the request
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

      <div className="row">
        <div className="col-md-6 col-sm-12 my-3">
          <div className="card card-block px-3 py-4 bg-dark text-center" style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
            <h4 className="card-title mt-3 mb-2 text-light">Treatment Type *</h4>
            <input
              type="text"
              className="form-control"
              name="treatmentType"
              value={formData.treatmentType}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="col-md-6 col-sm-12 my-3">
          <div className="card card-block px-3 py-4 bg-dark text-center" style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
            <h4 className="card-title mt-3 mb-2 text-light">Insurance Plan *</h4>
            <input
              type="text"
              className="form-control"
              name="insurancePlan"
              value={formData.insurancePlan}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="col-md-6 col-sm-12 my-3">
          <div className="card card-block px-3 py-4 bg-dark text-center" style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
            <h4 className="card-title mt-3 mb-2 text-light">Date of Service *</h4>
            <input
              type="date"
              className="form-control"
              name="dateOfService"
              value={formData.dateOfService}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="col-md-6 col-sm-12 my-3">
          <div className="card card-block px-3 py-4 bg-dark text-center" style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
            <h4 className="card-title mt-3 mb-2 text-light">Diagnosis Code *</h4>
            <input
              type="text"
              className="form-control"
              name="diagnosisCode"
              value={formData.diagnosisCode}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="col-md-12 col-sm-12 my-3">
          <div className="card card-block px-3 py-4 bg-dark text-center" style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
            <h4 className="card-title mt-3 mb-2 text-light">Doctor's Notes</h4>
            <textarea
              className="form-control"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows="4"
            ></textarea>
          </div>
        </div>
      </div>

      <button type="submit" className="btn btn-primary mt-3" onClick={handleSubmit}>
        Submit Request
      </button>
    </div>
  );
};

export default PriorAuthorizationForm;