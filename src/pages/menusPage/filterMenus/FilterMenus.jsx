import { useState } from 'react';
import style from './FilterMenus.module.css';
import SearchMenus from '../searchMenus/SearchMenus';

const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};

const FilterMenus = () => {
    const [selectedCategories, setSelectedCategories] = useState([]);

    const handleChange = (e, id) => {
        if (e.target.checked) {
            setSelectedCategories(prev => [...prev, id]);
            scrollToSection(id);
        } else {
            setSelectedCategories(prev => prev.filter(cat => cat !== id));
        }
    };

    return (
        <div className={style.mainContent}>
            <div className={style.contentBody}>
                <div className={style.wrapperFilter}>
                    {/* чекбокси */}
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
                    <SearchMenus selectedCategories={selectedCategories} />
                </div>
            </div>
        </div>

    );
};

export default FilterMenus;
