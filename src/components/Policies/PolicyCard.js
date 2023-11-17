import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PolicyCard.module.css'; // Import your CSS module

const PolicyCard = ({ title, videoSrc, description, link, isAuthenticated }) => (
  <div className={styles.PolicyCard}>
    <div>
      <video autoPlay muted loop src={videoSrc}></video>
    </div>
    <div className={styles.disclaimer}>
      <br />
      <h2>{title}</h2>
      <br />
      <p>{description}</p>
      {isAuthenticated ? (
        <Link to={link}>
          <button id="explore1" name="explore1" className={styles.explore}>
            Explore More
          </button>
        </Link>
      ) : (
        <Link to="/login">
          <button id="explore1" name="explore1" className={styles.explore}>
            Explore More
          </button>
        </Link>
      )}
    </div>
  </div>
);

export default PolicyCard;
