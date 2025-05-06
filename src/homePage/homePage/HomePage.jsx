import React from 'react';
import style from './HomePage.module.css';
import { BrowserRouter } from 'react-router-dom';
import Header from '../header/Header';
import FourCardMenu from '../fourCardMenu/FourCardMenu';

function HomePage() {
    return (
        <div className={style.container}>
            <Header />
            <FourCardMenu />
        </div>
    );
}

export default HomePage;
