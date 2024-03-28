import { SectionProducts } from "@/components";
import { Title } from "@/widgets";
import React from "react";

const ProductsPage: React.FC = () => {
    return (
        <>
            <SectionProducts products={categoryProducts?.data} isPending={isPending}>
                <Title title={title} subTitle={subTitle}/>
            </SectionProducts>
        </>
    );
};

export default ProductsPage;
