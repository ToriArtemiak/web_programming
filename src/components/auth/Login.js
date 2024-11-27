import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './auth.css';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        // Mock login logic
        if (email === 'test@example.com' && password === 'password123') {
            localStorage.setItem('user', email);
            navigate('/');
        } else {
            setError('Invalid email or password.');
        }
    };

    return (
        <div className="auth-container">
            <h1>Login</h1>
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
            {error && <p className="error-message">{error}</p>}
            <button onClick={handleLogin} className="auth-button">
                Login
            </button>
            <p>
                Don't have an account?{' '}
                <span className="link" onClick={() => navigate('/register')}>
                    Sign Up
                </span>
            </p>
        </div>
    );
};

export default Login;
