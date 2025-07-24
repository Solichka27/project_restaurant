import style from './Footer.module.css';
import { NavLink } from 'react-router-dom';

import logoFacebook from '../../../assets/image/homePage/header/logoFacebook.png';
import logoInstagram from '../../../assets/image/homePage/header/logoInstagram.png';
import logoTwitter from '../../../assets/image/homePage/header/logoTwitter.png';

const Footer = (props) => {
    return (
        <div className={style.container}>
            <div className={style.mainTitle}>
                <p>RED BAMBOO</p>
                <p>140 WEST 4TH STREET  |  NY, NY 10012</p>
                <p>212.260.1212  |  212.260.7049</p>
            </div>


            <div className={style.navbar}>
                <div className={style.address}>140 WEST 4TH ST</div>
                <NavLink to="/project_restaurant"
                    className={({ isActive }) =>
                        isActive ? `${style.navLink} ${style.navActive}` : style.navLink
                    }>HOME</NavLink>

                <NavLink to="/order" className={({ isActive }) =>
                    isActive ? `${style.navLink} ${style.navActive}` : style.navLink
                }>ORDER</NavLink>

                <NavLink to="/menus" className={({ isActive }) =>
                    isActive ? `${style.navLink} ${style.navActive}` : style.navLink
                }>MENUS</NavLink>

                <NavLink to="/gift-cards" className={({ isActive }) =>
                    isActive ? `${style.navLink} ${style.navActive}` : style.navLink
                }>GIFT CARDS</NavLink>

                <NavLink to="/about" className={({ isActive }) =>
                    isActive ? `${style.navLink} ${style.navActive}` : style.navLink
                }>ABOUT</NavLink>

                <NavLink to="/contact" className={({ isActive }) =>
                    isActive ? `${style.navLink} ${style.navActive}` : style.navLink
                }>CONTACT</NavLink>

                <NavLink to="/press" className={({ isActive }) =>
                    isActive ? `${style.navLink} ${style.navActive}` : style.navLink
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
        </div>
    )
}

export default Footer;