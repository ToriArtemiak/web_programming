import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchItemById } from '../../../services/api';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/cartAction';
import './itemCatalog.css';

const ItemPage = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [selectedColor, setSelectedColor] = useState('');
    const [selectedSize, setSelectedSize] = useState('');
    const [count, setCount] = useState(1);
    const [displayedPrice, setDisplayedPrice] = useState(0);

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await fetchItemById(id);
            console.log('Fetched item:', response.data); // For debugging
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

    useEffect(() => {
        if (item) {
            setDisplayedPrice(item.price * count); // Update displayed price based on count
        }
    }, [count, item]);

    const handleAddToCart = () => {
        if (!selectedColor || !selectedSize) {
            alert('Please select both color and size');
            return;
        }

        const itemWithSelection = { ...item, selectedColor, selectedSize, count };
        dispatch(addToCart(itemWithSelection));
        navigate('/cart');
    };

    if (loading) return <p>Loading...</p>;
    if (!item) return <p>Item not found</p>;

    return (
        <div className="item-page">
            <div className="item-image-container">
                <img src={item.imageUrl} alt={item.title} className="item-image" />
            </div>
            <div className="item-details">
                <h1>{item.title}</h1>
                <p className="price">Price: ${displayedPrice.toFixed(2)}</p>
                <div className="characteristics">
                    <span className="characteristic">
                        <select className="selector"
                            value={selectedSize}
                            onChange={(e) => setSelectedSize(e.target.value)}
                        >
                            <option value="">Select size</option>
                            {Array.isArray(item?.size) && item.size.length > 0 ? (
                                item.size.map((size, index) => (
                                    <option key={index} value={size}>
                                        {size}
                                    </option>
                                ))
                            ) : (
                                <option value={item?.size}>{item?.size}</option>
                            )}
                        </select>
                    </span>
                    <span className="characteristic">
                        <select className="selector"
                            value={selectedColor}
                            onChange={(e) => setSelectedColor(e.target.value)}
                        >
                            <option value="">Select color</option>
                            {Array.isArray(item?.color) && item.color.length > 0 ? (
                                item.color.map((color, index) => (
                                    <option key={index} value={color}>
                                        {color}
                                    </option>
                                ))
                            ) : (
                                <option value={item?.color}>{item?.color}</option>
                            )}
                        </select>
                    </span>
                </div>

                <div className="countable-field">
                    <label>Quantity</label>
                    <input className="counter"
                        type="number"
                        min="1"
                        step="1"
                        value={count}
                        onChange={(e) => setCount(Math.max(1, parseInt(e.target.value, 10) || 1))}
                    />
                </div>
                <div className="button-container">
                    <button className="back-button" onClick={() => navigate(-1)}>
                        Go back
                    </button>
                    <button className="add-to-cart-button" onClick={handleAddToCart}>
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ItemPage;
