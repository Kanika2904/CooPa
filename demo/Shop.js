import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import './Shop.css';
import Image from './Assets/John_doe.png'; // This is your profile image
import cart from './Assets/cart.png';
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Tooltip from "@mui/material/Tooltip"; // Import Tooltip component

// Define product data for each food item
const productsByFood = {
  "Chocolate Cake": [
    { id: 1, name: "Date Flour", price: "$2.00", imgSrc: "https://i.pinimg.com/564x/45/e2/95/45e2951d6e2654c8b2ac39115ea1a19f.jpg" },
    { id: 2, name: "Date Cocoa Powder", price: "$3.00", imgSrc: "https://i.pinimg.com/564x/1c/fd/01/1cfd0183bc143dd610814507b5c6cfef.jpg" },
    { id: 3, name: "Date Sugar", price: "$1.50", imgSrc: "https://i.pinimg.com/564x/6c/e3/0b/6ce30b6618672ceb31ce8ed599e2c434.jpg" },
    { id: 4, name: "Eggs", price: "$2.50", imgSrc: "https://i.pinimg.com/564x/33/a5/ee/33a5ee8d4613dc2c71252933d5b3da58.jpg" }
  ],
  // Add other food items with their respective products here
};

const foodList = [
  { label: "Chocolate Shake" },
  { label: "Chocolate Cake" },
  { label: "Red Sauce Pasta" },
  { label: "Hamburger" },
  { label: "Hummus" },
];

const Shop = () => {
  const [selectedFood, setSelectedFood] = useState(null);
  const [cartItems, setCartItems] = useState({});
  const [showRecipe, setShowRecipe] = useState(false); // State to toggle recipe view
  const navigate = useNavigate(); // For navigation to Cart.js and Orders.js

  // Handle autocomplete change
  const handleAutocompleteChange = (event, newValue) => {
    setSelectedFood(newValue ? newValue.label : null);
    setShowRecipe(false); // Hide recipe view when food changes
  };

  // Handle adding to cart
  const handleAddToCart = (product) => {
    setCartItems((prevItems) => ({
      ...prevItems,
      [product.id]: (prevItems[product.id] || 0) + 1,
    }));
  };

  // Handle quantity change
  const handleQuantityChange = (productId, amount) => {
    setCartItems((prevItems) => {
      const newQuantity = (prevItems[productId] || 0) + amount;
      if (newQuantity <= 0) {
        const { [productId]: _, ...rest } = prevItems;
        return rest;
      }
      return { ...prevItems, [productId]: newQuantity };
    });
  };

  // Get products based on selected food
  const products = selectedFood ? productsByFood[selectedFood] || [] : [];

  const handleProfileClick = () => {
    navigate('/orders');
  };

  // Placeholder image URL
  const placeholderImage = "https://i.pinimg.com/564x/af/e8/a0/afe8a0ce6eaee8a7bb59e4fde73b951e.jpg";

  // Handle Ingredients button click
  const handleIngredientsClick = () => {
    setShowRecipe(true); // Show recipe view
  };

  // Recipe content
  const recipeContent = (
    <div className="recipe-content">
      <h2>Chocolate Cake Recipe</h2>
      <p>1. Preheat your oven to 350°F (175°C).</p>
      <p>2. Grease and flour your cake pan.</p>
      <p>3. In a large bowl, mix the dry ingredients (flour, cocoa powder, sugar).</p>
      <p>4. Add the wet ingredients (eggs, milk, oil) and mix until smooth.</p>
      <p>5. Pour the batter into the prepared pan.</p>
      <p>6. Bake for 30-35 minutes, or until a toothpick inserted in the center comes out clean.</p>
      <p>7. Allow the cake to cool before frosting.</p>
      <button className="back-button" onClick={() => setShowRecipe(false)}>Back to Shop</button>
    </div>
  );

  return (
    <div className="phoneWrapper">
      <div className="phonePadding">
        <header className="shop-header">
          <div className="headerContent">
            <div className="avatar" onClick={handleProfileClick}>
              <img
                src={Image}
                alt="Avatar"
                className="avatarImg"
              />
            </div>
            <div className="greeting">
              <h1>Your CooPa</h1>
            </div>
            <div className="cart" onClick={() => navigate('/cart')}>
              <img
                src={cart}
                alt="Cart"
                className="cartImg"
              />
              {Object.values(cartItems).length > 0 && (
                <div className="badge">
                  {Object.values(cartItems).reduce((a, b) => a + b, 0)}
                </div>
              )}
            </div>
          </div>
        </header>

        <Autocomplete
          disablePortal
          id="food-search"
          options={foodList}
          sx={{ width: 300, margin: '20px auto' }}
          renderInput={(params) => <TextField {...params} label="Search Food" variant="outlined" />}
          onChange={handleAutocompleteChange}
        />

        <main className="shop-content">
          {showRecipe ? (
            recipeContent // Show recipe content
          ) : (
            <>
              {selectedFood === "Chocolate Cake" && (
                <div className="placeholder-container">
                  <img src={placeholderImage} alt="Placeholder" className="placeholder-image" />
                  <button className="ingredients-button" onClick={handleIngredientsClick}>Recipe</button>
                </div>
              )}
              <section className="product-list">
                {products.length > 0 ? (
                  products.map(product => (
                    <Tooltip
                      key={product.id}
                      title={["Date Flour", "Date Cocoa Powder", "Date Sugar"].includes(product.name) ? "From your previous purchases" : ""}
                      placement="top" // Optional: change placement if needed
                    >
                      <div className="product-item">
                        <img
                          src={product.imgSrc}
                          alt={product.name}
                          className="product-image"
                        />
                        <div className="product-info">
                          <h2>{product.name}</h2>
                          <p>{product.price}</p>
                          {cartItems[product.id] ? (
                            <div className="quantity-controls">
                              <button onClick={() => handleQuantityChange(product.id, -1)}>-</button>
                              <span>{cartItems[product.id]}</span>
                              <button onClick={() => handleQuantityChange(product.id, 1)}>+</button>
                            </div>
                          ) : (
                            <button className="add-to-cart" onClick={() => handleAddToCart(product)}>Add to Cart</button>
                          )}
                        </div>
                      </div>
                    </Tooltip>
                  ))
                ) : (
                  <p>No products available for the selected food.</p>
                )}
              </section>
            </>
          )}
        </main>
      </div>
    </div>
  );
};

export default Shop;
