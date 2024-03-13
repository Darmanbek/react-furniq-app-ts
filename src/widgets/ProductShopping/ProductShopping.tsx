import React from "react";
import { message } from "antd";
import { TbShoppingBagPlus } from "react-icons/tb";
import { TProduct } from "@/models";
import { useCartStore } from "@/store";
import "./ProductShopping.scss";

interface ProductShoppingProps {
    data: TProduct;
}

const ProductShopping: React.FC<ProductShoppingProps> = ({ data }) => {
    const { cart, setCart, removeCart } = useCartStore();

    const handleClick = () => {
        if (cart.find((item) => item.id === data.id)) {
            removeCart(data.id);
            message.error("Удален из корзины");
        } else {
            setCart(data);
            message.success("Успешно");
        }
    };

    return (
        <button className="product-shopping" onClick={handleClick}>
            <TbShoppingBagPlus className="icon-shopping" />
        </button>
    );
};

export default ProductShopping;
