import { useGetProductReviewQuery } from "@/services";
import React from "react";

const Reviews: React.FC<{id: number}> = ({ id }) => {
    const { data: reviews, isPending } = useGetProductReviewQuery(id)
    
    return (
        <div className="review-block">
            <div className="reviews-list">
                <ul>
                    {reviews?.data.map(review => (
                        <li>
                            <p>{review.id}</p>
                            <p>{review.user.name}</p>
                            <p>{review.body}</p>
                            <p>{review.answered_at}</p>
                            <p>{review.rating}</p>
                            <p>{review.price}</p>
                            <p>{review.seller && review.seller.company_name}</p>
                            <p>{review.seller_answer && review.seller_answer}</p>
                            <p>{review.created_at}</p>
                            <p>{review.updated_at}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Reviews;
