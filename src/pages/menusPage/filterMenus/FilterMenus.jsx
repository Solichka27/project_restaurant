import { useState, useRef } from 'react';
import style from './FilterMenus.module.css';
import SearchMenus from '../searchMenus/SearchMenus';

const FilterMenus = () => {
    const [selectedCategories, setSelectedCategories] = useState([]);
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
                />
            </div>
        </div>
    );
};

export default FilterMenus;
