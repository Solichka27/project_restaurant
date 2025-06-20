import style from './Basket.module.css';

const Basket = ({ items = [] }) => {
    return (
        <div className={style.basket}>
            <p>My Order</p>
            {items.length === 0 ? (
                <p>Empty</p>
            ) : (
                items.map((item, index) => (
                    <div key={index} className={style.item}>
                        <img src={item.img} alt={item.name} className={style.itemImage} />
                        <div>
                            <p>{item.name} × {item.quantity}</p>
                            <p>{item.price * item.quantity}$</p>
                        </div>
                    </div>
                ))
            )}

        </div>
    );
};

export default Basket;
