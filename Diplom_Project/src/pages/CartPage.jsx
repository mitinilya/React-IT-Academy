import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/actions/cartActions';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const CartPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { cars } = useSelector(state => state.cars);
  const { items: cartItems } = useSelector(state => state.cart);

  // Получаем параметры корзины из URL
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const cartParam = searchParams.get('cart');
    
    if (cartParam) {
      const cartIds = cartParam.split(',').map(id => parseInt(id));
      // Здесь можно фильтровать cars, чтобы показать их в корзине
    }
  }, [location.search]);

  const handleAddToCart = (carId) => {
    dispatch(addToCart(carId));  // Добавляем товар в корзину и обновляем сервер
  };

  const handleRemoveFromCart = (carId) => {
    dispatch(removeFromCart(carId));  // Удаляем товар из корзины и обновляем сервер
  };

  return (
    <div className="cart">
      <h1>Избранное</h1>
      {cartItems.length === 0 ? (
        <p>Список Ваших избранных авто пуст.</p>
      ) : (
        <div>
          <TransitionGroup component="ul">
            {cartItems.map(item => (
              <CSSTransition key={item.id} timeout={300} classNames="cart-item">
                <li>
                  <img src={item.image} alt={item.model} width={100} />
                  <span>{item.brand} {item.model} - ${item.price.toLocaleString()}</span>
                  <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                </li>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
      )}
    </div>
  );
};

export default CartPage;
