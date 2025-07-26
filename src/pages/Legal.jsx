import React from 'react';
import { Accordion } from 'react-bootstrap';

export default function Legal() {
  return (
    <div className="container py-4">
      <h1>Mentions Légales</h1>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Éditeur du site</Accordion.Header>
          <Accordion.Body>John Doe</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Hébergeur</Accordion.Header>
          <Accordion.Body>Nom de l'hébergeur</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}