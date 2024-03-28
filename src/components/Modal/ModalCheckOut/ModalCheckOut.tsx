import React from "react";
import { Modal } from "antd";
import { useTranslation } from "react-i18next";
import { Click } from "@/assets";
import { nameTranslate, priceFormatter } from "@/hooks";
import { TCartProduct } from "@/models";
import { CircularProgress } from "@mui/material";
import "./modalCheckOut.scss";

interface ModalCheckOutProps {
    modal: boolean;
    handleOpen: () => void;
    product: TCartProduct;
    buyClick: () => void;
    isLoading: boolean
}

const ModalCheckOut: React.FC<ModalCheckOutProps> = ({
    modal,
    handleOpen,
    isLoading,
    product,
    buyClick
}) => {
    const { t } = useTranslation();
    

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
                    disabled={isLoading}
                >
                    {isLoading ? <CircularProgress size={20} /> : t("checkout")}
                </button>
            </div>
        </Modal>
    );
};

export default ModalCheckOut;
