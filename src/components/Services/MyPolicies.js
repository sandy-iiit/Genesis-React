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
  }, [user]);

  const fetchCurrentPolicies = () => {
    console.log("entered", user);

    axiosConfiguration.post('/getmypolicies', { email: user })
      .then(response => {
        console.log(response.data);
        setCurrentPolicies(response.data.currentPolicies);
        setIsLoading(false); 
      })
      .catch(error => {
        console.error('Error fetching current policies:', error);
        setIsLoading(false); 
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
  class="loading-icon"
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
    stroke-width="5"
    stroke-dasharray="200"
    stroke-dashoffset="0"
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
