import { TOrderData, TOrdersStatusData, TPagination } from "@/models"

export type TOrder = {
    data: TOrderData[],
    pagination: TPagination
}

export type TOrderStatus = {
    data: TOrdersStatusData
}