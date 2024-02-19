
// PolicyForm.js

import React, {useEffect, useState} from 'react';
import styles from './PolicyForm.module.css';
import NavBar from '../../NavBar';
import Footer from '../../Footer/Footer';
import classes from "../../Profile/Details.module.css";

const PolicyForm = () => {
    const [isLifeInsurance, setIsLifeInsurance] = useState(false);

    const handleTypeChange = (e) => {
        setIsLifeInsurance(e.target.value === 'life');
    };

    return (
        <>
            <NavBar />
            <div className={styles.body}>
                <div className={styles.cardHeader}>
                    <div>
                        <h1>Insurance Reinvented: Designing Beyond the Norm</h1>
                    </div>
                </div>

                <div className={styles.cardContainer}>
                    <div className={styles.card}>
                        <img
                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ4Sjgy5RXwFCvajaFtKqrAsNuOeIrErpQoE1S2vDxgg&s'
                            alt="Policy Design Tool"
                            className={styles.cardImage}
                        />
                        <div className={styles.cardContent}>
                            <h2 className={styles.cardTitle}>Policy Design Tool</h2>
                            <p className={styles.cardDescription}>
                                Use our advanced policy design tool to create a customized
                                insurance policy that fits your needs.
                            </p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img
                            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRR6fXxIIt-3PRmJounn8Q7XuaxXbMRoLANEtyKiqUR8pqWMVv7"
                            alt="Expert Assistance"
                            className={styles.cardImage}
                        />
                        <div className={styles.cardContent}>
                            <h2 className={styles.cardTitle}>Expert Assistance</h2>
                            <p className={styles.cardDescription}>
                                Our experienced advisors are ready to guide you through the
                                process and answer all your policy-related queries.
                            </p>
                        </div>
                    </div>

                </div>
                <form  className={styles.formm}>
                    <div className={styles['form-group']}>
                        <label htmlFor="type" className={styles['label']}>Type:</label>
                        <select id="type" name="type" onChange={handleTypeChange} className={styles['select']}>
                            <option value="car">Car Insurance</option>
                            <option value="life">Life Insurance</option>
                            <option value="health">Health Insurance</option>
                        </select>
                    </div>
                    <div className={styles['form-group']}>
                        <label htmlFor="name" className={styles['label']}>Name:</label>
                        <input type="text" id="name" name="name" required className={styles['input']} />
                    </div>
                    <div className={styles['form-group']}>
                        <label htmlFor="amount" className={styles['label']}>Amount:</label>
                        <input type="number" id="amount" name="amount" required className={styles['input']} />
                    </div>
                    <div className={styles['form-group']}>
                        <label htmlFor="term" className={styles['label']}>Term:</label>
                        <input type="text" id="term" name="term" placeholder="annual/monthly" required className={styles['input']} />
                    </div>
                    {isLifeInsurance && (
                        <>
                            <div className={styles['form-group']}>
                                <label htmlFor="duration" className={styles['label']}>Duration:</label>
                                <input type="number" id="duration" name="duration" placeholder="enter in years" required className={styles['input']} />
                            </div>
                            <div className={styles['form-group']}>
                                <label htmlFor="premium" className={styles['label']}>Premium:</label>
                                <input type="number" id="premium" name="premium" required className={styles['input']} />
                            </div>
                        </>
                    )}
                    <div className={styles['form-group']}>
                        <label htmlFor="details" className={styles['label']}>Details:</label>
                        <textarea id="details" name="details" className={styles['textarea']}></textarea>
                    </div>
                    <div className={styles['form-group']}>
                        <label htmlFor="tc" className={styles['label']}>Terms and Conditions:</label>
                        <textarea id="tc" name="tc" className={styles['textarea']}></textarea>
                    </div>
                    <div className={styles['form-group']}>
                        <label htmlFor="ge" className={styles['label']}>GE:</label>
                        <textarea type="text" id="ge" name="ge" className={styles['textarea']}></textarea>
                    </div>
                    <div className={styles['form-group']}>
                        <label htmlFor="benefits" className={styles['label']}>Benefits:</label>
                        <textarea id="benefits" name="benefits" className={styles['textarea']}></textarea>
                    </div>
                    <br />
                    <button type="submit" className={styles.butr}>Submit</button>
                </form>
            </div>
            <Footer />
        </>
    );
};

export default PolicyForm;
