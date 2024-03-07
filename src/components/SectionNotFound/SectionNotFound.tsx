import React from "react";
import "./sectionNotFound.scss";

const SectionNotFound: React.FC = () => {
    return (
        <section className="section-not-found">
            <div className="container">
                <div className="not-found-inner">
                    <h1>
                        <span>
                            Not Found Page Title
                        </span>
                        <span>
                            Not Found Page Text
                        </span>
                    </h1>
                </div>
            </div>
        </section>
    );
};

export default SectionNotFound;
