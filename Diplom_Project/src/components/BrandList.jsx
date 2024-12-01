import React from 'react';
import { Link } from 'react-router-dom';

const brands = [
  'Audi', 'BMW', 'Renault', 'Peugeot', 'Mercedes-Benz', 'Volkswagen',
  'Ferrari', 'Toyota', 'Honda', 'Ford', 'Chevrolet', 'Nissan', 'Mazda', 'Hyundai', 'Kia', 'Citroën', 'Subaru', 'Tesla', 'Lexus', 'Infiniti', 'Cadillac'
];

const BrandList = () => {
  return (
    <div className="brand-list-container">
      <h2>Выберите бренд</h2>
      <ul className="brand-list">
        {brands.map((brand) => (
          <li key={brand} className="brand-item">
            <Link to={`/cars/brand/${brand.toLowerCase()}`} className="brand-link">
              {brand}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BrandList;
