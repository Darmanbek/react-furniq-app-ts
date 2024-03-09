export type TLoginRequestWithPhone = {
    phone: string;
    password: string;
};

export type TLoginRequestWithEmail = {
    email: string;
    password: string;
};

export type TLoginData = {
    data: {
        username: string;
        email: string;
        phone: string;
        role: string;
        token: string;
    };
};
