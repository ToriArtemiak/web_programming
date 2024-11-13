import React from 'react';
import { Link } from 'react-router-dom';
import '/Users/viktoriaartemiak/WebstormProjects/lab7/src/components/catalog/ catalogItem/catalogitem.css'

const CatalogItem = ({ id, title, price, description, imageUrl, size }) => {
    return (
        <div className="catalog-item">
            <img src={imageUrl} alt={title} className="catalog-item-image" />
            <h3>{title}</h3>
            <p>{description}</p>
            <p>Size: {size}</p>
            <p className="catalog-price">Price: ${price}</p>
            <Link to={`/item/${id}`} className="catalog-view-more">View More</Link>
        </div>
    );
};

export default CatalogItem;