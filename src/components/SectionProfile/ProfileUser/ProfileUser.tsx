import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { CircularProgress } from "@mui/material";
import { useSignOutMutation } from "@/services";
import { useAuthPersistStore } from "@/store";
import { TLoginMe } from "@/models";
import { FaRegUserCircle } from "react-icons/fa";
import "./profileUser.scss";

interface ProfileUserProps {
    link: string;
    data?: TLoginMe;
}

const ProfileUser: React.FC<ProfileUserProps> = ({ link, data }) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { mutate: logout, isPending, isSuccess } = useSignOutMutation();
    const { signOut } = useAuthPersistStore();
    const username = data ? data.name : t("loading")

    const logOutClick = () => {
        logout();
    };

    const getNavigate = (url: string): string => {
        if (url === link) {
            return "active";
        }
        return "";
    };

    useEffect(() => {
        if (isSuccess) {
            signOut();
            navigate("/");
        }
    }, [isSuccess, signOut, navigate]);
    return (
        <div className="profile-user">
            <h1 className="user-fullname">
                <FaRegUserCircle className="user-icon"/>
                {username}
            </h1>
            <div className="profile-menu">
                <Link
                    to={"/profile/orders"}
                    className={`menu-item ${getNavigate("orders")}`}
                >
                    <span>{t("orders")}</span>
                </Link>
                <Link
                    to={"/profile/settings"}
                    className={`menu-item ${getNavigate("settings")}`}
                >
                    <span>{t("settings")}</span>
                </Link>
            </div>
            <button className="logout-button" onClick={logOutClick}>
                {isPending ? (
                    <CircularProgress size={20} />
                ) : (
                    <span className="logout-title">{t("logout")}</span>
                )}
            </button>
        </div>
    );
};

export default ProfileUser;
