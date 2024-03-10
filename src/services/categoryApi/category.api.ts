import { useQuery } from "@tanstack/react-query";
import { axiosGetCategory } from "./category.services";

const useGetCategoriesQuery = () =>
    useQuery({
        queryFn: axiosGetCategory,
        queryKey: ["category"],
    });

export { useGetCategoriesQuery };
