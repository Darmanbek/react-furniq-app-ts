import React from "react";
import { IoSearch } from "react-icons/io5";
import "./headerBottomSearch.scss";

const HeaderBottomSearch: React.FC = () => {
    return (
        <div className="header__bottom-search">
            <div className="header__bottom-search__input">
                <input
                    type="text"
                    placeholder="Iskat mebel"
                />
                
            </div>
            <button className="header__bottom-search__button">
                <IoSearch className="icon" />
            </button>
        </div>
    );
};

export default HeaderBottomSearch;
