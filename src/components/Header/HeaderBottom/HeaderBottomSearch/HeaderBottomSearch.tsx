import React from "react";
import { useTranslation } from "react-i18next";
import { IoSearch } from "react-icons/io5";
import { TiDelete } from "react-icons/ti";
import { useSearchStore } from "@/store";
import { useNavigate } from "react-router-dom";
import "./headerBottomSearch.scss";

const HeaderBottomSearch: React.FC = () => {
    const { t } = useTranslation();
    const { search, changeSearch } = useSearchStore();
    const navigate = useNavigate();

    const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        changeSearch(e.target.value);
    };

    return (
        <div className="header__bottom-search">
            <div className="header__bottom-search__input">
                <input
                    value={search}
                    onChange={onChangeValue}
                    type="text"
                    placeholder={t("searhPlaceholder")}
                />
                {search && (
                    <button>
                        <TiDelete
                            onClick={() => changeSearch("")}
                            className="delete-icon"
                        />
                    </button>
                )}
            </div>
            <button
                className="header__bottom-search__button"
                onClick={() => navigate("/search")}
            >
                <IoSearch className="search-icon" />
            </button>
        </div>
    );
};

export default HeaderBottomSearch;
