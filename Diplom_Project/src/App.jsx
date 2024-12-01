import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import CarListPage from './pages/CarListPage';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<CarListPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cars/brand/:brand" element={<CarListPage />} /> 
      </Routes>
    </>
  );
};

export default App;
