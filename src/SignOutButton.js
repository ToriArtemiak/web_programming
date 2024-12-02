import React from 'react';
import { useNavigate } from 'react-router-dom';
import './signout.css'

const SignOutButton = () => {
    const navigate = useNavigate();

    const handleSignOut = () => {
        localStorage.removeItem('user');
        navigate('/login');
    };

    return (
        <button onClick={handleSignOut} className="signout-button">
            Sign Out
        </button>
    );
};

export default SignOutButton;
