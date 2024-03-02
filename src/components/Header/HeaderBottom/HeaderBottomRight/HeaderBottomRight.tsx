import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { RiShoppingBag3Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./headerBottomRight.scss";

const HeaderBottomRight: React.FC = () => {
    return (
        <div className="header__bottom-right">
            <Link to="/wishes">
                <FaRegHeart className="header__bottom-right__icon" />
            </Link>
            <Link to="/cart">
                <RiShoppingBag3Line className="header__bottom-right__icon" />
            </Link>
            <Link to="/register">
                <FaRegUser className="header__bottom-right__icon" />
            </Link>
        </div>
    );
};

export default HeaderBottomRight;
