import React from "react";
import "../inputSign.scss"

const InputFirstName: React.FC = () => {
    return (
        <div className="input-sign">
            <label htmlFor="username">
                Username
            </label>
            <input
                id="username"
                type="text"
                placeholder="Username"
                required
            />
        </div>
    );
};

export default InputFirstName;
