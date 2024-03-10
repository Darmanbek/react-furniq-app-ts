import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
    axiosGetReviews,
    axiosPostReview,
    axiosPutReview,
} from "./review.services";
import { TReviewChange } from "./review.types";

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
            queryClient.invalidateQueries({ queryKey: ["reviews", id] });
        },
    });
};

const useUpdateReviewMutation = (id: number) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (value: TReviewChange) => axiosPutReview(id, value),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["reviews", id] });
        },
    });
};

export { useCreateReviewMutation, useGetReviewsQuery, useUpdateReviewMutation };
