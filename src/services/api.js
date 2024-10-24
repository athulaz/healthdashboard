import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000';  // Replace with your backend URL if needed

// Function to fetch patients
export const getPatients = async (page, limit) => {
  try {
    const token = localStorage.getItem('token');  // Get the JWT token
    const response = await axios.get(`${API_BASE_URL}/api/patients?page=${page}&limit=${limit}`, {
      headers: {
        Authorization: `Bearer ${token}`,  // Include token in the request header
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching patients:', error);
    throw error;
  }
};




export const loginUser = async (credentials) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/api/auth/login`, credentials);
      return response.data;  // Should return the JWT token if successful
    } catch (error) {
      console.error('Error logging in:', error);
      throw error;
    }
  };
  



  
  // Fetch patient details by ID
  export const getPatientById = async (id) => {
    try {
      const token = localStorage.getItem('token');  // Get JWT token from localStorage
      const response = await axios.get(`${API_BASE_URL}/api/patients/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,  // Include token in request headers
        }
      });
      return response.data;  // Return patient data from the API
    } catch (error) {
      console.error('Error fetching patient details:', error);
      throw error;
    }
  };
  





// Submit Prior Authorization Request API call
export const submitPriorAuthorization = async (authorizationData) => {
    try {
      const token = localStorage.getItem('token');  // Get the JWT token
  
      // Log the authorization data being sent to the backend (especially dateOfService)
      console.log('Submitting authorization data:', authorizationData);
  
      const response = await axios.post(
        `${API_BASE_URL}/api/authorizations`,
        authorizationData,
        {
          headers: {
            Authorization: `Bearer ${token}`,  // Include token in request headers
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error('Error submitting authorization:', error);
      throw error;
    }
  };
  


// Fetch all authorization requests
export const getAuthorizations = async () => {
  const token = localStorage.getItem('token');  // Get the token for authentication
  const response = await axios.get(`${API_BASE_URL}/api/authorizations`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

// Update the status of an authorization request
export const updateAuthorizationStatus = async (authorizationId, status) => {
  const token = localStorage.getItem('token');
  const response = await axios.put(
    `${API_BASE_URL}/api/authorizations/status`,
    { authorizationId, status },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return response.data;
};
