import React from "react";

const ClickButton = ({ handleClick }) => {
    return (
        <button onClick={handleClick} className="click-button">
            Click Me!
        </button>
    );
};

export default ClickButton;