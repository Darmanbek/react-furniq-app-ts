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

export type TProductDetailsData = {
    id: number;
    category: TCategory;
    name: TName;
    price: number;
    discount_price: number | null;
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
  