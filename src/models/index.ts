export type TName = {
    latin: string;
    kiril: string;
    ru: string;
};

export type TProduct = {
    id: number;
    category: TCategory;
    name: TName;
    price: number;
    discount_price: number | null;
    image: null | TImages;
    rating: number;
    reviews_count: number;
    created_at: string;
    updated_at: string;
};

export type TCartProduct = {
    id: number;
    category: TCategory;
    name: TName;
    price: number;
    discount_price: number | null;
    image: null | TImages;
    rating: number;
    reviews_count: number;
    created_at: string;
    updated_at: string;
    seller: TSeller;
    color: TCategory;
    material: TCategory;
    quantity: number;
    count: number;
};

export type TCategory = {
    id: number;
    name: TName;
};

export type TSeller = {
    id: number;
    company_name: string;
};

export type TImages = {
    id: number;
    for?: string;
    url: string;
};

export type TProductDetailsData = {
    id: number;
    category: TCategory;
    name: TName;
    price: number;
    discount_price: number | null;
    image: null | TImages;
    rating: number;
    reviews_count: number;
    description: TName;
    seller: TSeller;
    color: TCategory;
    material: TCategory;
    quantity: number;
    number_sold: number;
    created_at: string;
    updated_at: string;
};

export type TLoginMe = {
    id: number;
    name: string;
    email: string;
    phone: string;
    role: string;
};

export interface TUser {
    id: number;
    name: string;
}

export type TPagination = {
    total: number;
};

export type TReviewData = {
    id: number;
    user: TUser;
    rating: number;
    price: number;
    body: string;
    created_at: string;
    updated_at: string;
    seller: TSeller;
    seller_answer: any;
    answered_at: string;
};

export type TOrderProduct = {
    product_id: number;
    quantity: number;
};

export type TCreateOrders = {
    payment_type_id: number;
    products: TOrderProduct[];
};

export type TOrdersStatusData = {
    Success: boolean;
    message: string;
    url: string;
};

export type TProductOrder = {
    id: number;
    name: string;
    price: number;
    color: string;
    material: string;
    quantity: number;
    image: null | TImages;
};

export type TOrderData = {
    id: number;
    payment_type: TCategory;
    status: TCategory;
    sum: number;
    products: TProductOrder[];
    payment_url: string;
    created_at: string;
    updated_at: string;
};
