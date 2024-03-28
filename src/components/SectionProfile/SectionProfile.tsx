import React, { useEffect } from "react";
import ProfileOrders from "./ProfileOrders/ProfileOrders";
import ProfileSettings from "./ProfileSettings/ProfileSettings";
import ProfileUser from "./ProfileUser/ProfileUser";
import { useGetMeQuery } from "@/services";
import { Title } from "@/widgets";
import "./sectionProfile.scss";
import { Route, Routes } from "react-router-dom";

interface SectionProfileProps {
    link: string;
}

const SectionProfile: React.FC<SectionProfileProps> = ({ link }) => {
    const { data, isPending } = useGetMeQuery();
 
    const title = {
        name: "home",
        link: "/",
    };

    const subTitle = {
        name: isPending? "loading" : "profile",
        link: "/profile",
    };

    const subSubTitle = {
        name: isPending? "loading" : link,
        link: `/profile/${link}`,
    };

    return (
        <section className="section-profile">
            <div className="container">
                <div className="profile-inner">
                    <Title
                        title={title}
                        subTitle={subTitle}
                        subSubTitle={link ? subSubTitle : undefined}
                    />
                    <div className="profile-block">
                        <div className="profile-head">
                            <ProfileUser link={link} data={data?.data}/>
                        </div>
                        {/* <Routes>
                            <Route path="orders" element={} />
                            <Route path="settings" />
                        </Routes> */}
                        {link === "orders" && <ProfileOrders />}
                        {link === "settings" && <ProfileSettings data={data?.data} isPending={isPending}/>}
                        <div className="profile-foot">
                            <ProfileUser link={link} data={data?.data}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionProfile;
