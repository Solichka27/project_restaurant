import { useState, useRef, useEffect } from 'react';
import style from './FilterMenus.module.css';
import SearchMenus from '../searchMenus/SearchMenus';
import { FaShoppingCart } from 'react-icons/fa';


import Basket from "../basket/Basket";

const FilterMenus = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [basketItems, setBasketItems] = useState(() => {
        const saved = localStorage.getItem('basketItems');
        return saved ? JSON.parse(saved) : [];
    });
    
    useEffect(() => {
        localStorage.setItem('basketItems', JSON.stringify(basketItems));
    }, [basketItems]);

    const sectionRefs = {
        starters: useRef(null),
        sandwiches: useRef(null),
        mains: useRef(null),
        desserts: useRef(null),
    };

    const handleChange = (e, id) => {
        if (e.target.checked) {
            setSelectedCategories(prev => [...prev, id]);
            sectionRefs[id]?.current?.scrollIntoView({ behavior: 'smooth' });
        } else {
            setSelectedCategories(prev => prev.filter(cat => cat !== id));
        }
    };

    const handleAddToBasket = (newItem) => {
        setBasketItems(prevItems => {
            const existingItem = prevItems.find(item => item.name === newItem.name);
            if (existingItem) {
                return prevItems.map(item =>
                    item.name === newItem.name
                        ? { ...item, quantity: item.quantity + newItem.quantity }
                        : item
                );
            } else {
                return [...prevItems, newItem];
            }
        });
    };

    return (
        <div className={style.mainContent}>

            <div className={style.wrapperFilter}>
                <label className={style.nameFilter}>
                    <input type="checkbox" onChange={(e) => handleChange(e, "starters")} />
                    <span>Starters</span>
                </label>
                <label className={style.nameFilter}>
                    <input type="checkbox" onChange={(e) => handleChange(e, "sandwiches")} />
                    <span>Sandwiches</span>
                </label>
                <label className={style.nameFilter}>
                    <input type="checkbox" onChange={(e) => handleChange(e, "mains")} />
                    <span>Mains</span>
                </label>
                <label className={style.nameFilter}>
                    <input type="checkbox" onChange={(e) => handleChange(e, "desserts")} />
                    <span>Desserts</span>
                </label>
            </div>

            <div className={style.wrapperMenus}>
                <SearchMenus
                    selectedCategories={selectedCategories}
                    sectionRefs={sectionRefs}
                    onAddToBasket={handleAddToBasket}
                />
                <button className={style.cartButton} onClick={() => setIsCartOpen(true)}>
                    <FaShoppingCart size={24} />
                </button>
            </div>
            {isCartOpen && (
                <div className={style.cartModal}>
                    <button className={style.closeButton} onClick={() => setIsCartOpen(false)}>×</button>
                    <Basket items={basketItems}  setItems={setBasketItems} />
                </div>
            )}
        </div>
    );
};

export default FilterMenus;
