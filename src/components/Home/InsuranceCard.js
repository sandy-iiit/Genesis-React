import React from 'react';
import styles from './InsuranceCard.module.css';

const InsuranceCard = () => {
  return (
    <div className={styles.maincardrr}>
      <h2 style={{ textAlign: 'center', color: '#3E54AC' }}>Insurance starting at ... <span className={styles.rupee}>&#8377;</span>2/day</h2>
      <div className={styles.cardsinsideme}>
        <div className={styles.card1}>
          <img src="https://staticimg.insurancedekho.com/seo/common/seoicon_save.svg" alt="Tax Benefits" />
          <h4 style={{ color: '#3E54AC' }}>Tax benefits</h4>
          <span>up to 1,50,000</span><br />
          <span>tax-free death benefits</span>
        </div>
        <div className={styles.card1}>
          <img src="https://staticimg.insurancedekho.com/seo/common/seoicon_HealthInsSupport.svg" alt="Claim Support" />
          <h4 style={{ color: '#3E54AC' }}>claim support</h4>
          <span>Everyday Everyminute</span><br />
          <span>providing best resources</span>
        </div>
        <div className={styles.card1}>
          <img src="https://staticimg.insurancedekho.com/seo/common/seoicon_healthSmile.svg" alt="Happy Customers" />
          <h4 style={{ color: '#3E54AC' }}>45 Lac+</h4>
          <span>Happy Customers</span>
        </div>
        <div className={styles.card1}>
          <img src="https://staticimg.insurancedekho.com/seo/common/seoicon_save.svg" alt="Coverage Limits" />
          <h4 style={{ color: '#3E54AC' }}>Coverage limits</h4>
          <span>High Coverage Limits</span><br />
          <span>Limit of liability</span>
        </div>
        <div className={styles.card1image}>
          <img src="https://www.insurewinsure.com/assets/images/life-insurance-1.png" alt="Insurance Cover" />
        </div>
      </div>
    </div>
  );
};

export default InsuranceCard;
