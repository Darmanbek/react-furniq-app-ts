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