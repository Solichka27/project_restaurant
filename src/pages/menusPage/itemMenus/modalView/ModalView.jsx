import style from './ModalView.module.css';
import { useState, useEffect } from 'react';

const ModalView = ({ item, onClose, onAddToBasket }) => {
    const [counter, setCounter] = useState(() => item.quantity || 1);
    const [priceDish, setPrice] = useState(() => item.price * (item.quantity || 1));

    useEffect(() => {
        setPrice(item.price * counter);
    }, [counter, item.price]);

    const increment = (e) => {
        setCounter(prev => prev + 1);
    }

    const decrement = (e) => {
        if (counter > 1) {
            setCounter(prev => prev - 1);
        }
    }
    const handleAddToBasket = () => {
        const orderItem = {
            name: item.name,
            quantity: counter,
            price: item.price,
            img: item.img,
        };
        onAddToBasket(orderItem);
        onClose();
    };


    return (item &&
        <div className={style.wrapper} onClick={onClose}>
            <div className={style.modalContent} onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose} className={style.closeButton}>×</button>
                <img src={item.img} alt={item.name} className={style.modalImage} />
                <div className={style.blockText}>
                    <h3 className={style.name}>{item.name}</h3>
                    <p className={style.ingredients}>{item.ingredients}</p>
                    <p className={style.price}>{item.price}$</p>

                    <div className={style.blockCounter}>
                        <button className={style.decrement} onClick={decrement}>-</button>
                        <p className={style.counter}>{counter}</p>
                        <button className={style.increment} onClick={increment} >+</button>
                    </div>

                    <div className={style.addOrder}>
                        <button className={style.order} onClick={handleAddToBasket}>Add to my order {priceDish}$</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ModalView;