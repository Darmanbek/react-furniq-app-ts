import React from "react";
import { Skeleton } from "antd";
import "./skeletonDetails.scss";

const SkeletonDetailsImages: React.FC = () => {
    return (
        <div className="skeleton-detail-images">
            <div className="images-swiper">
                <Skeleton.Image active className="skeleton"/>
            </div>
            <div className="images-swiper-2">
                {[...Array(4)].map((_, index) => (
                    <Skeleton.Image key={index} active className="skeleton"/>
                ))}
            </div>
        </div>
    );
};

export default SkeletonDetailsImages;
