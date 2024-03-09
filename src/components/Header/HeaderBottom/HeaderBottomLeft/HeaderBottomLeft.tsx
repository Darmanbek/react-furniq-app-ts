import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FurniqLogo as Logo } from "@/assets";
import { Catalog } from "@/widgets";
import "./HeaderBottomLeft.scss";

const HeaderBottomLeft: React.FC = () => {
    const { t } = useTranslation()
    const [showCatalog, setShowCatalog] = useState(false);
    const catalogRef = useRef<any>();


    document.addEventListener("click", (e) => {
        // console.log(e.composedPath());
        
        // console.log(e.composedPath().includes(catalogRef.current));
        
        if (!e.composedPath().includes(catalogRef.current)) {
            setShowCatalog(false);
        }
    })
    return (
        <div className="header__bottom-left">
            <Link to="/">
                <img src={Logo} alt="Logo" />
            </Link>
            <div className="bottom-left__catalog" ref={catalogRef}>
                <button onClick={(e) => setShowCatalog(prev => !prev)} className="catalog-button">{t("catalogue")}</button>
                {showCatalog && (
                    <nav className="catalog-nav">
                        <Catalog />
                    </nav>
                )}
            </div>
        </div>
    );
};

export default HeaderBottomLeft;
