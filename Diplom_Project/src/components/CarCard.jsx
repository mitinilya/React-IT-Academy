import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Snackbar } from '@mui/material';


const CarCard = ({ car, onAddToCart }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const cartItems = useSelector((state) => state.cart.items);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const isInCart = cartItems.some(item => item.id === car.id);

  useEffect(() => {
    setIsAddedToCart(isInCart);
  }, [cartItems]);

  const handleAddToCart = () => {
    if (user && !isInCart) {
      onAddToCart(car);
      dispatch({ type: 'ADD_TO_CART', payload: car });
      setIsAddedToCart(true);
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  // Плейсхолдер изображения
  const placeholderImage = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIHZlcnNpb249IjEuMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiMwMDAwMDAiLz4KPC9zdmc+Cg==';

  return (
    <div className="car-card">
      <div className="car-card-image">
        {/* lazy loading для картинок */}
        <img 
          src={car.image || placeholderImage} 
          alt={car.model} 
          loading="lazy"
          onError={(e) => e.target.src = placeholderImage} 
        />
      </div>
      <div className="car-card-content">
        <h3>{car.brand} {car.model}</h3>
        <p>Год выпуска: {car.year || 'Не указан'}</p>
        <p>Стоимость: ${car.price ? car.price.toLocaleString() : 'Не указано'}</p>
        <p>Тип двигателя: {car.type || 'Не указано'}</p>
        <p>Пробег: {car.mileage ? `${car.mileage.toLocaleString()} км` : 'Не указано'}</p>
        <p>{car.description || ''}</p>

        <div className="car-card-footer">
          {user ? (
            <Button 
              variant="contained" 
              color="primary" 
              onClick={handleAddToCart} 
              disabled={isAddedToCart || isInCart}
              className="action-button"
            >
              {isAddedToCart || isInCart ? 'Добавлено в избранное' : 'Добавить в избранное'}
            </Button>
          ) : (
            <p className="car-card-p">Необходимо авторизоваться, чтобы добавить в избранное</p>
          )}
</div>

      </div>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message="Товар успешно добавлен в избранное"
      />
    </div>
  );
};

export default CarCard;
