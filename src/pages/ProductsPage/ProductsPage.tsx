import React from "react";
import { Route, Routes } from "react-router-dom";
import Popular from "./Popular/Popular";
import Latest from "./Latest/Latest";
import AllProducts from "./AllProducts/AllProducts";

const ProductsPage: React.FC = () => {
    return (
        <>
            <Routes>
                <Route path="all" element={<AllProducts />} />
                <Route path="popular" element={<Popular />} />
                <Route path="latest" element={<Latest />} />
            </Routes>
        </>
    );
};

export default ProductsPage;
