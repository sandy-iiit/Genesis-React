// Footer.js
import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.siteFooter}>
            <div className={styles.widgetArea}>
                <div className="container">
                    <div className="row">
                        <div class="col-xs-12 col-sm-4 col-md-2">
                            <div class={styles.widget}>
                                <h3 class={styles.widgetTitle}>Contact</h3>
                                <address> GENESIS INC. 523  sricity
                                </address>
                                <a href="#" style={{fontSize:'15px'}}>Phone: +919618293860</a><br></br>
                                <a href="mailto:mano@GENESIS.com"  style={{fontSize:'15px'}}>info@genesis.com</a>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-4 col-md-2">
                            <div class={styles.widget}>
                                <h3 class={styles.widgetTitle}>Company</h3>
                                <ul class="list-unstyled">
                                    <li><a href="#">About us</a></li>
                                    <li><a href="#">Infoline</a></li>
                                    <li><a href="#">Team</a></li>
                                    <li><a href="#">Join us</a></li>
                                    <li><a href="#">Cooperation</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-4 col-md-2">
                            <div class={styles.widget}>
                                <h3 class={styles.widgetTitle}>Products</h3>
                                <ul class="list-unstyled">
                                    <li><a href="#">Life insurance</a></li>
                                    <li><a href="#">Home insurance</a></li>
                                    <li><a href="/policies">health insurance</a></li>
                                    <li><a href="#">Business insurance</a></li>
                                    <li><a href="#">Investment insurance</a></li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-xs-12 col-sm-4 col-md-2">
                            <div class={styles.widget}>
                                <h3 class={styles.widgetTitle}>Our Team</h3>
                                <ul class="list-unstyled">
                                    <li><a href="#">Sandeep</a></li>
                                    <li><a href="#">Manohar</a></li>
                                    <li><a href="#">Pranauv</a></li>
                                    <li><a href="#">Aditya</a></li>
                                    <li><a href="#">Praneeth</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-4 col-md-2">
                            <div class={styles.widget}>
                                <h3 class={styles.widgetTitle}>Services</h3>
                                <ul class="list-unstyled">
                                    <li><a href="#">Find agent</a></li>
                                    <li><a href="#">quote generation</a></li>
                                    <li><a href="#">review us</a></li>
                                    <li><a href="#">FAQs</a></li>
                                    <li><a href="#">latest news</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-4 col-md-2">
                            <div class={styles.widget}>
                                <h3 class={styles.widgetTitle}>Contact</h3>
                                <address> GENESIS INC. 523  sricity
                                </address>
                                <a href="#"  style={{fontSize:'15px'}}>Phone: +919618293860</a><br></br>
                                <a href="mailto:mano@GENESIS.com"  style={{fontSize:'15px'}}>info@genesis.com</a>
                            </div>
                        </div>
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
