import { useMutation, useQueryClient } from "@tanstack/react-query";
import fetchSignOn from "./register.services";
import { TRegisterRequest } from "./register.types";
import { message } from 'antd';

const useSignOnMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (values: TRegisterRequest) => fetchSignOn(values),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["register"] });
            message.success('Успешно!');
        },
    });
};

export { useSignOnMutation };
