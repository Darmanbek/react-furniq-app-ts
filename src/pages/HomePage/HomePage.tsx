import React from "react";
import { 
    SectionBanner,
    SectionProducts
} from "@/components";

const HomePage: React.FC = () => {
    return (
        <>
            <SectionBanner />
            <SectionProducts />
            <SectionProducts />
            <SectionProducts />
        </>
    );
};

export default HomePage;
