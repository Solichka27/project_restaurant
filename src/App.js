import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './navigation/ScrollToUp';
import Layout from './navigation/Layout';

import HomePage from './pages/homePage/homePage/HomePage';
import Orders from './pages/ordersPage/Orders';
import Menus from './pages/menusPage/Menus';
import GiftCards from './pages/giftPage/GiftCards';
import About from './pages/aboutPage/About';
import Contact from './pages/contactPage/Contact';
import Press from './pages/pressPage/Press';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/project_restaurant" element={<HomePage />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/menus" element={<Menus />} />
          <Route path="/gift-cards" element={<GiftCards />} />
          <Route path="/about" element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path="/press" element={<Press />} />
        </Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
