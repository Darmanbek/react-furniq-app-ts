import React from "react";
import { SectionProducts } from "@/components";
import { useWishesStore } from "@/store";
import { Title } from "@/widgets";

const FavoritePage: React.FC = () => {
    const { wishes } = useWishesStore();

    return (
        <>
            <SectionProducts products={wishes}>
                <Title title="Home" subTitle="Favourite"/>
            </SectionProducts>
        </>
    );
};

export default FavoritePage;
