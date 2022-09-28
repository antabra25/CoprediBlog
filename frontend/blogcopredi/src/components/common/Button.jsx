import React from "react";
import propTypes from "prop-types";
import '../css/button.css'



const Button = ({children,onClick,className})=>{
    return(
        <button className={`local-button ${className}`}  onClick={()=>onClick}>
            {children}
        </button>
    )
}

Button.propTypes = {
    onClick:propTypes.func.isRequired,
    className:propTypes.string,
}

export default Button;