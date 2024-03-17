import React from "react";
import { Product } from "../order";
import { useTranslation } from "react-i18next";
import ProductImage from "@/widgets/ProductImage/ProductImage";
import "./orderCardProduct.scss";
import { Link } from "react-router-dom";
import { priceFormatter } from "@/hooks";

interface orderCardProductProps {
    product: Product
}

const OrderCardProduct: React.FC<orderCardProductProps> = ({ product }) => {
    const { t } = useTranslation()

    return (
        <div className="order-card-product">
            <div className="product-img">
                <ProductImage image={product.image}/>
            </div>
            <div className="product-info">
                <div className="info-item">
                    <h3 className="product-title">{product.name}</h3>
                </div>
                <div className="info-item">
                    <span>
                        {`${t("color")}: `}
                        <span className="title">{product.color}</span>
                    </span>
                    
                </div>
                <div className="info-item">
                    <span>
                        {`${t("material")}: `}
                        <span className="title">{product.material}</span>
                    </span>
                </div>
                <div className="info-item">
                    <span>
                        {`${t("count")}: `}
                        <span className="title">{product.quantity}</span>
                    </span>
                </div>
                <div className="info-item">
                    <span>
                        {`${t("price")}: `}
                        <span className="title">{priceFormatter(product.price)}</span>
                    </span>
                </div>
                <Link className="link" to={`/details/${product.id}`}>
                    {t("linkToProduct")}
                </Link>
            </div>
        </div>
    );
};

export default OrderCardProduct;
