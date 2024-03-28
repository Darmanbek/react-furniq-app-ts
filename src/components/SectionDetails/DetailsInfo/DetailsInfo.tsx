import React from "react";
import { useTranslation } from "react-i18next";
import { ButtonCount, ProductLike, ProductView } from "@/widgets";
import { TCartProduct, TProductDetailsData } from "@/models";
import { nameTranslate, priceFormatter, useCount } from "@/hooks";
import { useCartStore } from "@/store";
import { message } from "antd";
import "./detailsInfo.scss";

interface DetailsInfoProps {
    detailsData: TProductDetailsData;
}

const DetailsInfo: React.FC<DetailsInfoProps> = ({ detailsData }) => {
    const { t } = useTranslation();
    const { setCart, updateCart, findCart } = useCartStore();
    const { count, decrement, increment } = useCount(1, detailsData.quantity);

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

    const buyDataCart = () => {

    }

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
