import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/img/Logo1.png';

const Header = () => {
    return (
        <section className="header">
            <img src={Logo} className='logo' alt=""/>
            <ul className="header_buttons">
                <li className="header_button"><Link to="/public">Home</Link></li>
                <li className="header_button"><Link to="/catalog">Catalog
                </Link></li>
                <li className="header_button"><Link to="/cart">Cart</Link></li>
            </ul>

        </section>
    );
};

export default Header;