import React, { useEffect } from "react";
import { message, Modal } from "antd";
import { useTranslation } from "react-i18next";
import { Click } from "@/assets";
import { nameTranslate, priceFormatter } from "@/hooks";
import { TCartProduct } from "@/models";
import "./modalCheckOut.scss";
import { useCreateOrdersMutation } from "@/services";
import { CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface ModalCheckOutProps {
    modal: boolean;
    defaultCount: () => void;
    product: TCartProduct;
    handleOpen: () => void;
}

const ModalCheckOut: React.FC<ModalCheckOutProps> = ({
    modal,
    handleOpen,
    defaultCount,
    product,
}) => {
    const {
        mutate: createOrder,
        isPending,
        isSuccess,
    } = useCreateOrdersMutation();
    const { t } = useTranslation();
    const navigate = useNavigate();

    const buyClick = () => {
        createOrder({
            payment_type_id: 1,
            products: [
                {
                    product_id: product.id,
                    quantity: product.count,
                },
            ],
        });
    };

    useEffect(() => {
        if (isSuccess) {
            handleOpen();
            defaultCount();
            navigate("/profile/orders");
            message.success("Благодарим за покупку!");
        }
    }, [createOrder, isSuccess]);
    return (
        <Modal
            centered
            title={<h2 style={{ color: "#425463" }}>{t("checkout")}</h2>}
            open={modal}
            onCancel={handleOpen}
            className="modal-checkout"
            footer={null}
        >
            <div className="modal-checkout-inner">
                <div className="order-count">
                    <span>{t("products")}</span>
                    <span>1</span>
                </div>
                <ul className="order-list">
                    <li>
                        <span>{nameTranslate(product.name)}</span>
                        <span>x{product.count}</span>
                    </li>
                </ul>
                <div className="order-total">
                    <span>{t("totalPrice")}</span>
                    <span>
                        {`${priceFormatter(
                            (product.discount_price
                                ? product.discount_price
                                : product.price) * product.count
                        )} ${t("currency")}`}
                    </span>
                </div>
                <div className="order-checkout">
                    <span>{t("paymentType")}:</span>
                    <span>
                        <img src={Click} alt="click" />
                    </span>
                </div>
                <button
                    className="order-button"
                    onClick={buyClick}
                    disabled={isPending}
                >
                    {isPending ? <CircularProgress size={20} /> : t("checkout")}
                </button>
            </div>
        </Modal>
    );
};

export default ModalCheckOut;
