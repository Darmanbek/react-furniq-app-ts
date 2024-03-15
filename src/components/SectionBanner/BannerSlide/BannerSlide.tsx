import React from "react";
import { GooglePlay } from "@/assets";
import "./bannerSlide.scss";

const BannerSlide: React.FC = () => {
    return (
        <div className="banner-slide">
            <img 
            src={GooglePlay} 
            alt="image-url" 
            />
        </div>
    );
};

export default BannerSlide;
