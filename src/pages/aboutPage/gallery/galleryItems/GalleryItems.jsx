import { useState } from 'react';
import Modal from 'react-modal';
import GalleryItemsCont from "../GalleryItemsConst";
import style from "./GalleryItems.module.css";
import ReviewItemPost from "../../../homePage/mainContent/instagramPosts/itemPost/reviewItemPost/ReviewItemPost"
const GalleryItems = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    return (
        <div className={style.mainContainer}>
            {GalleryItemsCont.map((item, index) => (
                <div key={index} className={style.aboutItem} onClick={() => setSelectedItem({ item, index })}>
                    <img src={item.img} alt={item.titile} className={style.imageGallery} />
                    <div className={style.title}>
                        {item.title}
                    </div>

                </div>
            ))}

            <Modal
                isOpen={!!selectedItem}
                onRequestClose={() => setSelectedItem(null)}
                className={style.modalContent}
                overlayClassName={style.modalOverlay}
                contentLabel="ReviewGallery"
            >
                {selectedItem && (
                    <ReviewItemPost
                        item={selectedItem.item}
                        onClose={() => setSelectedItem(null)}
                        onPrev={() => {
                            const prevIndex = selectedItem.index - 1;
                            if (prevIndex >= 0) {
                                setSelectedItem({ item: GalleryItemsCont[prevIndex], index: prevIndex });
                            }
                        }}
                        onNext={() => {
                            const nextIndex = selectedItem.index + 1;
                            if (nextIndex < GalleryItemsCont.length) {
                                setSelectedItem({ item: GalleryItemsCont[nextIndex], index: nextIndex });
                            }
                        }}
                    />
                )}
            </Modal>

        </div>
    )
}

export default GalleryItems;