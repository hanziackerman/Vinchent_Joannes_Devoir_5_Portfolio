import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import heroImage from '../assets/images/hero-bg.jpg';
import aboutImg from '../assets/images/john-doe-about.jpg';

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const skills = [
    { name: 'HTML5', level: 90 },
    { name: 'CSS3', level: 80 },
    { name: 'JAVASCRIPT', level: 70 },
    { name: 'PHP', level: 60 },
    { name: 'REACT', level: 50 }
  ];

  return (
    <>
      {/* Hero Section */}
      <section 
        className="hero d-flex align-items-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh'
        }}
      >
        <div className="container text-center text-white">
          <h1>Bonjour, je suis John Doe</h1>
          <h2>Développeur web full stack</h2>
          <button 
            className="btn btn-danger"
            onClick={() => setShowModal(true)}
          >
            En savoir plus
          </button>
        </div>
      </section>

      {/* Section À propos */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 className="border-bottom pb-2 mb-4">À propos</h2>
              <img 
                src={aboutImg} 
                alt="John Doe" 
                className="img-fluid rounded mb-4"
              />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, necessitatibus consectetur tempore perferendis nostrum, ex delectus nescendis impedit aut eum enim placeat? Natus, neque at?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, necessitatibus consectetur tempore perferendis nostrum, ex delectus nescendis impedit aut eum enim placeat? Natus, neque at?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, necessitatibus consectetur tempore perferendis nostrum, ex delectus nescendis impedit aut eum enim placeat? Natus, neque at?</p>
            </div>
            <div className="col-md-6">
              <h2 className="border-bottom pb-2 mb-4">Mes compétences</h2>
              <div className="skills">
                {skills.map((skill, index) => (
                  <div key={index} className="mb-4">
                    <div className="d-flex justify-content-between mb-1">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="progress">
                      <div 
                        className="progress-bar" 
                        role="progressbar" 
                        style={{ width: `${skill.level}%` }}
                        aria-valuenow={skill.level} 
                        aria-valuemin="0" 
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal GitHub */}
      {showModal && (
        <div className="modal show d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Mon profil GitHub</h5>
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body text-center">
                <img 
                  src="/images/doraemon.png" 
                  alt="GitHub Avatar" 
                  className="rounded-circle mb-3" 
                  style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png';
                  }}
                />
                <h5>John Doe</h5>
                <p>As we all know, John Doe's identity is unknown. I just wanted to contribute without being known.</p>
                <div className="d-flex justify-content-center gap-4 mb-3">
                  <div>
                    <strong>1</strong>
                    <p className="mb-0">Repositories</p>
                  </div>
                  <div>
                    <strong>16</strong>
                    <p className="mb-0">Followers</p>
                  </div>
                  <div>
                    <strong>0</strong>
                    <p className="mb-0">Following</p>
                  </div>
                </div>
                <button 
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
          <div 
            className="modal-backdrop show" 
            onClick={() => setShowModal(false)}
          ></div>
        </div>
      )}
    </>
  );
};

export default Home; 