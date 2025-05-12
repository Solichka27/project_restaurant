import style from './MainContent.module.css';
import AboutOrder from './aboutOrder/AboutOrder';
import Feedback from './feedback/Feedback';
import ConnectWithUs from './connectWithUs/ConnectWithUs';

const MainContent = () => {
    return (

        <div className={style.mainContent}>
            <AboutOrder />
            <Feedback />
            <ConnectWithUs />
        </div>

    )
}

export default MainContent;