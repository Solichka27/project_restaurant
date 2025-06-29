import style from './Basket.module.css';
import { useState } from 'react';
import ModalView from '../itemMenus/modalView/ModalView';
import PromoCodeConst from './PromoCodeConst';

import EmptyBasket from "../../../assets/image/menus/emptyBasket.png"

const Basket = ({ items = [], setItems }) => {
    const [showPromoCode, setShowPromoCode] = useState(false);
    const [showNotes, setShowNotes] = useState(false);
    const [editingDish, setEditingDish] = useState(null);
    const [promoInput, setPromoInput] = useState('');
    const [isValidPromoCode, setIsValidPromoCode] = useState();


    const handleEdit = (item) => {
        setEditingDish(item);
    };

    const handleCloseModal = () => {
        setEditingDish(null);
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

    const handleApplyPromo = (input) => {
        const foundPromo = PromoCodeConst.find(
            code => code.promo.toLowerCase() === input.trim().toLowerCase()
        );

        if (foundPromo) {
            setIsValidPromoCode(foundPromo);
        } else {
            setIsValidPromoCode(null);
        }
    };

    const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const discountAmount = isValidPromoCode ? (subtotal * isValidPromoCode.discount) / 100 : 0;
    const totalAfterDiscount = subtotal - discountAmount;

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
                            <h3 className={style.subtitle} onClick={() => setShowPromoCode(!showPromoCode)} style={{ cursor: 'pointer' }}>
                                Promo Code
                            </h3>
                            {showPromoCode && (
                                <>
                                    <input
                                        type="text"
                                        placeholder="Enter Promo Code"
                                        value={promoInput}
                                        onChange={(e) => {
                                            setPromoInput(e.target.value)
                                            setIsValidPromoCode(undefined);
                                        }}
                                    />

                                    <button
                                        onClick={() => handleApplyPromo(promoInput)}
                                        style={{
                                            backgroundColor: promoInput.trim() ? '#9c7e5c' : '#ccc',
                                            cursor: promoInput.trim() ? 'pointer' : 'not-allowed',
                                            transition: '0.3s',
                                        }}
                                        disabled={!promoInput.trim()}
                                    >
                                        Apply
                                    </button>

                                    {isValidPromoCode !== undefined && (
                                        <p style={{ color: isValidPromoCode ? 'green' : 'red', marginTop: '8px' }}>
                                            {isValidPromoCode ? 'Promo code applied!' : 'Invalid promo code'}
                                        </p>
                                    )}
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
                                <p className={style.subtotal}>{subtotal.toFixed(2)}$</p>
                            </div>
                            <div className={style.priceTotal}>
                                <h6 className={style.priceDish}>With discount</h6>
                                <p className={style.subtotal}>{totalAfterDiscount.toFixed(2)}$</p>
                            </div>
                        </div>

                        <button className={style.checkout}>Continue to Checkout</button>
                    </div>
                </div>
            )}

            {editingDish && (
                <ModalView
                    item={editingDish}
                    onClose={handleCloseModal}
                    onAddToBasket={handleSaveChanges}
                />
            )}
        </div>
    );
};

export default Basket;
