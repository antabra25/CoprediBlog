import React from "react";
import propTypes from "prop-types";
import "../css/inputsearch.css";


const InputSearch = ({placeholder, onChange,className}) => {

    return (
        <div className={`input-search-wrapper ${className}`}>
            <input className="input-search" type="text"  placeholder={placeholder} onChange={onChange}/>
        </div>
    );
}

export default InputSearch;