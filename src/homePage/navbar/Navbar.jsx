import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navbar.module.css';
import logoFacebook from './../../image/homePage/header/logoFacebook.png';
import logoInstagram from './../../image/homePage/header/logoInstagram.png';
import logoTwitter from './../../image/homePage/header/logoTwitter.png';

const Navbar = (props) => {
    return (
        <div className={style.mainContainer}>
            <nav className={style.navbar}>
                
                <div className={style.address}>140 WEST 4TH ST</div>
                <div className={style.links}>
                    <NavLink to="/" className={style.link}>HOME</NavLink>
                    <NavLink to="/order" className={style.link}>ORDER</NavLink>
                    <NavLink to="/menus" className={style.link}>MENUS</NavLink>
                    <NavLink to="/gift-cards" className={style.link}>GIFT CARDS</NavLink>
                    <NavLink to="/about" className={style.link}>ABOUT</NavLink>
                    <NavLink to="/contact" className={style.link}>CONTACT</NavLink>
                    <NavLink to="/press" className={style.link}>PRESS</NavLink>
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