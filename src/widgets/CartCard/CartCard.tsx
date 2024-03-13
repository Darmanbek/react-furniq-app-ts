import React from "react";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import { ButtonCount, ProductImage, ProductView } from "@/widgets";
import { TProduct } from "@/models";
import "./cartCard.scss";
import { priceFormatter } from "@/hooks";

interface CartCardProps {
    cart: TProduct;
}

const CartCard: React.FC<CartCardProps> = ({ cart }) => {
    const { t } = useTranslation();
    const lang = Cookies.get("lang") || "RU";

    const getTranslate = (title: any) => ({
            RU: title.ru,
            QQ: title.latin,
            QR: title.kiril,
    }[lang]);
    
    return (
        <div className="cart-card">
            <div className="cart-card__img">
                {cart && <ProductImage image={cart.image} />}
            </div>
            <div className="cart-card__info">
                <div className="info-desc">
                    <div className="info-top">
                        <h1>{t(getTranslate(cart.name))}</h1>
                        <ProductView
                            rating={cart.rating}
                            reviews_count={cart.reviews_count}
                        />
                    </div>
                    <div className="info-bottom">
                        <div className="info-create">
                            <span>Created at: {cart.created_at}</span>
                        </div>
                        <div className="info-update">
                            <span>Updated at: {cart.updated_at}</span>
                        </div>
                    </div>
                </div>
                <div className="info-shop">
                    <div className="info-shop__price">
                        <span>{`${priceFormatter(cart.price * 1.8)} ${t("currency")}`}</span>
                        {`${priceFormatter(cart.price)} ${t("currency")}`}
                    </div>
                    <ButtonCount />
                </div>
            </div>
        </div>
    );
};

export default CartCard;
