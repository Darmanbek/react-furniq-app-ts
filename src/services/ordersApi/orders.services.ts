import api from "@/api";
import { TOrder } from "./orders.types";
import { TCreateOrders } from "@/models";


const axiosGetOrders = async (): Promise<TOrder> => {
    const response = await api.get("orders");
    return response.data;
};

const axiosPostOrder = async (
    value: TCreateOrders
): Promise<void> => {
    const response = await api.post("orders", value);
    return response.data;
};

export { axiosGetOrders, axiosPostOrder }