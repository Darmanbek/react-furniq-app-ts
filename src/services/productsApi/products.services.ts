import api from "@/api";
import { TResponse } from "@/services/index.types";
import { TImages, TProduct } from "@/models";
import { TProductDetails } from "./products.types";

const axiosGetProducts = async (): Promise<TResponse<TProduct>> => {
    const response = await api.get("products");
    return response.data;
};

const axiosGetProductById = async (id: number): Promise<TProductDetails> => {
    const response = await api.get(`products/${id}`);
    return response.data;
};

const axiosGetProductImage = async (
    id: number
): Promise<TResponse<TImages>> => {
    const response = await api.get(`products/${id}/images`);
    return response.data;
};

export { axiosGetProductById, axiosGetProductImage, axiosGetProducts };
