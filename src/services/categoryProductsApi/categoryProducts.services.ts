import api from "@/api";
import { TResponse } from "@/services/index.types";
import { TProduct } from "@/models";

const axiosGetCategoryProducts = async (
    id: number
): Promise<TResponse<TProduct>> => {
    const response = await api.get(`/categories/${id}/products`);
    return response.data;
};

export { axiosGetCategoryProducts };
