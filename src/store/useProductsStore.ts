import { create } from "zustand";
import { persist } from "zustand/middleware";
import { TProduct } from "@/models";

interface IUseProductsStore {
    products: TProduct[];
    setAllProducts: (products: TProduct[]) => void;
    getProductById: (id: number) => TProduct | undefined;
}

const useProductsStore = create(
    persist<IUseProductsStore>(
        (set, get) => ({
            products: [],
            setAllProducts: (products: TProduct[]) =>
                set({ products: products }),
            getProductById: (id: number) => {
                const findProduct = get().products.find(
                    (product) => product.id === id
                );
                if (findProduct) {
                    return findProduct;
                }
                return;
            },
        }),
        {
            name: "products",
        }
    )
);

export default useProductsStore;
