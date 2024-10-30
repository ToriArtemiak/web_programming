import React from 'react';
import ReviewsImage from '../components/img/Reviews.png';
import { Link } from 'react-router-dom';

const Reviews = () => {
    return (
        <section className="reviews">
            <h1 className="reviews_header">Reviews</h1>
            <img src={ReviewsImage} className='reviews_photo' alt=""/>
        </section>
    );
};

export default Reviews;