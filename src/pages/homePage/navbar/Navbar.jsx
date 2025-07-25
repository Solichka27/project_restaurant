import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navbar.module.css';
import logoFacebook from '../../../assets/image/homePage/header/logoFacebook.png';
import logoInstagram from '../../../assets/image/homePage/header/logoInstagram.png';
import logoTwitter from '../../../assets/image/homePage/header/logoTwitter.png';

const Navbar = (props) => {
    return (
        <div className={style.mainContainer}>
            <nav className={style.navbar}>

                <div className={style.address}>140 WEST 4TH ST</div>
                <div className={style.links}>
                    <NavLink to="/project_restaurant" className={({ isActive }) =>
                        isActive ? `${style.link} ${style.linkActive}` : style.link
                    }>HOME</NavLink>
                    <NavLink to="/orders" className={({ isActive }) =>
                        isActive ? `${style.link} ${style.linkActive}` : style.link
                    }>ORDERS</NavLink>
                    <NavLink to="/menus" className={({ isActive }) =>
                        isActive ? `${style.link} ${style.linkActive}` : style.link
                    }>MENUS</NavLink>
                    <NavLink to="/gift-cards" className={({ isActive }) =>
                        isActive ? `${style.link} ${style.linkActive}` : style.link
                    }>GIFT CARDS</NavLink>
                    <NavLink to="/about" className={({ isActive }) =>
                        isActive ? `${style.link} ${style.linkActive}` : style.link
                    }>ABOUT</NavLink>
                    <NavLink to="/contact" className={({ isActive }) =>
                        isActive ? `${style.link} ${style.linkActive}` : style.link
                    }>CONTACT</NavLink>
                    <NavLink to="/press" className={({ isActive }) =>
                        isActive ? `${style.link} ${style.linkActive}` : style.link
                    }>PRESS</NavLink>
                </div>

                <div className={style.social}>
                    <a href="https://www.facebook.com/Redbamboonyc/" target="_blank" rel="noopener noreferrer" className={style.socialItem}>
                        <img src={logoFacebook} alt="logoFecebook" className={style.socialLogo} />
                    </a>

                    <a href="https://x.com/i/flow/login?redirect_after_login=%2Fredbamboonyc" target="_blank" rel="noopener noreferrer" className={style.socialItem}>
                        <img src={logoTwitter} alt="logoTwitter" className={style.socialLogo} />
                    </a>

                    <a href="https://www.instagram.com/redbamboonyc/" target="_blank" rel="noopener noreferrer" className={style.socialItem}>
                        <img src={logoInstagram} alt="logoInstagram" className={style.socialLogo} />
                    </a>
                </div>

            </nav>
        </div >
    )
}

export default Navbar;