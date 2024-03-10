import React from "react";
import { useTranslation } from "react-i18next";
import { SectionCart, SectionProducts } from "@/components";
import { Title } from "@/widgets";
import { useGetProductsQuery } from "@/services";

const CartPage: React.FC = () => {
    const { t } = useTranslation()
    const { data: products } = useGetProductsQuery();

    return (
        <>
            <SectionCart />
            <SectionProducts products={products?.data}>
                <Title title={t("popular")}/>
            </SectionProducts>
        </>
    );
};

export default CartPage;
