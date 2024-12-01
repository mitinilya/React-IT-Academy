import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCars } from '../redux/actions/carActions';
import { addToCart } from '../redux/actions/cartActions';
import CarCard from '../components/CarCard';
import FilterBar from '../components/FilterBar';
import Pagination from '../components/Pagination';
import { useParams } from 'react-router-dom';
import BrandList from '../components/BrandList';

const CarListPage = () => {
  const dispatch = useDispatch();
  const { cars, loading, error } = useSelector(state => state.cars);
  const [filteredCars, setFilteredCars] = useState(cars);
  const [filters, setFilters] = useState({
    minPrice: '',
    maxPrice: '',
    brand: '',
  });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 50;

  //получаем параметр brand из URL
  const { brand } = useParams();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  useEffect(() => {
    //фильрация данных
    const applyFilters = () => {
      let filtered = cars;

      //фильтрация по цене
      if (filters.minPrice) {
        filtered = filtered.filter(car => car.price >= filters.minPrice);
      }

      if (filters.maxPrice) {
        filtered = filtered.filter(car => car.price <= filters.maxPrice);
      }

      // филтр по бренду из состояния
      if (filters.brand) {
        filtered = filtered.filter(car => car.brand.toLowerCase().includes(filters.brand.toLowerCase()));
      }

      //филтр по бренду из урла
      if (brand) {
        filtered = filtered.filter(car => car.brand.toLowerCase() === brand.toLowerCase());
      }

      setFilteredCars(filtered);
    };

    applyFilters();
  }, [cars, filters, brand]); //применяем фильтры, если cars brand изменятся

  const handleAddToCart = car => {
    dispatch(addToCart(car));
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCars = filteredCars.slice(indexOfFirstItem, indexOfLastItem);

  if (loading) return (
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
      <div className="cssload-loader-circle-1"><div className="cssload-loader-circle-2"></div></div>
      <div className="cssload-needle"></div>
      <div className="cssload-loading">Загрузка...</div>
    </div>
  );

  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <BrandList /> 
      <FilterBar onFilterChange={handleFilterChange} />
      <div className="car-list">
        {currentCars.length > 0 ? (
          currentCars.map(car => (
            <CarCard key={car.id} car={car} onAddToCart={() => handleAddToCart(car)} />
          ))
        ) : (
          <p>Нет автомобилей для выбранного бренда.</p>
        )}
      </div>
      <Pagination
        totalItems={filteredCars.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default CarListPage;
