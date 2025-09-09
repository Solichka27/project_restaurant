import style from './Orders.module.css';

const Orders = () => {
    return (
        <div className={style.container}>
            <h1 className={style.title}> Orders </h1>


            <div className={style.cardOrders}>

                <h1 className={style.titleCardOrders}> Ordering... </h1>
            </div>
        </div>
    )
}
export default Orders;