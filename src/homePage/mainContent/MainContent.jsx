import style from './MainContent.module.css';
import AboutOrder from './aboutOrder/AboutOrder';
import FeedBack from './feedback/Feedback';

const MainContent = () => {
    return (
        <div className={style.mainContent}>
           <AboutOrder  />
           <FeedBack />
        </div>

    )
}

export default MainContent;