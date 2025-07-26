import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <Container className="py-5">
      <Row>
        <Col lg={6} className="mb-5 mb-lg-0">
          <h1 className="mb-4">Contactez-moi</h1>
          <ContactForm />
        </Col>
        
        <Col lg={6}>
          <h2 className="mb-4">Coordonnées</h2>
          <address>
            <p><strong>Adresse:</strong> 123 Rue Example, Paris</p>
            <p><strong>Téléphone:</strong> 01 23 45 67 89</p>
            <p><strong>Email:</strong> contact@johndoe.dev</p>
          </address>
          
          <div className="mt-4">
            <h3>Localisation</h3>
            <div className="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.292292615509614!3d48.85837007928746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1623258136840!5m2!1sfr!2sfr" 
                width="100%" 
                height="300" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy"
                title="Carte Google Maps"
              ></iframe>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;



