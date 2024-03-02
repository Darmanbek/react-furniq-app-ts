import React from "react";
import { Link } from "react-router-dom";
import { FurniqLogo as Logo } from "@/assets";
import "./HeaderBottomLeft.scss";

const HeaderBottomLeft: React.FC = () => {
    return (
        <div className="header__bottom-left">
            <Link to="/">
                <img src={Logo} alt="Logo" />
            </Link>
            <div className="header__bottom-left__catalog">
                <button>Katalog</button>
            </div>
        </div>
    );
};

export default HeaderBottomLeft;
