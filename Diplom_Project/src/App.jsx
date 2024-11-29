import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CarListPage from './pages/CarListPage';
import CartPage from './pages/CartPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<CarListPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
};

export default App;
