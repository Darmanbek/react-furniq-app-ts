import React from "react";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import { CartCard, Title } from "@/widgets";
import { useCartStore } from "@/store";
import "./sectionCart.scss";
import { priceFormatter } from "@/hooks";

const SectionCart: React.FC = () => {
    const { cart } = useCartStore();
    const { t } = useTranslation();

    const lang = Cookies.get("lang") || "RU";

    const getTranslate = (title: any) =>
        lang === "RU" ? title.ru : lang === "QQ" ? title.latin : title.kiril;

    return (
        <section className="section-cart">
            <div className="container">
                <div className="cart-inner">
                    <Title title="home" subTitle="cart" />
                    <div className="cart-block">
                        <div className="cart-list">
                            {cart.map((item, index) => (
                                <CartCard key={index} cart={item} />
                            ))}
                        </div>
                        <div className="cart-order">
                            <h2 className="order-title">{t("yourOrder")}</h2>
                            <div className="order-count">
                                <span>{t("products")}</span>
                            </div>
                            <ul className="order-list">
                                {cart.map((item) => (
                                    <li key={item.id}>
                                        {getTranslate(item.name)}
                                    </li>
                                ))}
                            </ul>
                            <div className="order-total">
                                <span>{t("totalPrice")}</span>
                                <span>
                                    {`${priceFormatter(
                                        cart.reduce(
                                            (total, item) => total + item.price,
                                            0
                                        )
                                    )} ${t("currency")}`}
                                </span>
                            </div>
                            <button className="order-button">
                                {t("checkout")}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionCart;
