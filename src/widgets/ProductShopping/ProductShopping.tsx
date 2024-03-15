import React from "react";
import { message } from "antd";
import { TbShoppingBagPlus, TbShoppingBagMinus } from "react-icons/tb";
import { TCartProduct, TProduct } from "@/models";
import { useCartStore } from "@/store";
import { useGetProductByIdQuery } from "@/services";
import "./ProductShopping.scss";

interface ProductShoppingProps {
    data: TProduct;
}

const ProductShopping: React.FC<ProductShoppingProps> = ({ data }) => {
    const { setCart, removeCart, findCart } = useCartStore();
    const { data: detailsData } = useGetProductByIdQuery(data.id);
    
    const handleClick = () => {
        if (findCart(data.id)) {
            removeCart(data.id);
            message.error("Удален из корзины");
        } else {
            if (detailsData) {
                const quantity = detailsData.data.quantity;
                const seller = detailsData.data.seller;
                const color = detailsData.data.color;
                const material = detailsData.data.material;
                const cartProduct: TCartProduct = {
                    ...data,
                    seller,
                    color,
                    material,
                    count: 1,
                    quantity,
                };
                setCart(cartProduct);
                message.success("Добавлен в корзину");
            } else {
                message.error("Ошибка");
            }
        }
    };

    return (
        <button className="product-shopping" onClick={handleClick}>
            {findCart(data.id) ? (
                <TbShoppingBagMinus className="icon-shopping fill" />
            ) : (
                <TbShoppingBagPlus className="icon-shopping" />
            )}
        </button>
    );
};

export default ProductShopping;
