import React from "react";
import { SectionProducts } from "@/components";
import { useGetProductsQuery } from "@/services";
import { Title } from "@/widgets";

const AllProducts: React.FC = () => {
    const { data: products, isPending: isProducts } = useGetProductsQuery();

    const title = {
        name: isProducts ? "loading" : "home",
        link: "/",
    };

    const titleLatest = {
        name: isProducts ? "loading" : "allProducts",
        link: "/products/all",
    };

    return (
        <>
            <SectionProducts products={products?.data} isPending={isProducts} isNotMore>
                <Title title={title} subTitle={titleLatest} />
            </SectionProducts>
        </>
    );
};

export default AllProducts;
