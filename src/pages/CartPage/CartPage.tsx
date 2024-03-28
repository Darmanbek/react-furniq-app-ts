import React from "react";
import { SectionCart, SectionProducts } from "@/components";
import { Title } from "@/widgets";
import { useGetProductsQuery } from "@/services";

const CartPage: React.FC = () => {
    const { data: products, isPending } = useGetProductsQuery();

    const title = {
        name: "allProducts",
        link: "/products/all"
    }
    
    return (
        <>
            <SectionCart />
            <SectionProducts products={products?.data} isPending={isPending} link="all">
                <Title title={title}/>
            </SectionProducts>
        </>
    );
};

export default CartPage;
