import React from 'react';
import style from './HomePage.module.css';
import MainPhoto from '../mainPhoto/MainPhoto';
import FourCardMenu from '../fourCardMenu/FourCardMenu';
import MainContent from '../mainContent/MainContent';
import Footer from '../footer/Footer';

function HomePage() {
    return (
        <div className={style.container}>
            <MainPhoto />
            <FourCardMenu />
            <MainContent />
            <Footer />
        </div>
    );
}

export default HomePage;
