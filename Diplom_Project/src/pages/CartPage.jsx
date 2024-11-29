import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/actions/cartActions';

const CartPage = () => {
  const dispatch = useDispatch();
  const { items } = useSelector(state => state.cart);

  const handleRemoveFromCart = carId => {
    dispatch(removeFromCart(carId));
  };

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {items.map(item => (
            <li key={item.id}>
              <img src={item.image} alt={item.model} width={100} />
              <span>
                {item.brand} {item.model} - ${item.price.toLocaleString()}
              </span>
              <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;
