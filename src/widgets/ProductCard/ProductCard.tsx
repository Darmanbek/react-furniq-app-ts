import React from "react";
import { useTranslation } from "react-i18next";
import { ProductImage, ProductLike, ProductShopping, ProductView } from "@/widgets";
import { TProduct } from "@/models";
import "./productCard.scss";
import { priceFormatter } from "@/hooks";

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
            <div className="product-card__img">
                <ProductImage 
                    image={product.image}
                />
            </div>
            <div className="product-card__info">
                <h2 className="card-title">
                    {product.name.ru}
                </h2>
                <ProductView 
                rating={product.rating}
                reviews_count={product.reviews_count}
                />
                <div className="card-shop">
                    <div className="card-shop__price">
                        {product.discount_price ? <>
                            <span>
                                {`${priceFormatter(product.price)} ${t("currency")}`} 
                            </span>
                            {`${priceFormatter(product.discount_price)} ${t("currency")}`}
                        </> : <>
                            {`${priceFormatter(product.price)} ${t("currency")}`}
                        </>
                        }
                    </div>
                    <ProductShopping data={product} />
                </div>
            </div>
            <a
                href={`/details/${product.id}`}
            />
        </div>
    );
};

export default ProductCard;
