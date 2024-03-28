import React from "react";
import { useGetCategoriesQuery, useGetCategoryProductsQuery } from "@/services";
import { useParams } from "react-router-dom";
import { SectionProducts } from "@/components";
import { Title } from "@/widgets";
import { nameTranslate } from "@/hooks";

const CategoryPage: React.FC = () => {
    const { categoryId } = useParams()
    const { data: categoryProducts, isPending } = useGetCategoryProductsQuery(Number(categoryId))
    const { data: categories } = useGetCategoriesQuery()

    
    const title = {
        name: "category",
        link: "/",
    }

    const getCategoryTitle = (id: number) => {
        if (categories) {
            const category = categories.data.find(category => category.id === id)
            return nameTranslate(category?.name)
        }
        return "notFound"
    }
    
    const subTitleName = categories?.data.length !== 0 ? getCategoryTitle(Number(categoryId)) : "notFound"
    const subTitle = {
        name: isPending ? "loading" : subTitleName,
        link: `/category/${categoryId}`,
    }

    return (
        <>
        <SectionProducts products={categoryProducts?.data} isPending={isPending} isNotMore>
            <Title title={title} subTitle={subTitle}/>
        </SectionProducts>
        </>
    );
};

export default CategoryPage;
