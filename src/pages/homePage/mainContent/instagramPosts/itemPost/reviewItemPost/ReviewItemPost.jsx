import style from './ReviewItemPost.module.css';
import LogoInstagram from '../../../../../../assets/image/homePage/header/logoInstagram.png';

const ReviewItemPost = ({ item, onClose, onPrev, onNext }) => {
    if (!item) return null;

    return (
        <div className={style.wrapper} onClick={onClose}>
            <div className={style.modalContent} onClick={(e) => e.stopPropagation()}>
                <button className={style.closeButton} onClick={onClose}>×</button>

                <div className={style.blockImage}>
                    <img src={item.img} alt="Selected" className={style.image} />
                </div>

                <div className={style.blockText}>

                    <div className={style.blockInstagram}>
                        <a href={item.url} target="_blank" rel="noopener noreferrer" className={style.icon}>
                            <img src={LogoInstagram} alt="LogoInstagram" />
                        </a>
                        <h4 className={style.nameRestaurant}>redbamboonyc</h4>
                    </div>

                    <div className={style.separator}></div>

                    <div className={style.navButtons}>
                        <button className={style.arrowButton} onClick={onPrev}>‹</button>
                        <button className={style.arrowButton} onClick={onNext}>›</button>
                    </div>

                    <div className={style.text}>
                        <p className={style.modalText}>{item.text}</p>
                        <p className={style.hashtags}>{item.hashtags}</p>
                    </div>

                    <div className={style.blockDate}>
                        <div className={style.separator}></div>
                        <p className={style.date}>{item.date}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewItemPost;