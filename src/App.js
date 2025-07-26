import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer'; 
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Legal from './pages/Legal';
import './assets/styles/custom.css';


function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        {/* En-tête présent sur toutes les pages */}
        <Header />
        
        {/* Contenu principal */}
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mentions-legales" element={<Legal />} />
          </Routes>
        </main>
        
        {/* Pied de page présent sur toutes les pages */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;