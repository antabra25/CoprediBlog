import React from "react";
import propTypes from "prop-types";
import '../css/card.css'


const Card = ({children, height, width, border}) => {
    return (
        <div className="card-wrapper" style={{height: height, width: width, border: border ? border : 'none none'}}>
            <div className="card">
                {children}
            </div>
        </div>
    )
}

Card.propTypes = {
    height: propTypes.string,
    width: propTypes.string,
    border: propTypes.string

}

export default Card