import React from "react";
import { SectionDetails, SectionProducts } from "@/components";
import { Title } from "@/widgets";

const DetailsPage: React.FC = () => {
    return (
        <>
            <SectionDetails />
            <SectionProducts>
                <Title title="Other"/>
            </SectionProducts>
        </>
    );
};

export default DetailsPage;
