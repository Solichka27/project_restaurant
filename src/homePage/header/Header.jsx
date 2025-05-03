import React from 'react';
import style from './Header.module.css';
import MainPhoto from './mainPhoto/MainPhoto';

const Header = (props) => {
    return (
        <div className={style.mainContainer}>
            <MainPhoto />
        </div >
    )
}


export default Header;