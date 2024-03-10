import React, { useState } from "react";
import { RiSubtractFill, RiAddFill } from "react-icons/ri";
import "./ButtonCount.scss";

interface ButtonCountProps {
    size?: "small" | "medium" | "large"
}

const ButtonCount: React.FC<ButtonCountProps> = ({ size }) => {
    const [count, setCount] = useState(1)   

    const decrement = (e: React.MouseEvent) => {
        if (count > 1) {
            setCount(prev => prev - 1)
        }
    }
    const increment = (e: React.MouseEvent) => {
        setCount(prev => prev + 1)
    }

    return (
        <div className={`button-count ${size}`}>
            <button onClick={decrement}><RiSubtractFill /></button>
            <span>{count}</span>
            <button onClick={increment}><RiAddFill /></button>
        </div>
    );
};

export default ButtonCount;
