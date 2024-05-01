import React, { useState, useEffect } from 'react';
import './MyPolicies.css';
import axiosConfiguration from "../../config/axiosConfiguration";
import { useSelector } from "react-redux";
import { useLocation, Link } from 'react-router-dom';
import NavBar from '../NavBar';
import Footer from '../Footer/Footer';
import EnrollPayment from '../../components/Payment/EnrollPayment'; // Import EnrollPayment component
import Card from './Card';

const MyPolicies = () => {
    const [currentPolicies, setCurrentPolicies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const user = useSelector((state) => state.auth.email);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const emailFromQuery = queryParams.get('email');
    const [showNoPoliciesOverlay, setShowNoPoliciesOverlay] = useState(false);
    const [showPaymentOverlay, setShowPaymentOverlay] = useState(false);
    const [selectedPolicy, setSelectedPolicy] = useState(null);

    useEffect(() => {
        fetchCurrentPolicies();
    }, [user, emailFromQuery]);

    const fetchCurrentPolicies = () => {
        const emailToUse = emailFromQuery || user;

        axiosConfiguration.post('/getmypolicies', { email: emailToUse })
            .then(response => {
                setCurrentPolicies(response.data.currentPolicies);
                setIsLoading(false);
                if (response.data.currentPolicies.length === 0) {
                    setShowNoPoliciesOverlay(true);
                }
            })
            .catch(error => {
                console.error('Error fetching current policies:', error);
                setIsLoading(false);
            });
    };

    const handlePaymentClick = (policy) => {
        setSelectedPolicy(policy);
        setShowPaymentOverlay(true);
    };

    return (
        <>
            <NavBar/>
            <div className="user-policy-page">
                <div className="header">
                    <h1>User Policies</h1>
                </div>
                <div className="cards-container">
                    {isLoading ? (
                        <div className="loading">
                            {/* Your loading indicator */}
                            <svg
                                className="loading-icon"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 100 100"
                                width="50"
                                height="50"
                            >
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="45"
                                    fill="none"
                                    stroke="#007bff"
                                    strokeWidth="5"
                                    strokeDasharray="200"
                                    strokeDashoffset="0"
                                    transform="rotate(90 50 50)"
                                >
                                    <animateTransform
                                        attributeName="transform"
                                        attributeType="XML"
                                        type="rotate"
                                        from="0 50 50"
                                        to="360 50 50"
                                        dur="1.5s"
                                        repeatCount="indefinite"
                                    />
                                    <animate
                                        attributeName="stroke-dashoffset"
                                        values="0; 628.32"
                                        dur="1.5s"
                                        repeatCount="indefinite"
                                    />
                                </circle>
                            </svg>
                        </div>
                    ) : (
                        currentPolicies.map((policy, index) => (
                            <div key={index} className="card-container">
                                <Card
                                    title={policy.name}
                                    type={policy.type}
                                    amount={policy.amount}
                                    term={policy.term}
                                    status={policy.status}
                                />
                                  {!emailFromQuery &&
<button onClick={() => handlePaymentClick(policy)} className="payment-button">Pay for Policy</button> }
                            </div>
                        ))
                    )}
                </div>
                {showNoPoliciesOverlay && (
                    <div className="overlay">
                        <div className="overlay-content">
                            <span className="close" onClick={() => setShowNoPoliciesOverlay(false)}>&times;</span>
                            <p>No policies yet!</p>
                        </div>
                    </div>
                )}
                {showPaymentOverlay && (
                    <div className="overlay">
                        <div className="overlay-content">
                            <span className="close" onClick={() => setShowPaymentOverlay(false)}>&times;</span>
                          
                            <EnrollPayment price={selectedPolicy.amount / 12} policyId={selectedPolicy.id} policyName={selectedPolicy.name} />
                             </div>
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
}

export default MyPolicies;
