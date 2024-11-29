import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCars } from '../redux/actions/carActions';
import { addToCart } from '../redux/actions/cartActions';
import CarCard from '../components/CarCard';

const CarListPage = () => {
  const dispatch = useDispatch();
  const { cars, loading, error } = useSelector(state => state.cars);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const handleAddToCart = car => {
    dispatch(addToCart(car));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="car-list">
      {cars.map(car => (
        <CarCard key={car.id} car={car} onAddToCart={() => handleAddToCart(car)} />
      ))}
    </div>
  );
};

export default CarListPage;
