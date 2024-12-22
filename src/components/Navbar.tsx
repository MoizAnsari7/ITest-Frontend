import React from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  
  const navigate = useNavigate();

  const handleSignIn = () =>{
    navigate('/signin');
  }

  return (
    <nav className="navbar navbar-expand-lg sticky-top bg-light">
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand logo" href="#">
        </a>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Products</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Solutions</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Resources</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact Us</a>
            </li>
          </ul>
          <div className="d-flex ms-3">
            <button className="btn btn-outline-success me-2" onClick={handleSignIn}>Sign In</button>
            {/* <button className="btn btn-success">Sign Up for Free</button> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
