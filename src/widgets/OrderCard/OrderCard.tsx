import React from "react";
import { useTranslation } from "react-i18next";
import { nameTranslate, priceFormatter } from "@/hooks";
import { order } from "./order";
import "./orderCard.scss"

const OrderCard: React.FC = () => {
    const { t } = useTranslation()

    return (
        <div className="order-card">
            <h1 className="order-card-id">ID заказа 10539665</h1>
            <div className="order-card__info">
                <div className="order-block status">
                    <span>Статус:</span>
                    <span>{nameTranslate(order.status.name)}</span>
                </div>
                <div className="order-block">
                    <span>Дата заказа:</span>
                    <span>{order.created_at}</span>
                </div>
                <div className="order-block">
                    <span>Дата доставки:</span>
                    <span>{order.updated_at}</span>
                </div>
                <div className="order-block">
                    <span>{t("whichCity")}</span>
                    <span>{t("city")}</span>
                </div>
                <div className="order-block">
                    <span>Сумма заказа:</span>
                    <span>{priceFormatter(order.sum)} {t("currency")}</span>
                </div>
                <div className="order-block">
                    <span>Способ оплаты:</span>
                    <span>{nameTranslate(order.payment_type.name)}</span>
                </div>
            </div>
            <div className="order-product">
                <h3 className="order-product-title">Продукты {order.products.length}:</h3>
                {/* {order.products.map(product => (
                    <OrderCardProduct product={product} key={product.id}/>
                ))} */}
            </div>
        </div>
    );
};

export default OrderCard;
