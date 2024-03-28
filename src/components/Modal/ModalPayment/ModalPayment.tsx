import { Modal } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import "./modalPayment.scss";
import { Click } from "@/assets";
import { useNavigate } from "react-router-dom";

interface ModalPaymentProps {
    modal: boolean;
    handleOpen: () => void;
    url?: string;
}

const ModalPayment: React.FC<ModalPaymentProps> = ({
    modal,
    handleOpen,
    url,
}) => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const payClick = () => {
        navigate("/profile/orders");
    }

    return (
        <Modal
            centered
            title={<h2 style={{ color: "#425463" }}>{t("checkout2")}</h2>}
            open={modal}
            onCancel={handleOpen}
            className="modal-payment"
            footer={null}
        >
            <div className="modal-payment-inner">
                <div className="payment-checkout">
                    <span>{t("paymentType")}:</span>
                    <span>
                        <img src={Click} alt="click" />
                    </span>
                </div>
                <a href={url} target="_blank" className="payment-button" onClick={payClick}>
                    {t("buyCheckout")}
                </a>
            </div>
        </Modal>
    );
};

export default ModalPayment;
