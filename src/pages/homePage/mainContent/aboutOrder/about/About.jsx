import style from './About.module.css';
import logoEmail from '../../../../../assets/image/homePage/aboutOrder/email.png';
import logoMaps from '../../../../../assets/image/homePage/aboutOrder/maps.png';
import logoPhone from '../../../../../assets/image/homePage/aboutOrder/phone.png';
import LinkButton from '../../../../../components/button/LinkButton';

const About = () => {
    return (
        <div className={style.mainContent}>

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
                <LinkButton text="ABOUT US" link="/about" isBlank={false} />
            </div>
        </div>


    )
}

export default About;