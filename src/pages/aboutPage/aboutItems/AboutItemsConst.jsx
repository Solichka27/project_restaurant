import Cow from '../../../assets/image/aboutPage/aboutItems/cow.png';
import Maps from '../../../assets/image/aboutPage/aboutItems/maps.png';
import Arch from '../../../assets/image/aboutPage/aboutItems/arch.png';

import YelpHover from '../../../assets/image/homePage/mainContent/feedback/yelpHover.png';
import MapsHover from '../../../assets/image/aboutPage/aboutItems/mapsHover.png';
import CowHover from '../../../assets/image/homePage/mainContent/feedback/cowHover.png';

const AboutItemsConst = [
    {
        icon: Cow,
        iconHover: YelpHover,
        url: "https://www.yelp.com/biz/red-bamboo-new-york",
        title: "VEGAN",
        text: "Since opening in 2002 we at Red Bamboo have strived to redefine what it means to be vegan by creating innovative mock meat and seafood dishes."
    },

    {
        icon: Maps,
        iconHover: MapsHover,
        url: "https://www.tripadvisor.com/Restaurant_Review-g60763-d476855-Reviews-Red_Bamboo-New_York_City_New_York.html",
        title: "GLOBAL CUISINE",
        text: "Every year we add new vegan dishes from around the word. Newest dishes include: Filipino Dishes, Chicken and Pork, Adobo, Kare Kare, Salmon Teriyaki, Caesar, Greek and Cobb Salad"
    },

    {
        icon: Arch,
        iconHover: CowHover,
        url: "https://www.happycow.net/reviews/red-bamboo-new-york-city-2282",
        title: "NEW YORK CITY",
        text: "We are located in historic Greenwich Village half a block away from Washington Square Park. 140 West 4th Street NY, NY 10012 (between 6th Ave. and MacDougal St.)"
    }

]


export default AboutItemsConst;