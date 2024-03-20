import { create } from "zustand";
import { persist } from "zustand/middleware";
import { TCartProduct } from "@/models";

interface IUseCartStore {
    cart: TCartProduct[];
    setCart: (cartProduct: TCartProduct) => void;
    removeCart: (id: number) => void;
    findCart: (id: number) => TCartProduct | undefined;
    updateCart: (cartProduct: TCartProduct) => void;
    cleanCart: () => void;
}

const useCartStore = create(
    persist<IUseCartStore>(
        (set, get) => ({
            cart: [],
            setCart: (cartProduct: TCartProduct) =>
                set({ cart: [...get().cart, cartProduct] }),
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
            findCart: (id: number) => {
                const findCartProduct = get().cart.find(
                    (item) => item.id === id
                );
                if (findCartProduct) {
                    return findCartProduct;
                }
                return;
            },
            updateCart: (cartProduct: TCartProduct) => {
                const newCartProducts = get().cart.map((item) => {
                    if (item.id === cartProduct.id) {
                        return cartProduct;
                    }
                    return item;
                });
                return set({ cart: newCartProducts });
            },
            cleanCart: () => set({ cart: [] }),
        }),
        {
            name: "cart",
        }
    )
);

export default useCartStore;
