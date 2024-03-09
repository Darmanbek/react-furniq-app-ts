import { NoImage } from "@/assets";
import React from "react";
import { ButtonCount } from "@/widgets"
import { IoMdStar } from "react-icons/io";
import "./orderCard.scss"

const OrderCard: React.FC = () => {
    return (
        <div className="order-card">
            <div className="order-card__img">
                <img src={NoImage} alt="No Image" />
            </div>
            <div className="order-card__info">
                <div className="info-desc">
                    <div className="info-top">
                        <h1>Produkt pro Dukt FurniQ, 200 cm3, material</h1>
                        <div className="info-view">
                            <div className="info-view__rating">
                                <IoMdStar className="icon_star" />
                                <span>4.5</span>
                            </div>
                            <span className="info-view__review">
                                (1298 отзывов)
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
                        <span>34 630 059.6 сум</span>
                        19 238 922 сум
                    </div>
                    <ButtonCount />
                </div>
            </div>
        </div>
    );
};

export default OrderCard;
