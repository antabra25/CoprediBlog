import React from "react";
import propTypes from "prop-types";

const Button = ({children, onClick, className}) => {
    return (
        <button className={`local-button ${className}`} onClick={() => onClick}>
            {children}
        </button>
    )
}

Button.propTypes = {
    onClick: propTypes.func.isRequired,
    className: propTypes.string,
}

export default Button;