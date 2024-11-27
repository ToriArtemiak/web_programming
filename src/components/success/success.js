import React from 'react';
import { useNavigate } from 'react-router-dom';
import './success.css';

const Success = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate('/');
    };

    return (
        <div className="success-container">
            <h1 className="success-title">Order Successful!</h1>
            <p className="success-message">
                Thank you for your purchase. Your order has been placed successfully!
            </p>
            <button onClick={handleGoBack} className="success-button">
                Go Back to Home
            </button>
        </div>
    );
};

export default Success;
