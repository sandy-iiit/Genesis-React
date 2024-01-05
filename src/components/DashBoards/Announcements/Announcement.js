

import React, { useState } from 'react';
import styles from './Announcement.module.css';
import NavBar from '../../NavBar';
import Footer from '../../Footer/Footer';
import axiosConfiguration from "../../../config/axiosConfiguration";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const Announcement = () => {
    const [recipient, setRecipient] = useState('users');
    const user=useSelector((state)=>state.auth)
    const navigate=useNavigate()
    const handleRecipientChange = (e) => {
        setRecipient(e.target.value);
    };

    function submitHandler(e) {
        e.preventDefault()
        let email;
        if(e.target.useremail){
            email=e.target.useremail.value
        }

        const b={
            email:email,
            type:e.target.recipient.value,
            subject:e.target.subject.value,
            message:e.target.message.value,
            sender:user.email
        }
        console.log(b)
        const res=axiosConfiguration.post("/send_email",b)
        console.log(res.data)
        navigate("/dashBoard")
    }

    return (
        <>
            <NavBar />
            <div className={styles.cardContainer}>
                <div className={styles.card}>
                    <h2 className={styles.cardTitle}>Send Announcement</h2>
                    <form onSubmit={submitHandler} className={styles.form}>
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
                                <input type="email" id="useremail" name="useremail" className={styles.inp} />
                            </div>
                        )}
                        <div className={styles.formGroup}>
                            <label htmlFor="subject">Subject:</label>
                            <input  type="text" id="subject" name="subject" required className={styles.inp} />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="message">Message:</label>
                            <textarea id="message" name="message" required className={styles.textArea}></textarea>
                        </div>
                        <button className={styles.buttt} type="submit">
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

