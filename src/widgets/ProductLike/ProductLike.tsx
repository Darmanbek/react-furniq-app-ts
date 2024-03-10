import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { TProduct } from "@/models";
import { useWishesStore } from "@/store";
import "./productLike.scss";

interface ProductLikeProps {
    data: TProduct;
}

const ProductLike: React.FC<ProductLikeProps> = ({ data }) => {
    const { wishes, setWishes, removeWishes } = useWishesStore();

    const handleClick = () => {
        if (wishes.find((wish) => data.id === wish.id)) {
            removeWishes(data.id);
        } else {
            setWishes(data);
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
