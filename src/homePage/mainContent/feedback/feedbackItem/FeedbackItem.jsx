import { useState } from 'react';
import style from './FeedbackItem.module.css';
import QuotationMarks from '../../../../image/homePage/mainContent/feedback/quotationMarks.png';


const FeedbackItem = ({ icon, iconHover, url, title, text }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className={style.mainContent}>

            <div className={style.circle}>
                <div className={style.icon}>
                    <a href={url} target="_blank">
                        <img src={isHovered ? iconHover : icon}
                            alt="iconFeedback" className={style.iconItem}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)} />
                    </a>
                </div>
            </div>


            <div className={style.title}>
                "{title}"
            </div>

            <div className={style.text}>
                {text}
                <div className={style.quote}>
                    <img src={QuotationMarks} alt="quotationMarks" className={style.quotationMark} />
                </div>
            </div>
        </div>
    )
}

export default FeedbackItem;