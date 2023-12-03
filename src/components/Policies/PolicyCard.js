import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PolicyCard.module.css'; // Import your CSS module

const PolicyCard = ({ title, videoSrc, description, link, isAuthenticated }) => {
  const isProtectYourCar = title === 'PROTECT YOUR CAR';

  return (
    <div className={`${styles.PolicyCard} ${isProtectYourCar ? styles.protectCar : ''}`}>
      {!isProtectYourCar ? (
        <div className={styles.video}>
          <video autoPlay muted loop src={videoSrc}></video>
        </div>
      ) : (
        <div className={`${styles.gif} ${styles.left}`}>
          <img src={videoSrc} alt="GIF" />
        </div>
      )}
      <div className={`${styles.disclaimer} ${styles.content} ${isProtectYourCar ? styles.right : ''}`}>
        <h2>{title}</h2>
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
};

export default PolicyCard;
