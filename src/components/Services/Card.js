import React from 'react';
import './Card.css';

const Card = ({ title, type, amount, term, status }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h4>{title}</h4>
      </div>
      <div className="card-body">
        <p><strong>Type:</strong> {type}</p>
        <p><strong>Amount:</strong> {amount}</p>
        <p><strong>Term:</strong> {term}</p>
        <p><strong>Status:</strong> {status}</p>
      </div>
    </div>
  );
}

export default Card;
