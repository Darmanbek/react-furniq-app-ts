import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FurniqLogo2 as Logo } from "@/assets";
import InputPhone from "./InputPhone/InputPhone";
import InputPassword from "./InputPassword/InputPassword";
import ButtonSubmit from "./ButtonSubmit/ButtonSubmit";
import InputEmail from "./InputEmail/InputEmail";
import "./formSign.scss";

const FormSignIn: React.FC = () => {
    const [withEmail, setWithEmail] = useState(false);

    return (
        <div className="form-container">
            <div className="form-logo">
                <img src={Logo} alt="Logo" />
            </div>
            <form
                // onSubmit={onFinish}
                className="form-block sign-in"
            >
                <div className="form-items">
                    { withEmail ? 
                    <InputEmail /> :
                    <InputPhone />
                    }
                    <InputPassword />
                </div>
                <div className="form-submit">
                    <ButtonSubmit />
                </div>
            </form>
            <div className="form-bottom">
                <button
                    onClick={() => setWithEmail((prev) => !prev)}
                    className="with-email"
                >
                    {withEmail ? "With Phone" : "With Email"}
                </button>
                <Link
                    to="/register"
                    className="link-sign-in"
                >
                    Registration
                </Link>
            </div>
        </div>
    );
};

export default FormSignIn;
