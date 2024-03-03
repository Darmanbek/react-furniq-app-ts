import React from "react";
import { BgMain } from "@/assets"
import "./SectionSign.scss";

interface SectionSignProps {
    children: React.ReactNode
}

const SectionSign: React.FC<SectionSignProps> = ({ children }) => {
    return (
        <section className="section-sign" style={{background: BgMain}}>
            <div className="container">
                <div className="sign-inner">
                    { children }
                </div>
            </div>
        </section>
    );
};

export default SectionSign;
