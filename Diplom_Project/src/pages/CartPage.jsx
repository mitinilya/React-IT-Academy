import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/actions/cartActions';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector(state => state.auth);
  const [userCart, setUserCart] = useState([]);

  
  const fetchUserCart = async () => {
    if (user) {
      try {
        
        const response = await fetch(`http://localhost:5000/users/${user.id}`);
        const data = await response.json();

        if (data && data.cart) {
          setUserCart(data.cart);  
        } else {
          setUserCart([]);  
        }
      } catch (error) {
        console.error("Error fetching user's cart:", error);
      }
    }
  };

  useEffect(() => {
    if (user) {
      fetchUserCart();
    }
  }, [user]);

  
  const handleRemoveFromCart = async (carId) => {
    try {
     
      const response = await fetch(`http://localhost:5000/users/${user.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cart: userCart.filter(item => item.id !== carId),
        }),
      });
      if (response.ok) {
        
        setUserCart(userCart.filter(item => item.id !== carId));
      } else {
        console.error('Failed to remove item from cart');
      }
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };






  return (
    <div className="cart">
      <h1>Корзина</h1>
      {userCart.length > 0 ? (
        userCart.map((car) => (
          <div key={car.id} className="cart-item">
            <img src={car.image} alt={car.model} width={100} />
            <h3>{car.brand} {car.model}</h3>
            <p>Год выпуска: {car.year}</p>
            <p>Стоимость: ${car.price}</p>
            <p>Описание: {car.description}</p>
            <button onClick={() => handleRemoveFromCart(car.id)}>Удалить из корзины</button>
          </div>
        ))
      ) : (
        <p>Ваша корзина пуста.</p>
      )}
    </div>
  );
};

export default CartPage;
