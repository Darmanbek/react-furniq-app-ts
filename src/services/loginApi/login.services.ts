import api from "@/api";
import {
    TLogOutData,
    TLoginData,
    TLoginMeData,
    TLoginRequestWithEmail,
    TLoginRequestWithPhone,
} from "./login.types";

const fetchSignInPhone = async (
    value: TLoginRequestWithPhone
): Promise<TLoginData> => {
    const response = await api.post("/login-phone", value);
    return response.data;
};

const fetchSignInEmail = async (
    value: TLoginRequestWithEmail
): Promise<TLoginData> => {
    const response = await api.post("/login-email", value);
    return response.data;
};

const fetchSignOut = async (): Promise<TLogOutData> => {
    const response = await api.post("/log-out");
    return response.data;
};

const fetchGetMe = async (): Promise<TLoginMeData> => {
    const response = await api.get("/get-me");
    return response.data;
};


export {fetchSignInPhone, fetchSignInEmail, fetchSignOut, fetchGetMe};
