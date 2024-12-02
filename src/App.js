import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Cart from './components/cart/Cart';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Catalog from './components/catalog/Catalog';
import ItemPage from './components/catalog/itemPage/ItemPage';
import { ItemsProvider } from '/Users/viktoriaartemiak/WebstormProjects/lab7/src/context/itemcontext.js';
import LoginPage from './components/login/login';
import RegisterPage from './components/login/register';
import { PrivateRoute } from './route/private';
import Checkout from '../src/components/checkout/Checkout'
import Success from '../src/components/success/success'


function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('authToken'));
    const logout = () => {
        setIsAuthenticated(false);
    };

    return (
        <ItemsProvider>
            <Router>

                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route
                        path="/"
                        element={
                            <PrivateRoute component={<><Header isAuthenticated={isAuthenticated} logout={logout} /><Home /> /><Footer /></>} />
                        }
                    />

                    <Route
                        path="/catalog"
                        element={
                            <PrivateRoute
                                component={
                                    <>
                                        <Header />
                                        <Catalog />
                                        <Footer />
                                    </>
                                }
                            />
                        }
                    />
                    <Route
                        path="/item/:id"
                        element={<PrivateRoute component={<><Header isAuthenticated={isAuthenticated} logout={logout} /><ItemPage /><Footer /></>} />}
                    />

                    <Route
                        path="/cart"
                        element={<PrivateRoute component={<><Header isAuthenticated={isAuthenticated} logout={logout} /><Cart /><Footer /></>} />}
                    />
                    <Route
                        path="/checkout"
                        element={<PrivateRoute component={<><Header isAuthenticated={isAuthenticated} logout={logout} /><Checkout /><Footer /></>} />}
                    />
                    <Route
                        path="/success"
                        element={<PrivateRoute component={<><Header isAuthenticated={isAuthenticated} logout={logout} /><Success /><Footer /></>} />}
                    />


                </Routes>

            </Router>
        </ItemsProvider>
    );
}

export default App;