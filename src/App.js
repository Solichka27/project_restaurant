import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './navigation/Layout';
import HomePage from './homePage/homePage/HomePage';
import Menus from './menus/Menus';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/menus" element={<Menus />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
