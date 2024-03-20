import React from "react";
import { useGetReviewsQuery } from "@/services";
import "./reviews.scss";
import { ProductView } from "@/widgets";
import { useTranslation } from "react-i18next";
import { Skeleton } from "antd";

const Reviews: React.FC<{ id: number }> = ({ id }) => {
    const { t } = useTranslation();
    const { data: reviews, isPending } = useGetReviewsQuery(id);

    return (
        <div className="review-block">
            <div className="review-head">
                <h1>
                    {`${t("allReviews")}, `}<span>{isPending ? t("loading") : `${reviews?.data.length} ${t("reviews2")}`}</span>
                </h1>
            </div>
            {isPending && <Skeleton active paragraph={{rows: 5}}/>}
            <div className="reviews-list">
                {reviews?.data.length === 0 && (
                    <h1>{t("notFound")}</h1>
                )}
                {reviews && (
                    <ul>
                        {reviews.data.map((review) => (
                            <li>
                                <h3>{review.user.name}</h3>
                                <ProductView
                                    rating={5}
                                    created_at={review.created_at}
                                />
                                <p>
                                    {review.body}   
                                </p>
                                {review.seller && (
                                    <div className="seller-answer">
                                    <h3>
                                        {`${review.seller.company_name} `}
                                        <span>({review.answered_at})</span>
                                    </h3>
                                    <p>
                                        {review.seller_answer}
                                    </p>
                                </div>
                                )}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Reviews;
