import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../redux/actions/cartActions';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const CartPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector(state => state.auth);
  const { items } = useSelector(state => state.cart); 

  
  const [isRemoving, setIsRemoving] = useState(null);

  const handleRemoveFromCart = (carId) => {
    setIsRemoving(carId); 
    setTimeout(() => {
      dispatch(removeFromCart(carId)); // диспатчим action для удаления товара
    }, 500);  //анимация при удалении с задержкой
  };

  return (
    <div className="cart">
      <h1>Избранное</h1>
      {items.length > 0 ? (
        items.map((car) => (
          <motion.div
            key={car.id}
            className="cart-item"
            initial={{ opacity: 1 }}
            animate={{ opacity: isRemoving === car.id ? 0 : 1 }} // Применяем анимацию
            exit={{ opacity: 0 }} // При удалении элемент будет исчезать
            transition={{ duration: 0.5 }} // Время анимации
          >
            <img src={car.image} alt={car.model} className="cart-item-image" />
            <div className="cart-item-details">
              <h3>{car.brand} {car.model}</h3>
              <p><strong>Год выпуска:</strong> {car.year}</p>
              <p><strong>Стоимость:</strong> ${car.price}</p>
              <p><strong>Описание:</strong> {car.description}</p>
              <button className="remove-btn" onClick={() => handleRemoveFromCart(car.id)}>
                Удалить из корзины
              </button>
            </div>
          </motion.div>
        ))
      ) : (
        <p className="empty-cart">Ваша корзина пуста.</p>
      )}
    </div>
  );
};

export default CartPage;
