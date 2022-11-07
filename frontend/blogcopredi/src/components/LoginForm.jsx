import React from "react";
import Joi from "joi";
import Button from "./common/Button";
import useForm from "./hooks/useForm.js";
import FormButton from "./common/FormButton.jsx";


const LoginForm = () => {

    const dataInit = {
        correo: "",
        clave: ""
    }
    const schema = {
        correo: Joi.string().required().email({tlds: false}).label("Correo"),
        clave: Joi.string().required().min(8).max(30).label("Contraseña"),
    }
    const {formData, formErrors, setFormErrors, handleChange, validate} = useForm(dataInit, schema);

    return (

        <div className="login-form-wrapper">
            <div className="login-form-title">
                <h1>Inicio de sesión</h1>
            </div>
            <div>
                <form className="login-form-content">
                    <div className="login-form-control">
                        <label>Correo:</label>
                        <input type="text" value={formData.correo} id="correo" onChange={handleChange}/>
                        {formErrors.correo && <p className="form-error">{formErrors.correo}</p>}
                    </div>
                    <div className="login-form-control">
                        <label>Contraseña:</label>
                        <input type="password" value={formData.clave} id="clave" onChange={handleChange}/>
                        {formErrors.clave && <p className="form-error">{formErrors.clave}</p>}
                    </div>
                    <div className="login-form-control">
                        <FormButton text="Entrar" className={""} validate={validate} />
                    </div>
                </form>
            </div>
        </div>
    )

}

export default LoginForm;