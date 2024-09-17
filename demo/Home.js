import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Home.css'; // Import the CSS file
import Image from "./Assets/John_doe.png";
import cart from "./Assets/cart.png";
import recipie from "./Assets/recipie.jpg";

const HomePage = ({ cartItems }) => {
  const [hover, setHover] = React.useState(false);
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate('/shop'); // Navigate to the Shop page
  };

  const handleCartClick = () => {
    navigate('/cart'); // Navigate to the Cart page
  };

  // Calculate the total number of items in the cart
  const totalItemsInCart = Object.values(cartItems).reduce((a, b) => a + b, 0);

  return (
    <div className="phoneWrapper">
      <div className="phonePadding">
        <div className="header">
          <div className="headerContent">
            <div className="avatar">
              <img
                src={Image}
                alt="Avatar"
                className="avatarImg"
              />
            </div>
            <div className="greeting">
              <h1>Hi, Jane</h1>
            </div>
            <div className="cart" onClick={handleCartClick}>
              <img
                src={cart}
                alt="Cart"
                className="cartImg"
              />
              {totalItemsInCart > 0 && (
                <div className="badge">{totalItemsInCart}</div>
              )}
            </div>
          </div>
        </div>
        <div className="searchSection">
          <div className="searchBar">
            <input
              type="text"
              placeholder="Search at Walmart"
              className="searchInput"
              aria-label="Search input"
            />
            <button className="searchButton" aria-label="Search">
              🔍
            </button>
          </div>
          <div className="locationButtons">
            <button className="locationButton" aria-label="Carrorton Supercenter">
            🌍 Carrorton Supercenter
            </button>
            <button className="locationButton" aria-label="Dallas 75220">
            📍Dallas 75220
            </button>
          </div>
        </div>
        <div
          className="quickBuySection"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <img
            src={recipie}
            alt="Quick Buy"
            className="quickBuyImage"
          />
          <div className="quickBuyText">
            <h1 className="quickBuyTextLine">Your</h1>
            <h1 className="quickBuyTextLine">Ideal</h1>
            <h1 className="quickBuyTextLine">Basket</h1>
            {hover && (
              <button className="quickBuyButton" onClick={handleShopNow}>Shop Now</button>
            )}
          </div>
        </div>
        <div className="groceriesSection">
          <div className="groceryItem">
            <img
              src="https://i.pinimg.com/564x/e0/39/a2/e039a23662aeae2d8d9370719a3a0ba2.jpg"
              alt="Apple"
              className="groceryImage"
            />
            <div className="groceryInfo">
              <p>Gala Apples, 3lb Bag</p>
              <p>$4.62</p>
            </div>
            <button className="addButton">+ Add</button>
          </div>
          <div className="groceryItem">
            <img
              src="https://i.pinimg.com/736x/21/fe/aa/21feaa0586d1e83451f8e863093fd238.jpg"
              alt="Bread"
              className="groceryImage"
            />
            <div className="groceryInfo">
              <p>Wonder Bread Classic</p>
              <p>$2.39</p>
            </div>
            <button className="addButton">+ Add</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
