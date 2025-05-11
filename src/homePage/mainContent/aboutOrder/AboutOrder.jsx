import style from './AboutOrder.module.css';
import foodPhoto from '../../../image/homePage/mainContent/foodPhoto.jpeg';
import About from './about/About';
import Order from './order/Order';

const AboutOrder = () => {
    return (
        <div className={style.mainContent}>

            <div className={style.backgroundImage}>
                <img src={foodPhoto} alt="foodPhoto" className={style.foodPhoto} />
            </div>

            <div className={style.about}>
                <About />
            </div>

            <div className={style.order}>
                <Order />
            </div>
        </div>

    )
}

export default AboutOrder;