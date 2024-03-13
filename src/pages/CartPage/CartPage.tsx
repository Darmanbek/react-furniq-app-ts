import React from "react";
import { SectionCart, SectionProducts } from "@/components";
import { Title } from "@/widgets";
import { useGetProductsQuery } from "@/services";

const CartPage: React.FC = () => {
    const { data: products } = useGetProductsQuery();

    return (
        <>
            <SectionCart />
            <SectionProducts products={products?.data}>
                <Title title="similar"/>
            </SectionProducts>
        </>
    );
};

export default CartPage;
