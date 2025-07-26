import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Card from '../components/Card';

const projects = [
  {
    title: "Site vitrine",
    description: "Création d'un site vitrine responsive pour un client",
    imageUrl: "/images/project1.jpg",
    tags: ["React", "Bootstrap"],
    linkUrl: "#"
  },
  // Ajoutez 5 autres projets...
];

const Portfolio = () => {
  return (
    <Container className="py-5">
      <h1 className="mb-4">Mes réalisations</h1>
      <Row xs={1} md={2} lg={3} className="g-4">
        {projects.map((project, index) => (
          <Col key={index}>
            <Card {...project} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Portfolio;