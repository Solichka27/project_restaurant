import style from './Order.module.css';
import LinkButton from '../../../fourCardMenu/button/LinkButton';

const Order = () => {
    return (
        <div className={style.mainContent}>

            <div className={style.order}>
                <h1 className={style.title}>ORDER</h1>
                <h3 className={style.subtitle}>pick-up & delivery</h3>
                <hr />
            </div>

            <div className={style.sectionTakeOut}>
                <div className={style.takeOut}>
                    <h4 className={style.subtitle2}>CONTACTLESS TAKE-OUT</h4>
                    <p className={style.takeOutText}>To place an order for pickup,</p>
                    <p className={style.takeOutText}>please order via Square.</p>
                </div>
                <LinkButton text="ORDER PICKUP" link="#menu" isBlank={false} />
            </div>

            <div className={style.sectionDelivery}>
                <div className={style.delivery}>
                    <h4 className={style.subtitleDelivery}>DELIVERY EXPANDED</h4>
                    <p className={style.deliveryText}>To place an order for delivery, please choose from</p>
                    <p className={style.deliveryText}>one of our partners below:</p>
                </div>


                <div className={style.linkDelivery}>
                    <a href="https://postmates.com/store/red-bamboo/AENNGqX0QuyQWIYlZ-oxIg?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjIxMSUyMEF2ZW51ZSUyMEElMjIlMkMlMjJyZWZlcmVuY2UlMjIlM0ElMjIxMzFkNWMxMy04NmIzLTQ4N2QtMjZiMy03OTQ3YzhiNjEyOGElMjIlMkMlMjJyZWZlcmVuY2VUeXBlJTIyJTNBJTIydWJlcl9wbGFjZXMlMjIlMkMlMjJsYXRpdHVkZSUyMiUzQTQwLjczJTJDJTIybG9uZ2l0dWRlJTIyJTNBLTczLjk4MDY5NjclN0Q%3D&ps=1"
                        target='_blank' rel="noopener noreferrer" className={style.linkItem}>
                        Postmates</a>
                    <a href="https://www.grubhub.com/restaurant/red-bamboo-140-west-4th-street-new-york/2185145" target='_blank' rel="noopener noreferrer" className={style.linkItem}>PGrubHub</a>
                    <a href="https://www.seamless.com/menu/red-bamboo-140-west-4th-street-new-york/2185145" target='_blank'  rel="noopener noreferrer" className={style.linkItem}>Postmates</a>
                    &
                    <a href="https://www.ubereats.com/store/red-bamboo/AENNGqX0QuyQWIYlZ-oxIg" target='_blank'  rel="noopener noreferrer" className={style.linkItem}>UberEats</a>
                </div>

            </div>
        </div>


    )
}

export default Order;