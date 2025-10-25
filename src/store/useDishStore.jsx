import { create } from "zustand";
import persist from "zustand/middleware";


export const useDishStore = create(

    persist(
        (set, get) => ({
            dishes: [],

            onAddToBasket: (dish) => {
                const currentDish = get().dishes;
                const existDish = currentDish.find((i) => i.id === dish.id);
                if (existDish) {
                    const updatedDish = currentDish.map((i) =>
                        i.id === dish.id ? { ...i, quantity: i.quantity + 1 } : i);

                    set({ dishes: unpatedDish })
                }

                else {
                    set({ dishes: [...currentDish, { ...dish, quantity: 1 }] })
                }
            },

            removeFromBasket: (id) =>
                set({ dishes: get().dishes.filter((dish) => dish.id !== id) }),

            clearBasket: () => set({ dishes: [] }),

            getTotal: () => get().dishes.reduce((acc, dish) => acc + dish.price * dish.quantity, 0),
        }),
        {
            name: 'basket-storage',
        }
    ))