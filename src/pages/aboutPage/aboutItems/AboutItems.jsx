import style from './AboutItems.module.css';
import FeedbackItem from '../../homePage/mainContent/feedback/feedbackItem/FeedbackItem';
import AboutItemsConst from './AboutItemsConst';

const AboutItems = () => {
    return (
        <div className={style.mainContainer}>
            {AboutItemsConst.map((item, i) => (
                <div key={i} className={style.aboutItem}>
                    <FeedbackItem
                        icon={item.icon}
                        iconHover={item.iconHover}
                        url={item.url}
                        title={item.title}
                        text={item.text}
                    />
                </div>
            ))}

        </div>
    )
}
export default AboutItems;