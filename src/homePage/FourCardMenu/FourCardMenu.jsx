import React from 'react';
import style from './FourCardMenu.module.css';
import { Link } from "react-router-dom";
import Button from './button/Button';
import FourCardMenuConst from './FourCardMenuConst';

const FourCardMenu = () => {

    return (
        <div className={style.wrapper}>
            <div className={style.orderCart}>
                {FourCardMenuConst.map((item, index) => (
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
            <Button text="ORDER NOW" link="https://www.tripadvisor.com/Restaurant_Review-g60763-d476855-Reviews-Red_Bamboo-New_York_City_New_York.html" />
        </div>
    );
}

export default FourCardMenu;