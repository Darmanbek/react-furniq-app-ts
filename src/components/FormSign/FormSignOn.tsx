import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FurniqLogo2 as Logo } from "@/assets";
import { useSignOnMutation } from "@/services";
import { useAuthPersistStore } from "@/store";
import { ButtonSubmit, InputPassword, InputPhone, InputUserName } from "@/widgets";
import "./formSign.scss";

const FormRegister: React.FC = () => {
    const navigate = useNavigate();
    const {
        data,
        mutate: register,
        isPending,
        isSuccess,
    } = useSignOnMutation();
    const { signOn } = useAuthPersistStore();

    const onFinish: React.FormEventHandler<HTMLFormElement> = (e: any) => {
        e.preventDefault();
        register({
            name: e.target[0].value,
            phone: e.target[1].value.split(" ").join(""),
            password: e.target[2].value,
        });
    };

    useEffect(() => {
        if (isSuccess) {
            signOn({ token: data.data.token });
            navigate("/");
        }
    }, [isSuccess, signOn, navigate, data]);

    return (
        <div className="form-container">
            <div className="form-logo">
                <img src={Logo} alt="Logo" />
            </div>
            <form
                onSubmit={onFinish}
                className="form-block sign-on"
            >
                <div className="form-items">
                    <InputUserName />
                    <InputPhone />
                    <InputPassword />
                </div>
                <ButtonSubmit isPending={isPending} isRegister/>
            </form>
            <div className="form-bottom sign-on">
                <span>Если есть аккаунт? </span>
                <Link to="/login" className="link-sign-on">
                    Войти
                </Link>
            </div>
        </div>
    );
};

export default FormRegister;
