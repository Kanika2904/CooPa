import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import iamge from './Assets/John_doe.png';

const Cart = () => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate('/order'); // Navigate to the Order page
  };

  return (
    <div className="phoneWrapper">
      <div className="phonePadding">
        <header className="cart-header">
          <div className="headerContent">
            <div className="avatar" onClick={handleProfileClick}>
              <img
                src={iamge} // Placeholder for the profile icon
                alt="Profile Icon"
                className="avatarImg"
              />
            </div>
            <div className="greeting">
              <p>Your Cart</p>
            </div>
          </div>
        </header>
        <main className="shop-content">
          <section className="cart-list">
            {/* Hardcoded images, prices, and quantities for when the cart is empty */}
            <div 
              className="empty-cart" 
              style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'flex-start', 
                gap: '20px',
                padding: '20px' 
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <img 
                  src="https://i.pinimg.com/564x/45/e2/95/45e2951d6e2654c8b2ac39115ea1a19f.jpg" 
                  alt="Placeholder 1" 
                  style={{ 
                    width: '100px', 
                    height: '100px', 
                    objectFit: 'cover' 
                  }} 
                />
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <p style={{ margin: 0, fontSize: '12px' }}>Price: $2.00</p>
                  <p style={{ margin: 0, fontSize: '12px' }}>Quantity: 1</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <img 
                  src="https://i.pinimg.com/564x/1c/fd/01/1cfd0183bc143dd610814507b5c6cfef.jpg" 
                  alt="Placeholder 2" 
                  style={{ 
                    width: '100px', 
                    height: '100px', 
                    objectFit: 'cover' 
                  }} 
                />
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <p style={{ margin: 0, fontSize: '12px' }}>Price: $2.00</p>
                  <p style={{ margin: 0, fontSize: '12px' }}>Quantity: 1</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <img 
                  src="https://i.pinimg.com/564x/33/a5/ee/33a5ee8d4613dc2c71252933d5b3da58.jpg" 
                  alt="Placeholder 3" 
                  style={{ 
                    width: '100px', 
                    height: '100px', 
                    objectFit: 'cover' 
                  }} 
                />
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <p style={{ margin: 0, fontSize: '12px' }}>Price: $2.00</p>
                  <p style={{ margin: 0, fontSize: '12px' }}>Quantity: 1</p>
                </div>
              </div>
              <button 
                style={{
                  marginTop: '20px',
                  padding: '10px 20px',
                  fontSize: '16px',
                  backgroundColor: '#007bff',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease',
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#0056b3'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#007bff'}
              >
                Buy Now
              </button>
            </div>
          </section>
        </main>
      </div>
      <style>
        {`
          .cart-header {
            background-color: #007bff; /* Blue background color */
            padding: 20px;
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: space-between; /* Space between profile icon and title */
          }

          .headerContent {
            display: flex;
            align-items: center;
            width: 100%;
          }

          .greeting {
            flex: 1;
            text-align: center;
            font-size:30px;
          }

          .avatar {
            margin-left: 6px;
            cursor: pointer; /* Indicate the profile icon is clickable */
          }

          .avatarImg {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            object-fit: cover;
          }
        `}
      </style>
    </div>
  );
};

export default Cart;
