import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchItemById } from '../../../services/api';


import './itemCatalog.css';

const ItemPage = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await fetchItemById(id);
            setItem(response.data);
        } catch (error) {
            console.error('Error fetching product:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (!item) return <p>Item not found</p>;

    return (
        <div className="item-page">
            <div className="item-image-container">
                <img src={item.imageUrl} alt={item.title} className="item-image" />

            </div>
            <div className="item-details">
                <h1>{item.title}</h1>
                <p className="price">Price: ${item.price.toFixed(2)}</p>
                <div className="characteristics">
                    <span className="characteristic">Size: {item.size || 'Not specified'}</span>
                    <span className="characteristic">Color: {item.color}</span>
                </div>

                <div className="countable-field">
                    <label>Count</label>
                    <input type="number" defaultValue={1}/>
                </div>
                <div className="button-container">
                    <button className="back-button" onClick={() => navigate(-1)}>Go back</button>
                    <button className="add-to-cart-button">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default ItemPage;