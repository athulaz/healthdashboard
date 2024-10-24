import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../services/api';  // API call for login

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser({ email, password });  // Send login request
      localStorage.setItem('token', response.token);  // Save the JWT token in localStorage
      navigate('/patients');  // Navigate to the patient dashboard on success
    } catch (err) {
      setError('Invalid email or password');
    }
  };
  

  return (

    
    
        <div className="d-flex justify-content-center align-items-center p-3" style={{ backgroundColor: 'black' }}>
        <div className="row p-3 w-100" style={{ minHeight: '70vh' }}>
          <div className="col-12 col-md-6 d-flex flex-column justify-content-center text-center">
            <h1 className="text-white mb-3">
              <span>
                
                <span className="fs-4"><h2>Login</h2></span>
              </span>
            </h1>
            
      {error && <p className="alert alert-danger">{error}</p>}
            <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Login
        </button>
      </form>
          </div>

          <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
  <img
    className="mt-4 mt-md-5"
    style={{ height: 'auto', width: '100%', maxWidth: '30vh', objectFit: 'contain' }}
    src="https://cdn-icons-png.freepik.com/256/4521/4521422.png?semt=ais_hybrid"
    alt="project image"
  />
</div>

        </div>
      </div>
     
     





  );
};

export default Login;