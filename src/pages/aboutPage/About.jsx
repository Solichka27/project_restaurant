import style from './About.module.css';
import logo from '../../assets/image/homePage/header/logo.png';
import AboutItems from './aboutItems/AboutItems';

import Gallery from './gallery/Gallery';

const About = () => {
    return (
        <div className={style.mainContainer}>
            <div className={style.container}>
                <div className={style.backgroundColor}>
                    <div className={style.mainPhoto}> </div>
                    <img src={logo} alt="mainPhoto" className={style.logo} />
                </div>
            </div >

            <AboutItems />

            <div className={style.foodcontainer}>
                <div className={style.foodPhoto}> </div>
            </div>

            <Gallery/>
        </div>
    )
}
export default About;