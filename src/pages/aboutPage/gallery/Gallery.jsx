import style from './Gallery.module.css';
import GalleryItems from "./galleryItems/GalleryItems";
import LinkButton from "./../../../components/button/LinkButton"

const Gallery = () => {

    return (
        <div className={style.wrapper}>
            <div className={style.titleGallery}>
                <h2 className={style.titleFood}>VEGAN COMFORT FOOD</h2>
                <h2 className={style.titleAddress}>140 WEST 4TH STREET</h2>
            </div>
            <GalleryItems />
            <LinkButton link="/gallery" text="VIEW MORE" isBlank={false} />
        </div>

    )

}

export default Gallery;