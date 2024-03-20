import React from "react";
import "./SectionSign.scss";

interface SectionSignProps {
    children: React.ReactNode
}

const SectionSign: React.FC<SectionSignProps> = ({ children }) => {
    return (
        <section className="section-sign">
            <div className="container">
                <div className="sign-inner">
                    { children }
                </div>
            </div>
        </section>
    );
};

export default SectionSign;
