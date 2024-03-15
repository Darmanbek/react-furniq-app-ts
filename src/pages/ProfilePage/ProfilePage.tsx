import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SectionProfile } from "@/components";
import { useNavStore } from "@/store";

const ProfilePage: React.FC = () => {
    const { profileId } = useParams();
    const { toPath } = useNavStore();

    const navigate = useNavigate();

    const link = profileId ? profileId : "orders"

    useEffect(() => {
        if (!profileId) {
            navigate("/profile/orders")
        }
        toPath("/profile/orders")
    }, [profileId])
    return (
        <>
            <SectionProfile link={link}/>
        </>
    );
};

export default ProfilePage;
