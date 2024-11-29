import React from 'react';

const CarCard = ({ car, onAddToCart }) => (
  <div className="car-card">
    <img src={car.image} alt={`${car.brand} ${car.model}`} />
    <h2>{car.brand} {car.model}</h2>
    <p>{car.year}</p>
    <p>${car.price.toLocaleString()}</p>
    <p>{car.description}</p>
    <button onClick={() => onAddToCart(car)}>Add to Cart</button>
  </div>
);

export default CarCard;
