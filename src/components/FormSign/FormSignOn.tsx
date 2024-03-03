import React from "react";
import { Link } from "react-router-dom";
import { FurniqLogo2 as Logo } from "@/assets";
import InputUserName from "./InputUserName/InputUserName";
import InputPhone from "./InputPhone/InputPhone";
import InputPassword from "./InputPassword/InputPassword";
import ButtonSubmit from "./ButtonSubmit/ButtonSubmit";
import "./formSign.scss";

const FormRegister: React.FC = () => {
    return (
        <div className="form-container">
            <div className="form-logo">
                <img src={Logo} alt="Logo" />
            </div>
            <form
                // onSubmit={onFinish}
                className="form-block sign-on"
            >
                <div className="form-items">
                    <InputUserName />
                    <InputPhone />
                    <InputPassword />
                </div>
                <ButtonSubmit />
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
