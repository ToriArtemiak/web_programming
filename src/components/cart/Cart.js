import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeFromCart, clearCart,updateCartItemCount } from '../../redux/cartAction';
import Button from './Button';
import './cart.css';

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRemove = (id, selectedColor, selectedSize) => {
        dispatch(removeFromCart(id, selectedColor, selectedSize));
    };

    const handleUpdateCount = (id, selectedColor, selectedSize, newCount) => {
        if (newCount > 0) {
            dispatch(updateCartItemCount(id, selectedColor, selectedSize, newCount));
        } else {
            handleRemove(id, selectedColor, selectedSize);
        }
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => {
            return total + item.price * item.count;
        }, 0).toFixed(2);
    };

    const handleProceedToCheckout = () => {
        navigate('/checkout');
    };

    return (
        <div className="cart-container">
            <h1 className="cart-title">Your Shopping Cart</h1>
            {cartItems.length === 0 ? (
                <p className="empty-cart-message">No products in your cart yet :(</p>
            ) : (
                <>
                    <div className="cart-items">
                        {cartItems.map((item) => (
                            <div key={`${item.id}-${item.selectedColor}-${item.selectedSize}`} className="cart-item">
                                <img src={item.imageUrl} alt={item.title} className="cart-item-image" />
                                <div className="cart-item-details">
                                    <h4 className="cart-item-name">{item.title}</h4>
                                    <p className="cart-item-color">Color: {item.selectedColor}</p>
                                    <p className="cart-item-size">Size: {item.selectedSize}</p>
                                    <p className="cart-item-price">Price per item: ${item.price.toFixed(2)}</p>
                                    <div className="cart-item-quantity">
                                        <button
                                            className="quantity-button"
                                            onClick={() =>
                                                handleUpdateCount(item.id, item.selectedColor, item.selectedSize, item.count - 1)
                                            }
                                        >
                                            -
                                        </button>
                                        <span className='quantity'>{item.count}</span>
                                        <button
                                            className="quantity-button"
                                            onClick={() =>
                                                handleUpdateCount(item.id, item.selectedColor, item.selectedSize, item.count + 1)
                                            }
                                        >
                                            +
                                        </button>
                                    </div>
                                    <h2 className="cart-item-total">
                                        Total: ${(item.price * item.count).toFixed(2)}
                                    </h2>
                                    <Button
                                        className="remove-button"
                                        onClick={() => handleRemove(item.id, item.selectedColor, item.selectedSize)}
                                    >
                                        Remove
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='summary'>
                        <div className="cart-summary">
                            <h3>Total Price: ${getTotalPrice()}</h3>
                            <div className="cart-buttons">
                                <Button className="cart-button" onClick={handleClearCart}>
                                    Clear Cart
                                </Button>
                                <Button className="cart-button2" onClick={handleProceedToCheckout}>
                                    Buy
                                </Button>
                            </div>

                        </div>
                    </div>

                </>
            )}
        </div>
    );
};


export default Cart;