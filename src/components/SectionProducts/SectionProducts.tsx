import React from "react";
import { Link } from "react-router-dom";
import { Title, ProductCard } from "@/widgets";
import "./sectionProducts.scss";

interface SectionProductsProps {
    children: React.ReactNode
}

const SectionProducts: React.FC<SectionProductsProps> = ({ children }) => {
    return (
        <div className="section-products">
            <div className="container">
                <div className="products-inner">
                    <div className="products__top">
                        {children}
                    </div>
                    <div className="products__centre">
                        {[...Array(8)].map((_, ind) => (
                            <ProductCard key={ind} />
                        ))}
                    </div>
                    <div className="products__bottom">
                        <Link
                            to="/"
                            className="products-more"
                        >
                            Show more
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionProducts;
