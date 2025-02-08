import React, { useState } from "react";
import "./ShoppingComponent.css";

const items = [
  { id: 1, name: "Hair Soap", price: 3.21, image: "./hairsoap.webp" },
  { id: 2, name: "Hair Shampoo", price: 4.13, image: "/shampoo.jpeg" },
  { id: 3, name: "Nail Color", price: 1.99, image: "nail.jpeg" },
  { id: 4, name: "Nails", price: 0.98, image: "nails.jpeg" },
  { id: 5, name: "Hair Dryer", price: 4.11, image: "hairdryer.jpeg" },
  { id: 6, name: "Hair Brush", price: 2.78, image: "hair brush.avif" },
  { id: 7, name: "Hair Gel", price: 3.99, image: "hair gel.jpeg" },
  { id: 8, name: "Beard Trimmer", price: 8.54, image: "Beard Trimmer.jpeg" },
  { id: 9, name: "Face Mask", price: 1.99, image: "face mask.jpeg" }
];

const ShoppingComponent = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="shopping-container">
      <ul className="shopping-list">
        {items.map((item) => (
          <li key={item.id} className="shopping-item">
            <img src={item.image} alt={item.name} className="item-image" />
            <span>{item.name} - ${item.price}</span>
            <button onClick={() => addToCart(item)} className="add-to-cart">
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
      <h3 className="cart-title">Shopping Cart</h3>
      <ul className="cart-list">
        {cart.length === 0 ? (
          <p className="empty-cart">Cart is empty</p>
        ) : (
          cart.map((item, index) => (
            <li key={index} className="cart-item">
              <span>{item.name} - ${item.price}</span>
              <button onClick={() => removeFromCart(index)} className="remove-from-cart">
                Remove
              </button>
            </li>
          ))
        )}
      </ul>
      <h4 className="total-price">Total: ${getTotalPrice()}</h4>
      <p className="fees">Delivery & service charge no will be charged...</p>
      <div><br/><br/></div>
    </div>
  );
};

export default ShoppingComponent;