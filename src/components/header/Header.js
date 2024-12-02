import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { fetchUserData } from '/Users/viktoriaartemiak/WebstormProjects/lab7/src/services/authOperaions.js';
import Logo from '../img/Logo1.png';
import './header.css'


function Header() {
    const [nickname, setNickname] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            fetchUserData(token)
                .then((data) => {
                    setNickname(data.username);
                })
                .catch(() => {
                    localStorage.removeItem('token');
                    navigate('/login');
                });
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setNickname(null);
        navigate('/login');
    };


    return (
        <section className="header">
            <img src={Logo} className='logo' alt=""/>
            <nav className="nav-bar">
                <ul className="header_buttons">
                    <li className="header_button"><Link to="/">Home</Link></li>
                    <li className="header_button"><Link to="/Catalog">Catalog
                    </Link></li>
                    <li className="header_button"><Link to="/Cart">Cart</Link></li>
                </ul>

                <ul className="user-info">
                    {nickname ? (
                        <>
                            <button className="logout-btn" onClick={handleLogout}>
                                Logout
                            </button>
                        </>
                    ) : (
                        <Link to="/login">Login</Link>
                    )}
                </ul>
            </nav>
        </section>
    );
}

export default Header;