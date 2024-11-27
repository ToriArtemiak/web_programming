import { UPDATE_CART_ITEM_COUNT, ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART, SET_CART } from "./actionTypes";

const initialState = {
    cartItems: [],
};

// Зберігає дані в localStorage
const saveToLocalStorage = (cartItems) => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
};

// Завантажує дані з localStorage
const loadFromLocalStorage = () => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
};

const cartReducer = (state = { cartItems: loadFromLocalStorage() }, action) => {
    switch (action.type) {
        case SET_CART:
            saveToLocalStorage(action.payload);
            return { ...state, cartItems: action.payload };

        case ADD_TO_CART:
            const existingItemIndex = state.cartItems.findIndex(
                (item) =>
                    item.id === action.payload.id &&
                    item.selectedColor === action.payload.selectedColor &&
                    item.selectedSize === action.payload.selectedSize
            );

            let updatedCartItems;
            if (existingItemIndex >= 0) {
                // Оновлюємо кількість товару, якщо він вже існує в кошику
                updatedCartItems = [...state.cartItems];
                updatedCartItems[existingItemIndex].count += action.payload.count;
            } else {
                // Додаємо новий товар
                updatedCartItems = [...state.cartItems, action.payload];
            }

            saveToLocalStorage(updatedCartItems);
            return { ...state, cartItems: updatedCartItems };

        case REMOVE_FROM_CART:
            const filteredCartItems = state.cartItems.filter(
                (item) =>
                    !(item.id === action.payload.id &&
                        item.selectedColor === action.payload.selectedColor &&
                        item.selectedSize === action.payload.selectedSize)
            );

            saveToLocalStorage(filteredCartItems);
            return { ...state, cartItems: filteredCartItems };

        case CLEAR_CART:
            saveToLocalStorage([]);
            return { ...state, cartItems: [] };

        case UPDATE_CART_ITEM_COUNT: {
            const updatedCartItems = state.cartItems.map((item) =>
                item.id === action.payload.id &&
                item.selectedColor === action.payload.selectedColor &&
                item.selectedSize === action.payload.selectedSize
                    ? { ...item, count: action.payload.newCount }
                    : item
            );

            saveToLocalStorage(updatedCartItems);
            return { ...state, cartItems: updatedCartItems };
        }

        default:
            return state;
    }
};

export default cartReducer;
