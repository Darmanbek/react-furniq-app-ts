import React from "react";
import { useTranslation } from "react-i18next";
import { IoIosArrowDown } from "react-icons/io";
import { nameTranslate, priceFormatter, useOpen } from "@/hooks";
import OrderCardProduct from "./OrderCardProduct/OrderCardProduct";
import { TOrderData } from "@/models";
import "./orderCard.scss";

interface OrderCardProps {
    order: TOrderData;
}

const OrderCard: React.FC<OrderCardProps> = ({ order }) => {
    const { t } = useTranslation();
    const { open, handleOpen } = useOpen(false);

    return (
        <div className="order-card">
            <h1 className="order-card-id">{`${t("orderId")} ${order.id}`}</h1>
            <div className="order-card__info">
                <div className="order-block status">
                    <span>{t("status")}:</span>
                    <span>{t(nameTranslate(order.status.name))}</span>
                </div>
                <div className="order-block">
                    <span>{t("orderDate")}:</span>
                    <span>{order.created_at}</span>
                </div>
                <div className="order-block">
                    <span>{t("orderUpdate")}:</span>
                    <span>{order.updated_at}</span>
                </div>
                <div className="order-block">
                    <span>{t("whichCity")}</span>
                    <span>{t("city")}</span>
                </div>
                <div className="order-block">
                    <span>{t("orderPrice")}:</span>
                    <span>
                        {priceFormatter(order.sum)} {t("currency")}
                    </span>
                </div>
                <div className="order-block">
                    <span>{t("paymentType")}:</span>
                    <span>{t(nameTranslate(order.payment_type.name))}</span>
                </div>
            </div>
            <div className="order-products">
                <button className="order-products-button" onClick={handleOpen}>
                    <h3 className="order-products-title">
                        {`${t("products2")} ${order.products.length}`}:
                    </h3>
                    <IoIosArrowDown
                        className={`arrow-icon ${open ? "active" : ""}`}
                    />
                </button>
                <div className={`order-products-content ${open ? "open" : ""}`}>
                    <div className="order-products-list">
                        {order.products.map((product) => (
                            <OrderCardProduct
                                product={product}
                                key={product.id}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderCard;
