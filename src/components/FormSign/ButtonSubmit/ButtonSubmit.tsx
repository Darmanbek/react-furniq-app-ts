import React from "react";
import "./buttonSubmit.scss"

const ButtonSubmit: React.FC = () => {
    return (
        <button
            type="submit"
            className="button-submit"
        >
            <span>
                Sign On
            </span>
        </button>
    );
};

export default ButtonSubmit;
