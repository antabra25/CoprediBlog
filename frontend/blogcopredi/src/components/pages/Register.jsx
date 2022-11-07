import React from "react";
import Joi from "joi";
import useForm from "../hooks/useForm";
import Form from "../common/Form";
import FormFooter from "../common/FormFooter";
import FormButton from "../common/FormButton";
import InputField from "../common/InputField";
import MainWrapper from "../common/MainWrapper";


import {useEffect} from "react";

const Register = () => {
    const dataInit = {
        nombre: "",
        apellido: "",
        cedula: "",
        correo: "",
        contrasena: "",
        confirmacion: "",
        telefono: "",
        estado: "",
        municipio: "",
        parroquia: "",
        calle: "",
    };
    const dataSchema = {
        nombre: Joi.string().required().min(3).max(30).label("Nombre"),
        apellido: Joi.string().required().min(2).max(15).label("Apellido"),
        cedula: Joi.number()
            .integer()
            .positive()
            .min(100000)
            .required()
            .label("Cedula"),
        correo: Joi.string().required().email({tlds: false}).label("Correo"),
        contrasena: Joi.string().required().min(8).max(30).label("Contraseña"),
        confirmacion: Joi.ref("contrasena"),
        telefono: Joi.number().integer().positive().required().label("Telefono"),
        estado: Joi.string().alphanum().required().uppercase().label("Estado"),
        municipio: Joi.string()
            .alphanum()
            .required()
            .uppercase()
            .label("Municipio"),
        parroquia: Joi.string()
            .alphanum()
            .required()
            .uppercase()
            .label("Parroquia"),
        calle: Joi.string().alphanum().required().uppercase().label("Calle"),
    };

    const {formData, formErrors, setFormErrors, handleChange, validate} = useForm(dataInit, dataSchema);

    const handleSubmit = () => {
    };

    useEffect(() => {
        setFormErrors({...dataInit})
    }, []);
    return (<MainWrapper>
            <Form title="Registro" size="w-full" handleSubmit={handleSubmit}>
                <div className="form flex flex-row gap-x-32 justify-center">
                    <div className="column">
                        <h2 className="form-subtitle-base">Perfil</h2>
                        <InputField
                            label="Nombre"
                            id="nombre"
                            type="text"
                            value={formData.nombre}
                            error={formErrors.nombre}
                            handleChange={handleChange}

                        />
                        <InputField
                            label="Apellido"
                            id="apellido"
                            type="text"
                            value={formData.apellido}
                            error={formErrors.apellido}
                            handleChange={handleChange}

                        />
                        <InputField
                            label="Cedula"
                            id="cedula"
                            type="number"
                            value={formData.cedula}
                            error={formErrors.cedula}
                            handleChange={handleChange}

                        />
                        <InputField
                            label="Correo"
                            id="correo"
                            type="email"
                            value={formData.correo}
                            error={formErrors.correo}
                            handleChange={handleChange}

                        />
                        <InputField
                            label="Contraseña"
                            id="contrasena"
                            type="password"
                            value={formData.contrasena}
                            error={formErrors.contrasena}
                            handleChange={handleChange}
                        />

                        <InputField
                            label="Repita Contraseña"
                            id="confirmacion"
                            type="password"
                            value={formData.confirmacion}
                            error={formErrors.confirmacion}
                            handleChange={handleChange}

                        />
                    </div>

                    <div className="column">
                        <h2 className="form-subtitle-base">Ubicacion</h2>
                        <InputField
                            label="Estado"
                            id="estado"
                            type="text"
                            value={formData.estado}
                            error={formErrors.estado}
                            handleChange={handleChange}

                        />
                        <InputField
                            label="Municipio"
                            id="municipio"
                            type="text"
                            value={formData.municipio}
                            error={formErrors.municipio}
                            handleChange={handleChange}

                        />
                        <InputField
                            label="Parroquia"
                            id="parroquia"
                            type="text"
                            value={formData.parroquia}
                            error={formErrors.parroquia}
                            handleChange={handleChange}

                        />
                        <InputField
                            label="Calle"
                            id="calle"
                            type="text"
                            value={formData.calle}
                            error={formErrors.calle}
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
