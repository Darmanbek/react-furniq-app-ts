import React from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { FaRegUser, FaUser } from "react-icons/fa6";
import { RiShoppingBag3Line, RiShoppingBag3Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useAuthPersistStore, useNavStore } from "@/store";
import "./headerBottomRight.scss";

const HeaderBottomRight: React.FC = () => {
    const { token } = useAuthPersistStore();
    const { path, toPath } = useNavStore();

    const handleLink = (link: string) => {
        toPath(link)
    }

    const isActive = (link: string) => path === link

    const signLink = token ? "/profile/orders" : "/register"

    return (
        <div className="header__bottom-right">
            <Link
                to="/wishes"
                className="bottom-right__link"
                onClick={() => handleLink("/wishes")}
            >
                {isActive("/wishes") ? (
                    <FaHeart className="bottom-right__icon" />
                ) : (
                    <FaRegHeart className="bottom-right__icon" />
                )}
            </Link>
            <Link
                to="/cart"
                className="bottom-right__link"
                onClick={() => handleLink("/cart")}
            >
                {isActive("/cart") ? (
                    <RiShoppingBag3Fill className="bottom-right__icon" />
                ) : (
                    <RiShoppingBag3Line className="bottom-right__icon" />
                )}
            </Link>
            <Link
                to={signLink}
                className="bottom-right__link"
                onClick={() => handleLink(signLink)}
            >
                {isActive(signLink) ? (
                    <FaUser className="bottom-right__icon" />
                ) : (
                    <FaRegUser className="bottom-right__icon" />
                )}
                <span></span>
            </Link>
        </div>
    );
};

export default HeaderBottomRight;
