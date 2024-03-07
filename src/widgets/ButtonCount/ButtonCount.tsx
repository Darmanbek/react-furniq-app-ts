import React from "react";
import { RiSubtractFill, RiAddFill } from "react-icons/ri";
import "./ButtonCount.scss";

interface ButtonCountProps {
    size?: "small" | "medium" | "large"
}

const ButtonCount: React.FC<ButtonCountProps> = ({ size }) => {
    return (
        <div className={`button-count ${size}`}>
            <button><RiSubtractFill /></button>
            <span>1</span>
            <button><RiAddFill /></button>
        </div>
    );
};

export default ButtonCount;
