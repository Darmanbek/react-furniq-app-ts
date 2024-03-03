import React from "react";
import "../inputSign.scss";

const InputEmail: React.FC = () => {
    return (
        <div className="input-sign">
            <label htmlFor="email">
                Email
            </label>
            <input
                id="email"
                type="email"
                placeholder="alexander@mail.ru"
                required
            />
        </div>
    );
};

export default InputEmail;
