import style from './ModalView.module.css';

const ModalView = ({ item, onClose }) => {
    if (!item) return null;

    return (
        <div className={style.wrapper} onClick={onClose}>
            <div className={style.modalContent}>
                <button onClick={onClose} className={style.closeButton}>×</button>
                <img src={item.img} alt={item.name} className={style.modalImage} />
                <div className={style.blockText}>
                    <h3 className={style.name}>{item.name}</h3>
                    <p className={style.ingredients}>{item.ingredients}</p>
                    <p className={style.price}>{item.price}</p>
                </div>

            </div>
        </div>
    );
};

export default ModalView;