import React, { useState } from 'react';

const OrderForm = ({ cartItems }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь можно отправить данные на сервер или обработать их.
    console.log({ name, address, phone, message, cartItems });
  };

  return (
    <div className="order-form">
      <h2>Order Form</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty. Add some items to your cart first.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Address:</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Phone:</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Message:</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button type="submit">Place Order</button>
        </form>
      )}
    </div>
  );
};

export default OrderForm;
