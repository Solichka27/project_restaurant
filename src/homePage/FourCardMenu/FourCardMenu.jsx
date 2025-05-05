import React from 'react';
import style from './FourCardMenu.module.css';
import { Link, BrowserRouter } from "react-router-dom";
import OrderCard1 from './../../image/homePage/fourCardMenu/orderCard1.png';
import OrderCard2 from './../../image/homePage/fourCardMenu/orderCard2.png';
import OrderCard3 from './../../image/homePage/fourCardMenu/orderCard3.png';
import OrderCard4 from './../../image/homePage/fourCardMenu/orderCard4.png';

const FourCardMenu = () => {
    const items = [
        { img: OrderCard1, text: "startes", link: "/product/1" },
        { img: OrderCard2, text: "sandwiches", link: "/product/2" },
        { img: OrderCard3, text: "mains", link: "/product/3" },
        { img: OrderCard4, text: "desserts", link: "/product/4" },
    ];
    return (
        <div className={style.wrapper}>
            <div className={style.orderCart}>
                {items.map((item, index) => (
                    <Link to={item.link} key={index} className={style.item}>
                        <div className={style.imageWrapper}>
                            <img src={item.img} alt={`OrderCart${index + 1}`} />
                            <div className={style.overlay}>
                                <span>{item.text}</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <button className={style.button}>text</button>
        </div>
    );
}

export default FourCardMenu;