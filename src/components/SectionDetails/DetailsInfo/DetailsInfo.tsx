import React from "react";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import { ButtonCount, ProductLike, ProductView } from "@/widgets";
import { NoImage } from "@/assets";
import { TProductDetailsData } from "@/models";
import { titleTranslate } from "@/hooks";
import "./detailsInfo.scss";

interface DetailsInfoProps {
    detailsData: TProductDetailsData;
}

const DetailsInfo: React.FC<DetailsInfoProps> = ({ detailsData }) => {
    const { t } = useTranslation();
    const lang = Cookies.get("lang") || "RU";

    return (
        <div className="details-info">
            <h1 className="info-title">
                {titleTranslate(detailsData.name, lang)}
            </h1>
            <div className="info-subtitle">
                <ProductView 
                rating={detailsData.rating}
                reviews_count={detailsData.reviews_count}
                />
                <div className="info-seller">
                    <span>{t("seller")}: {detailsData.seller.company_name}</span>
                </div>
                <ProductLike id={detailsData.id}/>
            </div>
            <div className="info-views">
                <h2 className="views-title">{t("views")}</h2>
                <ul className="views-images">
                    <li>
                        <button>
                            <img src={NoImage} alt="Image" />
                        </button>
                    </li>
                    <li>
                        <button>
                            <img src={NoImage} alt="Image" />
                        </button>
                    </li>
                    <li>
                        <button>
                            <img src={NoImage} alt="Image" />
                        </button>
                    </li>
                    <li className="no-active">
                        <button>
                            <img src={NoImage} alt="Image" />
                        </button>
                    </li>
                </ul>
            </div>
            <div className="info-count">
                <h2 className="count-title">{t("count")}</h2>
                <ButtonCount size="large" />
            </div>
            <div className="info-price">
                <span>
                    {`${detailsData.price * 1.8} ${t("currency")}`}
                </span>
                {`${detailsData?.price} ${t("currency")}`}
            </div>
            

            <div className="info-add-cart">
                <button className="fill">{t("addToCart")}</button>
                <button className="stroke">{t("buy")}</button>
            </div>
            
            <div className="info-desc">
                <h2 className="desc-title">Кратко о товаре: </h2>
                <ul>
                    <li>
                        {detailsData.description.ru}
                    </li>
                    <li>
                        {detailsData.description.kiril}
                    </li>
                    <li>
                        {detailsData.description.latin}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default DetailsInfo;
