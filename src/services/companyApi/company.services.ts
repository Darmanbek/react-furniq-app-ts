import api from "@/api";
import { TResponse } from "@/services/index.types";
import { TProduct } from "@/models";
import { TCompany } from "./company.types";

const axiosGetCompany = async (id: number): Promise<TCompany> => {
    const response = await api.get(`/company/${id}`);
    return response.data;
};

const axiosGetCompanyProducts = async (
    id: number
): Promise<TResponse<TProduct>> => {
    const response = await api.get(`/company/${id}/products`);
    return response.data;
};

export { axiosGetCompany, axiosGetCompanyProducts };
