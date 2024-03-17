import React, { useEffect } from "react";
import { IoTrash } from "react-icons/io5";
import { TCartProduct } from "@/models";
import { priceFormatter, useCount } from "@/hooks";
import { ButtonCount } from "@/widgets";
import { useCartStore } from "@/store";
import { message } from "antd";
import { useTranslation } from "react-i18next";
import "./cardShop.scss";

interface CardShopProps {
    cart: TCartProduct
}

const CardShop: React.FC<CardShopProps> = ({ cart }) => {
    const { t } = useTranslation();
    const { removeCart, updateCart } = useCartStore()
    const { count, decrement, increment } = useCount(cart.count, cart.quantity);
   
    const deleteCart = () => {
        removeCart(cart.id)
        message.error("Удален из корзины");
    }

    useEffect(() => {
        updateCart({
            ...cart,
            count: count
        })
    }, [count])
    return (
        <div className="cart-card__info-shop">
            <button className="info-shop__delete" onClick={deleteCart}>
                <IoTrash />
                <span>{t("delete")}</span>
            </button>
            <div className="info-shop__price">
                <span>{`${priceFormatter(cart.price * 1.8)} ${t(
                    "currency"
                )}`}</span>
                {`${priceFormatter(cart.price * count)} ${t("currency")}`}
            </div>
            <div className="info-shop__count">
                <span
                    className={`price-unit ${count > 1 ? "visible" : "hidden"}`}
                >
                    {`${priceFormatter(cart.price)} ${t("currencyUnit")}`}
                </span>
                <ButtonCount
                    count={count}
                    quantity={cart.quantity}
                    decrement={decrement}
                    increment={increment}
                />
            </div>
            <div className="info-shop-hidden">
                <div className="info-shop__price">
                    <span>{`${priceFormatter(cart.price * 1.8)} ${t(
                        "currency"
                    )}`}</span>
                    {`${priceFormatter(cart.price * count)} ${t("currency")}`}
                </div>
                <button className="info-shop__delete" onClick={deleteCart}>
                    <IoTrash />
                    <span>{t("delete")}</span>
                </button>
            </div>
        </div>
    );
};

export default CardShop;
