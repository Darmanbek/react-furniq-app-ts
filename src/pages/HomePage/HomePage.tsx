import React from "react";
import { useTranslation } from "react-i18next";
import { 
    SectionBanner,
    SectionProducts
} from "@/components";
import { useGetProductsQuery } from "@/services";
import { Title } from "@/widgets";

const HomePage: React.FC = () => {
    const { t } = useTranslation()
    const { data: products, isPending } = useGetProductsQuery();

    return (
        <>
            <SectionBanner />
            <SectionProducts products={products?.data} isPending={isPending}>
                <Title title={t("popular")}/>
            </SectionProducts>
            <SectionProducts products={products?.data} isPending={isPending}>
                <Title title={t("urazaAit")}/>
            </SectionProducts>
            <SectionProducts products={products?.data} isPending={isPending}>
                <Title title={t("installments")}/>
            </SectionProducts>
            {/* <SectionProducts products={products?.data}>
                <Title title="Bazar ne vixodya"/>
            </SectionProducts> */}
        </>
    );
};

export default HomePage;
