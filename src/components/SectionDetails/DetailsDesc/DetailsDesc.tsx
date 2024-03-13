import React, { useState } from "react";
import { TProductDetailsData } from "@/models";
import "./detailsDesc.scss";

interface DetailsDescProps {
    detailsData: TProductDetailsData;
}

const DetailsDesc: React.FC<DetailsDescProps> = ({ detailsData }) => {
    const [select, setSelect] = useState(1)

    const isActive = (index: number) => {
        if (index === select) {
            return "active"
        }
        return ""
    }
    return (
        <div className="details-desc">
            <nav className="desc-nav">
                <ul>
                    <li className={isActive(1)}>
                        <button onClick={() => setSelect(1)}>Opisaniye tovara</button>
                    </li>
                    <li className={isActive(2)}>
                        <button onClick={() => setSelect(2)}>Instrukciya</button>
                    </li>
                    <li className={isActive(3)}>
                        <button onClick={() => setSelect(3)}>Sertifikat</button>
                    </li>
                    <li className={isActive(4)}>
                        <button onClick={() => setSelect(4)}>Razmeri</button>
                    </li>
                    <li className={isActive(5)}>
                        <button onClick={() => setSelect(5)}>Otzivi</button>
                    </li>
                </ul>
            </nav>
            <div className="desc-block">
                <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                </p>

                <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
        </div>
    );
};

export default DetailsDesc;
