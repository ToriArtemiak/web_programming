import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './components/home/reviews/reviews.css';
import './components/footer/footer.css';
/*import './components/cart/cart.css';*/
import './components/catalog/catalog.css';
import './components/header/header.css';
import './components/home/productlist/productlist.css';/*
import './components/home/about/about.css';*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
