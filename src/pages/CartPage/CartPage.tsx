import React from "react";
import { SectionCart, SectionProducts } from "@/components";
import { Title } from "@/widgets";

const CartPage: React.FC = () => {
    return (
        <>
            <SectionCart />
            <SectionProducts>
                <Title title="Popular"/>
            </SectionProducts>
        </>
    );
};

export default CartPage;
