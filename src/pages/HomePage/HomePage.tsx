import React from "react";
import { 
    SectionBanner,
    SectionProducts
} from "@/components";
import { useGetLatestProductsQuery, useGetPopularProductsQuery, useGetProductsQuery } from "@/services";
import { Title } from "@/widgets";

const HomePage: React.FC = () => {
    const { data: products, isPending: isProducts } = useGetProductsQuery();
    const { data: popular, isPending: isPopular } = useGetPopularProductsQuery();
    const {  data: latest, isPending: isLatest } = useGetLatestProductsQuery();
    

    const titlePopular = {
        name: isPopular ? "loading" : "popular",
        link: "/products/popular"
    }

    const titleLatest = {
        name: isLatest ? "loading" : "latest",
        link: "/products/latest"
    }

    const titleAllProducts = {
        name: isProducts ? "loading" : "allProducts",
        link: "/products/all"
    }

    return (
        <>
            <SectionBanner />
            <SectionProducts products={popular?.data} isPending={isPopular} link="popular">
                <Title title={titlePopular}/>
            </SectionProducts>
            <SectionProducts products={latest?.data} isPending={isLatest} link="latest">
                <Title title={titleLatest}/>
            </SectionProducts>
            <SectionProducts products={products?.data} isPending={isProducts} link="all">
                <Title title={titleAllProducts}/>
            </SectionProducts>
        </>
    );
};

export default HomePage;
