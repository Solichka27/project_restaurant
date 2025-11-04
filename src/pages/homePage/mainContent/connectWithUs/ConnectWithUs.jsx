import style from './ConnectWithUs.module.css';
import IconSocial from './iconSocial/IconSocial';

const ConnectWithUs = () => {
    return (
        <div className={style.mainContent}>

            <div className={style.backgroundPhoto} />

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