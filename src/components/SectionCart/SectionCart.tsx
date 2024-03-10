import React from "react";
import { NumericFormat } from "react-number-format";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import { CartCard, Title } from "@/widgets";
import { useCartStore } from "@/store";
import "./sectionCart.scss";

const SectionCart: React.FC = () => {
    const { cart } = useCartStore();
    const { t } = useTranslation();

    const lang = Cookies.get("lang") || "RU";

    const getTranslate = (title: any) => (
        lang === "RU" ? title.ru : lang === "QQ" ? title.latin : title.kiril
    )
    return (
        <section className="section-cart">
            <div className="container">
                <div className="cart-inner">
                    <Title title="Home" subTitle="Korzinka" />
                    <div className="cart-block">
                        <div className="cart-list">
                            {cart.map((item, index) => (
                                <CartCard key={index} data={item}/>
                            ))}
                        </div>
                        <div className="cart-order">
                            <h2 className="order-title">Vash zakaz</h2>
                            <div className="order-count">
                                <span>Tovari:</span>
                            </div>
                            <ul className="order-list">
                                {cart.map((item) => (
                                    <li key={item.id}>
                                        {getTranslate(item.name)}
                                    </li>
                                ))}
                            </ul>
                            <div className="order-total">
                                <span>Itogo:</span>
                                <span>
                                    <NumericFormat
                                    value={cart.reduce((total, item) => total + item.price, 0)}
                                    suffix={` ${t("currency")}`}
                                    thousandSeparator=" " 
                                    />
                                </span>
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
