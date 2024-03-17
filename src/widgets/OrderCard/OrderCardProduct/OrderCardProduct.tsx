import React, { useState } from "react";
import { Product } from "../order";
import { useTranslation } from "react-i18next";
import ProductImage from "@/widgets/ProductImage/ProductImage";
import { priceFormatter } from "@/hooks";
import "./orderCardProduct.scss";
import { Modal } from "antd";

interface orderCardProductProps {
    product: Product
}

const OrderCardProduct: React.FC<orderCardProductProps> = ({ product }) => {
    const { t } = useTranslation()
    const [modal, setModal] = useState(false)

    const handleOpen = () => {
        setModal(prev =>!prev)
    }

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
                <button onClick={handleOpen} className="create-order">
                    {t("createOrder")}
                </button>
                <Modal 
                centered
                closable={false}
                onCancel={handleOpen}
                open={modal}
                >
                    
                </Modal>
            </div>
        </div>
    );
};

export default OrderCardProduct;
