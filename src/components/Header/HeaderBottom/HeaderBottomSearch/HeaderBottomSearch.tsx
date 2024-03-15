import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { IoSearch } from "react-icons/io5";
import { TiDelete } from "react-icons/ti";
import "./headerBottomSearch.scss";

const HeaderBottomSearch: React.FC = () => {
    const { t } = useTranslation()
    const [searchValue, setSearchValue] = useState("");
    
    return (
        <div className="header__bottom-search">
            <div className="header__bottom-search__input">
                <input 
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                type="text" 
                placeholder={t("searhPlaceholder")}
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
