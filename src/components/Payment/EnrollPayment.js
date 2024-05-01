import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from 'react-toastify'; 
import { PayPalScriptProvider, PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import './EnrollPayment.css';

const EnrollPayment = ({ price, policyId, policyName }) => {
  const { cid } = useParams();
  const [showSpinner, setShowSpinner] = useState(false);

  const handleSuccess = async (details, data) => {
    try {
      toast.success("Payment done successfully", { autoClose: 3000 });
    } catch (error) {
      console.error(error.message);
      toast.error("Error enrolling in the course", { autoClose: 3000 });
    }
  };

  const handleError = (err) => {
    console.log("Error occurred during PayPal checkout:", err);
    toast.error("Error during payment. Please try again.", { autoClose: 3000 });
  };

  // Round the price to the nearest whole number after dividing by 12
  const roundedPrice = Math.round(price / 12);

  const createOrder = (data, actions) => {
    setShowSpinner(true);
    return actions.order.create({
      intent: "CAPTURE",
      purchase_units: [
        {
          description: policyName, // Use the policy name
          amount: {
            currency_code: "INR",
            value: roundedPrice, // Use the rounded price value
          },
        },
      ],
    });
  };

  const onApprove = (data) => {
    setShowSpinner(false);
    handleSuccess(null, data);
  };

  return (
    <div className="enroll-payment-container">
      <h2>Pay for Life Pay for policy</h2>
      <div className="enroll-payment-form">
        <h3>Policy ID: <span style={{ color: '#3e54ac' }}>{policyId}</span></h3>
        <h3>Policy Name: <span style={{ color: '#3e54ac' }}>{policyName}</span></h3>
        <h3>Price: <span style={{ color: 'green' }}>{roundedPrice}</span></h3> {/* Use the rounded price value */}
        <PayPalScriptProvider options={{ clientId: "AX-vMceEk8bWnS2CYWuTkilAtyx4TSiD6-VinlotsfKd0mIiTY_X1Ydy3sqBdVO0U9qvxfeOVlC2B_tm" }}>
          <ButtonWrapper createOrder={createOrder} onApprove={onApprove} showSpinner={showSpinner} onError={handleError} />
        </PayPalScriptProvider>
      </div>
    </div>
  );
};

const ButtonWrapper = ({ createOrder, onApprove, showSpinner, onError }) => {
  const [{ isPending }] = usePayPalScriptReducer();

  return (
    <>
      {showSpinner && isPending && <div className="spinner" />}
      <PayPalButtons
        style={{ layout: "vertical" }}
        createOrder={createOrder}
        onApprove={(data) => onApprove(data)}
        onError={(err) => onError(err)}
        forceReRender={[showSpinner]}
      />
    </>
  );
};

export default EnrollPayment;
