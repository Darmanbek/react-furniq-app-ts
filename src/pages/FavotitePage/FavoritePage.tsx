import React, { useEffect } from "react";
import { SectionProducts } from "@/components";
import { useNavStore, useWishesStore } from "@/store";
import { Title } from "@/widgets";

const FavoritePage: React.FC = () => {
    const { wishes } = useWishesStore();
    const { toPath } = useNavStore()

    const title = {
        name: "home",
        link: "/"
    }

    const subTitle = {
        name: "wishes",
        link: "/wishes"
    }

    useEffect(() => {
        toPath("/wishes")
    }, [])
    return (
        <>
            <SectionProducts products={wishes}>
                <Title title={title} subTitle={subTitle}/>
            </SectionProducts>
        </>
    );
};

export default FavoritePage;
