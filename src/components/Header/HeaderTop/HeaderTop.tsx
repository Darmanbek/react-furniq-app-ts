import React from "react";
import { Select } from "antd";
import { IoLocationOutline } from "react-icons/io5";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuthPersistStore } from "@/store";
import { FurniqLogo as Logo } from "@/assets";
import "./headerTop.scss";

const HeaderTop: React.FC = () => {
    const { t, i18n } = useTranslation();
    const { token } = useAuthPersistStore()

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
            <div className="top-logo">
                <Link to="/">
                    <img src={Logo} alt="Logo" />
                </Link>
            </div>
            <div className="top-location">
                <IoLocationOutline />
                <a
                    href="https://maps.app.goo.gl/aBxevJbN8FiEhxmr9"
                    target="_blank"
                    rel="noreferrer"
                >
                    <span className="location-city">{t("whichCity")} {t("city")}</span> - {t("pochta")}
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
                    {token &&
                    <li>
                        <Link to="/">{t("myOrders")}</Link>
                    </li>
                    }
                    <li>
                        <Select
                        defaultValue={getLanguage()}
                        style={{ width: 150 }}
                        onChange={handleChange}
                        options={[
                            { value: 'RU', label: t("languageRU") },
                            { value: 'QQ', label: t("languageQQ") },
                            { value: 'QR', label: t("languageQR") },
                        ]}
                        />
                    </li>
                </ul>
            </nav>
            <a 
                href="https://play.google.com/"
                className="button-furniq-app"
                target="_blank"
                rel="noreferrer"
            >
                Скачать приложение
            </a>
        </div>
    );
};

export default HeaderTop;
