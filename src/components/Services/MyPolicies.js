import React, { useState, useEffect } from 'react';
import './MyPolicies.css';  
import Card from './Card';  
import axiosConfiguration from "../../config/axiosConfiguration";
import { useSelector } from "react-redux";

const MyPolicies = () => {
  const [currentPolicies, setCurrentPolicies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
 
  const user = useSelector((state) => state.auth.email);

  useEffect(() => {
    fetchCurrentPolicies();
  }, []);

  const fetchCurrentPolicies = () => {
    console.log("entered", user);
    axiosConfiguration.post('getmypolicies', { email: "dattasandeep000@gmail.com" }) // Use user.email from Redux state
      .then(response => {
        console.log(response);
        setCurrentPolicies(response.data.currentPolicies);  
        setIsLoading(false); // Set isLoading to false after data is fetched
      })
      .catch(error => {
        console.error('Error fetching current policies:', error);
        setIsLoading(false); // Ensure isLoading is set to false even in case of an error
      });
  };
  
  return (
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
              viewBox="0 0 24 24"
              width="50"
              height="50"
            >
              <circle cx="12" cy="12" r="10" stroke="#007bff" strokeWidth="4" fill="none" />
            </svg>
          </div>
        ) : (
          currentPolicies.map((policy, index) => (
            <Card
              key={index}
              title={policy.name}
              type={policy.type}
              amount={policy.amount}
              term={policy.term}
              status={policy.status}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default MyPolicies;
