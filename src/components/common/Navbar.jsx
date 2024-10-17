import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap';

const CustomNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');  // Remove token from localStorage
    navigate('/login');  // Redirect to login page after logout
  };

  return (
    <Navbar expand="lg" className="border-0 py-4" style={{ backgroundColor: 'white' }}>
      <Container>
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <i className="fa-solid fa-hospital me-4"></i> 
          <span className="fs-4">HealthDashboard</span>
        </Link>
        <Navbar.Toggle aria-controls="navbarNavDropdown" />
        <Navbar.Collapse id="navbarNavDropdown">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/patients">
                Patient Dashboard
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link" to="/authorizations">
                Prior Authorization Requests
              </Link>
            </li>
          </ul>
          <div className="d-flex">
            <button className="btn btn-outline-light" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
