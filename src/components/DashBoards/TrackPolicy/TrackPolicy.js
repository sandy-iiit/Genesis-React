
import React from 'react';
import styles from './TrackPolicy.module.css'; // Import your CSS module
import Footer from '../../Footer/Footer';
import NavBar from '../../NavBar';

const TrackPolicy = () => {
    const users = [];

    return (
        <>
            <NavBar />


            <main>
                <h1 className={styles.mainTitle}>Find the User Policies</h1>
                <form action="/policy_details" method="post">
                    <input type="text" id="userId" name="email" placeholder="Enter email" className={styles.inputText} />
                    <button type="submit" className={styles.submitButton}>Search</button>
                </form>
                <div className={styles.userCards}>
                    {users.length === 0 ? (
                        <p className={styles.tryAnother}>Try another.</p>
                    ) : (
                        users.map((user, index) => (
                            <div className={styles.userCard} key={index}>
                                <h2>{user.name}</h2>
                                <p><strong>Email:</strong> {user.email}</p>
                                <p><strong>Age:</strong> {user.age}</p>
                                {/* Add more user details */}
                                <p><strong>Current policies:</strong></p>
                                <ul className={styles.policyList}>
                                    {user.currentPolicies.map((policy, idx) => (
                                        <li key={idx}>
                                            type: {policy.type}<br />
                                            amount: {policy.amount}<br />
                                            term: {policy.term}<br />
                                            status: {policy.status}
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
