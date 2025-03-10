import React from 'react';
import freshFood from '../assets/images/portfolio/fresh-food.jpg';
import restaurant from '../assets/images/portfolio/restaurant-japonais.jpg';
import espaceBienEtre from '../assets/images/portfolio/espace-bien-etre.jpg';
import seo from '../assets/images/portfolio/seo.jpg';
import coder from '../assets/images/portfolio/coder.jpg';
import screens from '../assets/images/portfolio/screens.jpg';
import bannerImage from '../assets/images/banner.jpg';

const Realisations = () => {
  const projects = [
    {
      title: 'Fresh Food',
      description: 'Site de vente de produits frais en ligne',
      image: freshFood,
      technology: 'Site réalisé avec PHP et MySQL',
      link: '#'
    },
    {
      title: 'Restaurant Akira',
      description: 'Site vitrine pour un restaurant japonais',
      image: restaurant,
      technology: 'Site réalisé avec WordPress',
      link: '#'
    },
    {
      title: 'Espace bien-être',
      description: 'Site vitrine pour un centre de bien-être',
      image: espaceBienEtre,
      technology: 'Site réalisé avec LARAVEL',
      link: '#'
    },
    {
      title: 'SEO',
      description: 'Amélioration du référencement d\'un site e-commerce',
      image: seo,
      technology: 'Utilisation des outils SEO',
      link: '#'
    },
    {
      title: 'Création d\'une API',
      description: 'Création d\'une API RESTFULL publique',
      image: coder,
      technology: 'PHP - SYMFONY',
      link: '#'
    },
    {
      title: 'Maquette d\'un site web',
      description: 'Création du prototype d\'un site',
      image: screens,
      technology: 'Réalisé avec FIGMA',
      link: '#'
    }
  ];

  return (
    <>
      {/* Hero Section avec l'image de fond */}
      <div 
        className="portfolio-hero" 
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 text-center text-white">
              <h1>Portfolio</h1>
              <p className="mb-0">Voici quelques-unes de mes réalisations.</p>
              <div className="title-underline mt-4"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="container mb-5">
        <div className="row g-4">
          {projects.map((project, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-img-top position-relative" style={{paddingTop: '66.67%'}}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{objectFit: 'cover'}}
                  />
                </div>
                <div className="card-body text-center p-4">
                  <h3 className="h5 mb-2">{project.title}</h3>
                  <p className="text-muted mb-3">{project.description}</p>
                  <a href={project.link} className="btn btn-primary mb-3">Voir le site</a>
                  <p className="small text-muted mb-0">{project.technology}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Realisations; 