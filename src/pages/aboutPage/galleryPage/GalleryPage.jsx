import style from './GalleryPage.module.css';
import { Link } from "react-router-dom";
import GalleryGrid from "./viewGalleryGrid/GalleryGrid";

const GalleryPage = () => {

    return (
        <div className={style.wrapper}>
            <Link to="/about" className={`${style.arrow} ${style.left}`}>
                ‹
                <div className={style.titleUnderArrow}>
                    Back to about
                </div>
            </Link>

            <GalleryGrid />

            <Link to="/press" className={`${style.arrow} ${style.right}`}>
                ›
                <div className={style.titleUnderArrow}>
                    Go on to press
                </div>
            </Link>
        </div>
    )
};

export default GalleryPage;