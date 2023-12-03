// Announcement.jsx

import React, { useState } from 'react';
import styles from './Announcement.module.css';
import NavBar from '../../NavBar';
import Footer from '../../Footer/Footer';

const Announcement = () => {
  const [recipient, setRecipient] = useState('users');

  const handleRecipientChange = (e) => {
    setRecipient(e.target.value);
  };

  return (
    <>
      <NavBar />
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Send Announcement</h2>
          <form className={styles.form} method="post" action="/send_email">
            <div className={styles.formGroup}>
              <label htmlFor="recipient">Recipient:</label>
              <select
                id="recipient"
                name="recipient"
                value={recipient}
                onChange={handleRecipientChange}
                className={styles.selectBox}
              >
                <option value="users">All Users</option>
                <option value="admin">Admin</option>
                <option value="particular_user">Particular User</option>
              </select>
            </div>
            {recipient === 'particular_user' && (
              <div className={styles.formGroup}>
                <label htmlFor="useremail">User Email:</label>
                <input type="email" id="useremail" name="useremail" className={styles.inputBox} />
              </div>
            )}
            <div className={styles.formGroup}>
              <label htmlFor="subject">Subject:</label>
              <input type="text" id="subject" name="subject" required className={styles.inputBox} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" required className={styles.textArea}></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>
              Send
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Announcement;
