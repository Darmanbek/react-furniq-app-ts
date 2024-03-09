export type TRegisterRequest = {
    name: string;
    phone: string;
    password: string;
};

export type TRegisterRequestData = {
    data: {
        name: string;
        email: null | string;
        phone: string;
        role: string;
        token: string;
    };
};
