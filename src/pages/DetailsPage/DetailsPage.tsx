import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { SectionDetails, SectionProducts } from "@/components";
import { Title } from "@/widgets";
import {
    useGetProductByIdQuery,
    useGetProductImageQuery,
    useGetProductsQuery,
} from "@/services";
import { useNavStore } from "@/store";

const DetailsPage: React.FC = () => {
    const { productId } = useParams();
    const { toPath } = useNavStore()
    const { data: details } = useGetProductByIdQuery(Number(productId));
    const { 
        data: detailsImages, 
        isPending 
    } = useGetProductImageQuery(Number(productId));
    const { data: products, isPending: productsPending } = useGetProductsQuery()

    const title = {
        name: "similar",
        link: "/"
    }

    useEffect(() => {
        toPath("/details")
    }, [])
    return (
        <>
            <SectionDetails
                detailsData={details?.data}
                detailsImages={detailsImages?.data}
                isPending={isPending}
            />
            <SectionProducts products={products?.data} isPending={productsPending}>
                <Title title={title}/>
            </SectionProducts>
        </>
    );
};

export default DetailsPage;
