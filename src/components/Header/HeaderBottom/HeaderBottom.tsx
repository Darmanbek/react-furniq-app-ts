import React from "react";
import "./headerBottom.scss";
import HeaderBottomLeft from "./HeaderBottomLeft/HeaderBottomLeft";
import HeaderBottomSearch from "./HeaderBottomSearch/HeaderBottomSearch";
import HeaderBottomRight from "./HeaderBottomRight/HeaderBottomRight";

const HeaderBottom: React.FC = () => {
    return (
        <div className="header__bottom">
            <HeaderBottomLeft />
            <HeaderBottomSearch />
            <HeaderBottomRight />
        </div>
    );
};

export default HeaderBottom;
