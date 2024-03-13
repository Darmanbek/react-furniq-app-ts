import React from "react";
import { useParams } from "react-router-dom";
import { SectionDetails, SectionProducts } from "@/components";
import { Title } from "@/widgets";
import { useGetProductByIdQuery, useGetProductImageQuery } from "@/services";

const DetailsPage: React.FC = () => {
    const { productId } = useParams()
    const { data: details } = useGetProductByIdQuery(Number(productId))
    const { data: detailsImages, isPending } = useGetProductImageQuery(Number(productId))

    return (
        <>
            <SectionDetails detailsData={details?.data} detailsImages={detailsImages?.data}
            isPending={isPending}
            />
            <SectionProducts>
                <Title title="similar"/>
            </SectionProducts>
        </>
    );
};

export default DetailsPage;
