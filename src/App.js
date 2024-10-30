import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;

