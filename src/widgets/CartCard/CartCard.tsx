import React from "react";
import { ProductImage } from "@/widgets";
import { TCartProduct } from "@/models";
import CardShop from "./CardShop/CardShop";
import CardInfo from "./CardInfo/CardInfo";
import "./cartCard.scss";

interface CartCardProps {
    cart: TCartProduct;
}

const CartCard: React.FC<CartCardProps> = ({ cart }) => {
    return (
        <div className="cart-card">
            <div className="cart-card__block">
                <div className="cart-card__img">
                    {cart && <ProductImage image={cart.image} />}
                </div>
                <CardInfo cart={cart}/>
            </div>
            <CardShop cart={cart}/>
        </div>
    );
};

export default CartCard;
