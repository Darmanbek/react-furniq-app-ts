import React from "react";
import { SectionProducts } from "@/components";
import { useGetLatestProductsQuery } from "@/services";
import { Title } from "@/widgets";

const Latest: React.FC = () => {
    const { data: latest, isPending: isLatest } = useGetLatestProductsQuery();

    const title = {
        name: isLatest ? "loading" : "home",
        link: "/",
    };

    const titleLatest = {
        name: isLatest ? "loading" : "latest",
        link: "/products/latest",
    };

    return (
        <>
            <SectionProducts products={latest?.data} isPending={isLatest} isNotMore>
                <Title title={title} subTitle={titleLatest} />
            </SectionProducts>
        </>
    );
};

export default Latest;
