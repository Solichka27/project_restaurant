import style from './AboutOrder.module.css';
import foodPhoto from '../../../image/homePage/mainContent/foodPhoto.jpeg';
import logoEmail from '../../../image/homePage/aboutOrder/email.png';
import logoMaps from '../../../image/homePage/aboutOrder/maps.png';
import logoPhone from '../../../image/homePage/aboutOrder/phone.png';
import LinkButton from '../../fourCardMenu/button/LinkButton';

const AboutOrder = () => {
    return (
        <div className={style.mainContent}>

            <div className={style.backgroundImage}>
                <img src={foodPhoto} alt="foodPhoto" className={style.foodPhoto} />
            </div>

            <div className={style.block}>

                <div className='about'>
                    <h1 className={style.title}>ABOUT</h1>
                    <h3 className={style.subtitle}>our restaurant</h3>
                    <hr />
                </div>

                <div className={style.groupIcon}>
                    <a href="tel:+12122601212" className={style.socialItem}>
                        <img src={logoPhone} alt="logoPhone" className={style.socialLogo} />
                    </a>

                    <a href="https://www.google.com/maps/place/Red+Bamboo/@40.7312567,-74.0029194,17z/data=!3m1!4b1!4m6!3m5!1s0x89c2599166ac45c1:0xd2bb7efe730dd284!8m2!3d40.7312567!4d-74.0003445!16s%2Fg%2F1tk6r73x?hl=en&entry=ttu&g_ep=EgoyMDI1MDUwMy4wIKXMDSoASAFQAw%3D%3D"
                        target="_blank" rel="noopener noreferrer" className={style.socialItem}>
                        <img src={logoMaps} alt="logoMaps" className={style.socialLogo} />
                    </a>

                    <a href="mailto:redbamboo@email.com" target="_blank" rel="noopener noreferrer" className={style.socialItem}>
                        <img src={logoEmail} alt="logoEmail" className={style.socialLogo} />
                    </a>
                </div>

                <div className={style.hours}>
                    <h4 className={style.subtitle2}>HOURS</h4>
                    <div className={style.sectionHoursWork}>
                        <p className={style.hoursWork}>Monday — 12pm-9pm</p>
                        <p className={style.hoursWork}>Tuesday — 12pm-9pm</p>
                        <p className={style.hoursWork}>Wednesday — 12pm-10pm</p>
                        <p className={style.hoursWork}>Thursday — 12pm-10pm</p>
                        <p className={style.hoursWork}>Friday — 12pm-10pm</p>
                        <p className={style.hoursWork}>Saturday — 12pm-10pm</p>
                        <p className={style.hoursWork}>Sunday — 12pm-10pm</p>
                    </div>

                </div>

                <div className={style.sectionPhone}>
                    <div className={style.phone}>
                        <h4 className={style.subtitle2}>PHONE</h4>
                        <p className={style.phoneNum}>212.260.1212</p>
                        <p className={style.phoneNum}>212.260.7049</p>
                    </div>
                    <LinkButton text="ABOUT US" link="#about" />
                </div>
            </div>

            <div className={style.block2}>
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
                    <LinkButton text="ORDER PICKUP" link="#menu" />
                </div>

                <div className={style.sectionDelivery}>
                    <div className={style.delivery}>
                        <h4 className={style.subtitle2}>DELIVERY EXPANDED</h4>
                        <p className={style.deliveryText}>To place an order for delivery, please choose from</p>
                        <p className={style.deliveryText}>one of our partners below:</p>
                    </div>


                    <div className={style.linkDelivery}>
                        <a href="https://postmates.com/store/red-bamboo/AENNGqX0QuyQWIYlZ-oxIg?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjIxMSUyMEF2ZW51ZSUyMEElMjIlMkMlMjJyZWZlcmVuY2UlMjIlM0ElMjIxMzFkNWMxMy04NmIzLTQ4N2QtMjZiMy03OTQ3YzhiNjEyOGElMjIlMkMlMjJyZWZlcmVuY2VUeXBlJTIyJTNBJTIydWJlcl9wbGFjZXMlMjIlMkMlMjJsYXRpdHVkZSUyMiUzQTQwLjczJTJDJTIybG9uZ2l0dWRlJTIyJTNBLTczLjk4MDY5NjclN0Q%3D&ps=1"
                            target='_blank' className={style.linkItem}>
                            Postmates</a>
                        <a href="https://www.grubhub.com/restaurant/red-bamboo-140-west-4th-street-new-york/2185145" target='_blank' className={style.linkItem}>PGrubHub</a>
                        <a href="https://www.seamless.com/menu/red-bamboo-140-west-4th-street-new-york/2185145" target='_blank' className={style.linkItem}>Postmates</a>
                        &
                        <a href="https://www.ubereats.com/store/red-bamboo/AENNGqX0QuyQWIYlZ-oxIg" target='_blank' className={style.linkItem}>UberEats</a>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default AboutOrder;