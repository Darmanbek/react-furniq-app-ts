import { create } from "zustand";
import { persist } from "zustand/middleware";
import { TProduct } from "@/models";

interface IUseCartStore {
    cart: TProduct[];
    setCart: (product: TProduct) => void;
    removeCart: (id: number) => void;
}

const useCartStore = create(
    persist<IUseCartStore>(
        (set, get) => ({
            cart: [],
            setCart: (product: TProduct) =>
                set({ cart: [...get().cart, product] }),
            removeCart: (id: number) => {
                const existProduct = get().cart.filter(
                    (productInCart) => productInCart.id !== -1
                );
                if (!existProduct) return get().cart;
                const removeProduct = get().cart.filter(
                    (productInCart) => productInCart.id !== id
                );
                return set({ cart: removeProduct });
            },
        }),
        {
            name: "cart",
        }
    )
);

export default useCartStore;