import style from './InstagramPosts.module.css';
import ItemPost from './itemPost/ItemPost';


const InstagramPosts = () => {
    return (
        <div className={style.mainContent}>
            <h3 className={style.title}>Follow us on Instagram</h3>
            <ItemPost />
        </div>


    )
}

export default InstagramPosts;