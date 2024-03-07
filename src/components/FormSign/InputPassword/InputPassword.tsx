import React from "react";
import "../inputSign.scss";

const InputPassword: React.FC = () => {
    return (
        <div className="input-sign">
            <label htmlFor="password">
                Password
            </label>
            <input
                id="password"
                type="password"
                placeholder="Password"
                required
            />
        </div>
    );
};

export default InputPassword;
