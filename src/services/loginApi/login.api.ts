import { useMutation, useQueryClient } from "@tanstack/react-query";
import fetchSignIn from "./login.services";
import { TLoginRequestWithEmail, TLoginRequestWithPhone } from "./login.types";
import { message } from 'antd';

const useSignInMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (value: TLoginRequestWithPhone | TLoginRequestWithEmail) =>
            fetchSignIn(value),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["login"] });
            message.success('Успешно!');
        },
    });
};

export { useSignInMutation };
