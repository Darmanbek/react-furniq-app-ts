import React from "react";
import ReactInputMask from "react-input-mask";
import "../inputSign.scss";

const InputPhone: React.FC = () => {
    return (
        <div className="input-sign">
            <label htmlFor="phone" className="font-bold">
                Phone Number
            </label>
            <ReactInputMask
                id="phone"
                type="tel"
                placeholder="Phone Number"
                required
                mask="+\9\98 99 999 99 99"
            />
        </div>
    );
};

export default InputPhone;
