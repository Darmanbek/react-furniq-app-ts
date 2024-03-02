import React from "react";
import HeaderTop from "./HeaderTop/HeaderTop";
import HeaderBottom from "./HeaderBottom/HeaderBottom";
import "./header.scss";

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header-inner">
                    <HeaderTop />
                    <HeaderBottom />
                </div>
            </div>
        </header>
    );
};

export default Header;
