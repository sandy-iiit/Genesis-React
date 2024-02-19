
import React from 'react';
import styles from './FindAgent.module.css';
import agentphoto from '../../assets/images/home-offers/findagent_photo.svg'
import axios from "axios";
import axiosConfiguration from "../../config/axiosConfiguration";
const FindAgent = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const b={
            email:event.target.email.value,
            name:event.target.name.value
        }

        const res=axiosConfiguration.post("/findanagent",b)
    };

    return (
        <div className={styles.card}>
            <div className={styles.background}></div>
            <div className={styles.content}>
                <h2 className={styles.title}>Find An Agent</h2>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <input type="text" className={styles.input} placeholder="Name" name="name" required />
                    <input type="email" className={styles.input} placeholder="Email" name="email" required />
                    <button type="submit" className={styles.button}>Submit</button>
                </form>
            </div>
            <div className={styles.photo}>
                <img src={agentphoto} alt='hello' />
            </div>
        </div>
    );
};

export default FindAgent;
