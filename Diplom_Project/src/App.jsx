import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import CarListPage from './pages/CarListPage';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import AddAdvertisementPage from './pages/AddAdvertisementPage';
import MyAdvertisementPage from './pages/MyAdvertisementPage';
import EditAdvertisementPage from './pages/EditAdvertisementPage'; 

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<CarListPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cars/brand/:brand" element={<CarListPage />} />
        <Route path="/add-advertisement" element={<AddAdvertisementPage />} />
        <Route path="/my-advertisement" element={<MyAdvertisementPage />} />
        <Route path="/edit-ad/:id" element={<EditAdvertisementPage />} /> 
      </Routes>
    </>
  );
};

export default App;
