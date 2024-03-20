import React from "react";
import { useTranslation } from "react-i18next";
import { IoMdStar } from "react-icons/io";
import "./productView.scss";

interface ProductViewProps {
    rating: number;
    reviews_count?: number | undefined 
    created_at?: string | undefined;
}

const ProductView: React.FC<ProductViewProps> = ({ rating, reviews_count, created_at }) => {
    const { t } = useTranslation()

    return (
        <div className="product-view">
            <div className="product-view__rating">
                {/* {rating !== 0 ? 
                    [...Array(rating)].map((_, index) => (
                        <IoMdStar className="icon_star" key={index} />
                    )) : 
                    <IoMdStar className="icon_star" />
                } */}
                <IoMdStar className="icon_star" />
                <span className="view-count">{rating}</span>
            </div>
            {reviews_count !== undefined &&
                <span className="product-view__review">
                    {`(${reviews_count} ${t("review")})`}
                </span> 
            }
            { created_at !== undefined &&
                <span className="product-view__review">
                    {`(${created_at})`}
                </span> 
            }
        </div>
    );
};

export default ProductView;
