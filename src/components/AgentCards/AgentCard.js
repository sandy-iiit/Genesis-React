// AgentCard.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styles from './AgentCard.module.css';

const AgentCard = ({ iconSrc, title, description, link }) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardIcon}>
                <img
                    className={styles.cardIconImage}
                    src={iconSrc}
                    alt={`${title} Icon`}
                />
            </div>
            <div className={styles.cardContent}>
                <h2>{title}</h2>
                <p>{description}</p>
                <a href={link} className={styles.cardButton}>
                    Go to {title}
                </a>
            </div>
        </div>
    );
};

AgentCard.propTypes = {
    iconSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default AgentCard;
