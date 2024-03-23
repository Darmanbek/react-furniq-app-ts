import React from "react";
import { SectionCart, SectionProducts } from "@/components";
import { Title } from "@/widgets";
import { useGetProductsQuery } from "@/services";

const CartPage: React.FC = () => {
    const { data: products, isPending } = useGetProductsQuery();

    const title = {
        name: "similar",
        link: "/"
    }
    
    return (
        <>
            <SectionCart />
            <SectionProducts products={products?.data} isPending={isPending}>
                <Title title={title}/>
            </SectionProducts>
        </>
    );
};

export default CartPage;
