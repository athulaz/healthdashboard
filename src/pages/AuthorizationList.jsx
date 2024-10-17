import React, { useState, useEffect } from 'react';
import { getAuthorizations, updateAuthorizationStatus } from '../services/api';  // Add updateAuthorizationStatus API call

const AuthorizationList = () => {
  const [authorizations, setAuthorizations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAuthorizations = async () => {
      try {
        const response = await getAuthorizations();  // Fetch all authorizations from the backend
        setAuthorizations(response);
        setLoading(false);
      } catch (error) {
        setError('Error fetching authorization requests');
        setLoading(false);
      }
    };

    fetchAuthorizations();
  }, []);

  // Handle status update
  const handleStatusChange = async (authorizationId, newStatus) => {
    try {
      await updateAuthorizationStatus(authorizationId, newStatus);  // Update status in backend
      const updatedAuthorizations = authorizations.map((auth) =>
        auth._id === authorizationId ? { ...auth, status: newStatus } : auth
      );
      setAuthorizations(updatedAuthorizations);  // Update the state with the new status
    } catch (error) {
      setError('Failed to update authorization status');
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container">
      <h2>Prior Authorization Requests</h2>
      <div className="table-responsive">  {/* Add table-responsive wrapper */}
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Patient Name</th>
              <th>Treatment Type</th>
              <th>Insurance Plan</th>
              <th>Date of Service</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {authorizations.map((auth) => (
              <tr key={auth._id}>
                <td>{auth.patientId?.name}</td>  {/* Show the patient name */}
                <td>{auth.treatmentType}</td>
                <td>{auth.insurancePlan}</td>
                <td>{new Date(auth.dateOfService).toLocaleDateString()}</td>
                <td>{auth.status}</td>
                <td>
                  {auth.status === 'Pending' && (
                    <>
                      <button
                        className="btn btn-success btn-sm"
                        onClick={() => handleStatusChange(auth._id, 'Approved')}
                      >
                        Approve
                      </button>
                      <button
                        className="btn btn-danger btn-sm ml-2"
                        onClick={() => handleStatusChange(auth._id, 'Denied')}
                      >
                        Deny
                      </button>
                    </>
                  )}
                  {auth.status !== 'Pending' && <p>{auth.status}</p>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AuthorizationList;
