import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
    axiosGetReviews,
    axiosPostReview,
    axiosPutReview,
} from "./review.services";
import { TReviewChange } from "./review.types";
import { message } from "antd";

const useGetReviewsQuery = (id: number) =>
    useQuery({
        queryFn: () => axiosGetReviews(id),
        queryKey: ["reviews", id],
    });

const useCreateReviewMutation = (id: number) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (value: TReviewChange) => axiosPostReview(id, value),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["create-reviews", id] });
            message.success("Благодарим за отзыв!")
        },
        onError: () => {
            message.error("Ошибка при отправке отзыва!")
        }
    });
};

const useUpdateReviewMutation = (id: number) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (value: TReviewChange) => axiosPutReview(id, value),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["update-reviews", id] });
            message.success("Отзыв успешно изменён!")
        },
        onError: () => {
            message.error("Ошибка при изменений отзыва!")
        }
    });
};

export { 
    useCreateReviewMutation, 
    useGetReviewsQuery, 
    useUpdateReviewMutation 
};
