import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5>John Doe</h5>
            <p>40 rue Laure Diebold<br />69009 Lyon, France<br />10 20 30 40 50</p>
            <p>john.doe@gmail.com</p>
            <div className="social-links">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-light me-3">
                <FaGithub size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-light me-3">
                <FaTwitter size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-light">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Liens utiles</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-light">Accueil</Link></li>
              <li><Link to="/services" className="text-light">Services</Link></li>
              <li><Link to="/realisations" className="text-light">Portfolio</Link></li>
              <li><Link to="/contact" className="text-light">Me contacter</Link></li>
              <li><Link to="/mentions-legales" className="text-light">Mentions légales</Link></li>
            </ul>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Mes dernières réalisations</h5>
            <ul className="list-unstyled">
              <li><Link to="/realisations" className="text-light">Fresh Food</Link></li>
              <li><Link to="/realisations" className="text-light">Restaurant Akira</Link></li>
              <li><Link to="/realisations" className="text-light">Espace bien-être</Link></li>
              <li><Link to="/realisations" className="text-light">SEO</Link></li>
              <li><Link to="/realisations" className="text-light">Création d'une API</Link></li>
              <li><Link to="/realisations" className="text-light">Maquette d'un site</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 