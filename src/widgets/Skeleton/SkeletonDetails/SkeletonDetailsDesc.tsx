import React from "react";
import "./skeletonDetails.scss"
import { Skeleton } from "antd";

const SkeletonDetailsDesc: React.FC = () => {
    return (
        <div className="skeleton-detail-desc">
            <nav className="desc-nav">
                <Skeleton.Input active size="small"/>
                <Skeleton.Input active size="small"/>
                <Skeleton.Input active size="small"/>
                <Skeleton.Input active size="small"/>
                <Skeleton.Input active size="small"/>
            </nav>
            <div className="desc-block">
                <Skeleton 
                paragraph={{rows: 20}}
                active
                className="skeleton"
                />
            </div>
        </div>
    );
};

export default SkeletonDetailsDesc;
