import { useState, useEffect } from 'react';
import style from './SearchMenus.module.css';
import Modal from 'react-modal';

import { Starters, Sandwiches, Mains, Desserts } from '../itemMenus/ItemMenusConst';
import ViewItemMenus from "../itemMenus/viewItemMenus/ViewItemMenus";
import IconSearch from "../../../assets/image/menus/iconSearch.svg";
import ModalView from '../itemMenus/modalView/ModalView';

const allItems = [
    ...Starters.map(item => ({ ...item, category: 'Starters', id: "starters" })),
    ...Sandwiches.map(item => ({ ...item, category: 'Sandwiches', id: "sandwiches" })),
    ...Mains.map(item => ({ ...item, category: 'Mains', id: "mains" })),
    ...Desserts.map(item => ({ ...item, category: 'Desserts', id: "desserts" })),
];


const filterItems = (searchTerm, selectedCategories) => {
    const lowerSearch = searchTerm.toLowerCase();

    return allItems.filter(item => {
        const matchesSearch =
            item.name.toLowerCase().includes(lowerSearch) ||
            item.ingredients.toLowerCase().includes(lowerSearch);

        const matchesCategory =
            selectedCategories.length === 0 || selectedCategories.includes(item.id);

        return matchesSearch && matchesCategory;
    });
};

const SearchMenus = ({  selectedCategories, sectionRefs, onAddToBasket} ) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredItems, setFilteredItems] = useState(allItems);
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        const safeSearch = searchTerm || '';
        const safeCategories = selectedCategories || [];

        if (safeSearch.length < 3 && safeCategories.length === 0) {
            setFilteredItems(allItems);
        } else {
            const results = filterItems(safeSearch, safeCategories);
            setFilteredItems(results);
        }
    }, [searchTerm, selectedCategories]);

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
                    <div key={category} id={items[0].id}>
                        <ViewItemMenus title={category} items={items} onItemClick={(item) => setSelectedItem(item)} />
                    </div>
                ))
            )}

            <Modal
                isOpen={!!selectedItem}
                onRequestClose={() => setSelectedItem(null)}
                className={style.modalContent}
                overlayClassName={style.modalOverlay}
                contentLabel="ReviewItemPost"
            >
                {selectedItem && (
                    <ModalView
                        item={selectedItem}
                        onClose={() => setSelectedItem(null)}
                        onAddToBasket={onAddToBasket} 
                    />
                )}
            </Modal>
        </div>
    );
};

export default SearchMenus;
