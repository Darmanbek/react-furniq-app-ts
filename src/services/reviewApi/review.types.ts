import { TSeller } from "@/models";

export type TReview = {
    id: number;
    user: TSeller;
    rating: number;
    body: string;
    created_at: string;
    updated_at: string;
    seller: null;
    seller_answer: null;
    answered_at: string;
};

export type TReviewChange = {
    id?: number;
    rating: number;
    body: string;
};
