import React from 'react';
import style from './HomePage.module.css';
import Header from '../header/Header';
import FourCardMenu from '../fourCardMenu/FourCardMenu';
import MainContent from '../mainContent/MainContent'

function HomePage() {
    return (
        <div className={style.container}>
            <Header />
            <FourCardMenu />
            <MainContent />
        </div>
    );
}

export default HomePage;
