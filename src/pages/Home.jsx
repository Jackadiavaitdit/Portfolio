// src/pages/Home.jsx
import React from 'react';
import { Container, Button } from 'react-bootstrap';
import GitHubModal from '../components/GitHubModal';
import SkillsSection from '../components/ProgressBar';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section vh-100 d-flex align-items-center">
        <div className="hero-overlay"></div>
        <Container className="position-relative z-index-1 text-center text-white">
          <h1 className="display-3 fw-bold mb-3">John Doe</h1>
          <h2 className="h3 mb-4">Développeur Web Full Stack</h2>
          <p className="lead mb-5">Je crée des applications web modernes et performantes</p>
          
          <div className="d-flex justify-content-center gap-3">
            <Button 
              variant="primary" 
              size="lg" 
              href="#competences"
              className="px-4"
            >
              Mes compétences
            </Button>
            <GitHubModal />
          </div>
        </Container>
      </section>

      {/* About Section */}
      <section className="about-section py-5 bg-light">
        <Container>
          <div className="row align-items-center">
            <div className="col-lg-5 mb-4 mb-lg-0">
              <img 
                src="/images/profile.jpg" 
                alt="John Doe" 
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-lg-7">
              <h2 className="section-title mb-4">À propos de moi</h2>
              <p className="lead">
                Passionné par le développement web depuis 5 ans, je suis spécialisé dans les technologies JavaScript modernes.
              </p>
              <p>
                Après une formation intensive au CEF, j'ai travaillé sur divers projets allant des sites vitrines aux applications web complexes. Mon objectif est de créer des solutions élégantes et fonctionnelles qui répondent parfaitement aux besoins des utilisateurs.
              </p>
              <div className="mt-4">
                <Button variant="outline-primary" href="/contact">
                  Contactez-moi
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Skills Section */}
      <SkillsSection />

      {/* Call-to-Action */}
      <section className="cta-section py-5 bg-primary text-white">
        <Container className="text-center">
          <h2 className="mb-4">Prêt à collaborer sur un projet ?</h2>
          <p className="lead mb-4">
            Je suis disponible pour des opportunités en alternance ou des missions freelance.
          </p>
          <Button variant="light" size="lg" href="/contact">
            Discutons de votre projet
          </Button>
        </Container>
      </section>
    </>
  );
};

export default Home;