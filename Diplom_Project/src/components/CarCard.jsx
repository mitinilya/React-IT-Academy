import React from 'react';
import { useSelector } from 'react-redux';

const CarCard = ({ car, onAddToCart }) => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="car-card">
      <img src={car.image} alt={car.model} width={200} />
      <h3>{car.brand} {car.model}</h3>
      <p>Год выпуска: {car.year || 'Не указан'}</p>
      <p>Стоимость: ${car.price ? car.price.toLocaleString() : 'Не указано'}</p>
      <p>Тип двигателя: {car.type || 'Не указано'}</p>
      <p>Пробег: {car.mileage ? `${car.mileage.toLocaleString()} км` : 'Не указано'}</p>
      <p>{car.description || ''}</p>
      {user ? (
        <button onClick={() => onAddToCart(car.id)}>Add to Cart</button>
      ) : (
        <p style={{ color: 'red' }}></p>
      )}
    </div>
  );
};

export default CarCard;
