import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FurniqLogo2 as Logo } from "@/assets";
import { useTranslation } from "react-i18next";
import { useSignInEmailMutation, useSignInPhoneMutation } from "@/services";
import { useAuthPersistStore } from "@/store";
import { ButtonSubmit, InputEmail, InputPassword, InputPhone } from "@/widgets";
import "./formSign.scss";

const FormSignIn: React.FC = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const [withEmail, setWithEmail] = useState(false);
    const { 
        data: dataPhone, 
        mutate: loginPhone, 
        isPending: isPendingPhone, 
        isSuccess: isSuccessPhone 
    } = useSignInPhoneMutation();
    const { 
        data: dataEmail, 
        mutate: loginEmail, 
        isPending: isPendingEmail, 
        isSuccess: isSuccessEmail 
    } = useSignInEmailMutation();
    const { signIn } = useAuthPersistStore();

    const onFinish: React.FormEventHandler<HTMLFormElement> = (e: any) => {
        e.preventDefault();
        if (withEmail) {
            loginEmail({ email: e.target[0].value, password: e.target[1].value })
        } else {
            loginPhone({
                phone: e.target[0].value.split(" ").join(""),
                password: e.target[1].value,
            })
        }
    };

    React.useEffect(() => {
        if (withEmail) {
            if (isSuccessEmail) {
                signIn({ token: dataEmail?.data.token });
                navigate("/");
            }
        } else {
            if (isSuccessPhone) {
                signIn({ token: dataPhone?.data.token });
                navigate("/");
            }
        }
    }, [isSuccessEmail, isPendingPhone, signIn, dataPhone, dataEmail, navigate]);
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
                    <ButtonSubmit isPending={isPendingEmail || isPendingPhone}/>
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
