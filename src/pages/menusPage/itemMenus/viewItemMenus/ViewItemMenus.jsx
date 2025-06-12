import style from './ViewItemMenus.module.css';

const ViewItemMenus = ({ title, items, id, onItemClick }) => (
    <div className={style.mainContent}>

        <h2 id={id} className={style.sectionTitle}>{title}</h2>

        <div className={style.wrapper}>
            {items.map((item, index) => (
                <div key={index} className={style.itemMenus} onClick={() => onItemClick(item)}>
                    <div className={style.imageContainer}>
                        <img src={item.img} alt={`item-${index}`} />
                        <div className={style.nameDish}>{item.name}</div>
                        <div className={style.ingredient}>{item.ingredients}</div>
                        <div className={style.price}>{item.price}</div>
                    </div>
                </div>
            ))}
        </div>
        
    </div>
);
export default ViewItemMenus;