import style from './TestimonialVideo.module.css';
import LinkButton from '../../../../components/button/LinkButton';

const TestimonialVideo = () => {
    return (
        <div className={style.mainContent}>

            <div className={style.videoWrapper}>
                <iframe
                    width="520"
                    height="315"
                    src="https://www.youtube.com/embed/8B2qNftxOJg?si=vizXPPF7yTaUbsPT"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </div>

            <div className={style.textWrapper}>
                <div className={style.text}>
                    <p className={style.tittle}>testimonials</p>
                    <p className={style.subtitle}>we love...</p>
                </div>

                <div className={style.quoteBlock}>
                    <p className={style.quote}>"I love their Chicken Parmesan. It tastes just like chicken but itʼs all soy!" </p>
                    <p className={style.author}> - Janet Jackson</p>
                    <LinkButton text="MORE PRESS" link="#press" className={style.btn} />
                </div>
            </div>

        </div>
    )
}

export default TestimonialVideo;