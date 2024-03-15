import React from "react";
import { Product } from "../order";
import "./orderCardProduct.scss";
import ProductImage from "@/widgets/ProductImage/ProductImage";

interface orderCardProductProps {
    product: Product
}

const OrderCardProduct: React.FC<orderCardProductProps> = ({ product }) => {
    return (
        <div className="order-card-product">
            <div className="product-top">
                <div className="product-img">
                    <ProductImage image={product.image}/>
                </div>
                <div className="product-title">
                    <h3>{product.name}</h3>
                </div>
            </div>
            <div className="product-info">
                <div className="info-item">
                    <span>Цвет:</span>
                    <span>{product.color}</span>
                </div>
                <div className="info-item">
                    <span>Материал:</span>
                    <span>{product.material}</span>
                </div>
                <div className="info-item">
                    <span>Количество:</span>
                    <span>{product.quantity}</span>
                </div>
                <div className="info-item">
                    <span>Стоимость:</span>
                    <span>{product.price}</span>
                </div>
            </div>
        </div>
    );
};

export default OrderCardProduct;
