import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { IoMdStar } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import ProductImage from "@/widgets/ProductImage/ProductImage";
import { priceFormatter, useOpen } from "@/hooks";
import { ModalRating } from "@/components";
import { TProductOrder } from "@/models";
import {
    useCreateReviewMutation,
    useGetMeQuery,
    useGetReviewsQuery,
} from "@/services";
import "./orderCardProduct.scss";

interface orderCardProductProps {
    product: TProductOrder;
}

const OrderCardProduct: React.FC<orderCardProductProps> = ({ product }) => {
    const { t } = useTranslation();
    const { open, handleOpen } = useOpen(false);
    const { data: meUser } = useGetMeQuery();
    const { data: reviews } = useGetReviewsQuery(product.id);
    const { mutate: createReview } = useCreateReviewMutation(product.id);

    const [myReview, setMyReview] = useState<{
        id: number | undefined,
        rating: number
    }>()

    const sendReview = (rating: number, body: string) => {
        createReview({
            rating,
            body,
        });
        setMyReview({
            id: myReview?.id,
            rating
        })
    };

    useEffect(() => {
        const findReview= reviews?.data.find(
            (item) => item.user.id === meUser?.data.id
        );
        if (findReview) {
            setMyReview({
                id: findReview.id,
                rating: findReview.rating,
            })
        }
    }, [reviews, meUser, createReview])
    return (
        <div className="order-card-product" id={`${product.id}`}>
            <div className="product-img">
                <ProductImage image={product.image} />
            </div>
            <div className="product-info">
                <div className="info-item">
                    <h3 className="product-title">{product.name}</h3>
                </div>
                <div className="info-item">
                    <span>
                        {`${t("color")}: `}
                        <span className="title">{product.color}</span>
                    </span>
                </div>
                <div className="info-item">
                    <span>
                        {`${t("material")}: `}
                        <span className="title">{product.material}</span>
                    </span>
                </div>
                <div className="info-item">
                    <span>
                        {`${t("count")}: `}
                        <span className="title">{product.quantity}</span>
                    </span>
                </div>
                <div className="info-item">
                    <span>
                        {`${t("price")}: `}
                        <span className="title">
                            {priceFormatter(product.price)}
                        </span>
                    </span>
                </div>
                {myReview ? (
                    <button className="update-order">
                        <IoMdStar className="order-icon" />
                        {myReview.rating}
                        {/* <CiEdit className="order-icon" /> */}
                    </button>
                ) : (
                    <>
                        <button onClick={handleOpen} className="create-order">
                            {t("createOrder")}
                        </button>
                    </>
                )}
                <ModalRating
                    modal={open}
                    handleOpen={handleOpen}
                    sendReview={sendReview}
                />
            </div>
        </div>
    );
};

export default OrderCardProduct;
