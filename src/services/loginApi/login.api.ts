import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchGetMe, fetchSignInEmail, fetchSignInPhone, fetchSignOut } from "./login.services";
import { TLoginRequestWithEmail, TLoginRequestWithPhone } from "./login.types";
import { message } from "antd";

const useGetMeQuery = () => 
    useQuery({
        queryFn: fetchGetMe,
        queryKey: ["get-me"],
        refetchOnMount: true,
        refetchOnWindowFocus: true,
    });

const useSignInPhoneMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (value: TLoginRequestWithPhone) =>
            fetchSignInPhone(value),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["login-phone"] });
            message.success("Успешно!");
        },
        onError: () => {
            message.error("Неверный Номер или пароль!");
        }
    });
};

const useSignInEmailMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (value: TLoginRequestWithEmail) =>
            fetchSignInEmail(value),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["login-email"] });
            message.success("Успешно!");
        },
        onError: () => {
            message.error("Неверный логин или пароль!");
        }
    });
};

const useSignOutMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: () => fetchSignOut(),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["logout"] });
            message.success("Успешно!");
        },
        onError: () => {
            message.error("Ошибка!");
        }
    })
}


export { useGetMeQuery, useSignInPhoneMutation, useSignInEmailMutation, useSignOutMutation };
