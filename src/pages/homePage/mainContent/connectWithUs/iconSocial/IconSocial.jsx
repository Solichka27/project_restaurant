import style from './IconSocial.module.css';
import iconFacebook from '../../../../../assets/image/homePage/mainContent/connectWithUs/iconSocial/iconFacebook.png';
import iconTwitter from '../../../../../assets/image/homePage/mainContent/connectWithUs/iconSocial/iconTwitter.png';
import iconInstagram from '../../../../../assets/image/homePage/mainContent/connectWithUs/iconSocial/iconInstagram.png';

const IconSocial = () => {
    return (
        <div className={style.iconGroup}>
            <a href="https://www.facebook.com/Redbamboonyc/" target='_blank' rel="noopener noreferrer">
                <img src={iconFacebook} alt="iconFacebook" className={style.iconItem} />
            </a>

            <a href="https://x.com/i/flow/login?redirect_after_login=%2Fredbamboonyc/" target='_blank' rel="noopener noreferrer">
                <img src={iconTwitter} alt="iconTwitter" className={style.iconItem} />
            </a>

            <a href="https://www.instagram.com/redbamboonyc/" target='_blank' rel="noopener noreferrer">
                <img src={iconInstagram} alt="iconInstagram" className={style.iconItem} />
            </a>
        </div>
    )
}
export default IconSocial;