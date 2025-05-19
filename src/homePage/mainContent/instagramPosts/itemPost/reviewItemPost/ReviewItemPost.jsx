import style from './ReviewItemPost.module.css';
import logoInstagram from '../../../../../image/homePage/header/logoInstagram.png'

const ReviewItemPost = ({ item, onClose }) => {
    if (!item) return null;

    return (
        <div className={style.wrapper}>
            <div className={style.mainContent}>
                <div className={style.blockImage}>
                    <img src={item.img} alt="item" />
                </div>
                
                <div className={style.blockText}>
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className={style.logoInstagram}>
                        <img src={logoInstagram} alt="LogoInstagram" />
                    </a>
                    <p className={style.text}>{item.text}</p>
                    <p className={style.hashtags}>{item.hashtags}</p>
                    <p className={style.data}>{item.data}</p>
                    <button onClick={onClose} className={style.closeButton}>✖</button>
                </div>
                
            </div>

        </div>
    );
};

export default ReviewItemPost;
