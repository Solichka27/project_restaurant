import style from './AboutOrder.module.css';
import About from './about/About';
import Order from './order/Order';

const AboutOrder = () => {
    return (
        <div className={style.mainContent}>

            <div className={style.backgroundImage}>
                <div className={style.foodPhoto}> </div>
                <div className={style.about}>
                    <About />
                </div>
                <div className={style.order}>
                    <Order />
                </div>
            </div>

        </div>
    )
}

export default AboutOrder;