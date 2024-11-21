import {ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART, SET_CART} from "./actionTypes";

const saveCartToLocalStorage = (cartItems) => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
};

export const loadCartFromLocalStorage = () => {
    return (dispatch) => {
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        dispatch({ type: SET_CART, payload: savedCart });
    };
};

export const addToCart = (item) => {
    return (dispatch, getState) => {
        dispatch({ type: ADD_TO_CART, payload: item });
        saveCartToLocalStorage(getState().cart.cartItems);
    };
};

export const removeFromCart = (id, selectedColor, selectedSize) => {
    return (dispatch, getState) => {
        dispatch({ type: REMOVE_FROM_CART, payload: { id, selectedColor, selectedSize } });
        saveCartToLocalStorage(getState().cart.cartItems);
    };
};


export const clearCart = () => {
    return (dispatch) => {
        dispatch({ type: CLEAR_CART });
        localStorage.removeItem('cart');
    };
};

export const updateCartItemCount = (id, selectedColor, selectedSize, newCount) => {
    return (dispatch, getState) => {
        dispatch({ type: 'UPDATE_CART_ITEM_COUNT', payload: { id, selectedColor, selectedSize, newCount } });
        localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
    };
};