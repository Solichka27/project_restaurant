import React from 'react';
import style from './HomePage.module.css';
import Header from '../header/Header';
import FourCardMenu from '../fourCardMenu/FourCardMenu';
import AboutOrder from '../mainContent/aboutOrder/AboutOrder';

function HomePage() {
    return (
        <div className={style.container}>
            <Header />
            <FourCardMenu />
            <AboutOrder />
        </div>
    );
}

export default HomePage;
