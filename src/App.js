import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './homePage/homePage/HomePage';

function App() {
  return (
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  );
}

export default App;
