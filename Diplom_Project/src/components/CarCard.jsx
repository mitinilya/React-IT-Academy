import React from 'react';
import { useSelector } from 'react-redux';
import { Button, Snackbar } from '@mui/material';

const CarCard = ({ car, onAddToCart }) => {
  const user = useSelector((state) => state.auth.user); 
  const [openSnackbar, setOpenSnackbar] = React.useState(false);

  const handleAddToCart = () => {
    if (user) {
      onAddToCart(user.id, car); 
      setOpenSnackbar(true); 
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false); // закрыть увед
  };

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
        <Button variant="contained" color="primary" onClick={handleAddToCart}>
          Добавить в избранное
        </Button>
      ) : (
        <p className= "car-card-p">Войдите в аккаунт, чтобы добавить в избранное</p>
      )}

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
