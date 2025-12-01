import style from './Contact.module.css';
import phone from '../../assets/image/homePage/aboutOrder/phone.png';
import maps from '../../assets/image/homePage/aboutOrder/maps.png'
import email from '../../assets/image/homePage/aboutOrder/email.png';

const Contact = () => {
    return (
        <div className={style.container}>
            <div className={style.backgroundColor}>
                <div className={style.daysContainer}>
                    <h1 className={style.titleWorks}> NEW HOURS</h1>

                    <div className={style.workSchedule}>
                        <p className={style.subtitle}>MONDAY - TUESDAY</p>
                        <p className={style.subtitle}>12:00PM to 9:00PM</p>
                    </div>

                    <div className={style.workSchedule}>
                        <p className={style.subtitle}>WEDNESDAY - SUNDAY</p>
                        <p className={style.subtitle}>12:00PM to 10:00PM</p>
                    </div>
                </div>

                <div className={style.iconContainer}>
                    <img src={phone} alt="iconPhone" className={style.iconImage} />
                    <a href="tel:+442083609125" className={style.titleToIcon}>
                        Call now
                    </a>
                    <p className={style.subtitle}>212.260.7049</p>
                    <p className={style.subtitle}>212.260.1212​</p>
                </div>

                <div className={style.iconContainer}>
                    <img src={maps} alt="iconMaps" className={style.iconImage} />
                    <a href="https://www.google.com/maps/place/140+W+4th+St,+New+York,+NY+10012,+%D0%A1%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B5%D0%BD%D1%96+%D0%A8%D1%82%D0%B0%D1%82%D0%B8+%D0%90%D0%BC%D0%B5%D1%80%D0%B8%D0%BA%D0%B8/@40.7313199,-74.0003423,628m/data=!3m2!1e3!4b1!4m6!3m5!1s0x89c2599163b5454f:0xbe5c9480876b27bc!8m2!3d40.7313199!4d-74.0003423!16s%2Fg%2F11b8v7k57g?entry=ttu&g_ep=EgoyMDI1MTAyOS4yIKXMDSoASAFQAw%3D%3D" target='blank' className={style.titleToIcon}>Directions Here</a>
                    <p className={style.subtitle}>140 W4 ST |  NYC 10012</p>
                </div>

                <div className={style.iconContainer}>
                    <img src={email} alt="iconEmail" className={style.iconImage} />
                    <a href="mailto:redbamboo@email.com" target="_blank" rel="noopener noreferrer" className={style.titleToIcon}>
                        Message Here
                    </a>

                    <p className={style.subtitle}>REDBAMBOONYC@GMAIL.COM</p>
                </div>
            </div>
        </div>
    )
}
export default Contact;