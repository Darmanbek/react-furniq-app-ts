import React, { useState } from "react";
import { TProductDetailsData } from "@/models";
import "./detailsDesc.scss";
import { useTranslation } from "react-i18next";
import { nameTranslate } from "@/hooks";
import Reviews from "./Reviews/Reviews";

interface DetailsDescProps {
    detailsData: TProductDetailsData;
}

const DetailsDesc: React.FC<DetailsDescProps> = ({ detailsData }) => {
    const { t } = useTranslation();
    const [select, setSelect] = useState(1);

    const isActive = (index: number) => {
        if (index === select) {
            return "active";
        }
        return "";
    };
    return (
        <div className="details-desc">
            <nav className="desc-nav">
                <ul>
                    <li className={isActive(1)}>
                        <button onClick={() => setSelect(1)}>
                            {t("description")}
                        </button>
                    </li>
                    <li className={isActive(2)}>
                        <button onClick={() => setSelect(2)}>
                            {t("reviews")}
                        </button>
                    </li>
                </ul>
            </nav>
            {select === 1 ? (
                <div className="desc-block">
                    <div className="desc-block-inner">
                        <p>{t(nameTranslate(detailsData.description))}</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Dolorum officiis quos laborum, ratione vitae
                            delectus. Numquam explicabo velit sequi nulla!
                        </p>
                    </div>
                </div>
            ) : (
                <div className="desc-block">
                    <div className="desc-block-inner">
                        <Reviews id={detailsData.id} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default DetailsDesc;
