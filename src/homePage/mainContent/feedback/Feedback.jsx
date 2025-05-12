import style from './Feedback.module.css';
import FeedbackItem from './feedbackItem/FeedbackItem';
import FeedbackConst from './FeedbackConst';

const Feedback = () => {
    return (
        <div className={style.mainContent}>

            {FeedbackConst.map((item, i) => (
                <div key={i} className={style.feedbackItem}>
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

export default Feedback;