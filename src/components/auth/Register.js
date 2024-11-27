import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './auth.css';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleRegister = () => {
        // Simple validation
        if (password !== confirmPassword) {
            setError('Passwords do not match.');
        } else {
            // Mock register logic
            localStorage.setItem('user', email);
            navigate('/');
        }
    };

    return (
        <div className="auth-container">
            <h1>Sign Up</h1>
            <div className="form-group">
                <label>Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                />
            </div>
            <div className="form-group">
                <label>Confirm Password</label>
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm your password"
                />
            </div>
            {error && <p className="error-message">{error}</p>}
            <button onClick={handleRegister} className="auth-button">
                Sign Up
            </button>
            <p>
                Already have an account?{' '}
                <span className="link" onClick={() => navigate('/login')}>
                    Login
                </span>
            </p>
        </div>
    );
};

export default Register;
