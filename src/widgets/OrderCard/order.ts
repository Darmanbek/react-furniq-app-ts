export interface IOrder {
    id: number;
    payment_type: PaymentType;
    status: Status;
    sum: number;
    products: Product[];
    created_at: string;
    updated_at: string;
}

export interface Image {
    id: number;
    for?: string;
    url: string;
};

export interface PaymentType {
    id: number;
    name: Name;
}

export interface Name {
    latin: string;
    kiril: string;
    ru: string;
}

export interface Status {
    id: number;
    name: Name;
}


export interface Product {
    id: number;
    name: string;
    price: number;
    color: string;
    material: string;
    quantity: number;
    image: null | Image;
}

export const order: IOrder = {
    id: 1,
    payment_type: {
        id: 1,
        name: {
            latin: "Naq",
            kiril: "Нақ",
            ru: "Наличные",
        },
    },
    status: {
        id: 1,
        name: {
            latin: "Aktiv",
            kiril: "Актив",
            ru: "Активные",
        },
    },
    sum: 19586937,
    products: [
        {
            id: 1,
            name: "Кухонный Гарнитур",
            price: 250000,
            color: "белый",
            material: "МДФ",
            quantity: 3,
            image: null,
        },
    ],
    created_at: "2024-02-26 10:47:37",
    updated_at: "2024-02-26 10:47:37",
};
