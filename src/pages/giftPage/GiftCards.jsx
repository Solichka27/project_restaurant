import style from './GiftCards.module.css';
import ConnectWithAPI from './connectAPI/ConnectWithAPI';


const GiftCards = () => {
    return (
        <div className={style.mainContainer}>
            <ConnectWithAPI />
        </div>
    )
}

export default GiftCards;