import React from "react";
import { NumericFormat } from "react-number-format";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import { IoMdStar } from "react-icons/io";
import { NoImage } from "@/assets";
import { ButtonCount } from "@/widgets";
import { TProduct } from "@/models";
import "./cartCard.scss";

interface CartCardProps {
    data: TProduct
}

const CartCard: React.FC<CartCardProps> = ({ data }) => {
    const { t } = useTranslation();
    const lang = Cookies.get("lang") || "RU";

    const getTranslate = (title: any) => (
        lang === "RU" ? title.ru : lang === "QQ" ? title.latin : title.kiril
    )

    return (
        <div className="cart-card">
            <div className="cart-card__img">
                <img 
                src={data?.image ? data.image.url : NoImage}
                alt={data?.image?.url}
                />
            </div>
            <div className="cart-card__info">
                <div className="info-desc">
                    <div className="info-top">
                        <h1>
                        {t(getTranslate(data.name))}
                        </h1>
                        {/* <h1>Produkt pro Dukt FurniQ, 200 cm3, material</h1> */}
                        <div className="info-view">
                            <div className="info-view__rating">
                                <IoMdStar className="icon_star" />
                                <span>4.5</span>
                            </div>
                            <span className="info-view__review">
                                ({`${data.reviews_count} ${t("review")}`})
                            </span>
                        </div>
                    </div>
                    <div className="info-bottom">
                        <div className="info-seller">
                            <span>Prodavec: Karsoft IT</span>
                            
                        </div>
                        <div className="info-order">
                            <span>Dostavka: 5 biznes dney</span>
                        </div>
                    </div>
                </div>
                <div className="info-shop">
                    <div className="info-shop__price">
                        <span>
                            <NumericFormat
                            value={data.price * 1.8}
                            suffix={` ${t("currency")}`}
                            thousandSeparator=" " 
                            />
                        </span>
                        <NumericFormat
                        value={data.price}
                        suffix={` ${t("currency")}`}
                        thousandSeparator=" " 
                        />
                    </div>
                    <ButtonCount />
                </div>
            </div>
        </div>
    );
};

export default CartCard;
