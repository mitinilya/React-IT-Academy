import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from '../redux/actions/carActions';
import { addToCart } from '../redux/actions/cartActions';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import CarCard from '../components/CarCard';
import FilterBar from '../components/FilterBar';
import Pagination from '../components/Pagination';
import BrandList from '../components/BrandList';

const CarListPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { cars, loading, error } = useSelector((state) => state.cars);

  const [filteredCars, setFilteredCars] = useState([]);
  const [filters, setFilters] = useState({
    minPrice: '',
    maxPrice: '',
    engineType: '',
    sortOrder: '',
  });
  const [appliedFilters, setAppliedFilters] = useState({ ...filters });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(50); 

  const { brand } = useParams();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  //обновляем список при изменении фильтров в урле
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);

    const initialFilters = {
      //сортировки!!!!!
      minPrice: queryParams.get('minPrice') || '',
      maxPrice: queryParams.get('maxPrice') || '',
      engineType: queryParams.get('engineType') || '',
      sortOrder: queryParams.get('sortOrder') || '',
      itemsPerPage: queryParams.get('itemsPerPage') || 50, // itemsPerPage в урл 
      page: queryParams.get('page') || 1, // page в урл
    };

    setFilters((prevFilters) => ({
      ...prevFilters,
      ...initialFilters,
    }));
    setItemsPerPage(Number(initialFilters.itemsPerPage));
    setCurrentPage(Number(initialFilters.page)); //номер страницы из урла

    // фильтрация по бренду и прочим фильтрам (реализовать по цене, порогам цен, бренду и типу двигателя)
    let filtered = cars.filter((car) => {
      if (brand && car.brand.toLowerCase() !== brand.toLowerCase()) return false;
      if (initialFilters.minPrice && car.price < initialFilters.minPrice) return false;
      if (initialFilters.maxPrice && car.price > initialFilters.maxPrice) return false;
      if (initialFilters.engineType && car.type.toLowerCase() !== initialFilters.engineType.toLowerCase()) return false;
      return true;
    });

    //сортируем по ценам
    if (initialFilters.sortOrder === 'asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (initialFilters.sortOrder === 'desc') {
      filtered.sort((a, b) => b.price - a.price);
    }

    setFilteredCars(filtered);
  }, [brand, location.search, cars]);

  
  const applyFilters = () => {
    setAppliedFilters(filters);

    const queryParams = new URLSearchParams();
    if (filters.minPrice) queryParams.set('minPrice', filters.minPrice);
    if (filters.maxPrice) queryParams.set('maxPrice', filters.maxPrice);
    if (filters.engineType) queryParams.set('engineType', filters.engineType);
    if (filters.sortOrder) queryParams.set('sortOrder', filters.sortOrder);
    if (itemsPerPage) queryParams.set('itemsPerPage', itemsPerPage); // добавить itemsPerPage в урл!!!!
    if (currentPage) queryParams.set('page', currentPage); // добавляем page в URL
    

    navigate(`?${queryParams.toString()}`);
  };

  
  const handleItemsPerPageChange = (newItemsPerPage) => {
    setItemsPerPage(newItemsPerPage);
    const queryParams = new URLSearchParams(location.search);
    queryParams.set('itemsPerPage', newItemsPerPage);
    queryParams.set('page', 1);
    navigate(`?${queryParams.toString()}`);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    const queryParams = new URLSearchParams(location.search);
    queryParams.set('page', pageNumber); // обновляем номер страницы в урле
    navigate(`?${queryParams.toString()}`);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleAddToCart = (car) => {
    dispatch(addToCart(car));
  };

 

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCars = filteredCars.slice(indexOfFirstItem, indexOfLastItem);

  if (loading) return <div className="cssload-loader">
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
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <BrandList />
      <FilterBar
        filters={filters}
        onFilterChange={handleFilterChange}
        onApplyFilters={applyFilters}
      />
      <div className="car-list">
        {currentCars.length > 0 ? (
          currentCars.map((car) => (
            <CarCard key={car.id} car={car} onAddToCart={() => handleAddToCart(car)} />
          ))
        ) : (
          <p>Не найдено автомобилей под указанные фильтры.</p>
        )}
      </div>
      <Pagination
        totalItems={filteredCars.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
        onItemsPerPageChange={handleItemsPerPageChange} 
      />
    </div>
  );
};

export default CarListPage;
