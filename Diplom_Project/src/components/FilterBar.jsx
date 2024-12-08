import React from 'react';
import { TextField, Button } from '@mui/material'; 

const FilterBar = ({ filters, onFilterChange, onApplyFilters }) => { 
  const handleEngineTypeChange = (e) => {
    onFilterChange({ ...filters, engineType: e.target.value });
  };

  const handleSortOrderChange = (e) => {
    onFilterChange({ ...filters, sortOrder: e.target.value });
  };

  return (
    <div className="filter-bar">
      <label>
        Тип двигателя:
        <select
          value={filters.engineType}
          onChange={handleEngineTypeChange}
        >
          <option value="">Выберите тут</option>
          <option value="Бензин">Бензин</option>
          <option value="Дизель">Дизель</option>
          <option value="Электро">Электро</option>
        </select>
      </label>
      <label>
        Сортировать по:
        <select
          value={filters.sortOrder}
          onChange={handleSortOrderChange}
        >
          <option value="">Без сортировки</option>
          <option value="asc">По возрастанию</option>
          <option value="desc">По убыванию</option>
        </select>
      </label>

     <span>Укажите диапазон стоимости: </span>
      <TextField
        label="Минимум по цене"
        value={filters.minPrice || ''}
        onChange={(e) => onFilterChange({ ...filters, minPrice: e.target.value })}
        type="number"
        variant="outlined"
      />
      <TextField
        label="Макисмум по цене"
        value={filters.maxPrice || ''}
        onChange={(e) => onFilterChange({ ...filters, maxPrice: e.target.value })}
        type="number"
        variant="outlined"
      />

   
      <Button
        variant="contained"
        onClick={onApplyFilters} // обработчик в применении фильтров
      >
        Применить фильтры
      </Button>
    </div>
  );
};

export default FilterBar;
