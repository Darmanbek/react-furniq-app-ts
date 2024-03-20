import React, { useEffect } from "react";
import { 
    SectionBanner,
    SectionProducts
} from "@/components";
import { useGetLatestProductsQuery, useGetPopularProductsQuery, useGetProductsQuery } from "@/services";
import { Title } from "@/widgets";
import { useNavStore } from "@/store";

const HomePage: React.FC = () => {
    const { data: products, isPending: isProducts } = useGetProductsQuery();
    const { data: popular, isPending: isPopular } = useGetPopularProductsQuery();
    const {  data: latest, isPending: isLatest } = useGetLatestProductsQuery();
    const { toPath } = useNavStore()
    

    const titlePopular = {
        name: isPopular ? "loading" : "popular",
        link: "/popular"
    }

    const titleUraza = {
        name: isLatest ? "loading" : "latest",
        link: "/"
    }

    const titleInstallments = {
        name: isProducts ? "loading" : "allProducts",
        link: "/"
    }

    useEffect(() => {
        toPath("/")
    }, [])
    return (
        <>
            <SectionBanner />
            <SectionProducts products={popular?.data} isPending={isPopular}>
                <Title title={titlePopular}/>
            </SectionProducts>
            <SectionProducts products={latest?.data} isPending={isLatest}>
                <Title title={titleUraza}/>
            </SectionProducts>
            <SectionProducts products={products?.data} isPending={isProducts}>
                <Title title={titleInstallments}/>
            </SectionProducts>
        </>
    );
};

export default HomePage;
