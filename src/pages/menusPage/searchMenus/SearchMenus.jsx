import { useState, useEffect, useRef } from 'react';
import style from './SearchMenus.module.css';
import Modal from 'react-modal';

import { Starters, Sandwiches, Mains, Desserts } from '../itemMenus/ItemMenusConst';
import ViewItemMenus from "../itemMenus/viewItemMenus/ViewItemMenus";
import IconSearch from "../../../assets/image/menus/iconSearch.svg";
import ModalView from '../itemMenus/modalView/ModalView';
import { useDishStore } from '../../../store/useDishStore';

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

const SearchMenus = ({ selectedCategories, sectionRefs }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredItems, setFilteredItems] = useState(allItems);
    const sectionRefsMap = useRef({});
    const { closeModal, selectedDish, isModalOpen } = useDishStore();

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

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(style.visible);
                    }
                });
            },
            { threshold: 0.2 }
        );

        Object.values(sectionRefsMap.current).forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, [filteredItems]);

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
            <div className={style.containerMenus}>
                {searchTerm.length >= 3 && filteredItems.length === 0 ? (
                    <div className={style.contentContainer}>
                        <p className={style.notFound}>Нічого не знайдено</p>
                    </div>
                ) : (
                    Object.entries(groupedItems).map(([category, items]) => (
                        <div key={category} id={items[0].id}
                            ref={(el) => (sectionRefsMap.current[category] = el)}
                            className={`${style.fadeInSection}`}>
                            <ViewItemMenus title={category} items={items} />
                        </div>
                    ))
                )}
            </div>

            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                className={style.modalContent}
                overlayClassName={style.modalOverlay}
                contentLabel="ReviewItemPost"
            >
                {selectedDish && (
                    <ModalView
                        item={selectedDish}
                    />
                )}
            </Modal>
        </div>
    );
};

export default SearchMenus;