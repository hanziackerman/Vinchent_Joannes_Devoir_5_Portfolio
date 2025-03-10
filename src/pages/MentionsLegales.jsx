import React from 'react';

const MentionsLegales = () => {
  return (
    <div className="container py-5">
      <header className="text-center mb-5">
        <h1 className="mb-3">Mentions légales</h1>
        <div className="title-underline"></div>
      </header>

      <div className="accordion" id="mentionsLegales">
        {/* Éditeur du site */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#editeur"
              aria-expanded="true"
              aria-controls="editeur"
            >
              Éditeur du site
            </button>
          </h2>
          <div
            id="editeur"
            className="accordion-collapse collapse show"
            data-bs-parent="#mentionsLegales"
          >
            <div className="accordion-body">
              <p><strong>John DOE</strong></p>
              <p>40 rue Laure Diebold<br />69009 Lyon, France</p>
              <p>10 20 30 40 50<br />john.doe@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Hébergeur */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#hebergeur"
              aria-expanded="false"
              aria-controls="hebergeur"
            >
              Hébergeur
            </button>
          </h2>
          <div
            id="hebergeur"
            className="accordion-collapse collapse"
            data-bs-parent="#mentionsLegales"
          >
            <div className="accordion-body">
              <p><strong>alwaysdata</strong></p>
              <p>91 Rue du Faubourg Saint-Honoré, 75008 Paris</p>
              <p><a href="https://www.alwaysdata.com" target="_blank" rel="noopener noreferrer">www.alwaysdata.com</a></p>
            </div>
          </div>
        </div>

        {/* Crédits */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#credits"
              aria-expanded="false"
              aria-controls="credits"
            >
              Crédits
            </button>
          </h2>
          <div
            id="credits"
            className="accordion-collapse collapse"
            data-bs-parent="#mentionsLegales"
          >
            <div className="accordion-body">
              <p>Ce site a été réalisé par John Doe, étudiant au <a href="#" target="_blank" rel="noopener noreferrer">Centre Européen de formation</a>.</p>
              <p className="font-italic">Les images utilisées sur ce site sont libres de droits et ont été obtenues sur le site <a href="https://pixabay.com" target="_blank" rel="noopener noreferrer">Pixabay</a></p>
              <p className="font-italic">La favicon de ce site a été fournie par <a href="https://www.flaticon.com" target="_blank" rel="noopener noreferrer">John doe Icons erstellt von Freepik - Flaticon</a></p>
            </div>
          </div>
        </div>
      </div>

      {/* Meta robots pour ne pas indexer la page */}
      <meta name="robots" content="noindex" />
    </div>
  );
};

export default MentionsLegales; 