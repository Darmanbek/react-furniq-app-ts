import React from "react";
import DetailsImages from "./DetailsImages/DetailsImages";
import DetailsInfo from "./DetailsInfo/DetailsInfo";
import DetailsDesc from "./DetailsDesc/DetailsDesc";
import { TImages, TProductDetailsData } from "@/models";
import "./sectionDetails.scss";
import {
    SkeletonDetailsDesc,
    SkeletonDetailsImages,
    SkeletonDetailsInfo,
} from "@/widgets";

interface SectionDetailsProps {
    detailsData?: TProductDetailsData;
    detailsImages?: TImages[];
    isPending: boolean;
}

const SectionDetails: React.FC<SectionDetailsProps> = ({
    detailsData,
    detailsImages,
    isPending,
}) => {
    return (
        <section className="section-details">
            <div className="container">
                <div className="details-inner">
                    <div className="details-head">
                        {isPending && <SkeletonDetailsImages />}
                        {detailsImages && (
                            <DetailsImages detailsImages={detailsImages} />
                        )}
                        {isPending && <SkeletonDetailsInfo />}
                        {detailsData && (
                            <DetailsInfo detailsData={detailsData}/>
                        )}
                    </div>
                    {isPending && <SkeletonDetailsDesc />}
                    {detailsData && <DetailsDesc detailsData={detailsData} />}
                </div>
            </div>
        </section>
    );
};

export default SectionDetails;
