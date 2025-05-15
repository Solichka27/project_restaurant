import { useRef, useState, useEffect } from 'react';
import style from './ItemPost.module.css';
import ItemPostConst from './ItemPostConst';
import ReviewItemPost from './reviewItemPost/ReviewItemPost';

const ItemPost = () => {
    const scrollRef = useRef(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(null);

    const scroll = (direction) => {
        if (!scrollRef.current) return;
        const scrollAmount = scrollRef.current.offsetWidth / 3.1;

        scrollRef.current.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth',
        });
    };

    const handleScroll = () => {
        const scrollLeft = scrollRef.current.scrollLeft;
        setShowLeftArrow(scrollLeft > 5);
    };

    const handlePrev = () => {
        if (selectedIndex > 0) {
            setSelectedIndex((prev) => prev - 1);
        }
    };

    const handleNext = () => {
        if (selectedIndex < ItemPostConst.length - 1) {
            setSelectedIndex((prev) => prev + 1);
        }
    };

    useEffect(() => {
        const ref = scrollRef.current;
        if (ref) {
            ref.addEventListener('scroll', handleScroll);
            return () => ref.removeEventListener('scroll', handleScroll);
        }
    }, []);


    return (
        <div className={style.mainContent}>
            {showLeftArrow && (
                <button className={style.navLeft} onClick={() => scroll('left')}>‹</button>
            )}

            <div className={style.scrollContainer} ref={scrollRef}>
                <div className={style.wrapper}>
                    {ItemPostConst.map((item, index) => (
                        <div className={style.imageWrapper} key={index}
                            onClick={() => setSelectedIndex(index)}>
                            <img src={item.img} alt={`InstagramPost${index + 1}`} />
                            <div className={style.overlay}>
                                <span>{item.text}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <button className={style.navRight} onClick={() => scroll('right')}>›</button>

            <ReviewItemPost
                item={ItemPostConst[selectedIndex]}
                onClose={() => setSelectedIndex(null)}
                onPrev={handlePrev}
                onNext={handleNext}
            />
        </div>
    );
};

export default ItemPost;
