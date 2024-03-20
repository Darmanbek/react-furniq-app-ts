import { TPagination, TReviewData } from "@/models";


export type TReview = {
    data: TReviewData[]
    pagination: TPagination
}


export type TReviewChange = {
    id?: number;
    rating: number;
    body: string;
};
