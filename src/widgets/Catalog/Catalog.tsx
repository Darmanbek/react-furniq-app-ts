import React from "react";
import Cookies from "js-cookie";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useGetCategoriesQuery } from "@/services";
import "./catalog.scss";
import { CircularProgress } from "@mui/material";
import { Skeleton } from 'antd';

const Catalog: React.FC = () => {
    const { data: categories, isPending } = useGetCategoriesQuery();
    const { t } = useTranslation();

    const lang = Cookies.get("lang" ? "lang" : "RU");

    if (isPending) return <Skeleton active paragraph={{rows: 8}} />

    return (
        <div className="catalog-block">
            <h1 className="catalog-title">{t("category")}</h1>
            <div className="catalog-list">
                {categories &&
                    categories.data.map(({ id, name }) => (
                        <Link
                            key={id}
                            to={`category/${id.toString()}`}
                            className="list-link"
                        >
                            <span>
                                {t(
                                    lang === "RU"
                                        ? name.ru
                                        : lang === "QQ"
                                        ? name.latin
                                        : name.kiril
                                )}
                            </span>
                        </Link>
                    ))}
            </div>
        </div>
    );
};

export default Catalog;
