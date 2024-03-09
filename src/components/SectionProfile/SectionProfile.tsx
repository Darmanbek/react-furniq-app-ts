import React from "react";
import { OrderCard, Title } from "@/widgets";
import { User } from "@/assets";
import "./sectionProfile.scss"

const SectionProfile: React.FC = () => {
    return (
        <section className="section-profile">
            <div className="container">
                <div className="profile-inner">
                    <Title title="Home" subTitle="Profile"/>
                    <div className="profile-block">
                        <div className="profile-orders">
                            <OrderCard />
                        </div>
                        <div className="profile-user">
                            <div className="user-image">
                                <div className="image-inner">
                                    <img src={ User } alt="user" />
                                </div>
                            </div>
                            <h1 className="user-fullname">
                                Palenshe Tolenshiev
                            </h1>
                            <div className="profile-menu">
                                <button className="menu-item">
                                    <span>Language</span>
                                </button>
                                <button className="menu-item">
                                    <span>Address</span>
                                </button>
                                <button className="menu-item">
                                    <span>Notifications</span>
                                </button>
                                <button className="menu-item">
                                    <span>Language</span>
                                </button>
                                <button className="menu-item">
                                    <span>Address</span>
                                </button>
                                <button className="menu-item">
                                    <span>Notifications</span>
                                </button>
                            </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionProfile;
