import React from "react";
import { useTranslation } from "react-i18next";
import { NumericFormat } from 'react-number-format';
import { IoMdStar } from "react-icons/io";
import { NoImage } from "@/assets";
import { TProduct } from "@/models";
import { ProductLike, ProductShopping } from "@/widgets";
import "./productCard.scss";

interface ProductCardProps {
    product: TProduct
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const { t } = useTranslation()

    return (
        <div className="product-card">
            <div className="product-card__like">
                <ProductLike data={product} />

            </div>
            <img
                src={product?.image ? product.image.url : NoImage}
                alt={product.image?.url}
                className="product-card__img"
            />
            <div className="product-card__info">
                <h2 className="card-title">
                    {product.name.ru}
                    {/* Produkt pro Dukt FurniQ, 200 cm3, material */}
                </h2>
                <div className="card-view">
                    <div className="card-view__rating">
                        <IoMdStar className="icon_star" />
                        <span>
                            {product.rating}
                            {/* 4.5 */}
                        </span>
                    </div>
                    <span className="card-view__review">
                        {`(${product.reviews_count} ${t("review")})`}
                        {/* {`(1298 ${t("review")}))`} */}
                    </span>
                </div>
                <div className="card-shop">
                    <div className="card-shop__price">
                        <span>
                            <NumericFormat
                            value={product.price * 1.8}
                            suffix={` ${t("currency")}`}
                            thousandSeparator=" " 
                            />
                            {/* {`34 630 059.6 ${t("currency")}`}  */}
                        </span>
                        <NumericFormat
                        value={product.price}
                        suffix={` ${t("currency")}`}
                        thousandSeparator=" " 
                        />
                        {/* {`19 238 922 ${t("currency")}`} */}
                    </div>
                    {/* <Shopping data={furniture} /> */}
                    <div className="card-shop__button">
                        <ProductShopping data={product}/>
                    </div>
                </div>
            </div>
            <a
                href={`/details/${product.id}`}
            />
        </div>
    );
};

export default ProductCard;
