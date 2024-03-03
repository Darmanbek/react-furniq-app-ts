import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { RiShoppingBag3Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./headerBottomRight.scss";

const HeaderBottomRight: React.FC = () => {
    return (
        <div className="header__bottom-right">
            <Link to="/wishes" className="bottom-right__link">
                <FaRegHeart className="bottom-right__icon" />
            </Link>
            <Link to="/cart" className="bottom-right__link">
                <RiShoppingBag3Line className="bottom-right__icon" />
            </Link>
            <Link to="/register" className="bottom-right__link">
                <FaRegUser className="bottom-right__icon" />
                <span></span>
            </Link>
        </div>
    );
};

export default HeaderBottomRight;
