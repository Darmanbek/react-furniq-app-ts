import React, { useEffect } from "react";
import { OrderCard } from "@/widgets";
import { useGetOrdersQuery } from "@/services";
import "./profileOrders.scss"
import { useTranslation } from "react-i18next";

const ProfileOrders: React.FC = () => {
    const { t } = useTranslation()
    const getOrders = useGetOrdersQuery()
    const { data: orders, isPending } = getOrders

    useEffect(() => {
        getOrders.refetch()
    }, [])
    return (
        <div className="profile-orders">
            <div className="orders-head">
                <h1>Мои заказы: {isPending ? t("loading") : orders?.data.length || t("notFound")}</h1>
            </div>
            {orders && (
                orders.data.map((order) => (
                    <OrderCard 
                    order={order}
                    key={order.id}
                    />      
                ))
            )}
        </div>
    );
};

export default ProfileOrders;
