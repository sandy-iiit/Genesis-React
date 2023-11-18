// Footer.js
import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.siteFooter}>
            <div className={styles.widgetArea}>
                <div className={styles.container}>
                    <div className={styles.row}>
                        {/* Your widget content goes here */}
                    </div>
                </div>
            </div>

            <div className={styles.bottomFooter}>
                <div className={styles.container}>
                    <nav className={styles.footerNavigation}>
                        <a href="/home">Home</a>
                        <a href="/aboutus">About us</a>
                        <a href="/services">Services</a>
                        <a href="/policies">Policies</a>
                        <a href="/contactus">Contact</a>
                    </nav>
                </div>
                <br />
                <div className={styles.colophon}>
                    Copyright 2021 Company name GENESIS Designed by{' '}
                    <span className={styles.com}>GEN</span>. All rights reserved.
                </div>
            </div>
        </div>
    );
};

export default Footer;
