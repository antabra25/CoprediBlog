import React from "react";
import Joi from "joi";
import useForm from "../hooks/useForm";
import {register} from "../../services/usersService.js";
import {useContext} from "react";
import {useNavigate} from "react-router-dom";
import Form from "../common/Form";
import FormFooter from "../common/FormFooter";
import FormButton from "../common/FormButton";
import InputField from "../common/InputField";
import MainWrapper from "../common/MainWrapper";


import {useEffect} from "react";
import {toast} from "react-toastify";
import {UserContext} from "../context/userContext.js";

const Register = () => {
    const navigate = useNavigate();
    const {loginUser} = useContext(UserContext);


    const dataInit = {
        name: "",
        lastName: "",
        personalId: "",
        email: "",
        password: "",
        phone: "",
        state: "",
        municipality: "",
        parish: "",
        street: "",

    };
    const dataSchema = {
        name: Joi.string().required().min(3).max(30).label("Nombre"),
        lastName: Joi.string().required().min(2).max(15).label("Apellido"),
        personalId: Joi.number()
            .integer()
            .positive()
            .min(100000)
            .required()
            .label("Cedula"),
        email: Joi.string().required().email({tlds: false}).label("Correo"),
        password: Joi.string().required().min(8).max(30).label("Contraseña"),
        phone: Joi.number().integer().positive().required().label("Telefono"),
        state: Joi.string().required().label("Estado"),
        municipality: Joi.string().required().label("Municipio"),
        parish: Joi.string().required().label("Parroquia"),
        street: Joi.string().required().label("Calle")


    };

    const {formData, formErrors, setFormErrors, handleChange, validate} = useForm(dataInit, dataSchema);

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await register(formData)
            loginUser(response.headers['x-auth-token'])
            navigate('/', {replace: true})
        } catch (ex) {
            if (ex.response && ex.response.status === 400) {
                const errors = {...formErrors}
                errors.email = ex.response.data
                setFormErrors(errors)

                toast.error(`${ex.response.status} ${ex.response.data}`)
            }
        }

    };

    useEffect(() => {

    }, []);
    return (<MainWrapper>
        <Form title="Registro" size="w-full" handleSubmit={handleSubmit}>
            <div className="form flex flex-row gap-x-32 justify-center">
                <div className="column">
                    <h2 className="form-subtitle-base">Perfil</h2>
                    <InputField
                        label="Nombre"
                        id="name"
                        type="text"
                        value={formData.name}
                        error={formErrors.name}
                        handleChange={handleChange}
                    />
                    <InputField
                        label="Apellido"
                        id="lastName"
                        type="text"
                        value={formData.lastName}
                        error={formErrors.lastName}
                        handleChange={handleChange}

                    />
                    <InputField
                        label="Cedula"
                        id="personalId"
                        type="number"
                        value={formData.personalId}
                        error={formErrors.personalId}
                        handleChange={handleChange}

                    />
                    <InputField
                        label="Correo"
                        id="email"
                        type="email"
                        value={formData.email}
                        error={formErrors.email}
                        handleChange={handleChange}

                    />
                    <InputField
                        label="Contraseña"
                        id="password"
                        type="password"
                        value={formData.password}
                        error={formErrors.password}
                        handleChange={handleChange}
                    />

                    <InputField
                        label="Telefono"
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        error={formErrors.phone}
                        handleChange={handleChange}

                    />
                </div>

                <div className="column">
                    <h2 className="form-subtitle-base">Ubicacion</h2>
                    <InputField
                        label="Estado"
                        id="state"
                        type="text"
                        value={formData.state}
                        error={formErrors.state}
                        handleChange={handleChange}

                    />
                    <InputField
                        label="Municipio"
                        id="municipality"
                        type="text"
                        value={formData.municipality}
                        error={formErrors.municipality}
                        handleChange={handleChange}

                    />
                    <InputField
                        label="Parroquia"
                        id="parish"
                        type="text"
                        value={formData.parish}
                        error={formErrors.parish}
                        handleChange={handleChange}

                    />
                    <InputField
                        label="Calle"
                        id="street"
                        type="text"
                        value={formData.street}
                        error={formErrors.street}
                        handleChange={handleChange}

                    />
                </div>
            </div>
            <FormFooter>
                <FormButton text="Enviar" validate={validate} className="button button-md bg-earth rounded-3xl"/>
            </FormFooter>
        </Form>
    </MainWrapper>);
};

export default Register;
