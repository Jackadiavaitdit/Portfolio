// src/components/Footer.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { 
  Github, 
  Linkedin, 
  Twitter,
  Envelope,
  Telephone,
  GeoAlt 
} from 'react-bootstrap-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-5 mt-5">
      <Container>
        <Row>
          {/* Colonne 1 : Coordonnées */}
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4">John Doe</h5>
            <address>
              <p className="d-flex align-items-center">
                <GeoAlt className="me-2" />
                <span>123 Rue du Développement, 75000 Paris</span>
              </p>
              <p className="d-flex align-items-center">
                <Telephone className="me-2" />
                <span>01 23 45 67 89</span>
              </p>
              <p className="d-flex align-items-center">
                <Envelope className="me-2" />
                <span>contact@johndoe.dev</span>
              </p>
            </address>
            
            <div className="social-icons mt-3">
              <a 
                href="https://github.com/johndoe" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white me-3"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://linkedin.com/in/johndoe" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white me-3"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://twitter.com/johndoe" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
            </div>
          </Col>

          {/* Colonne 2 : Liens rapides */}
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4">Navigation</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/" className="text-white text-decoration-none">Accueil</a>
              </li>
              <li className="mb-2">
                <a href="/services" className="text-white text-decoration-none">Services</a>
              </li>
              <li className="mb-2">
                <a href="/portfolio" className="text-white text-decoration-none">Portfolio</a>
              </li>
              <li>
                <a href="/contact" className="text-white text-decoration-none">Contact</a>
              </li>
            </ul>
          </Col>

          {/* Colonne 3 : Dernières réalisations */}
          <Col md={4}>
            <h5 className="text-uppercase mb-4">Derniers projets</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/portfolio#projet1" className="text-white text-decoration-none">
                  Site e-commerce
                </a>
              </li>
              <li className="mb-2">
                <a href="/portfolio#projet2" className="text-white text-decoration-none">
                  Application React
                </a>
              </li>
              <li>
                <a href="/portfolio#projet3" className="text-white text-decoration-none">
                  Refonte WordPress
                </a>
              </li>
            </ul>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col className="text-center">
            <p className="mb-0">
              &copy; {currentYear} John Doe. Tous droits réservés.
            </p>
            <p className="mb-0">
              <a 
                href="/mentions-legales" 
                className="text-white-50 text-decoration-none"
              >
                Mentions légales
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;