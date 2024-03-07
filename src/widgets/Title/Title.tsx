import React from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import "./title.scss"

interface TitleProps {
    title: string;
    subTitle?: string;
}

const Title: React.FC<TitleProps> = ({ title, subTitle }) => {
    return (
        <h1 className="head-title">
            <Link to="/" className="link">
                <span>{ title }</span>
                <IoIosArrowForward className="icon" />
                {subTitle && <span>{subTitle}</span>}
            </Link>
        </h1>
    );
};

export default Title;
