import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { useCreateOrdersMutation } from "@/services";
import { priceFormatter, nameTranslate, useOpen } from "@/hooks";
import { useAuthPersistStore, useCartStore } from "@/store";
import { Click } from "@/assets";
import { CartCard, Title } from "@/widgets";
import { message } from "antd";
import { ModalPayment } from "@/components/Modal";
import "./sectionCart.scss";

const SectionCart: React.FC = () => {
    const { t } = useTranslation();
    const { data: myOrders, mutate: createOrders, isSuccess, isPending } = useCreateOrdersMutation()
    const { cart, cleanCart } = useCartStore();
    const { open, handleOpen } = useOpen(false)
    const { token } = useAuthPersistStore();
    const navigate = useNavigate();

    const title = {
        name: "home",
        link: "/"
    }

    const subTitle = {
        name: "cart",
        link: "/cart"
    }

    const clickCheckOut = () => {
        if (!token) {
            navigate("/register");
        } else {
            const orders = {
                payment_type_id: 1,
                products: cart.map((product) => {
                    return {
                        product_id: product.id,
                        quantity: product.count
                    }
                })
            }
            createOrders(orders)
        }
    }

    useEffect(() => {
        if (isSuccess) {
            message.success("Благодарим за покупку!")
            if (myOrders.data.Success) {
                handleOpen()
                cleanCart()
            }
        }
    }, [isSuccess, createOrders])
    return (
        <section className="section-cart">
            <div className="container">
                <div className="cart-inner">
                    <Title title={title} subTitle={subTitle} />
                    <div className="cart-block">
                        {cart.length === 0 && <h1 className="not-found">{t("notFound")}</h1>}
                        { cart.length > 0 && <>
                            <div className="cart-list">
                                {cart.map((item, index) => (
                                    <CartCard key={index} cart={item}/>
                                ))}
                            </div>
                            <div className="cart-order">
                                <h2 className="order-title">{t("yourOrder")}</h2>
                                <div className="order-count">
                                    <span>{t("products")}</span>
                                    <span>{cart.length}</span>
                                </div>
                                <ul className="order-list">
                                    {cart.map((item) => (
                                        <li key={item.id}>
                                            <span>{nameTranslate(item.name)}</span>
                                            <span>x{item.count}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="order-total">
                                    <span>{t("totalPrice")}</span>
                                    <span>
                                        {`${priceFormatter(
                                            cart.reduce(
                                                (total, item) => total + ((item.discount_price ? item.discount_price : item.price) * item.count),
                                                0
                                            )
                                        )} ${t("currency")}`}
                                    </span>
                                </div>
                                <div className="order-checkout">
                                    <span>{t("paymentType")}:</span>
                                    <span><img src={Click} alt="click" /></span>
                                </div>
                                <button onClick={clickCheckOut} className="order-button">
                                    {t("checkout")}
                                </button>
                                {isPending && <div className="loading"><CircularProgress className="loading-icon"/></div>}
                            </div>
                        </>}
                        <ModalPayment 
                            modal={open}
                            handleOpen={handleOpen}
                            url={myOrders?.data.url}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionCart;
