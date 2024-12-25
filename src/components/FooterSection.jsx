import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const FooterSection = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        {/* Company Logo and Copyright */}
        <div className="row mb-4">
          <div className="col-12 text-center">
            <h1 className="fw-bold">
              IT<span style={{ color: "#2c8e45" }}>est</span>
            </h1>
            <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
          </div>
        </div>

        {/* Footer Navigation Links */}
        <div className="row">
          <div className="col-md-4 text-center text-md-start">
            <ul className="list-unstyled">
              <li><a href="#products" className="text-white text-decoration-none">Products</a></li>
              <li><a href="#solutions" className="text-white text-decoration-none">Solutions</a></li>
              <li><a href="#resources" className="text-white text-decoration-none">Resources</a></li>
            </ul>
          </div>

          <div className="col-md-4 text-center">
            <ul className="list-unstyled">
              <li><a href="#company" className="text-white text-decoration-none">Company</a></li>
              <li><a href="#aboutus" className="text-white text-decoration-none">About Us</a></li>
              <li><a href="#support" className="text-white text-decoration-none">Support Center</a></li>
            </ul>
          </div>

          <div className="col-md-4 text-center text-md-end">
            <div>
              <a href="#" className="text-white fs-3 me-3"><FaFacebook /></a>
              <a href="#" className="text-white fs-3 me-3"><FaTwitter /></a>
              <a href="#" className="text-white fs-3 me-3"><FaLinkedin /></a>
              <a href="#" className="text-white fs-3"><FaInstagram /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
