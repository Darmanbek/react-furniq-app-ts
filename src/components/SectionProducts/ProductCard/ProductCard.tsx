import React from "react";
import { IoMdStar } from "react-icons/io";
import "./productCard.scss";

const ProductCard: React.FC = () => {
    return (
        <div className="product-card">
            <div className="product-card__like">
                {/* <Like data={furniture} /> */}
            </div>
            <img
                // src={furniture?.image ? furniture.image.url : noImage}
                // alt={furniture.image?.url}
                className="product-card__img"
            />
            <div className="product-card__info">
                <h2 className="card-title">
                    {/* {furniture.name.ru} */}
                </h2>
                <div className="card-view">
                    <div className="card-view__rating">
                        <IoMdStar className="text-sm text-orange-500" />
                        <span className="text-sm text-gray-500">
                            {/* {furniture.rating} */}
                        </span>
                    </div>
                    <span className="card-view__review">
                        {/* {`(${furniture.reviews_count} ${t("review")})`} */}
                    </span>
                </div>
                <div className="card-shop">
                    <div className="card-shop__price">
                        <span className="line-through text-gray-400 text-xs">
                            {/* {`${furniture.price * 1.8} ${t("currency")}`} */}
                        </span>
                        {/* <span>{`${furniture.price} ${t("currency")}`}</span> */}
                    </div>
                    {/* <Shopping data={furniture} /> */}
                </div>
            </div>
            <a
                // href={`/details/${furniture.id}`}
                className="absolute w-full h-full z-10"
            />
        </div>
    );
};

export default ProductCard;
