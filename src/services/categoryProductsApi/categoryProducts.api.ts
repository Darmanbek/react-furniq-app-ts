import { useQuery } from "@tanstack/react-query";
import { axiosGetCategoryProducts } from "./categoryProducts.services";

const useGetCategoryProductsQuery = (id: number) =>
    useQuery({
        queryFn: () => axiosGetCategoryProducts(id),
        queryKey: ["categoryProducts", id],
    });

export { useGetCategoryProductsQuery };
