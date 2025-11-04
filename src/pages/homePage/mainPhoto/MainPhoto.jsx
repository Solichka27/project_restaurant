import React from 'react';
import logo from '../../../assets/image/homePage/header/logo.png';
import style from './MainPhoto.module.css';

const MainPhoto = (props) => {
    return (
        <div className={style.mainContainer}>
            <div className={style.mainPhoto}> </div>
            <img src={logo} alt="mainPhoto" className={style.logo} />
        </div >
    )
}



export default MainPhoto;