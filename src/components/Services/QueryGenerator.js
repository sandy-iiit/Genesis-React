import React, { useState, useCallback } from 'react';
import styles from './Services.module.css';
import insurancephoto from '../../assets/images/ServicesPhotos/Insurance-bro.svg';
import axiosConfiguration from '../../config/axiosConfiguration';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const QueryGenerator = () => {
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const quotnam = formData.get('quotnam');
        const quotemail = formData.get('quotemail');
        const quotinsurance = formData.get('quotinsurance');
        const quotzip = formData.get('quotzip');
        const quotage = formData.get('quotage');
        const quotcoverage = formData.get('quotcoverage');

        const newErrors = {};
        if (!quotnam.trim()) {
            newErrors.name = 'Name is required';
        }
        if (!quotemail.trim()) {
            newErrors.email = 'Email is required';
        } else if (!validateEmail(quotemail)) {
            newErrors.email = 'Please enter a valid email address';
        }
        if (!quotinsurance.trim()) {
            newErrors.insuranceType = 'Insurance type is required';
        } else if (!['life', 'transport', 'health'].includes(quotinsurance.trim().toLowerCase())) {
            newErrors.insuranceType = 'Invalid insurance type';
        }
        if (!quotzip.trim()) {
            newErrors.zipCode = 'Zip code is required';
        } else if (!validateZipCode(quotzip)) {
            newErrors.zipCode = 'Please enter a valid 5-digit zip code';
        }
        if (!quotage.trim()) {
            newErrors.age = 'Age is required';
        } else if (!validateAge(quotage)) {
            newErrors.age = 'Age must be above 18 years';
        }
        if (!quotcoverage.trim()) {
            newErrors.coverageLimit = 'Coverage limit is required';
        } else if (!validateCoverageLimit(quotcoverage)) {
            newErrors.coverageLimit = 'Coverage limit must be a number';
        }

        // If there are errors
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            // Form is valid, submit data
            try {
                const response = await axiosConfiguration.post('/generatequote', {
                    name: quotnam,
                    email: quotemail,
                    insuranceType: quotinsurance,
                    zip: quotzip,
                    age: quotage,
                    coverageLimit: quotcoverage
                });
                navigate('/services')
                console.log('response from server', response.status);

                setErrors({});

                // Reset form 
                toast.success("Check your email quote was sent");

            } catch (error) {
                console.error('Error generating quote:', error);
                toast.error("An error occurred!");
            }
        }
    }, []);

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const validateZipCode = (zipCode) => {
        return /^\d{5}$/.test(zipCode);
    };

    const validateAge = (age) => {
        const parsedAge = parseInt(age);
        return !isNaN(parsedAge) && parsedAge >= 18 && parsedAge <= 100;
    };

    const validateCoverageLimit = (coverageLimit) => {
        const parsedCoverageLimit = parseInt(coverageLimit);
        return !isNaN(parsedCoverageLimit);
    };

    return (
        <div className={styles.querygen}>
            <div className={styles.imaw}>
                <img src={insurancephoto} alt="qutt" />
            </div>
            <div className={styles.qrygen}>
                <h2>Grab a Quote</h2>
                <form className={styles.quoteform} id="myForm1" onSubmit={handleSubmit}>
                    <input className={styles.text} type="text" placeholder="Name" name="quotnam" id="quotnam" />
                    {errors.name && <span className={styles.error} style={{ color: 'red' }}>{errors.name}</span>}

                    <input className={styles.text} type="text" placeholder="Email" name="quotemail" id="quotemail" />
                    {errors.email && <span className={styles.error} style={{ color: 'red' }}>{errors.email}</span>}

                    <input className={styles.text} type="text" placeholder="Insurance Type (life/transport/health)" name="quotinsurance" id="quotinsurance" />
                    {errors.insuranceType && <span className={styles.error} style={{ color: 'red' }}>{errors.insuranceType}</span>}

                    <input className={styles.text} type="text" placeholder="Zip Code" name="quotzip" id="quotzip" />
                    {errors.zipCode && <span className={styles.error} style={{ color: 'red' }}>{errors.zipCode}</span>}

                    <input className={styles.text} type="text" placeholder="Age" name="quotage" id="quotage" />
                    {errors.age && <span className={styles.error} style={{ color: 'red' }}>{errors.age}</span>}

                    <input className={styles.text} type="text" placeholder="Coverage Limit" name="quotcoverage" id="quotcoverage" />
                    {errors.coverageLimit && <span className={styles.error} style={{ color: 'red' }}>{errors.coverageLimit}</span>}

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default QueryGenerator;
