import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Card from '../components/Card';

const services = [
  {
    title: "Développement Frontend",
    description: "Création d'interfaces utilisateur modernes avec React",
    imageUrl: "/images/service1.jpg",
    tags: ["React", "JavaScript"]
  },
  // Ajoutez d'autres services...
];

const Services = () => {
  return (
    <Container className="py-5">
      <h1 className="mb-4">Mes services</h1>
      <Row xs={1} md={2} lg={3} className="g-4">
        {services.map((service, index) => (
          <Col key={index}>
            <Card {...service} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Services;