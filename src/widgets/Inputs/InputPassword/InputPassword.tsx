import React from "react";
import { useTranslation } from "react-i18next";
import "../inputSign.scss";

const InputPassword: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="input-sign">
            <label htmlFor="password">
                {t('password')}
            </label>
            <input
                id="password"
                type="password"
                placeholder={t('password')}
                required
            />
        </div>
    );
};

export default InputPassword;
