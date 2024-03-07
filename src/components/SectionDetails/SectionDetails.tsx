import React from "react";
import DetailsImages from "./DetailsImages/DetailsImages";
import DetailsInfo from "./DetailsInfo/DetailsInfo";
import DetailsDesc from "./DetailsDesc/DetailsDesc";
import "./sectionDetails.scss";

const SectionDetails: React.FC = () => {
    return (
        <section className="section-details">
            <div className="container">
                <div className="details-inner">
                    <div className="details-head">
                        <DetailsImages />
                        <DetailsInfo />
                    </div>
                    <DetailsDesc />
                </div>
            </div>
        </section>
    );
};

export default SectionDetails;
