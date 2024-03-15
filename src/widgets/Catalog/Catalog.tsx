import React from "react";
import { Skeleton } from 'antd';
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useGetCategoriesQuery } from "@/services";
import { nameTranslate } from "@/hooks";
import "./catalog.scss";

interface CatalogProps {
    handleShowCatalog: () => void
}

const Catalog: React.FC<CatalogProps> = ({ handleShowCatalog }) => {
    const { data: categories, isPending } = useGetCategoriesQuery();
    const { t } = useTranslation();

    if (isPending) return <Skeleton active paragraph={{rows: 8}} />

    return (
        <div className="catalog-block">
            <h1 className="catalog-title">{t("category")}</h1>
            <div className="catalog-list">
                {categories &&
                    categories.data.map(({ id, name }) => (
                        <Link
                            onClick={handleShowCatalog}
                            key={id}
                            to={`category/${id.toString()}`}
                            className="list-link"
                        >
                            <span>
                                {t(nameTranslate(name))}
                            </span>
                        </Link>
                    ))}
            </div>
        </div>
    );
};

export default Catalog;
