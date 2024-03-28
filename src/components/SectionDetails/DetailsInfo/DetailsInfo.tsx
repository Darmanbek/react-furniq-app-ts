import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ButtonCount, ProductLike, ProductView } from "@/widgets";
import { TCartProduct, TProductDetailsData } from "@/models";
import { nameTranslate, priceFormatter, useCount, useOpen } from "@/hooks";
import { useAuthPersistStore, useCartStore } from "@/store";
import { message } from "antd";
import { ModalCheckOut, ModalPayment } from "@/components/Modal";
import { useCreateOrdersMutation } from "@/services";
import { useNavigate } from "react-router-dom";
import "./detailsInfo.scss";

interface DetailsInfoProps {
    detailsData: TProductDetailsData;
}

const DetailsInfo: React.FC<DetailsInfoProps> = ({ detailsData }) => {
    const { t } = useTranslation();
    const { setCart, updateCart, findCart } = useCartStore();
    const { open: modal, handleOpen } = useOpen(false);
    const { open: chekout, handleOpen: handleCheckout } = useOpen(false);

    const {
        data: myOrder,
        mutate: createOrder,
        isPending: isCreateOrder,
        isSuccess,
    } = useCreateOrdersMutation();
    const { count, decrement, increment, setCount } = useCount(detailsData.quantity !== 0 ? 1 : 0, detailsData.quantity);
    const { token } = useAuthPersistStore()
    const navigate = useNavigate();

    const setDataCart = () => {
        const findDataCart = findCart(detailsData.id)
        if (findDataCart) {
            updateCart({
                ...detailsData,
                count: findDataCart.count + count,
            });
            message.success("Обновлен в корзине!");
        } else {
            const cartProduct: TCartProduct = {
                ...detailsData,
                count,
            };
            setCart(cartProduct);
            message.success("Добавлен в корзину!");
        }
    };

    const buyClick = () => {
        if (!token) {
            navigate("/register")
            return
        }
        createOrder({
            payment_type_id: 1,
            products: [
                {
                    product_id: detailsData.id,
                    quantity: count,
                },
            ],
        });
    };

    const quantityStatus = detailsData.quantity > 10 ? "more" : "less";
    const quantityCount =
        detailsData.quantity > 10 ? "quantityMore" : "quantityLess";

    useEffect(() => {
        if (isSuccess) {
            handleOpen();
            setCount(1);
            message.success("Благодарим за покупку!");
            if (myOrder.data.Success) {
                handleCheckout();
            }
        }
    }, [createOrder, isSuccess]);
    return (
        <div className="details-info">
            <div className="info-top">
                <h1 className="info-title">
                    {t(nameTranslate(detailsData.name))}
                </h1>
                <div className="info-subtitle">
                    <ProductView
                        rating={detailsData.rating}
                        reviews_count={detailsData.reviews_count}
                    />
                    <div className="info-seller">
                        <span>
                            {t("seller")}: {detailsData.seller.company_name}
                        </span>
                    </div>
                    <ProductLike data={detailsData} />
                </div>
            </div>
            <h2 className="info-views-title">
                {`${t("color")}: `}
                <span>{t(nameTranslate(detailsData.color.name))}</span>
            </h2>
            <h2 className="info-materials-title">
                {`${t("material")}: `}
                <span>{t(nameTranslate(detailsData.material.name))}</span>
            </h2>
            <div className="info-count">
                <h2 className="count-title">{`${t("count")} :`}</h2>
                <div className="count-block">
                    <ButtonCount
                        count={count}
                        quantity={detailsData.quantity}
                        decrement={decrement}
                        increment={increment}
                    />
                    <span className={`quantity ${quantityStatus}`}>
                        {`${t(quantityCount)}: `}
                        {detailsData.quantity}
                    </span>
                </div>
            </div>
            <div className="info-price">
                {detailsData.discount_price ? (
                    <>
                        <div className="price-cash">
                            <span className="cash-price">
                                {`${priceFormatter(detailsData.price)} ${t(
                                    "currency"
                                )}`}
                            </span>
                            <span className="cash-title">{t("cash")}</span>
                        </div>
                        {`${priceFormatter(
                            detailsData?.discount_price * count
                        )} ${t("currency")}`}
                    </>
                ) : (
                    <>
                        {`${priceFormatter(detailsData?.price * count)} ${t(
                            "currency"
                        )}`}
                    </>
                )}
            </div>

            <div className="info-add-cart">
                <button className="fill" onClick={setDataCart} disabled={detailsData.quantity === 0}>
                    {t("addToCart")}
                </button>
                <button className="stroke" onClick={handleOpen} disabled={detailsData.quantity === 0}>{t("buy")}</button>
                <ModalCheckOut 
                    modal={modal}
                    handleOpen={handleOpen}
                    buyClick={buyClick}
                    product={{
                        ...detailsData,
                        count
                    }}
                    isLoading={isCreateOrder}
                />
                <ModalPayment 
                modal={chekout}
                handleOpen={handleCheckout}
                url={myOrder?.data.url}
                />
            </div>
        </div>
    );
};

export default DetailsInfo;
