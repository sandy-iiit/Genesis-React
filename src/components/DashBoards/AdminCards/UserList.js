import React, { useState, useEffect } from 'react';

import axiosConfiguration from '../../../config/axiosConfiguration';
import NavBar from '../../NavBar';
import styles from './UserList.module.css';

import { useNavigate } from 'react-router-dom';
function UserList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axiosConfiguration.get('allusers')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    }, []);

    const Navigate = useNavigate();

    const handleViewDetails = (email) => {
        // Redirect to "mypolicy" page with email in props
        Navigate(`/mypolicies?email=${email}`);
    };

    return (
        <>
            <NavBar />
            <div className={styles.header}>
                <h1>All Users</h1>
            </div>
            <div className={styles.userCards}>
                {users.map(user => (
                    <div key={user._id} className={styles.userCard}>
                        <h2>{user.name}</h2>
                        <p>Email: {user.email}</p>
                        <p>Age: {user.age}</p>
                        <p>Sex: {user.sex}</p>
                        <p>Address: {user.address}</p>
                        <p>Phone: {user.phone}</p>
                        <button onClick={() => handleViewDetails(user.email)}>View Details</button>
                    </div>
                ))}
            </div>
        </>
    );
}

export default UserList;
