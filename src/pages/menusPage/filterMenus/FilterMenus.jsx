import style from './FilterMenus.module.css';

const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

const handleChange = (e, id) => {
    if (e.target.checked) {
        scrollToSection(id);
    }
}

const FilterMenus = () => {
    return (
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
    )
}

export default FilterMenus;
