import { Skeleton } from "antd";
import React from "react";

const SkeletonDetailsInfo: React.FC = () => {
    return (
        <div className="skeleton-details-info">
            <Skeleton.Input active size="large" block/>
            <Skeleton.Input active size="large"/>
            <Skeleton.Input active size="small" block/>
            <Skeleton.Input active size="small"/>
            <div className="info-views">
                <Skeleton.Image active className="skeleton"/>
                <Skeleton.Image active className="skeleton"/>
                <Skeleton.Image active className="skeleton"/>
                <Skeleton.Image active className="skeleton"/>
            </div>
            <Skeleton.Input active size="small"/>
            <Skeleton.Button active size="large" style={{width: 250}}/>
            <Skeleton.Input active/> 

            <div className="info-add-cart">
                <Skeleton.Button active size="large" block/>
                <Skeleton.Button active size="large" block/>
            </div>
        </div>
    );
};

export default SkeletonDetailsInfo;
