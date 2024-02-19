// LoadingPage.js
import React from 'react';
import classes from './LoadingPage.module.css'; // Make sure to import your CSS file

const LoadingPage = () => {
    return (
        <div className={classes.loadingPage}>
            <div className={classes.loadingText}>GENESIS</div>
        </div>
    );
};

export default LoadingPage;
