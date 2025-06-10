import style from './Menus.module.css';
import FilterMenus from './filterMenus/FilterMenus';

const Menus = () => {
    return (
        <div className={style.mainContainer}>

            <h1 className={style.menus}> Menus </h1>
            <div className={style.wrapper}>
                <div className={style.wrapperFilter}>
                    <FilterMenus />
                </div>

                <div className={style.itemMenus}>
                </div>

            </div>
        </div>
    )
}

export default Menus;