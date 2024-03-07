import React from "react";
import { 
    SectionBanner,
    SectionProducts
} from "@/components";
import { Title } from "@/widgets";

const HomePage: React.FC = () => {
    return (
        <>
            <SectionBanner />
            <SectionProducts>
                <Title title="Popular"/>
            </SectionProducts>
            <SectionProducts>
                <Title title="Xaitlik"/>
            </SectionProducts>
            <SectionProducts>
                <Title title="Na rassrochku"/>
            </SectionProducts>
            <SectionProducts>
                <Title title="Bazar  ne vixodya"/>
            </SectionProducts>
        </>
    );
};

export default HomePage;
