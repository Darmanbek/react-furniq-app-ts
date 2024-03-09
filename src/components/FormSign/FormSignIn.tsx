import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FurniqLogo2 as Logo } from "@/assets";
import { useTranslation } from "react-i18next";
import { useSignInMutation } from "@/services";
import { useAuthPersistStore } from "@/store";
import "./formSign.scss";
import { ButtonSubmit, InputEmail, InputPassword, InputPhone } from "@/widgets";

const FormSignIn: React.FC = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const [withEmail, setWithEmail] = useState(false);
    const { data, mutate: login, isPending, isSuccess } = useSignInMutation();
    const { signIn } = useAuthPersistStore();

    const onFinish: React.FormEventHandler<HTMLFormElement> = (e: any) => {
        e.preventDefault();
        login(
            withEmail
                ? { email: e.target[0].value, password: e.target[1].value }
                : {
                      phone: e.target[0].value.split(" ").join(""),
                      password: e.target[1].value,
                  }
        );
    };

    React.useEffect(() => {
        if (isSuccess) {
            signIn({ token: data?.data.token });
            navigate("/");
        }
    }, [isSuccess, signIn, data, navigate]);
    return (
        <div className="form-container">
            <div className="form-logo">
                <img src={Logo} alt="Logo" />
            </div>
            <form
                onSubmit={onFinish}
                className="form-block sign-in"
            >
                <div className="form-items">
                    {withEmail ? <InputEmail /> : <InputPhone />}
                    <InputPassword />
                </div>
                <div className="form-submit">
                    <ButtonSubmit isPending={isPending}/>
                </div>
            </form>
            <div className="form-bottom">
                <button
                    onClick={() => setWithEmail((prev) => !prev)}
                    className="with-email"
                >
                    {withEmail ? t("withPhone") : t("withEmail")}
                </button>
                <Link to="/register" className="link-sign-in">
                    {t("registration")}
                </Link>
            </div>
        </div>
    );
};

export default FormSignIn;
