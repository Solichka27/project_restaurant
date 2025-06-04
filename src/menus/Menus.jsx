import { useState } from 'react';
import style from './Menus.module.css';
import FilterMenus from './filterMenus/FilterMenus';
import SearchItemMenus from './searchItemMenus/SearchItemMenus';

const Menus = () => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className={style.mainContainer}>
            <h1 className={style.menus}>Menus</h1>

            <div className={style.wrapper}>
                {searchTerm.length < 3 && (
                    <div className={style.wrapperFilter}>
                        <FilterMenus searchTerm={searchTerm} />
                    </div>
                )}
                <div className={style.search}>
                    <SearchItemMenus searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                </div>
            </div>

        </div>
    );
};

export default Menus;
