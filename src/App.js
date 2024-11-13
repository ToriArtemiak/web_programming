import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Cart from './components/cart/Cart';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Catalog from './components/catalog/Catalog';
import ItemPage from './components/catalog/itemPage/ItemPage';
import { ItemsProvider } from '/Users/viktoriaartemiak/WebstormProjects/lab7/src/context/itemcontext.js';


const App = () => {
    return (
    <ItemsProvider>
        <Router>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/item/:id" element={<ItemPage />} />
            </Routes>
            <Footer />
        </Router>
    </ItemsProvider>
    );
};

export default App;
