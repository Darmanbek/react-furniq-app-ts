import React, { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { FaRegUser, FaUser } from "react-icons/fa6";
import { RiShoppingBag3Line, RiShoppingBag3Fill  } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./headerBottomRight.scss";

const HeaderBottomRight: React.FC = () => {
    const [nav, setNav] = useState(0)
    return (
        <div className="header__bottom-right">
            <Link to="/wishes" className="bottom-right__link" onClick={(e) => setNav(1)}>
                {nav === 1 ? 
                <FaHeart className="bottom-right__icon" /> :
                <FaRegHeart className="bottom-right__icon" /> 
                }
            </Link>
            <Link to="/cart" className="bottom-right__link" onClick={(e) => setNav(2)}>
                {nav === 2 ? 
                <RiShoppingBag3Fill className="bottom-right__icon" /> :
                <RiShoppingBag3Line className="bottom-right__icon" /> 
                }
            </Link>
            <Link to="/register" className="bottom-right__link" onClick={(e) => setNav(3)}>
                {nav === 3 ? 
                <FaUser className="bottom-right__icon" /> :
                <FaRegUser className="bottom-right__icon" /> 
                }
                <span></span>
            </Link>
        </div>
    );
};

export default HeaderBottomRight;
