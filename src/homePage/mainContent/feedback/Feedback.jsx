import style from './Feedback.module.css';
import FeedbackItem from './feedbackItem/FeedbackItem';

import Yelp from '../../../image/homePage/mainContent/feedback/yelp.png';
import Owl from '../../../image/homePage/mainContent/feedback/owl.png';
import Cow from '../../../image/homePage/mainContent/feedback/cow.png';

import YelpHover from '../../../image/homePage/mainContent/feedback/yelpHover.png';
import OwlHover from '../../../image/homePage/mainContent/feedback/owlHover.png';
import CowHover from '../../../image/homePage/mainContent/feedback/cowHover.png';

const Feedback = () => {
    return (
        <div className={style.mainContent}>

            <div className={style.feedbackItem}>
                <FeedbackItem
                    icon={Yelp}
                    iconHover={YelpHover}
                    url="https://www.yelp.com/biz/red-bamboo-new-york"
                    title="It surpassed all my expectations!"
                    text="The food looks like it has been prepared for a culinary magazine. While in New York City add Red Bamboo as a culinary experience. It will be a good place to take a date to or get together with some friends. You will not be disappointed." />
            </div>

            <div className={style.feedbackItem}>
                <FeedbackItem
                    icon={Owl}
                    iconHover={OwlHover}
                    url="https://www.tripadvisor.com/Restaurant_Review-g60763-d476855-Reviews-Red_Bamboo-New_York_City_New_York.html"
                    title="Best vegetarian restaurant... EVER"
                    text="I absolutely love this place. The Wings are the best things ever!!! I've been a veggie for 22 years now and never had wings, Philly Cheese steak etc so to get all this as a veggie option is fantastic! I go to this place every time I'm in New York :)" />
            </div>

            <div className={style.feedbackItem}>
                <FeedbackItem
                    icon={Cow}
                    iconHover={CowHover}
                    url="https://www.happycow.net/reviews/red-bamboo-new-york-city-2282"
                    title="Delicious food, good prices"
                    text="Very nice, cozy place. Service was good, food delicious and so much to choose from :) Wanna go there again :)Pros: Good price, Good food, Cozy place and nice staff" />
            </div>
        </div>
    )
}

export default Feedback;