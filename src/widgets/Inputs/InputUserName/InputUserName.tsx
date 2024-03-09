import React from "react";
import { useTranslation } from "react-i18next";
import "../inputSign.scss"

const InputFirstName: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="input-sign">
            <label htmlFor="username">
                {t('username')}
            </label>
            <input
                id="username"
                type="text"
                placeholder={t('username')}
                required
            />
        </div>
    );
};

export default InputFirstName;
