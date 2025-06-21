import style from './Basket.module.css';
import { useState } from 'react';

const Basket = ({ items = [] }) => {
    const [showPromo, setShowPromo] = useState(false);
    const [showNotes, setShowNotes] = useState(false);
    return (
        <div className={style.basket}>
            <h2 className={style.title}>My Order</h2>
            {items.length === 0 ? (
                <p>Empty</p>
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

                        </div>
                    ))}

                    <div className={style.buyItem}>

                        <div className={style.promoCode}>
                            <h3 className={style.subtitle} onClick={() => setShowPromo(!showPromo)} style={{ cursor: 'pointer' }} >
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
                            <h3 className={style.subtitle} onClick={() => setShowNotes(!showNotes)} style={{ cursor: 'pointer' }} >
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
                            <h6 className={style.priceDish}>Subtotal</h6>
                            <h6 className={style.priceDish}>Tax</h6>
                        </div>
                        <button>Continue to Checkout</button>
                    </div>
                </div>)}
        </div >
    );
};

export default Basket;
