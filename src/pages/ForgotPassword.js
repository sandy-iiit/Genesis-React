import React, { useState } from 'react';
import styles from './ForgotPassword.module.css';
import axiosConfiguration from "../config/axiosConfiguration";

function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [showOTP, setShowOTP] = useState(false);
    const [password, setPassword] = useState('');
    const [type,setType]=useState('')
    const [OTP,setOTP]=useState('')
    const [token,setToken]=useState('')
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(e.target.type.value)
        const res = await axiosConfiguration.post("/change-password", {
            email: email,
            password: password,
            type: e.target.type.value
        })
        console.log(res)

        setShowOTP(true);
        setToken(res.data.token)
        // Here you would typically validate the email address
        // For demonstration purposes, let's just toggle the OTP overlay
        setShowOTP(true);
    };

    const handleOTPSubmit = async (e) => {
        e.preventDefault();
        const res = await axiosConfiguration.post("/verifyOTP", {

            OTP: OTP,
            token: token
        })
        console.log(res)
        setShowOTP(false);
        alert(res.data.msg)
        // Here you would typically validate the OTP and proceed accordingly
        // For demonstration purposes, let's just close the OTP overlay
        setShowOTP(false);
    };

    return (
        <div>
            <h2>Email Form</h2>
            <form className={styles.emailForm} onSubmit={handleSubmit}>
                <div>
                    <label>Type:</label>
                    <select
                        name="type"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        required
                    >
                        <option>User</option>
                        <option>Admin</option>
                        <option>Agent</option>
                    </select>
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>

            {showOTP && (
                <div className={styles.overlay}>
                    <div className={styles.otpForm}>
                        <h2>Enter OTP</h2>
                        <form onSubmit={handleOTPSubmit}>
                            <input type="text" placeholder="Enter OTP" onChange={(e)=>{setOTP(e.target.value)}} required />
                            <button type="submit">Submit OTP</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ForgotPassword;
