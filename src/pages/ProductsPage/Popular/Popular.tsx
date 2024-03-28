import React from "react";
import { SectionProducts } from "@/components";
import { useGetPopularProductsQuery } from "@/services";
import { Title } from "@/widgets";

const Popular: React.FC = () => {
    const { data: popular, isPending: isPopular } =
        useGetPopularProductsQuery();

    const title = {
        name: isPopular ? "loading" : "home",
        link: "/",
    };

    const titlePopular = {
        name: isPopular ? "loading" : "popular",
        link: "/products/popular",
    };

    return (
        <>
            <SectionProducts products={popular?.data} isPending={isPopular} isNotMore>
                <Title title={title} subTitle={titlePopular} />
            </SectionProducts>
        </>
    );
};

export default Popular;
