import { useQuery } from "@tanstack/react-query";
import { axiosGetPaymentTypes } from "./payment.services";


const useGetPaymentTypesQuery = () =>
    useQuery({
        queryFn: () => axiosGetPaymentTypes(),
        queryKey: ["payment-types"],
    });

export { useGetPaymentTypesQuery }