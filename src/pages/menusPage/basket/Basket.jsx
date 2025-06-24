import style from './Basket.module.css';
import { useState } from 'react';
import ModalView from '../itemMenus/modalView/ModalView';

import EmptyBasket from "../../../assets/image/menus/emptyBasket.png"

const Basket = ({ items = [], setItems }) => {
    const [showPromo, setShowPromo] = useState(false);
    const [showNotes, setShowNotes] = useState(false);
    const [editingItem, setEditingItem] = useState(null);

    const handleEdit = (item) => {
        setEditingItem(item);
    };

    const handleCloseModal = () => {
        setEditingItem(null);
    };

    const handleSaveChanges = (updatedItem) => {
        setItems(prevItems =>
            prevItems.map(item =>
                item.name === updatedItem.name ? updatedItem : item
            )
        );
        handleCloseModal();
    };

    const handleRemove = (indexToRemove) => {
        const updatedItems = items.filter((_, index) => index !== indexToRemove);
        setItems(updatedItems);
    };


    const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className={style.basket}>
            <h2 className={style.title}>My Order</h2>
            {items.length === 0 ? (
                <div className={style.emptyBasket}>
                    <img src={EmptyBasket} alt="Empty Basket" className={style.iconEmptyBasket} />
                    <p className={style.empty}> Your basket is empty</p>
                </div>

            ) : (
                <div>
                    {items.map((item, index) => (
                        <div key={index} className={style.item}>
                            <div className={style.dishItem}>
                                <img src={item.img} alt={item.name} className={style.itemImage} />
                                <div className={style.itemInfo}>
                                    <p className={style.name}>{item.name} × {item.quantity}</p>
                                    <p className={style.price}>{item.price * item.quantity}$</p>
                                </div>
                            </div>
                            <div className={style.changeDish}>
                                <button className={style.edit} onClick={() => handleEdit(item)}>Edit</button>
                                <button className={style.remove} onClick={() => handleRemove(index)}>Remove</button>
                            </div>

                        </div>
                    ))}

                    <div className={style.buyItem}>
                        <div className={style.promoCode}>
                            <h3 className={style.subtitle} onClick={() => setShowPromo(!showPromo)} style={{ cursor: 'pointer' }}>
                                Promo Code
                            </h3>
                            {showPromo && (
                                <>
                                    <input type="text" placeholder='Enter Promo Code' />
                                    <button>Apply</button>
                                </>
                            )}
                        </div>

                        <div className={style.orderNotes}>
                            <h3 className={style.subtitle} onClick={() => setShowNotes(!showNotes)} style={{ cursor: 'pointer' }}>
                                Add Order Notes
                            </h3>
                            {showNotes && (
                                <textarea
                                    name="PleaseCall"
                                    placeholder='e.g. Please call upon arrival'
                                ></textarea>
                            )}
                        </div>

                        <div className={style.priceItem}>
                            <div className={style.priceTotal}>
                                <h6 className={style.priceDish}>Subtotal</h6>
                                <p className={style.subotal}>{subtotal.toFixed(2)}$</p>
                            </div>

                            <h6 className={style.priceDish}>Tax</h6>
                        </div>

                        <button className={style.checkout}>Continue to Checkout</button>
                    </div>
                </div>
            )}

            {editingItem && (
                <ModalView
                    item={editingItem}
                    onClose={handleCloseModal}
                    onAddToBasket={handleSaveChanges}
                />
            )}
        </div>
    );
};

export default Basket;
