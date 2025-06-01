import { useEffect } from 'react';
import { Starters, Sandwiches, Mains, Desserts } from "./ItemMenusConst";
import ViewItemMenus from './viewItemMenus/ViewItemMenus';

const ItemMenus = () => {

    useEffect(() => {
        const hash = window.location.hash.substring(1);
        if (hash) {
            const section = document.getElementById(hash);
            if (section) {
                setTimeout(() => {
                    section.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, []);

    return (
        <div>
            <ViewItemMenus id="starters" title="Starters" items={Starters} />
            <ViewItemMenus id="sandwiches" title="Sandwiches" items={Sandwiches} />
            <ViewItemMenus id="mains" title="Mains" items={Mains} />
            <ViewItemMenus id="desserts" title="Desserts" items={Desserts} />
        </div>
    )
}

export default ItemMenus;