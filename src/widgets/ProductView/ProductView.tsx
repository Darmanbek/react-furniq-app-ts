import React from "react";
import { useTranslation } from "react-i18next";
import { IoMdStar } from "react-icons/io";
import "./productView.scss";

interface ProductViewProps {
    rating: number;
    reviews_count: number
}

const ProductView: React.FC<ProductViewProps> = ({ rating, reviews_count }) => {
    const { t } = useTranslation()

    return (
        <div className="product-view">
            <div className="product-view__rating">
                <IoMdStar className="icon_star" />
                <span className="view-count">{rating}</span>
            </div>
            <span className="product-view__review">
                {`(${reviews_count} ${t("review")})`}
            </span>
        </div>
    );
};

export default ProductView;
