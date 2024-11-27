import React from 'react';
import Tshirts from './tshirts/tshirts';
import Reviews from "./reviews/Reviews";

const Home = () => {
    return (
        <section className="home">
            <div className="main">
                <h1 className="home_header">Welcome to the<br/>Star Shop</h1>
                <p>Best quality for best price </p>
                <ul className="main_button">
                    <a href="#" onClick={(e) => {
                        e.preventDefault(); /* handle click */
                    }} className="choose_T-shirt">Choose your dream T-shirt</a>

                </ul>
            </div>

            <div id="catalog" className="catalog">
                <Tshirts/>
            </div>

            {/*<div id='reviews' className="Reviews">
                <Reviews/>
            </div>*/}
        </section>
    )
};

export default Home;
