import { SectionProducts } from "@/components";
import { Title } from "@/widgets";
import React from "react";

const FavoritePage: React.FC = () => {
    return (
        <>
            <SectionProducts>
                <Title title="Home" subTitle="Favourite"/>
            </SectionProducts>
        </>
    );
};

export default FavoritePage;
