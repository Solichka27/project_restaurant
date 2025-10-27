import style from './Orders.module.css';
import { useDishStore } from '../../store/useDishStore';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ModalView from '../menusPage/itemMenus/modalView/ModalView';

const Orders = () => {
    const { dishes, clearBasket, setEditingDish, openModal, isModalOpen, editingDish } = useDishStore();
    const navigate = useNavigate();
    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleConfirmOrder = () => {
        clearBasket();
        setIsConfirmed(true);
        setTimeout(() => {
            navigate('/menus');
        }, 2000);
    };

    const handleEdit = (dish) => {
        setEditingDish(dish);
        openModal(dish);
    };

    const subtotal = dishes.reduce((acc, dish) => acc + dish.price * dish.quantity, 0);
    const tax = subtotal * 0.1;
    const total = subtotal + tax;

    return (
        <div className={style.container}>
            <h1 className={style.title}>Orders</h1>

            {dishes.length === 0 ? (
                <div className={style.emptyOrder}>
                    <p className={style.emptyMessage}>No items in your order</p>
                </div>
            ) : (
                <div className={style.orderContent}>
                    <div className={style.orderItems}>
                        {dishes.map((dish, index) => (
                            <div
                                key={dish.id || index}
                                className={style.orderItem}
                                onClick={() => handleEdit(dish)}
                            >
                                <img src={dish.img} alt={dish.name} className={style.itemImage} />
                                <div className={style.itemInfo}>
                                    <h3 className={style.itemName}>{dish.name}</h3>
                                    <p className={style.itemQuantity}>Quantity: {dish.quantity}</p>
                                    <p className={style.itemPrice}>${(dish.price * dish.quantity).toFixed(2)}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={style.orderSummary}>
                        <h2 className={style.summaryTitle}>Order Summary</h2>
                        <div className={style.summaryRow}>
                            <span className={style.summaryLabel}>Subtotal:</span>
                            <span className={style.summaryValue}>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className={style.summaryRow}>
                            <span className={style.summaryLabel}>Tax (10%):</span>
                            <span className={style.summaryValue}>${tax.toFixed(2)}</span>
                        </div>
                        <div className={`${style.summaryRow} ${style.totalRow}`}>
                            <span className={style.summaryLabel}>Total:</span>
                            <span className={style.summaryValue}>${total.toFixed(2)}</span>
                        </div>
                        <button
                            className={style.confirmButton}
                            onClick={handleConfirmOrder}
                            disabled={isConfirmed}
                        >
                            {isConfirmed ? 'Order Confirmed!' : 'Confirm Order'}
                        </button>
                    </div>
                </div>
            )}

            {editingDish && isModalOpen && (
                <ModalView
                    item={editingDish}
                    isEditing={true}
                />
            )}
        </div>
    )
}
export default Orders;