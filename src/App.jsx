import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/main.css';

// Import des pages
import Home from './pages/Home';
import Services from './pages/Services';
import Realisations from './pages/Realisations';
import Contact from './pages/Contact';
import MentionsLegales from './pages/MentionsLegales';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="realisations" element={<Realisations />} />
          <Route path="contact" element={<Contact />} />
          <Route path="mentions-legales" element={<MentionsLegales />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
