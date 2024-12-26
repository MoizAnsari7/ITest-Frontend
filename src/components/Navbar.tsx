import React, { useEffect, useState } from 'react';
import './Navbar.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('http://localhost:4500/api/auth/me', {
          withCredentials: true, // Ensure cookies are sent and received
        });
  
        if (response.status === 200 && response.data) {
          console.log("Authenticated user data:", response.data);
          setUser(response.data.user); // Update user state if authenticated
        } else {
          console.error("User not authenticated or response invalid");
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
  
    fetchUser(); // Call the fetchUser function
  }, []);
  

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/signin');
  }


  // const handleLogin = () => {
  //   window.location.href = 'http://localhost:4500/api/auth/google';
  // };

  const handleLogout = async () => {
    try {
      await axios.get('http://localhost:4500/api/auth/logout', {
        withCredentials: true,
      });
      setUser(null);
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg sticky-top bg-light">
      <div className="container">
        <a className="navbar-brand logo" href="#">
          {/* Add logo here */}
        </a>


    
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">

        
            <li className="nav-item">
              <a className="nav-link" href="#">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Solutions
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Resources
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact Us
              </a>
            </li>
          </ul>

          <div className="d-flex ms-3">
            {user ? (
              <>
<ul  className="navbar-nav ms-auto">
<li className="nav-item">
              <a className="nav-link fw-bold" href="#">
               Welcome <span style={{color:" #2c8e45"}} > {user?.displayName} </span>
              </a>
            </li>
            </ul>
                <img
                  src={user?.profilePhoto}
                  alt={user?.displayName}
                  className="rounded-circle me-2"
                  width="40"
                  height="40"
                  />
                 
                <button className="btn btn-outline-danger" onClick={handleLogout}>
                  Logout
                </button>
              </>
            ) : (
              <button className="btn btn-outline-success" onClick={handleNavigate}>
                Sign In
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
