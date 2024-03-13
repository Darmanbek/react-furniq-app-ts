import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useWishesStore } from "@/store";
import "./productLike.scss";
import { useGetProductsQuery } from "@/services";

interface ProductLikeProps {
    id: number;
}

const ProductLike: React.FC<ProductLikeProps> = ({ id }) => {
    const { wishes, setWishes, removeWishes } = useWishesStore();
    const { data } = useGetProductsQuery()

    const handleClick = () => {
        if (!data) return
        if (wishes.find((wish) => id === wish.id)) {
            removeWishes(id);
        } else {
            const product = data.data.find((product) => product.id === id)
            if (product) {
                setWishes(product);
            }
        }
    };

    return (
        <button className="product-like" onClick={handleClick}>
            {wishes.find((wish) => wish.id === id) ? (
                <FaHeart className="icon-like fill" />
            ) : (
                <FaRegHeart className="icon-like" />
            )}
        </button>
    );
};

export default ProductLike;
