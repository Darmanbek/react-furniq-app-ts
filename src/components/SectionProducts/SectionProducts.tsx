import React from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { SlArrowRight } from "react-icons/sl";
import ProductCard from "./ProductCard/ProductCard";
import "./sectionProducts.scss";

const SectionProducts: React.FC = () => {
    return (
        <div className="section-products">
            <div className="container">
                <div className="products-inner">
                    <div className="products__top">
                        <h1>
                            <Link to="/" className="link">
                                <span>Popular</span>
                                <MdKeyboardArrowRight className="icon" />
                            </Link>
                        </h1>
                    </div>
                    <div className="products__centre">
                        {[...Array(8)].map((el) => (
                            <ProductCard key={el} />
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
