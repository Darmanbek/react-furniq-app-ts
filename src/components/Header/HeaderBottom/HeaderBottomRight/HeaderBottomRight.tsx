import React from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { FaRegUser, FaUser } from "react-icons/fa6";
import { RiShoppingBag3Line, RiShoppingBag3Fill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { useAuthPersistStore } from "@/store";
import "./headerBottomRight.scss";

const HeaderBottomRight: React.FC = () => {
    const { token } = useAuthPersistStore();

    const signLink = token ? "/profile/orders" : "/register"

    return (
        <div className="header__bottom-right">
            <NavLink
                to="/wishes"
                className="bottom-right__link"
            >
                <FaHeart className="bottom-right__icon fill" />
                <FaRegHeart className="bottom-right__icon stroke" />
            </NavLink>
            <NavLink
                to="/cart"
                className="bottom-right__link"
            >
                <RiShoppingBag3Fill className="bottom-right__icon fill" />
                <RiShoppingBag3Line className="bottom-right__icon stroke" />
            </NavLink>
            <NavLink
                to={signLink}
                className="bottom-right__link"
            >
                <FaUser className="bottom-right__icon fill" />
                <FaRegUser className="bottom-right__icon stroke" />
                {!token &&
                <span></span>}
            </NavLink>
        </div>
    );
};

export default HeaderBottomRight;
