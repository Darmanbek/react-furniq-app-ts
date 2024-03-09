import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./headerTop.scss";

const HeaderTop: React.FC = () => {
    const { t, i18n } = useTranslation();

    const handleChange = (value: string) => {
        i18n.changeLanguage(value);
        Cookies.set("lang", value);
    };

    const getLanguage = () => {
        const lang = Cookies.get("lang");
        if (lang) {
            return lang
        }
        return "RU"
    }

    return (
        <div className="header__top">
            <div className="top-location">
                <IoLocationOutline />
                <a
                    href="https://maps.app.goo.gl/aBxevJbN8FiEhxmr9"
                    target="_blank"
                    rel="noreferrer"
                >
                    <span className="location-city">{t("whichCity")} {t("city")}</span> - Punkt
                    vidachi
                </a>
            </div>
            <nav className="top-nav">
                <ul className="nav-items">
                    <li>
                        <a
                            target="_blank"
                            href="https://furniq-seller.vercel.app/"
                            rel="noreferrer"
                        >
                            {t("sellOnFurniq")}
                        </a>
                    </li>
                    <li>
                        <Link to="/faq">{t("questionAnswer")}</Link>
                    </li>
                    <li>
                        <Link to="/">Moy zakazi</Link>
                    </li>
                    <li>
                        <select onChange={(e) => handleChange(e.target.value)} defaultValue={getLanguage()}>
                            <option value="RU">{t("languageRU")}</option>
                            <option value="QQ">{t("languageQQ")}</option>
                            <option value="QR">{t("languageQR")}</option>
                        </select>
                        {/* <button>
                            {getLanguage()}
                        </button>
                        <ul className="lang-items">
                            <li>
                                <button onClick={(e) => handleChange("RU")}>{t("languageRU")}</button>
                            </li>
                            <li>
                                <button onClick={(e) => handleChange("QQ")}>{t("languageQQ")}</button>
                            </li>
                            <li>
                                <button onClick={(e) => handleChange("QR")}>{t("languageQR")}</button>
                            </li>
                        </ul> */}
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default HeaderTop;
