import React from "react";
import { message } from "antd";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useWishesStore } from "@/store";
import { TProduct, TProductDetailsData } from "@/models";
import "./productLike.scss";

interface ProductLikeProps {
    data: TProduct | TProductDetailsData;
}

const ProductLike: React.FC<ProductLikeProps> = ({ data }) => {
    const { wishes, setWishes, removeWishes, findWishes } = useWishesStore();

    const handleClick = () => {
        if (findWishes(data.id)) {
            removeWishes(data.id);
            message.error("Удалено из избранного")
        } else {
            setWishes(data);
            message.success("Добавлено в избранное")
        }
    };

    return (
        <button className="product-like" onClick={handleClick}>
            {wishes.find((wish) => wish.id === data.id) ? (
                <FaHeart className="icon-like fill" />
            ) : (
                <FaRegHeart className="icon-like" />
            )}
        </button>
    );
};

export default ProductLike;
