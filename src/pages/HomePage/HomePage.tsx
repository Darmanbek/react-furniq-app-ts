import React, { useEffect } from "react";
import { 
    SectionBanner,
    SectionProducts
} from "@/components";
import { useGetProductsQuery } from "@/services";
import { Title } from "@/widgets";
import { useNavStore } from "@/store";

const HomePage: React.FC = () => {
    const { data: products, isPending } = useGetProductsQuery();
    const { toPath } = useNavStore()
    console.log(products);
    

    const titlePopular = {
        name: "popular",
        link: "/popular"
    }

    const titleUraza = {
        name: "urazaAit",
        link: "/"
    }

    const titleInstallments = {
        name: "installments",
        link: "/"
    }

    useEffect(() => {
        toPath("/")
    }, [])
    return (
        <>
            <SectionBanner />
            <SectionProducts products={products?.data} isPending={isPending}>
                <Title title={titlePopular}/>
            </SectionProducts>
            <SectionProducts products={products?.data} isPending={isPending}>
                <Title title={titleUraza}/>
            </SectionProducts>
            <SectionProducts products={products?.data} isPending={isPending}>
                <Title title={titleInstallments}/>
            </SectionProducts>
        </>
    );
};

export default HomePage;
