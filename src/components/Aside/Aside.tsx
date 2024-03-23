import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLinks } from "./links";
import "./aside.scss";

const Aside: React.FC = () => {
    const links = useLinks();
    const { t } = useTranslation();

    return (
        <section className="section-aside">
            <ul className="aside-nav">
                {links.map(({ name, link, icon }, index) => (
                    <NavLink key={index} to={link} className="nav-item">
                        <span className="icon">{icon}</span>
                        <span className="title">{t(name)}</span>
                    </NavLink>
                ))}
            </ul>
        </section>
    );
};

export default Aside;
