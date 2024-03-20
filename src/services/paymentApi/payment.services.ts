import api from "@/api";
import { TPaymentTypes } from "./payment.types";


const axiosGetPaymentTypes = async (): Promise<TPaymentTypes> => {
    const response = await api.get("payment-types");
    return response.data;
};


export { axiosGetPaymentTypes }