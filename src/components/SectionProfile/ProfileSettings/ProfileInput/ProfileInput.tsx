import React, { useState } from "react";
import ReactInputMask from "react-input-mask";
import { useTranslation } from "react-i18next";
import "./profileInput.scss"

interface ProfileInputProps {
    value: string;
    id: string;
    title: string;
    type: string;
    placeholder: string;
}

const ProfileInput: React.FC<ProfileInputProps> = ({
    value,
    id,
    title,
    type,
    placeholder,
}) => {
    const { t } = useTranslation();
    const [inputValue, setInputValue] = useState(value)

    const handleChange = (e: any) => {
        setInputValue(e.target.value)
    }

    return (
        <div className="profile-input">
            <label htmlFor={id}>{t(title)}</label>
            {type === "tel" ? (
                <ReactInputMask
                    id={id}
                    type={type}
                    placeholder={t(placeholder)}
                    onChange={handleChange}
                    value={inputValue}
                    mask="+\9\98 99 999 99 99"
                />
            ) : (
                <input
                    id={id}
                    type={type}
                    placeholder={t(placeholder)}
                    onChange={handleChange}
                    value={inputValue}
                />
            )}
        </div>
    );
};

export default ProfileInput;
