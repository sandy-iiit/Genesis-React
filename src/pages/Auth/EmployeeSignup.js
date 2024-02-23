import React, { useState } from 'react';
import styles from './EmployeeSignup.module.css';
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer/Footer";
import axiosConfiguration from "../../config/axiosConfiguration";
import { toast } from 'react-toastify';

const EmployeeSignupForm = () => {
    const [successMessage, setSuccessMessage] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const formData = new FormData(event.target);
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });
    
        try {
            const response = await axiosConfiguration.post('/employeesignupposting', formObject);
            toast.success("Sign Up successful !!");
            setSuccessMessage(response.data.message);
            // Clear form fields
            event.target.reset();
            setErrors({}); // Clear any previous errors
        } catch (error) {
            setErrors(error.response.data);
        }
    };
    

    return (
        <>
            <NavBar />
            <div className={styles.signupForm}>
                <h2>Employee Signup</h2>
                <div className={`${styles.successMessage} ${successMessage ? styles.show : ''}`}>
                    {successMessage}
                </div>
                <form id="employee-form" onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                    <span id="name-error" className={styles.error}>{errors.name}</span>

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                    <span id="email-error" className={styles.error}>{errors.email}</span>

                    <label htmlFor="age">Age:</label>
                    <input type="text" id="age" name="age" required />
                    <span id="age-error" className={styles.error}>{errors.age}</span>

                    <label htmlFor="sex">Sex:</label>
                    <select id="sex" name="sex" required>
                        <option value="">--Select--</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                    <span id="sex-error" className={styles.error}>{errors.sex}</span>

                    <label htmlFor="aadhar">Aadhar Number:</label>
                    <input type="text" id="aadhar" name="aadhar" required />
                    <span id="aadhar-error" className={styles.error}>{errors.aadhar}</span>

                    <label htmlFor="address">Address:</label>
                    <textarea id="address" name="address" required></textarea>
                    <span id="address-error" className={styles.error}>{errors.address}</span>

                    <label htmlFor="phone">Phone:</label>
                    <input type="text" id="phone" name="phone" required />
                    <span id="phone-error" className={styles.error}>{errors.phone}</span>

                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required />
                    <span id="password-error" className={styles.error}>{errors.password}</span>

                    <label htmlFor="dob">Date of Birth:</label>
                    <input type="date" id="dob" name="dob" poli/>
                    <span id="dob-error" className={styles.error}>{errors.dob}</span>

                    <input type="submit" value="Sign Up" className={styles.submitButton} />
                </form>
            </div>
            <Footer />
        </>
    );
};

export default EmployeeSignupForm;
