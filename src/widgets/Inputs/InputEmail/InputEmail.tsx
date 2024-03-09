import React from "react";
import { useTranslation } from "react-i18next";
import "../inputSign.scss";

const InputEmail: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="input-sign">
            <label htmlFor="email">
                {t('email')}
            </label>
            <input
                id="email"
                type="email"
                placeholder="alexander@mail.ru"
                required
            />
        </div>
    );
};

export default InputEmail;
