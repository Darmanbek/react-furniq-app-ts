import React from "react";
import { Link } from "react-router-dom";
import "./catalog.scss";

const Catalog: React.FC = () => {
    return (
        <div className="catalog-block">
            <h1 className="catalog-title">
                Category
            </h1>
            <div className="catalog-list">
                {[...Array(6)].map((el, ind) => (
                    <Link
                    key={ind}
                    to={`category/${ind.toString()}`}
                    className="list-link"
                    >
                    <span>
                        As-xana
                    </span>
                </Link>
                ))}
            </div>
        </div>
    );
};

export default Catalog;
