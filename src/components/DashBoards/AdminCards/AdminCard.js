// AdminCard.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styles from './AdminCard.module.css';

const AdminCard = ({ iconSrc, title, link }) => {
    return (
        <div className={`${styles.card}`}>
            <div className={styles.cardIcon}>
                <img
                    style={{ borderRadius: '29px', objectFit: 'fill' }}
                    src={iconSrc}
                    alt={`${title} Icon`}
                />
            </div>
            <div className={styles.cardContent}>
                <h2>{title}</h2>
                <a href={link} className={styles.cardButton}>
                    View
                </a>
            </div>

        </div>
    );
};

AdminCard.propTypes = {
    iconSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default AdminCard;
