import React from "react";
import "./sectionNotFound.scss";
import { useTranslation } from "react-i18next";

const SectionNotFound: React.FC = () => {
    const { t } = useTranslation()
    
    return (
        <section className="section-not-found">
            <div className="container">
                <div className="not-found-inner">
                    <h1>
                        <span>
                            {t("notFoundPageTitle")}
                        </span>
                        <span>
                            {t("notFoundPageText")}
                        </span>
                    </h1>
                </div>
            </div>
        </section>
    );
};

export default SectionNotFound;
