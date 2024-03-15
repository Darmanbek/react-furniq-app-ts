import { create } from "zustand";
import { persist } from "zustand/middleware";
import { TProduct } from "@/models";

interface IStore {
    wishes: TProduct[];
    setWishes: (product: TProduct) => void;
    removeWishes: (id: number) => void;
    findWishes: (id: number) => TProduct | undefined;
}

const useWishesStore = create(
    persist<IStore>(
        (set, get) => ({
            wishes: [],
            setWishes: (product: TProduct) =>
                set({ wishes: [...get().wishes, product] }),
            removeWishes: (id: number) => {
                const existProduct = get().wishes.filter(
                    (wished) => wished.id !== -1
                );
                if (!existProduct) return get().wishes;
                const removeProduct = get().wishes.filter(
                    (wish) => wish.id !== id
                );
                return set({ wishes: removeProduct });
            },
            findWishes: (id: number) => {
                const findWishesProduct = get().wishes.find(
                    (wish) => id === wish.id
                );
                if (findWishesProduct) {
                    return findWishesProduct;
                }
                return;
            },
        }),
        {
            name: "wishes",
        }
    )
);

export default useWishesStore;
