import { useQuery } from "@tanstack/react-query";

import {
    axiosGetProductById,
    axiosGetProductImage,
    axiosGetProducts,
} from "./products.services";

const useGetProductsQuery = () =>
    useQuery({
        queryFn: axiosGetProducts,
        queryKey: ["products"],
    });

const useGetProductByIdQuery = (id: number) =>
    useQuery({
        queryFn: () => axiosGetProductById(id),
        queryKey: ["products", id],
    });

const useGetProductImageQuery = (id: number) =>
    useQuery({
        queryFn: () => axiosGetProductImage(id),
        queryKey: ["image", id],
    });

export { useGetProductByIdQuery, useGetProductImageQuery, useGetProductsQuery };
