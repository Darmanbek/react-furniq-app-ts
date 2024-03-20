import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { axiosGetOrders, axiosPostOrder } from "./orders.services";
import { TCreateOrders } from "@/models";
import { message } from "antd";


const useGetOrdersQuery = () =>
    useQuery({
        queryFn: () => axiosGetOrders(),
        queryKey: ["orders"],
        refetchOnMount: true,
        refetchOnWindowFocus: true,
    });

const useCreateOrdersMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (value: TCreateOrders) => axiosPostOrder(value),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["create-orders"] });
            message.success("Заказ оформлен!")
        },
        onError: () => {
            message.error("Не удалось оформить заказ!")
        }
    });
};

export { useGetOrdersQuery, useCreateOrdersMutation }