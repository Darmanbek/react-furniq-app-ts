import React from "react";
import { IoMdStar } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { ButtonCount, ProductLike } from "@/widgets";
import { NoImage } from "@/assets";
import "./detailsInfo.scss";
import { Link } from "react-router-dom";

const DetailsInfo: React.FC = () => {
    return (
        <div className="details-info">
            <h1 className="info-title">
                Produkt pro Dukt FurniQ, 200 cm3, material
            </h1>
            <div className="info-subtitle">
                <div className="info-view">
                    <div className="info-view__rating">
                        <IoMdStar className="icon_star" />
                        <span>4.5</span>
                    </div>
                    <span className="info-view__review">(1298 отзывов)</span>
                </div>
                <div className="info-seller">
                    <span>Prodavec: Karsoft IT</span>
                </div>
                <div className="info-order">
                    <span>Dostavka: 5 biznes dney</span>
                </div>
                <ProductLike />
            </div>
            <div className="info-views">
                <h2 className="views-title">Turlari</h2>
                <ul className="views-images">
                    <li>
                        <button><img src={NoImage} alt="Image" /></button>
                    </li>
                    <li>
                        <button><img src={NoImage} alt="Image" /></button>
                    </li>
                    <li>
                        <button><img src={NoImage} alt="Image" /></button>
                    </li>
                    <li className="no-active">
                        <button><img src={NoImage} alt="Image" /></button>
                    </li>
                </ul>
            </div>
            <div className="info-count">
                <h2 className="count-title">Mugdar</h2>
                <ButtonCount size="large" />
            </div>
            <div className="info-price">
                <span>34 630 059.6 сум</span>
                19 238 922 сум
            </div>
            <Link to="/cart" className="info-credits">
                <span>50,000/ay v rassrochku</span>
                <IoIosArrowForward className="icon-forward" />
            </Link>

            <div className="info-add-cart">
                <button className="fill">Add to cart</button>
                <button className="stroke">Add to cart</button>
            </div>
        </div>
    );
};

export default DetailsInfo;
