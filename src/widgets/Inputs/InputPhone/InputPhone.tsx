import React from "react";
import ReactInputMask from "react-input-mask";
import { useTranslation } from "react-i18next";
import "../inputSign.scss";

const InputPhone: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="input-sign">
            <label htmlFor="phone" className="font-bold">
                {t('phoneNumber')}
            </label>
            <ReactInputMask
                id="phone"
                type="tel"
                placeholder={t('phoneNumber')}
                required
                mask="+\9\98 99 999 99 99"
            />
        </div>
    );
};

export default InputPhone;
