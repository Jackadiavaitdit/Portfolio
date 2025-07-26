import React from 'react';
import { Card as BootstrapCard } from 'react-bootstrap';

const Card = ({ 
  title, 
  description, 
  imageUrl, 
  tags = [], 
  linkUrl 
}) => {
  return (
    <BootstrapCard className="h-100 shadow-sm border-0">
      {imageUrl && (
        <BootstrapCard.Img 
          variant="top" 
          src={imageUrl} 
          alt={title}
          style={{ height: '180px', objectFit: 'cover' }}
        />
      )}
      
      <BootstrapCard.Body className="d-flex flex-column">
        <BootstrapCard.Title>{title}</BootstrapCard.Title>
        <BootstrapCard.Text className="flex-grow-1">
          {description}
        </BootstrapCard.Text>
        
        {tags.length > 0 && (
          <div className="mb-3">
            {tags.map((tag, index) => (
              <span 
                key={index} 
                className="badge bg-secondary me-1"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        
        {linkUrl && (
          <a 
            href={linkUrl} 
            className="btn btn-primary mt-auto align-self-start"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Voir le projet
          </a>
        )}
      </BootstrapCard.Body>
    </BootstrapCard>
  );
};

export default Card;