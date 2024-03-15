import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FurniqLogo as Logo } from "@/assets";
import { Catalog } from "@/widgets";
import "./HeaderBottomLeft.scss";
import { useCatalog } from "@/hooks";

const HeaderBottomLeft: React.FC = () => {
    const { t } = useTranslation()
    const catalogRef = useRef<any>();
    const { showCatalog, handleShowCatalog } = useCatalog(catalogRef);

    return (
        <div className="header__bottom-left">
            <div className="bottom-left__logo">
                <Link to="/">
                    <img src={Logo} alt="Logo" />
                </Link>
            </div>
            <div className="bottom-left__catalog" ref={catalogRef}>
                <button onClick={handleShowCatalog} className="catalog-button">{t("catalogue")}</button>
                {showCatalog && (
                    <nav className="catalog-nav">
                        <Catalog handleShowCatalog={handleShowCatalog}/>
                    </nav>
                )}
            </div>
        </div>
    );
};

export default HeaderBottomLeft;
