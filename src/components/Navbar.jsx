import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <NavLink className="navbar-brand" to="/">JOHN DOE</NavLink>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto">
            <NavLink 
              className={({isActive}) => `nav-link text-uppercase ${isActive ? 'active' : ''}`} 
              to="/"
            >
              Home
            </NavLink>
            <NavLink 
              className={({isActive}) => `nav-link text-uppercase ${isActive ? 'active' : ''}`}
              to="/services"
            >
              Services
            </NavLink>
            <NavLink 
              className={({isActive}) => `nav-link text-uppercase ${isActive ? 'active' : ''}`}
              to="/realisations"
            >
              Portfolio
            </NavLink>
            <NavLink 
              className={({isActive}) => `nav-link text-uppercase ${isActive ? 'active' : ''}`}
              to="/contact"
            >
              Contact
            </NavLink>
            <NavLink 
              className={({isActive}) => `nav-link text-uppercase ${isActive ? 'active' : ''}`}
              to="/mentions-legales"
            >
              Mentions légales
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 