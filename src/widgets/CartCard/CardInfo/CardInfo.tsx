import React from "react";
import { nameTranslate } from "@/hooks";
import { ProductView } from "@/widgets";
import { useTranslation } from "react-i18next";
import { TCartProduct } from "@/models";
import "./cardInfo.scss";

interface CardInfoProps {
    cart: TCartProduct;
}

const CardInfo: React.FC<CardInfoProps> = ({ cart }) => {
    const { t } = useTranslation();

    return (
        <div className="cart-card__info">
            <div className="info-desc">
                <div className="info-top">
                    <h1>{t(nameTranslate(cart.name))}</h1>
                    <ProductView
                        rating={cart.rating}
                        reviews_count={cart.reviews_count}
                    />
                </div>
                <div className="info-bottom">
                    <div className="info-block">
                        <span className="info-title">
                            {`${t("seller")}: `}
                            <span className="info-name">
                                {cart.seller.company_name}
                            </span>
                        </span>
                    </div>
                    <div className="info-block">
                        
                        <span className="info-title">
                            {`${t("color")}: `}
                            <span className="info-name">
                                {t(nameTranslate(cart.color.name))}
                            </span>
                        </span>
                    </div>
                    <div className="info-block">
                        <span className="info-title">
                            {`${t("material")}: `}
                            <span className="info-name">
                                {t(nameTranslate(cart.material.name))}
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardInfo;
