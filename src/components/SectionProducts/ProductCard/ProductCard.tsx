import React from "react";
import { IoMdStar } from "react-icons/io";
import { NoImage } from "@/assets";
import ProductLike from "./ProductLike/ProductLike";
import "./productCard.scss";
import ProductShopping from "./ProductShopping/ProductShopping";

const ProductCard: React.FC = () => {
    return (
        <div className="product-card">
            <div className="product-card__like">
                {/* <Like data={furniture} /> */}
                <ProductLike />
            </div>
            <img
                // src={furniture?.image ? furniture.image.url : noImage}
                // alt={furniture.image?.url}
                src={NoImage}
                className="product-card__img"
            />
            <div className="product-card__info">
                <h2 className="card-title">
                    {/* {furniture.name.ru} */}
                    Produkt pro Dukt FurniQ, 200 cm3, material
                </h2>
                <div className="card-view">
                    <div className="card-view__rating">
                        <IoMdStar className="icon_star" />
                        <span className="text-sm text-gray-500">
                            {/* {furniture.rating} */}
                            4.5
                        </span>
                    </div>
                    <span className="card-view__review">
                        {/* {`(${furniture.reviews_count} ${t("review")})`} */}
                        (1298 отзывов)
                    </span>
                </div>
                <div className="card-shop">
                    <div className="card-shop__price">
                        <span>
                            {/* {`${furniture.price * 1.8} ${t("currency")}`} */}
                            34 630 059.6 сум
                        </span>
                        {/* <span>{`${furniture.price} ${t("currency")}`}</span> */}
                        19 238 922 сум
                    </div>
                    {/* <Shopping data={furniture} /> */}
                    <ProductShopping />
                </div>
            </div>
            <a
                href="/"
                // href={`/details/${furniture.id}`}
            />
        </div>
    );
};

export default ProductCard;
