import React from 'react';
import ReviewsImage1 from '../../img/Tim.jpg';
import ReviewsImage2 from '../../img/Courtney.jpg';
import Stars from '../../img/Stars.png';

const Reviews = () => {
    return (
        <section className="reviews">
            <h1 className="reviews_header">Reviews</h1>
            {/*<img src={ReviewsImage} className="reviews_photo" alt="Reviews" />*/}
            <div className="reviews_part">
                <div className="review_box">
                    <div className="review_first_row">
                        <div className="review_photo-name">
                            <img src={ReviewsImage1} className="reviews_author_photo" alt="Reviews_photo"/>
                            <h4 className="reviews_name">Tim</h4>
                        </div>
                        <img src={Stars} className="stars" alt="stars"/>
                    </div>
                    <h5 className="review_text">Good quality, cool designs</h5>
                </div>
                <div className="review_box">
                    <div className="review_first_row">
                        <div className="review_photo-name">
                            <img src={ReviewsImage2} className="reviews_author_photo" alt="Reviews_photo"/>
                            <h4 className="reviews_name">Courtney</h4>
                        </div>
                        <img src={Stars} className="stars" alt="stars"/>
                    </div>
                    <h5 className="review_text">Love it!!!!</h5>
                </div>
            </div>

        </section>

    );
};

export default Reviews;
