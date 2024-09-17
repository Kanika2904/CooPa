import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.css';
import Login from './Login';
import SignUp from './SignUp';
import Home from './Home';
import Shop from './Shop';
import Cart from './cart';
import Order from './order';

const App = () => {
  const [cartItems, setCartItems] = useState({});
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        timeout={300}
        classNames="fade"
      >
        <Routes location={location}>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route 
            path="/home" 
            element={<Home cartItems={cartItems} />} 
          />
          <Route 
            path="/shop" 
            element={<Shop cartItems={cartItems} setCartItems={setCartItems} />} 
          />
          <Route 
            path="/cart" 
            element={<Cart cartItems={cartItems} />} 
          />
          <Route 
            path="/order" 
            element={<Order />} 
          />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

const MainApp = () => (
  <Router>
    <App />
  </Router>
);

export default MainApp;
