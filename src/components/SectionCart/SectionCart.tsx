import React from "react";
import "./sectionCart.scss";
import { CartCard, Title } from "@/widgets";

const SectionCart: React.FC = () => {
    return (
        <section className="section-cart">
            <div className="container">
                <div className="cart-inner">
                    <Title title="Home" subTitle="Korzinka" />
                    <div className="cart-block">
                        <div className="cart-list">
                            {[...Array(4)].map((el) => (
                                <CartCard key={el} />
                            ))}
                        </div>
                        <div className="cart-order">
                            <h2 className="order-title">Vash zakaz</h2>
                            <div className="order-count">
                                <span>Tovari:</span>
                            </div>
                            <ul className="order-list">
                                {[...Array(4)].map((el) => (
                                    <li key={el}>
                                    Produkt pro Dukt FurniQ, 200 cm3, material
                                    </li>
                                ))}
                            </ul>
                            <div className="order-total">
                                <span>Itogo:</span>
                                <span>399,000</span>
                            </div>
                            <button className="order-button">
                                Oformit Zakaz
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionCart;
