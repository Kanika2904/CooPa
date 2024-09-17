import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import order from './Assets/orders.png';
import signout from './Assets/signout.png';
import homeIcon from './Assets/home.png'; 

const imageDetails = [
  { url: 'https://i.pinimg.com/564x/45/e2/95/45e2951d6e2654c8b2ac39115ea1a19f.jpg', date: '23rd June, 2024', name: 'Date Flour' },
  { url: 'https://i.pinimg.com/564x/53/30/74/53307461f3542fd6a0e273e64d0725e8.jpg', date: '4th Nov, 2023', name: 'Huchai Almond Milk' },
  { url: 'https://i.pinimg.com/564x/6c/e3/0b/6ce30b6618672ceb31ce8ed599e2c434.jpg', date: '12th Aug, 2023', name: 'Date Sugar' },
  { url: 'https://i.pinimg.com/564x/56/66/b3/5666b3ce29a41382ca6c9e40da9201ad.jpg', date: '12th Aug, 2023', name: 'Aroma Detergnt' },
  { url: 'https://i.pinimg.com/564x/1c/fd/01/1cfd0183bc143dd610814507b5c6cfef.jpg', date: '12th Aug, 2023', name: 'Date Cocoa Powder' },
  { url: 'https://i.pinimg.com/564x/2c/f3/33/2cf3338eb4aeb8bac4018235ca59816d.jpg', date: '7th Jan, 2023', name: 'Sparkle Toothpaste' },
];

const Order = () => {
  const [showImages, setShowImages] = useState(false); // State to toggle image placeholders
  const navigate = useNavigate(); // Hook for navigation

  const handleSignOut = () => {
    // Implement sign out logic here
    alert('Signed out');
  };

  const handleViewOrders = () => {
    setShowImages(true); // Show images when clicking "Your Orders"
  };

  const navigateHome = () => {
    navigate('/home'); // Navigate to Home.js
  };

  return (
    <div className="phoneWrapper">
      <div className="phonePadding">
        <header className="order-header">
          <div className="headerContent">
            <div className="header-left">
              <img
                src={homeIcon} // Placeholder for home icon
                alt="Home"
                className="home-icon"
                onClick={navigateHome}
              />
            </div>
            <div className="header-center">
              <h1>Your Account</h1>
            </div>
          </div>
        </header>
        <main className="order-content">
          {!showImages ? (
            <section className="order-list">
              <div className="order-option" onClick={handleViewOrders}>
                <img
                  src={order} // Placeholder for your orders image
                  alt="Your Orders"
                  className="order-image"
                />
                <p>Your Orders</p>
              </div>
              <div className="order-option" onClick={handleSignOut}>
                <img
                  src={signout} // Placeholder for sign out image
                  alt="Sign Out"
                  className="order-image"
                />
                <p>Sign Out</p>
              </div>
            </section>
          ) : (
            <section className="order-images">
              {/* Displaying images with different dates and product names */}
              {imageDetails.map((item, index) => (
                <div key={index} className="order-item">
                  <img
                    src={item.url}
                    alt={`Order ${index + 1}`}
                    className="order-placeholder"
                  />
                  <div className="order-info">
                    <p className="order-date">Date Ordered: {item.date}</p>
                    <p className="order-name">{item.name}</p>
                    <button className="buy-again-button">Buy Again</button>
                  </div>
                </div>
              ))}
            </section>
          )}
        </main>
      </div>
      <style>
        {`
          .order-header {
            background-color: #007bff; /* Blue background color */
            padding: 10px;
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .headerContent {
            display: flex;
            align-items: center;
            width: 100%;
            padding: 10px;
            justify-content: space-between;
          }

          .header-left {
            display: flex;
            align-items: center;
          }

          .home-icon {
            width: 25px; /* Size of the home icon */
            height: 25px;
            border-radius:100%;
            cursor: pointer;
            object-fit: cover;
          }

          .header-center {
            display: flex;
            align-items: center;
            flex-grow: 1;
            justify-content: center;
          }

          .greeting {
            text-align: center;
          }

          .order-option {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }

          .order-option:hover {
            background-color: #f0f0f0;
          }

          .order-image {
            width: 50px;
            height: 50px;
            object-fit: cover;
          }

          .order-images {
            display: flex;
            flex-direction: column; /* Column-wise layout */
            align-items: flex-start; /* Align items to the start (left side) */
            gap: 20px; /* Increased gap for better spacing */
            padding: 20px;
          }

          .order-item {
            display: flex;
            align-items: center; /* Align items horizontally */
            gap: 10px; /* Space between image and info */
            padding: 10px;
            border: 1px solid #ddd; /* Border for better visibility */
            border-radius: 5px;
            background-color: #f9f9f9;
          }

          .order-info {
            display: flex;
            flex-direction: column; /* Stack date, name, and button vertically */
            align-items: flex-start; /* Align items to the left */
            gap: 5px; /* Space between elements */
          }

          .order-date, .order-name {
            font-size: 14px;
            font-style: Arial;
            margin: 0;
          }

          .buy-again-button {
            background-color: #007bff; /* Blue button color */
            color: #fff;
            border: none;
            border-radius: 5px;
            padding: 5px 10px;
            cursor: pointer;
            font-size: 14px;
            transition: background-color 0.3s ease;
          }

          .buy-again-button:hover {
            background-color: #0056b3; /* Darker blue on hover */
          }

          .order-placeholder {
            width: 120px; /* Fixed size for the placeholder images */
            height: 120px; /* Fixed size for the placeholder images */
            object-fit: cover;
          }
        `}
      </style>
    </div>
  );
};

export default Order;
