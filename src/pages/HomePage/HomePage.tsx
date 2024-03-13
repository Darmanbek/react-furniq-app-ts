import React from "react";
import { 
    SectionBanner,
    SectionProducts
} from "@/components";
import { useGetProductsQuery } from "@/services";
import { Title } from "@/widgets";

const HomePage: React.FC = () => {
    const { data: products, isPending } = useGetProductsQuery();

    return (
        <>
            <SectionBanner />
            <SectionProducts products={products?.data} isPending={isPending}>
                <Title title="popular"/>
            </SectionProducts>
            <SectionProducts products={products?.data} isPending={isPending}>
                <Title title="urazaAit"/>
            </SectionProducts>
            <SectionProducts products={products?.data} isPending={isPending}>
                <Title title="installments"/>
            </SectionProducts>
        </>
    );
};

export default HomePage;
