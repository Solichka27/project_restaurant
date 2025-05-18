import { useState } from 'react';
import Slider from "react-slick";
import style from './ItemPost.module.css';
import ItemPostConst from './ItemPostConst';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomPrevArrow = ({ onClick, isVisible }) => {
    if (!isVisible) return null;
    return (
        <div className={`${style.arrow} ${style.left}`} onClick={onClick}>
            ‹
        </div>
    );
};

const CustomNextArrow = ({ onClick }) => (
    <div className={`${style.arrow} ${style.right}`} onClick={onClick}>
        ›
    </div>
);

const ItemPost = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3.2,
        slidesToScroll: 1,
        arrows: true,
        beforeChange: (oldIndex, newIndex) => {
            setCurrentSlide(newIndex);
        },
        prevArrow: <CustomPrevArrow isVisible={currentSlide > 0} />,
        nextArrow: <CustomNextArrow />,
    };

    return (
        <div className={style.sliderWrapper}>
            <Slider {...settings}>
                {ItemPostConst.map((item, index) => (
                    <div key={index} className={style.slideItem}>
                        <div className={style.imageContainer}>
                            <img src={item.img} alt={`item-${index}`} />
                            <div className={style.overlay}>{item.text}</div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ItemPost;
