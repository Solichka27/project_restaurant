import style from './MainContent.module.css';
import AboutOrder from './aboutOrder/AboutOrder';

const MainContent = () => {
    return (
        <div className={style.mainContent}>
           <AboutOrder  />
        </div>

    )
}

export default MainContent;