import style from './ConnectWithUs.module.css';
import IconSocial from './iconSocial/IconSocial';
import backgroundPhoto from '../../../image/homePage/mainContent/connectWithUs/connectWithUs.png'

const ConnectWithUs = () => {
    return (
        <div className={style.mainContent}>

            <div className={style.photo}>
                <img src={backgroundPhoto} alt="backgroundPhoto" className={style.backgroundPhoto} />
            </div>

            <div className={style.block}>
                <h2 className={style.text}>connect with us</h2>
                <div className={style.icons}>
                    <IconSocial />
                </div>
            </div>

        </div>
    )
}

export default ConnectWithUs;