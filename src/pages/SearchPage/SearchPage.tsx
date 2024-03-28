import { SectionProducts } from "@/components";
import { nameTranslate } from "@/hooks";
import { useGetProductsQuery } from "@/services";
import { useSearchStore } from "@/store";
import { Title } from "@/widgets";
import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const SearchPage: React.FC = () => {
    const { data: productsData, isPending: isProducts } = useGetProductsQuery();
    const { search, changeSearch } = useSearchStore();
    const [searchParams, setSearchParams] = useSearchParams({
        product: "",
    });

    const postQuery = searchParams.get("product") || "";

    const filterProducts = productsData?.data.filter((product) =>
        nameTranslate(product.name)
            .toLowerCase()
            .includes(
                postQuery
                .toLowerCase()
                .trim()
            )
    );

    const title = {
        name: isProducts ? "loading" : "home",
        link: "/",
    };

    const subTitle = {
        name: isProducts ? "loading" : "search",
        link: "/search",
    };

    const subSubTitle = {
        name: isProducts ? "loading" : `${filterProducts?.length}`,
        link: "",
    };

    useEffect(() => {
        setSearchParams({ product: search.trim() });
    }, [search]);

    useEffect(() => {
        return () => {
            changeSearch("")
        }
    }, [])
    return (
        <>
            <SectionProducts products={filterProducts} isPending={isProducts} isNotMore>
                <Title 
                title={title} 
                subTitle={subTitle} 
                subSubTitle={postQuery ? subSubTitle : undefined} 
                />
            </SectionProducts>
        </>
    );
};

export default SearchPage;
