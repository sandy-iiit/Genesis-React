import React, { useState } from 'react';
import styles from './Services.module.css';
import man_photo from '../../assets/images/ServicesPhotos/Man thinking-rafiki.svg';
import axiosConfiguration from '../../config/axiosConfiguration';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const WriteQuery = () => {
    const [errors, setErrors] = useState({});
    const navigate =  useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const name = formData.get('name');
        const email = formData.get('email');
        const review = formData.get('review');

        const newErrors = {};
        if (!name.trim()) {
            newErrors.name = 'Name is required';
        }
        if (email && !validateEmail(email)) {
            newErrors.email = 'Please enter a valid email address';
        }
        if (!review.trim()) {
            newErrors.review = 'Your review is missing';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            try {
                await axiosConfiguration.post('/drop-review', {
                    name,
                    email,
                    review
                });
                navigate('/services')
                toast.success('Thanks for your review', { autoClose: 2000 });
                console.log('Review submitted successfully');
                e.target.reset();

                setErrors({});
            } catch (error) {
                console.error('Error submitting review:', error);
            }
        }
    };

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    return (
        <div className={styles.writequery}>
            <div className={`${styles.qrygen} ${styles.qrygen1}`}>
                <h2>Drop a Review</h2>
                <form id="myForm" className={styles.quoteform} onSubmit={handleSubmit}>
                    <input className={styles.text} type="text" placeholder="Name" name="name" id="name" required />
                    {errors.name && <span className={styles.error} style={{ color: 'red' }}>{errors.name}</span>}
                    <input className={styles.text} type="text" placeholder="Email" name="email" id="email" />
                    {errors.email && <span className={styles.error} style={{ color: 'red' }}>{errors.email}</span>}
                    <textarea className={styles.textarea} name="review" id="review" cols="3" rows="4" placeholder="Write your review"></textarea>
                    {errors.review && <span className={styles.error} style={{ color: 'red' }}>{errors.review}</span>}
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div className={styles.queryman}>
                <img src={man_photo} alt="" />
            </div>
        </div >
    );
}

export default WriteQuery;
