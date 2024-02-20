import React, { useState, useEffect } from 'react';
import styles from './TrackPolicy.module.css'; // Import your CSS module
import Footer from '../../Footer/Footer';
import NavBar from '../../NavBar';
import axiosConfiguration from '../../../config/axiosConfiguration';


const TrackPolicy = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    const handleSubmit = async (event) => {
        event.preventDefault();
        const email = event.target.email.value;

        try {
            setIsLoading(true);
            const response = await axiosConfiguration.post('policy_details', { email: email });
            console.log(response.data)
            const userData = response.data
            setUsers(userData);
            setIsLoading(false);
            console.log(users)
        } catch (error) {
            console.error('Error fetching user policies:', error);
            setIsLoading(false);
        }
    };

    return (
        <>
            <NavBar />

            <main>
                <h1 className={styles.mainTitle}>Find the User Policies</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" id="userId" name="email" placeholder="Enter email" className={styles.inputText} />
                    <button type="submit" className={styles.submitButton}>Search</button>
                </form>
                <div className={styles.userCards}>
                    {isLoading ? (
                        <p className={styles.loading}>Loading...</p>
                    ) : users.length === 0 ? (
                        <p className={styles.tryAnother}>No user found. Try with email.</p>
                    ) : (
                        users.map((user, index) => (
                            <div className={styles.userCard} key={index}>
                                <h2>{user.name}</h2>
                                <p className={styles.userInfo}><strong>Email:</strong> {user.email}</p>
                                <p className={styles.userInfo}><strong>Age:</strong> {user.age}</p>
                                <hr className={styles.divider} />
                                <p className={styles.sectionTitle}><strong>Current Policies:</strong></p>
                                <ul className={styles.policyList}>
                                    {user.currentPolicies.map((policy, idx) => (
                                        <li className={styles.policyItem} key={idx}>
                                            <strong>Type:</strong> {policy.type}<br />
                                            <strong>Name:</strong> {policy.name}<br />
                                            <strong>Amount:</strong> {policy.amount}<br />
                                            <strong>Term:</strong> {policy.term}<br />
                                            <strong>Status:</strong> {policy.status}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))
                    )}
                </div>

            </main>
            <Footer />
        </>
    );
};

export default TrackPolicy;
