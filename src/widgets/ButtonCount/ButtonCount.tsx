import React from "react";
import { RiSubtractFill, RiAddFill } from "react-icons/ri";
import "./ButtonCount.scss";

interface ButtonCountProps {
    count: number;
    decrement: () => void;
    increment: () => void;
    size?: "small" | "medium" | "large"
}

const ButtonCount: React.FC<ButtonCountProps> = ({ size, count, decrement, increment }) => {

    
    return (
        <div className={`button-count ${size}`}>
            <button onClick={decrement}><RiSubtractFill /></button>
            <span>{count}</span>
            <button onClick={increment}><RiAddFill /></button>
        </div>
    );
};

export default ButtonCount;
