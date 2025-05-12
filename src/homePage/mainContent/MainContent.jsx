import style from './MainContent.module.css';
import AboutOrder from './aboutOrder/AboutOrder';
import Feedback from './feedback/Feedback';

const MainContent = () => {
    return (
        <div className={style.mainContent}>
           <AboutOrder  />
           <Feedback />
           
        </div>

    )
}

export default MainContent;