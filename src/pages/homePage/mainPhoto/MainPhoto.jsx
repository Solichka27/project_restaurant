import React from 'react';
import mainPhoto from '../../../assets/image/homePage/header/mainPhoto.png';
import logo from '../../../assets/image/homePage/header/logo.png';
import style from './MainPhoto.module.css';

const MainPhoto = (props) => {
    return (
        <div className={style.mainContainer}>
            <img src={mainPhoto} alt="mainPhoto" className={style.mainPhoto} />
            <img src={logo} alt="mainPhoto" className={style.logo} />
        </div >
    )
}



export default MainPhoto;