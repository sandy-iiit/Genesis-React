import React from 'react';
import styles from './LatestNews.module.css';
import img1 from '../../assets/images/home-offers/featured-image-1@2x.jpg'
import img2 from '../../assets/images/home-offers/featured-image-2@2x.jpg'
import img3 from '../../assets/images/home-offers/featured-image-3@2x.jpg'
const LatestNews = () => {
    return (
        <div className={styles.fullwidthBlock}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>Latest news</h2>
                <div className={styles.row + ' ' + styles.newsList}>
                    <div className={styles.colMd4}>
                        <div className={styles.news}>
                            <figure><img src={img1} alt="" /></figure>
                            <h2 className={styles.entryTitle}><a href="#">Life Insurers' business growth muted in February</a></h2>
                        </div>
                    </div>
                    <div className={styles.colMd4}>
                        <div className={styles.news}>
                            <figure><img src={img2} alt="" /></figure>
                            <h2 className={styles.entryTitle}><a href="#">Refuse fuel to uninsured vehicles, suggest insurers Mar 10, 2023</a></h2>
                        </div>
                    </div>
                    <div className={styles.colMd4}>
                        <div className={styles.news}>
                            <figure><img src={img3} alt="" /></figure>
                            <h2 className={styles.entryTitle}><a href="#">Govt unlikely to roll back tax plan on high-value life insurance</a></h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestNews;
