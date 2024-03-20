import { useQuery } from "@tanstack/react-query";

import {
    axiosGetProductById,
    axiosGetProductImage,
    axiosGetProductReviews,
    axiosGetProducts,
} from "./products.services";

const useGetProductsQuery = () =>
    useQuery({
        queryFn: axiosGetProducts,
        queryKey: ["products"],
    });

const useGetPopularProductsQuery = () =>
    useQuery({
        queryFn: axiosGetProducts,
        queryKey: ["popular"],
    });

const useGetLatestProductsQuery = () =>
    useQuery({
        queryFn: axiosGetProducts,
        queryKey: ["latest"],
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

const useGetProductReviewQuery = (id: number) =>
    useQuery({
        queryFn: () => axiosGetProductReviews(id),
        queryKey: ["image", id],
    });

export {
    useGetProductByIdQuery,
    useGetProductImageQuery,
    useGetProductsQuery,
    useGetProductReviewQuery,
    useGetPopularProductsQuery,
    useGetLatestProductsQuery
};
