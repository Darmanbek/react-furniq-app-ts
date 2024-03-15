import React from "react";
import { Skeleton } from "antd";
import "./skeletonCartCard.scss";

const SkeletonCartCard: React.FC = () => {
    return (
        <div className="skeleton-cart-card">
            <div className="skeleton-cart-card__img">
                <Skeleton.Image active className="skeleton-image"/>
            </div>
            <div className="skeleton-cart-card__info">
                <Skeleton active paragraph={{rows: 6}}/>                
            </div>
        </div>
    );
};

export default SkeletonCartCard;
