import React from 'react';
import styles from './Services.module.css'
import man_photo from '../../assets/images/ServicesPhotos/Man thinking-rafiki.svg'
const WriteQuery = () => {
  return (
    <div className={styles.writequery}>
      <div className={`${styles.qrygen} ${styles.qrygen1}`}>
        <h2>Drop a Review</h2>
        <form id="myForm" className={styles.quoteform}>
          <input type="text" placeholder="Name" name="name" id="quotnam1" required />
          <span className={styles.error} id="nameError"></span>
          <input type="text" placeholder="Email" name="email" id="email" />
          <span className={styles.error} id="emailError"></span>
          <textarea name="review" id="queryy" cols="3" rows="4" placeholder="Write your review"></textarea>
          <span className={styles.error} id="queryError"></span>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className={styles.queryman}>
        <img src={man_photo} alt="" />
      </div>
    </div>
  );
}

export default WriteQuery;
