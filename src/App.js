import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './navigation/Layout';
import HomePage from './pages/homePage/homePage/HomePage';
import Menus from './pages/menusPage/Menus';
import GiftCards from './pages/giftPage/GiftCards';
import ScrollToTop from './navigation/ScrollToUp';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/project_restaurant" element={<HomePage />} />
          <Route path="/menus" element={<Menus />} />
          <Route path="/gift-cards" element={<GiftCards />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
