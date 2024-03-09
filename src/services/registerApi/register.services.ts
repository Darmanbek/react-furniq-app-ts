import api from "@/api";
import { TRegisterRequest, TRegisterRequestData } from "./register.types";

const fetchSignOn = async (
    values: TRegisterRequest
): Promise<TRegisterRequestData> => {
    const response = await api.post("/register", values);
    return response.data;
};

export default fetchSignOn;
