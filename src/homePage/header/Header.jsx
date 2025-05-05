import React from 'react';
import style from './Header.module.css';
import MainPhoto from './mainPhoto/MainPhoto';
import Navbar from '../navbar/Navbar';

const Header = (props) => {
    return (
        <div className={style.mainContainer}>
            <Navbar />
            <MainPhoto />
        </div >
    )
}

export default Header;