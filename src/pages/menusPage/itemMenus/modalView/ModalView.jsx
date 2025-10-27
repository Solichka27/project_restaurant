import style from './ModalView.module.css';
import { useState, useEffect } from 'react';
import { useDishStore } from '../../../../store/useDishStore';

const ModalView = ({ item, isEditing = false }) => {
    const { closeModal, onAddToBasket, updateDishInBasket, editingDish } = useDishStore();
    const [counter, setCounter] = useState(() => item.quantity || 1);
    const [priceDish, setPrice] = useState(() => item.price * (item.quantity || 1));

    useEffect(() => {
        setPrice(item.price * counter);
    }, [counter, item.price]);

    // Оновлення лічильника при зміні редагуємої страви
    useEffect(() => {
        if (editingDish) {
            setCounter(editingDish.quantity);
        }
    }, [editingDish]);

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

        if (isEditing) {
            updateDishInBasket(orderItem);
        } else {
            onAddToBasket(orderItem);
        }
        closeModal();
    };


    return (item &&
        <div className={style.wrapper} onClick={closeModal}>
            <div className={style.modalContent} onClick={(e) => e.stopPropagation()}>
                <button onClick={closeModal} className={style.closeButton}>×</button>
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
                        <button className={style.order} onClick={handleAddToBasket}>
                            {isEditing ? 'Update order' : 'Add to my order'} {priceDish}$
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ModalView;