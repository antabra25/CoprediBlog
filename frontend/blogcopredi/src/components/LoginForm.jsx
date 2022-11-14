import React from "react";
import Joi from "joi";
import {useLocation, useNavigate} from "react-router-dom";
import {useContext} from "react";
import {UserContext} from "./context/userContext";
import useForm from "./hooks/useForm.js";
import FormButton from "./common/FormButton.jsx";
import {toast} from "react-toastify";
import {login} from "../services/usersService.js";


const LoginForm = () => {
    const navigate = useNavigate();
    const {loginUser} = useContext(UserContext);

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {

            const {data: jwt} = await login(formData);
            loginUser(jwt)
            navigate('/', {replace: true})
        } catch (ex) {
            if (ex.response && ex.response.status === 400) {
                const errors = {...formErrors}
                errors.email = ex.response.data
                setFormErrors(errors)
                toast.error(`${ex.response.status} ${ex.response.data}`)
            }
        }
    }

    const dataInit = {
        email: "",
        password: ""
    }
    const schema = {
        email: Joi.string().required().email({tlds: false}).label("Correo"),
        password: Joi.string().required().min(8).max(30).label("Contraseña"),
    }
    const {formData, formErrors, setFormErrors, handleChange, validate} = useForm(dataInit, schema);

    return (

        <div className="login-form-wrapper">
            <div className="login-form-title">
                <h1>Inicio de sesión</h1>
            </div>
            <div>
                <form className="login-form-content" onSubmit={handleSubmit}>
                    <div className="login-form-control">
                        <label>Correo:</label>
                        <input type="text" value={formData.email} id="email" onChange={handleChange}/>
                        {formErrors.email && <p className="form-error">{formErrors.email}</p>}
                    </div>
                    <div className="login-form-control">
                        <label>Contraseña:</label>
                        <input type="password" value={formData.password} id="password" onChange={handleChange}/>
                        {formErrors.password && <p className="form-error">{formErrors.password}</p>}
                    </div>
                    <div className="login-form-control">
                        <FormButton text="Entrar" className={"button button-sm bg-earth"} validate={validate}/>
                    </div>
                </form>
            </div>
        </div>
    )

}

export default LoginForm;