import { useState, useEffect } from 'react';
import Fuse from 'fuse.js';
import style from './SearchItemMenus.module.css';

import { Starters, Sandwiches, Mains, Desserts } from '../itemMenus/ItemMenusConst';
import ViewItemMenus from "../itemMenus/viewItemMenus/ViewItemMenus";
import IconSearch from "../../assets/image/menus/iconSearch.svg";

const allItems = [
    ...Starters.map(item => ({ ...item, category: 'Starters', id: "starters" })),
    ...Sandwiches.map(item => ({ ...item, category: 'Sandwiches', id: "sandwiches" })),
    ...Mains.map(item => ({ ...item, category: 'Mains', id: "mains" })),
    ...Desserts.map(item => ({ ...item, category: 'Desserts', id: "desserts" })),
];

const fuse = new Fuse(allItems, {
    keys: ['name', 'ingredients'],
    threshold: 0.3,
});

const SearchItemMenus = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredItems, setFilteredItems] = useState(allItems);

    useEffect(() => {
        if (searchTerm.length < 3) {
            setFilteredItems(allItems);
        } else {
            const results = fuse.search(searchTerm).map(result => result.item);
            setFilteredItems(results);
        }
    }, [searchTerm]);

    const groupedItems = filteredItems.reduce((acc, item) => {
        acc[item.category] = acc[item.category] ? [...acc[item.category], item] : [item];
        return acc;
    }, {});

    return (
        <div className={style.mainContainer}>
            <div className={style.inputWrapper}>
                <img src={IconSearch} alt="iconSearch" className={style.iconSearch} />
                <input
                    type="text"
                    placeholder='Search'
                    className={style.inputBox}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {searchTerm.length >= 3 && filteredItems.length === 0 ? (
                <p className={style.notFound}>Нічого не знайдено</p>
            ) : (
                Object.entries(groupedItems).map(([category, items]) => (
                    <ViewItemMenus key={category} title={category} items={items} />
                ))
            )}


        </div>
    );
};

export default SearchItemMenus;
