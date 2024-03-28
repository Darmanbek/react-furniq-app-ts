import React from "react";
import { GrFormSubtract, GrFormAdd } from "react-icons/gr";
import { Tooltip } from "antd";
import { useTranslation } from "react-i18next";
import "./ButtonCount.scss";

interface ButtonCountProps {
    count: number;
    quantity: number;
    decrement: () => void;
    increment: () => void;
}

const ButtonCount: React.FC<ButtonCountProps> = ({ count, quantity, decrement, increment }) => {
    const { t } = useTranslation()

    return (
        <div className={`button-count`}>
            <button onClick={decrement}><GrFormSubtract /></button>
            <span>{count}</span>
            {count < quantity ? 
                <button className="enabled" onClick={increment}><GrFormAdd /></button>
            :
            <Tooltip color="#E57351" placement="topRight" title={`${t("quantityMore")} ${quantity} ${t("unit")}`}>
                <button className="disabled"><GrFormAdd /></button>
            </Tooltip>
            }
        </div>
    );
};

export default ButtonCount;
