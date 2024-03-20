import React, { useState } from "react";
import { ConfigProvider, Input, Modal } from "antd";
import { IoMdStar } from "react-icons/io";
import { useTranslation } from "react-i18next";
import "./modalRating.scss";

interface ModalRatingProps {
    modal: boolean;
    handleOpen: () => void;
    sendReview: (rating: number, body: string) => void;
}

const ModalRating: React.FC<ModalRatingProps> = ({
    modal,
    handleOpen,
    sendReview
}) => {
    const { t } = useTranslation();
    
    const [value, setValue] = useState("");
    const [ratingHover, setRatingHover] = useState(0);
    const [rating, setRating] = useState(0);
    const arrayRating = [1, 2, 3, 4, 5];

    const submitIsActive = rating > 3 || rating > 0 && value.trim() !== ""

    const reviewDone = () => {
        sendReview(rating, value)
        handleOpen()
    }

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setValue(e.target.value);
    };

    const isActive = (id: number): string => {
        if (id <= ratingHover || id <= rating) {
            return "active";
        }
        return "";
    };
    return (
        <ConfigProvider
            theme={{
                components: {
                    Input: {
                        hoverBorderColor: "#E57351",
                        colorPrimary: "#E57351",
                        fontSize: 16,
                    },
                },
            }}
        >
            <Modal
                centered
                title={<h2 style={{ color: "#425463" }}>{t("myReview")}</h2>}
                onCancel={handleOpen}
                open={modal}
                className="modal-rating"
                footer={null}
            >
                <div className="modal-rating-inner">
                    <h4 className="rating-title">{t("generalRating")}</h4>
                    <div className="rating-points">
                        {arrayRating.map((num, index) => (
                            <span
                                key={index}
                                className={`point ${isActive(num)}`}
                                onClick={() => setRating(num)}
                                onMouseEnter={() => setRatingHover(num)}
                                onMouseLeave={() => setRatingHover(0)}
                            >
                                <IoMdStar className="icon-star" />
                            </span>
                        ))}
                    </div>

                    <Input.TextArea
                        rows={10}
                        placeholder={t("inputReview")}
                        value={value}
                        onChange={handleChange}
                    />

                    {submitIsActive ?
                        <button className="rating-submit" onClick={reviewDone}>{t("done")}</button>
                        :
                        <button className="rating-submit disable">{t("done")}</button>
                    }
                </div>
            </Modal>
        </ConfigProvider>
    );
};

export default ModalRating;
