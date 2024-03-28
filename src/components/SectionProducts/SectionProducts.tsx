import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ProductCard, SkeletonCard } from "@/widgets";
import { TProduct } from "@/models";
import "./sectionProducts.scss";
import { Skeleton } from "antd";

interface SectionProductsProps {
    products?: TProduct[];
    isPending?: boolean
    children: React.ReactNode
    isNotMore?: boolean
    link?: string
}

const SectionProducts: React.FC<SectionProductsProps> = ({ products, isPending, children, isNotMore, link }) => {
    const { t } = useTranslation();
    
    return (
        <div className="section-products">
            <div className="container">
                <div className="products-inner">
                    <div className="products__top">
                        {children}
                    </div>
                    {products?.length === 0 && <h1 className="not-found">{t("notFound")}</h1>}
                    
                    <div className="products__centre">
                        {isPending && [...Array(4)].map((_, index) => (
                            <SkeletonCard key={index} />
                        ))}
                        { products && products.map((product) => (
                            <ProductCard 
                            key={product.id} 
                            product={product}
                            />
                        ))}
                    </div>
                    <div className="products__bottom">
                        { !isNotMore && isPending && 
                        <Skeleton.Button 
                        size="large"
                        className="skeleton-more"
                        active
                        block
                        />}
                       {!isNotMore && products && products.length > 0 &&  <Link
                            to={link ? `/products/${link}` : "/"}
                            className="products-more"
                        >
                            {t("showMore")}
                        </Link>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionProducts;
