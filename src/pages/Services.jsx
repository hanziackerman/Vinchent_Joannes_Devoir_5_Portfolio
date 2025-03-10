import React from 'react';
import bannerImage from '../assets/images/banner.jpg';
import { FaPencilAlt, FaCode, FaSearch } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaPencilAlt size={40} className="text-primary" />,
      title: 'UX Design',
      description: 'L\'UX Design est une discipline qui consiste à concevoir des produits (sites web, applications mobiles, logiciels, objets connectés, etc.) en plaçant l\'utilisateur au centre des préoccupations. L\'objectif est de rendre l\'expérience utilisateur la plus fluide et agréable possible.'
    },
    {
      icon: <FaCode size={40} className="text-primary" />,
      title: 'Développement web',
      description: 'Le développement de sites web consiste à créer des sites internet en utilisant des langages de programmation (HTML, CSS, JavaScript, PHP, etc.) et des frameworks (Bootstrap, React, Angular, etc.).'
    },
    {
      icon: <FaSearch size={40} className="text-primary" />,
      title: 'Référencement',
      description: 'Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans les résultats des moteurs de recherche (Google, Bing, Yahoo, etc.). L\'objectif est d\'attirer un maximum de visiteurs qualifiés sur le site.'
    }
  ];

  return (
    <>
      {/* Hero Section avec l'image de fond */}
      <div 
        className="services-hero" 
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '300px'
        }}
      >
      </div>

      <div className="container py-5">
        <header className="text-center mb-5">
          <h1>Mon offre de services</h1>
          <p className="text-muted">Voici les prestations sur lesquelles je peux intervenir</p>
          <div className="title-underline"></div>
        </header>

        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-md-4">
              <div className="card h-100 border-0 shadow-sm text-center">
                <div className="card-body p-5">
                  <div className="mb-4">
                    {service.icon}
                  </div>
                  <h3 className="h4 mb-3">{service.title}</h3>
                  <p className="text-muted mb-0">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services; 