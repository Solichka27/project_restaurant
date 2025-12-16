import style from './GalleryItems.module.css';
import GalleryItemConst from './GalleryItemsConst';

const GalleryItems = () => {
    return (
        <div className={style.wrapper}>

            {GalleryItemConst.map((item, index) => (
                <div key={index} className={style.slideItem}>
                    <div className={style.imageContainer}>
                        <img className={style.imageItems} src={item.img} alt={`item-${index}`} />
                        <div className={style.overlay}>{item.title}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default GalleryItems;