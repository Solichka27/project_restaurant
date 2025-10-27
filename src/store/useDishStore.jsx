import { create } from "zustand";
import { persist } from "zustand/middleware";


export const useDishStore = create(
    persist(
        (set, get) => ({
            dishes: [],
            selectedDish: null,
            isModalOpen: false,
            editingDish: null,


            setEditingDish: (dish) => set({ editingDish: dish }),


            openModal: (dish) => set({ selectedDish: dish, isModalOpen: true }),


            closeModal: () => set({ selectedDish: null, isModalOpen: false, editingDish: null }),


            onAddToBasket: (dish) => {
                const currentDish = get().dishes;
                const existDish = currentDish.find((i) => i.name === dish.name);
                if (existDish) {
                    const updatedDish = currentDish.map((i) =>
                        i.name === dish.name ? { ...i, quantity: i.quantity + dish.quantity } : i);
                    set({ dishes: updatedDish });
                } else {
                    set({ dishes: [...currentDish, { ...dish, id: Date.now() }] });
                }
            },


            updateDishInBasket: (updatedDish) => {
                const currentDishes = get().dishes;
                const updatedDishes = currentDishes.map((dish) =>
                    dish.name === updatedDish.name ? { ...updatedDish } : dish
                );
                set({ dishes: updatedDishes, editingDish: null });
            },

            removeFromBasket: (id) =>
                set({ dishes: get().dishes.filter((dish) => dish.id !== id) }),

            clearBasket: () => set({ dishes: [] }),

            getTotal: () => get().dishes.reduce((acc, dish) => acc + dish.price * dish.quantity, 0),
        }),
        {
            name: 'basket-storage',
            partialize: (state) => ({ dishes: state.dishes }),
        }
    )
)