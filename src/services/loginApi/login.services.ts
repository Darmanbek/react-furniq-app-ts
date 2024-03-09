import api from "@/api";
import {
    TLoginData,
    TLoginRequestWithEmail,
    TLoginRequestWithPhone,
} from "./login.types";

const fetchSignIn = async (
    value: TLoginRequestWithPhone | TLoginRequestWithEmail
): Promise<TLoginData> => {
    const response = await api.post("/login", value);
    return response.data;
};

export default fetchSignIn;
