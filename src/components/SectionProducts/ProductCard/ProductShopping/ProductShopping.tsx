import React from "react";
import { TbShoppingBagPlus } from 'react-icons/tb';
import "./ProductShopping.scss";

const ProductShopping: React.FC = () => {
    return (
        <button className="product-shopping">
            <TbShoppingBagPlus className="icon-shopping" />
        </button>
    );
};

export default ProductShopping;
