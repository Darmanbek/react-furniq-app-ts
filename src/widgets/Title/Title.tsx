import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { useTranslation } from "react-i18next";
import "./title.scss";

interface TitleProps {
    title: {
        name: string;
        link: string;
    };
    subTitle?: {
        name: string;
        link: string;
    };
    subSubTitle?: {
        name: string;
        link: string;
    } | undefined;
}

const Title: React.FC<TitleProps> = ({ title, subTitle, subSubTitle }) => {
    const { t } = useTranslation();

    return (
        <h1 className="head-title">
            <div className="title-inner">
                <Link to={`${title.link}`} className="link">
                    <span>{t(title.name)}</span>
                </Link>
                <IoIosArrowForward className="icon" />
                {subTitle && (
                    <Link to={`${subTitle.link}`} className="link">
                        <span>{t(subTitle.name)}</span>
                    </Link>
                )}
                {subSubTitle && <>
                    <IoIosArrowForward className="icon sub-sub-title" />
                    <Link to={`${subSubTitle.link}`} className="link sub-sub-title">
                        <span>{t(subSubTitle.name)}</span>
                    </Link>
                </>}
            </div>
        </h1>
    );
};

export default Title;
