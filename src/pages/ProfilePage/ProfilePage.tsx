import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SectionProfile } from "@/components";

const ProfilePage: React.FC = () => {
    const { profileId } = useParams();

    const navigate = useNavigate();

    const link = profileId ? profileId : "orders"

    useEffect(() => {
        if (!profileId) {
            navigate("/profile/orders", { replace: true })
        }
    }, [profileId])
    return (
        <>
            <SectionProfile link={link}/>
        </>
    );
};

export default ProfilePage;
