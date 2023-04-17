import React, { useState } from 'react';
import './Menucard'; 
const FoodMenu = () => {
  const [menuItems] = useState([
    
    { id: 1, name: 'Pizza', price: 10.99 },
    { id: 2, name: 'Burger', price: 8.49 },
    { id: 3, name: 'Salad', price: 6.59 },
    { id: 4, name: 'Bruschetta', price: 9.99 },
    { id: 3, name: 'Lemon Dessert', price: 5 },
    { id: 3, name: 'Italian Pasta', price: 13.99 },
  ]);

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (menuItem) => {
    setCartItems([...cartItems, menuItem]);
  };

  const removeFromCart = (menuItem) => {
    setCartItems(cartItems.filter((item) => item.id !== menuItem.id));
  };

  return (
    <div>
      <h1>Food Menu</h1>
      <div>
        <h2>Menu Items</h2>
        <ul>
          {menuItems.map((menuItem) => (
            <li key={menuItem.id}>
              {menuItem.name} - ${menuItem.price}
              
                <button style={{ width: '200px', margin: '5px', marginLeft:'50px'  }} onClick={() => addToCart(menuItem)}>Add to Cart</button>
            
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Cart</h2>
        <ul>
          {cartItems.map((cartItem) => (
            <li key={cartItem.id}>
              {cartItem.name} - ${cartItem.price}
              <button style={{ width: '200px', margin: '10px', marginLeft:'50px' }} onClick={() => removeFromCart(cartItem)}>Remove from Cart</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FoodMenu;
