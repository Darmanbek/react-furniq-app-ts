import React from "react";
import { useTranslation } from "react-i18next";
import ProfileInput from "./ProfileInput/ProfileInput";
import { Skeleton } from "antd";
import { TLoginMe } from "@/models";
import "./profileSettings.scss";

interface ProfileSettingsProps {
    data?: TLoginMe,
    isPending: boolean
}

const ProfileSettings: React.FC<ProfileSettingsProps> = ({ data, isPending }) => {
    const { t } = useTranslation();

    const onFinish = (e: any) => {
        e.preventDefault();
    }

    return (
        <div className="profile-settings">
            <h1>Мои данные</h1>
            <div className="profile-settings-inner">
                <form className="profile-form" onSubmit={onFinish}>
                    {isPending && <>
                        <div className="form-skeleton">
                            <Skeleton.Input active size="large" block/>
                            <Skeleton.Input active size="large" block/>
                            <Skeleton.Input active size="large" block/>
                        </div>
                    </>}
                    {data && (
                        <div className="form-items">
                            <ProfileInput
                                value={data.name || ""}
                                id="username"
                                title="username"
                                placeholder="username"
                                type="text"
                            />
                            <ProfileInput
                                value={data.email || ""}
                                id="email"
                                title="email"
                                type="email"
                                placeholder="alexander@mail.ru"
                            />
                            <ProfileInput
                                value={data.phone || ""}
                                id="phone"
                                title="phoneNumber"
                                placeholder="phoneNumber"
                                type="tel"
                            />
                        </div>
                    )}
                    <div className="form-item-submit">
                            {isPending ?
                            <Skeleton.Button active size="large" className="submit-skeleton" block/>
                            :
                            (
                                <button type="submit" className="button-submit">
                                    <span className="submit-text">{t("save")}</span>
                                </button>
                            )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProfileSettings;
