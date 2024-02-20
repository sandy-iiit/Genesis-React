import React, { useState } from 'react';
import styles from './ChangePassword.module.css';
import axiosConfiguration from "../config/axiosConfiguration";
import {useSelector} from "react-redux";

function PasswordForm() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showOTP, setShowOTP] = useState(false);
    const [OTP, setOTP] = useState("");
    const [token,setToken]= useState('')
    const user=useSelector((state)=>state.auth)

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        // Here you would typically submit the form data to your backend or perform further actions
        // For demonstration purposes, we'll just toggle the OTP overlay
        const res=await axiosConfiguration.post("/change-password", {email: user.email, password: password, type: user.type})
        console.log(res)

        setShowOTP(true);
        setToken(res.data.token)
    };

    const handleOTPSubmit = async (e) => {
        e.preventDefault();
        // Here you would typically validate the OTP and proceed accordingly
        // For demonstration purposes, let's just close the OTP overlay
        const res = await axiosConfiguration.post("/verifyOTP", {

            OTP: OTP,
            token:token
        })
        console.log(res)
        setShowOTP(false);
        alert(res.data.msg)

    };

    return (
        <div>
            <h2>Password Form</h2>
            <form className={styles.passwordForm} onSubmit={handleSubmit}>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
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
                            <input type="text" placeholder="Enter OTP" required
                                   onChange={(e) => setOTP(e.target.value)}
                            />
                            <button type="submit">Submit OTP</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default PasswordForm;
