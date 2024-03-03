import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { TiDelete } from "react-icons/ti";
import "./headerBottomSearch.scss";

const HeaderBottomSearch: React.FC = () => {
    const [searchValue, setSearchValue] = useState("");

    return (
        <div className="header__bottom-search">
            <div className="header__bottom-search__input">
                <input 
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                type="text" 
                placeholder="Mebel izlash" 
                />
                {searchValue && (
                <button>
                <TiDelete
                onClick={() => setSearchValue('')}
                className="delete-icon"
                />
                </button>
                )}
            </div>
            <button className="header__bottom-search__button">
                <IoSearch className="search-icon" />
            </button>
        </div>
    );
};

export default HeaderBottomSearch;
