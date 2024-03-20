import api from "@/api";
import { TReview, TReviewChange } from "./review.types";

const axiosGetReviews = async (id: number): Promise<TReview> => {
    const response = await api.get(`/products/${id}/reviews`);
    return response.data;
};

const axiosPostReview = async (
    id: number,
    value: TReviewChange
): Promise<void> => {
    const response = await api.post(`/products/${id}/reviews`, value);
    return response.data;
};

const axiosPutReview = async (
    id: number,
    value: TReviewChange
): Promise<void> => {
    const response = await api.put(
        `/products/${id}/reviews/${value.id}`,
        value
    );
    return response.data;
};

export { axiosGetReviews, axiosPostReview, axiosPutReview };
