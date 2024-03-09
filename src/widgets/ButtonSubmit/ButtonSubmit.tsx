import React from "react";
import { CircularProgress } from '@mui/material';
import { useTranslation } from "react-i18next";
import "./buttonSubmit.scss";

interface ButtonSubmitProps {
    isPending?: boolean;
    isRegister?: boolean;
}

const ButtonSubmit: React.FC<ButtonSubmitProps> = ({
    isPending,
    isRegister,
}) => {
    const { t } = useTranslation();

    return (
        <button type="submit" className="button-submit">
            {isPending ? (
                <CircularProgress
                    color="primary"
                    size={25}
                    className="loading-icon"
                />
            ) : (
                <span className="submit-text">{t(isRegister ? "signOn" : "signIn")}</span>
            )}
        </button>
    );
};

export default ButtonSubmit;
