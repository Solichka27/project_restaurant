import { useState } from 'react';
import ReviewItemPost from "../../../homePage/mainContent/instagramPosts/itemPost/reviewItemPost/ReviewItemPost"
import GalleryItemsConst from "../../gallery/GalleryItemsConst";
import style from "./GalleryGrid.module.css";
import PopupModal from '../../../../components/popupModal/PopupModal';

const GalleryGrid = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    return (
        <div className={style.mainContainer}>
            {GalleryItemsConst.map((item, index) => (
                <div key={index} className={style.aboutItem} onClick={() => setSelectedItem({ item, index })} style={{
                    gridColumn: `span ${item.span}`,
                }} >
                    <img src={item.img} alt={item.title} className={style.imageGallery} />
                    <div className={style.title}>
                        {/* {item.title} */}
                    </div>

                </div>
            ))}

            <PopupModal
                listConst={GalleryItemsConst}
                selectedItem={selectedItem}
                setSelectedItem={setSelectedItem}
                RenderComponent={ReviewItemPost}
            />
        </div>

    )
}
export default GalleryGrid;