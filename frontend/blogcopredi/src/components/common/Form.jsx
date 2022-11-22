import React from "react";
import proTypes from "prop-types";


const Form = ({title, size, children, handleSubmit,}) => {
    return (
        <div className={`form-wrapper ${size}`}>
            <h1 className="form-title">{title}</h1>
            <form onSubmit={handleSubmit}>
                {children}
            </form>
        </div>
    );
};

Form.proTypes = {
    title: proTypes.string.isRequired,
    size: proTypes.string.isRequired,
};

export default Form;
