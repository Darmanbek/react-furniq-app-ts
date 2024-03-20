import React from "react";
import { useTranslation } from "react-i18next";
import { ButtonCount, ProductLike, ProductView } from "@/widgets";
import { NoImage } from "@/assets";
import { TCartProduct, TProductDetailsData } from "@/models";
import { nameTranslate, priceFormatter, useCount } from "@/hooks";
import { useCartStore, useProductsStore } from "@/store";
import { message } from "antd";
import "./detailsInfo.scss";

interface DetailsInfoProps {
    detailsData: TProductDetailsData;
}

const DetailsInfo: React.FC<DetailsInfoProps> = ({ detailsData }) => {
    const { t } = useTranslation();
    const { setCart, removeCart, findCart } = useCartStore();
    const { getProductById } = useProductsStore();
    const { count, decrement, increment } = useCount(1, detailsData.quantity);

    const setDataCart = () => {
        if (findCart(detailsData.id)) {
            removeCart(detailsData.id);
            message.error("Удален из корзины");
        } else {
            const newData = getProductById(detailsData.id);
            const quantity = detailsData.quantity;
            const seller = detailsData.seller;
            const color = detailsData.color;
            const material = detailsData.material;
            if (newData) {
                const cartProduct: TCartProduct = {
                    ...newData,
                    seller,
                    color,
                    material,
                    count,
                    quantity,
                };
                setCart(cartProduct);
                message.success("Успешно");
            } else {
                message.error("Ошибка");
            }
        }
    };

    const quantityStatus = detailsData.quantity > 10 ? "more" : "less";
    const quantityCount =
        detailsData.quantity > 10 ? "quantityMore" : "quantityLess";

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
                <button className="fill" onClick={setDataCart}>
                    {t("addToCart")}
                </button>
                <button className="stroke">{t("buy")}</button>
            </div>
        </div>
    );
};

export default DetailsInfo;
