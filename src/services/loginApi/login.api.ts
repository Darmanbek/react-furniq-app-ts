// import { message } from 'antd';
import { useMutation, useQueryClient } from "@tanstack/react-query";
import fetchSignIn from "./login.services";
import { TLoginRequestWithEmail, TLoginRequestWithPhone } from "./login.types";

const useSignInMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (value: TLoginRequestWithPhone | TLoginRequestWithEmail) =>
            fetchSignIn(value),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["login"] });
            // message.success('Успешно!');
        },
    });
};

export default useSignInMutation;
