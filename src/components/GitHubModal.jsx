// src/components/GitHubModal.jsx
import React, { useState, useEffect } from 'react';
import { Modal, Button, Spinner, Image, ListGroup, Badge } from 'react-bootstrap';
import { Github, Link45deg, People, Repo, Star } from 'react-bootstrap-icons';

const GitHubModal = () => {
  const [show, setShow] = useState(false);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchGitHubData = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://api.github.com/users/github-john-doe');
      
      if (!response.ok) {
        throw new Error('Profil GitHub non trouvé');
      }
      
      const data = await response.json();
      setUserData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (show) {
      fetchGitHubData();
    }
  }, [show]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* Bouton pour ouvrir la modale */}
      <Button 
        variant="primary" 
        onClick={handleShow}
        className="mt-3"
      >
        <Github className="me-2" />
        Voir le profil GitHub
      </Button>

      {/* Modale */}
      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <Github className="me-2" />
            {userData?.name || 'Profil GitHub'}
          </Modal.Title>
        </Modal.Header>
        
        <Modal.Body>
          {loading ? (
            <div className="text-center py-4">
              <Spinner animation="border" variant="primary" />
              <p className="mt-2">Chargement du profil...</p>
            </div>
          ) : error ? (
            <div className="alert alert-danger">
              Erreur : {error}. <br />
              Vous pouvez consulter le profil directement sur {' '}
              <a 
                href="https://github.com/github-john-doe" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          ) : userData && (
            <div className="github-profile">
              <div className="d-flex align-items-center mb-4">
                <Image 
                  src={userData.avatar_url} 
                  roundedCircle 
                  width={80}
                  height={80}
                  className="me-4"
                  alt={`Avatar de ${userData.name}`}
                />
                <div>
                  <h3>{userData.name || userData.login}</h3>
                  <p className="text-muted mb-1">{userData.bio}</p>
                  <a 
                    href={userData.html_url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-decoration-none"
                  >
                    <Link45deg className="me-1" />
                    {userData.html_url.replace('https://', '')}
                  </a>
                </div>
              </div>

              <ListGroup variant="flush" className="mb-3">
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  <span><People className="me-2" />Followers</span>
                  <Badge bg="primary">{userData.followers}</Badge>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  <span><People className="me-2" />Following</span>
                  <Badge bg="primary">{userData.following}</Badge>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  <span><Repo className="me-2" />Repositories publics</span>
                  <Badge bg="primary">{userData.public_repos}</Badge>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  <span><Star className="me-2" />Gists</span>
                  <Badge bg="primary">{userData.public_gists}</Badge>
                </ListGroup.Item>
              </ListGroup>

              {userData.blog && (
                <div className="mt-3">
                  <h5>Site web :</h5>
                  <a 
                    href={userData.blog.startsWith('http') ? userData.blog : `https://${userData.blog}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    {userData.blog}
                  </a>
                </div>
              )}
            </div>
          )}
        </Modal.Body>
        
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
          <Button 
            variant="primary" 
            href={userData?.html_url || 'https://github.com/github-john-doe'} 
            target="_blank"
            rel="noopener noreferrer"
          >
            Voir sur GitHub
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default GitHubModal;