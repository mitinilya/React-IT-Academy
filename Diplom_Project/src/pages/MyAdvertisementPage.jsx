import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLoggedInUser, fetchCars, deleteCar } from '../redux/actions/carActions';
import { motion } from 'framer-motion';

const MyAdvertisementPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { cars, loggedInUser, loading, error } = useSelector((state) => state.cars);
  const [isRemoving, setIsRemoving] = useState(null);

  useEffect(() => {
    dispatch(fetchLoggedInUser());
  }, [dispatch]);

  useEffect(() => {
    if (loggedInUser) {
      dispatch(fetchCars());
    }
  }, [loggedInUser, dispatch]);

  const handleEditAd = (carId) => {
    navigate(`/edit-ad/${carId}`);
  };

  const handleDeleteAd = (carId) => {
    setIsRemoving(carId); // Помечаем, что это объявление удаляется
    setTimeout(() => {
      dispatch(deleteCar(carId));
    }, 500); // Ожидаем завершения анимации
  };

  // Фильтруем автомобили по userId
  const userCars = cars.filter((car) => car.userId === loggedInUser?.id);

  if (loading)
    return (
      <div className="cssload-loader">
        <div className="cssload-line"></div>
        <div className="cssload-line"></div>
        <div className="cssload-line"></div>
        <div className="cssload-line"></div>
        <div className="cssload-line"></div>
        <div className="cssload-line"></div>
        <div className="cssload-subline"></div>
        <div className="cssload-subline"></div>
        <div className="cssload-subline"></div>
        <div className="cssload-subline"></div>
        <div className="cssload-subline"></div>
        <div className="cssload-loader-circle-1">
          <div className="cssload-loader-circle-2"></div>
        </div>
        <div className="cssload-needle"></div>
        <div className="cssload-loading">Загрузка...</div>
      </div>
    );
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div>
      <h1 className="page-title">Мои объявления</h1>
      <div className="ad-list">
        {userCars.length > 0 ? (
          userCars.map((car) => (
            <motion.div
              key={car.id}
              className="ad-card"
              initial={{ opacity: 1 }}
              animate={{ opacity: isRemoving === car.id ? 0 : 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img src={car.image} alt={car.model} />
              <h3>{car.brand} {car.model}</h3>
              <p><strong>Год выпуска:</strong> {car.year}</p>
              <p><strong>Стоимость:</strong> {car.price}$</p>
              <p><strong>Тип топлива:</strong> {car.type}</p>
              <p><strong>Пробег:</strong> {car.mileage}км</p>
              <p><strong>Описание:</strong> {car.description}</p>
              <div className="button-container">
                <button onClick={() => handleEditAd(car.id)}>Редактировать</button>
                <button onClick={() => handleDeleteAd(car.id)}>Удалить</button>
              </div>
            </motion.div>
          ))
        ) : (
          <p>У вас нет активных объявлений.</p>
        )}
      </div>
    </div>
  );
};

export default MyAdvertisementPage;
