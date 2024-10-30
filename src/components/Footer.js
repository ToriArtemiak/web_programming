import React from 'react';
import Logo from '../components/img/Logo2.png';
import FB from '../components/img/Facebook.png';
import IG from '../components/img/Instagram.png';


const Footer = () => {
    return (
        <section className="footer">
            <div className="footer_main">
                <div className="footer_part1">
                    <img src={Logo} className='logo2' alt=""/>
                </div>


                <div className="footer_part2">
                    <div className="fb">
                        <img src={FB} alt=""/>
                        <p>Facebook</p>
                    </div>
                    <div className="ig">
                        <img src={IG} alt=""/>
                        <p>Instagram</p>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="last_str">
                <p>© Star Shop 2024</p>
                <p className="cookie">Cookies Settings</p>
            </div>
        </section>
    );
};

export default Footer;
