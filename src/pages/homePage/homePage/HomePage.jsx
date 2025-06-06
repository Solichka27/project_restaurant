import React from 'react';
import style from './HomePage.module.css';
import MainPhoto from '../mainPhoto/MainPhoto';
import FourCardMenu from '../fourCardMenu/FourCardMenu';
import MainContent from '../mainContent/MainContent'

function HomePage() {
    return (
        <div className={style.container}>
            <MainPhoto />
            <FourCardMenu />
            <MainContent />
        </div>
    );
}

export default HomePage;
