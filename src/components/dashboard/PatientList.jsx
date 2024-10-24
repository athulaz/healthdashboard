import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPatients } from '../../services/api';  // API function to fetch patients

const PatientList = () => {
  const [patients, setPatients] = useState([]);
  const [filteredPatients, setFilteredPatients] = useState([]);  // State for filtered patients
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');  // State for search query
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 10;

  useEffect(() => {
    const fetchPatients = async () => {
      setLoading(true);
      try {
        const response = await getPatients(currentPage, limit);
        setPatients(response.patients);
        setFilteredPatients(response.patients);  // Set both the full and filtered list
        setTotalPages(response.totalPages);
        setLoading(false);
      } catch (err) {
        setError('Error fetching patients');
        setLoading(false);
      }
    };

    fetchPatients();
  }, [currentPage]);

  // Handle search input change
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter patients based on the search query
    const filtered = patients.filter(patient => 
      patient.name.toLowerCase().includes(query) || 
      patient.condition.toLowerCase().includes(query)
    );

    setFilteredPatients(filtered);  // Update filtered patients
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container">
      <h>Patient List (Page {currentPage} of {totalPages})</h>

      {/* Search input */}
      <input
        type="text"
        placeholder="Search patients by name or condition"
        value={searchQuery}
        onChange={handleSearch}
        className="form-control mb-4"
      />

      <div className="row">
        {filteredPatients.map((patient) => (
          <div key={patient._id} className="col-md-4 col-sm-12 my-3">
            <div className="card card-block px-3 py-4 bg-dark text-center" style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
              <img
                className="w-100"
                style={{ height: '30vh', objectFit: 'cover', borderRadius: '10px 10px 0 0' }}
                src="https://cdn-icons-png.flaticon.com/512/1430/1430453.png"
                alt="patient"
              />
              <h4 className="card-title mt-3 mb-2 text-light">{patient.name}</h4>
              <p className="card-text text-light">{patient.age} years old</p>
              <p className="card-text text-light">{patient.condition}</p>
              <Link to={`/patients/${patient._id}`} className="btn btn-primary mt-2">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="my-3 text-center">
        <button onClick={() => setCurrentPage(currentPage - 1)} className="btn btn-primary mx-1" disabled={currentPage === 1}>
          Previous
        </button>
        <button onClick={() => setCurrentPage(currentPage + 1)} className="btn btn-primary mx-1" disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default PatientList;