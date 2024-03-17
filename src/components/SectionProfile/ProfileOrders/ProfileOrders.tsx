import React from "react";
import { OrderCard } from "@/widgets";
import "./profileOrders.scss"

const ProfileOrders: React.FC = () => {
    return (
        <div className="profile-orders">
            <OrderCard />
        </div>
    );
};

export default ProfileOrders;
