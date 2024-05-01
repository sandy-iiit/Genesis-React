import React, { useState, useEffect } from 'react';
import axiosConfiguration from '../../../config/axiosConfiguration';
import styles from './UserManage.module.css';
import { toast } from 'react-toastify';

function UserMange() {
    const [admins, setAdmins] = useState([]);

    useEffect(() => {
        fetchAdmins();
    }, []);

    const fetchAdmins = async () => {
        try {
            const response = await axiosConfiguration.get('/getallusers');
            setAdmins(response.data);
        } catch (error) {
            console.error('Error fetching admins:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axiosConfiguration.post('/deleteuser', { email: id });
            toast.success("User deleted Successfully!!!");
            fetchAdmins(); // Fetch admins again to update the list after deleting
        } catch (error) {
            console.error('Error deleting admin:', error);
        }
    };

    return (
        <div className={styles.container}>
            <h2>Admin Management</h2>
            <div className={styles.adminsContainer}>
                {admins.map((admin) => (
                    <div key={admin._id} className={styles.card}>
                        <h3>{admin.name}</h3>
                        <p>Email: {admin.email}</p>
                        <p>Age: {admin.age}</p>
                        <p>Address: {admin.address}</p>
                        <p>Phone: {admin.phone}</p>
                        <button onClick={() => handleDelete(admin.email)} className={styles.deleteButton}>
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UserMange;
