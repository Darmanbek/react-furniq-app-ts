import React from "react";
import { Skeleton } from "antd";
import "./skeletonCard.scss";

const SkeletonCard: React.FC = () => {
    return (
        <div className="skeleton-card">
            <div className="skeleton-image">
                <Skeleton.Image active className="image"/>
            </div>
            <div className="skeleton__info">
                <Skeleton
                paragraph={{ rows: 4 }}
                active
                />
            </div>
        </div>
    );
};

export default SkeletonCard;
