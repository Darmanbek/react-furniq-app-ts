import { TCategory, TName, TSeller } from '@/models';

export type TProductDetails = {
  data: TProductDetailsData;
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
