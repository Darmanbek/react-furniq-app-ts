import React from "react";
import { SectionProducts } from "@/components";
import { useWishesStore } from "@/store";
import { Title } from "@/widgets";

const FavoritePage: React.FC = () => {
    const { wishes } = useWishesStore();

    const title = {
        name: "home",
        link: "/"
    }

    const subTitle = {
        name: "wishes",
        link: "/wishes"
    }

    return (
        <>
            <SectionProducts products={wishes}>
                <Title title={title} subTitle={subTitle}/>
            </SectionProducts>
        </>
    );
};

export default FavoritePage;
