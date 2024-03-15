import React, { useEffect } from "react";
import { SectionCart, SectionProducts } from "@/components";
import { Title } from "@/widgets";
import { useGetProductsQuery } from "@/services";
import { useNavStore } from "@/store";

const CartPage: React.FC = () => {
    const { data: products, isPending } = useGetProductsQuery();
    const { toPath } = useNavStore()

    const title = {
        name: "similar",
        link: "/"
    }
    
    useEffect(() => {
        toPath("/cart")
    }, [])
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
