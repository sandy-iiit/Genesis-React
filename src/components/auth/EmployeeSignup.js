import React, { useState } from 'react';
import styles from './EmployeeSignup.module.css';
import NavBar from '../NavBar';
import Footer from '../Footer/Footer';

const EmployeeSignupForm = () => {
  const [successMessage, setSuccessMessage] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
    // For demonstration purposes, simulate form submission success
    setSuccessMessage('Your data is submitted. Please wait for approval from the manager.');
  };

  return (
    <>
    <NavBar/>
    <div className={styles.signupForm}>
      <h2>Employee Signup</h2>
      <div className={`${styles.successMessage} ${successMessage ? styles.show : ''}`}>
        {successMessage}
      </div>
      <form id="employee-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <span id="name-error" className={styles.error}></span>

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <span id="email-error" className={styles.error}></span>

        <label htmlFor="age">Age:</label>
        <input type="text" id="age" name="age" required />
        <span id="age-error" className={styles.error}></span>

        <label htmlFor="sex">Sex:</label>
        <select id="sex" name="sex" required>
          <option value="">--Select--</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <span id="sex-error" className={styles.error}></span>

        <label htmlFor="aadhar">Aadhar Number:</label>
        <input type="text" id="aadhar" name="aadhar" required />
        <span id="aadhar-error" className={styles.error}></span>

        <label htmlFor="address">Address:</label>
        <textarea id="address" name="address" required></textarea>
        <span id="address-error" className={styles.error}></span>

        <label htmlFor="phone">Phone:</label>
        <input type="text" id="phone" name="phone" required />
        <span id="phone-error" className={styles.error}></span>

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
        <span id="password-error" className={styles.error}></span>

        <label htmlFor="dob">Date of Birth:</label>
        <input type="date" id="dob" name="dob" />
        <span id="dob-error" className={styles.error}></span>

        <input type="submit" value="Sign Up" className={styles.submitButton} />
      </form>
    </div>
    <Footer/>
    </>
  );
};

export default EmployeeSignupForm;
