import React from "react";
import Joi from "joi";
import useForm from "../hooks/useForm";
import Form from "../common/Form";
import FormFooter from "../common/FormFooter";
import FormButton from "../common/FormButton";
import InputField from "../common/InputField";
import MainWrapper from "../common/MainWrapper";
import "../css/register.css";
import { useEffect } from "react";

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
      .min(1000000)
      .required()
      .label("Cedula"),
    correo: Joi.string().required().email({ tlds: false }).label("Correo"),
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

  const { formData, formErros,setFormErrors, handleChange, validate } = useForm(
    dataInit,
    dataSchema
  );

  const handleSubmit = () => {};

  useEffect(() => {
    setFormErrors({...dataInit})
  }, []);
  return (
    <MainWrapper>
      <Form title="Registro" size="w-8/12" handleSubmit={handleSubmit}>
        <div className="form flex flex-row gap-x-32">
          <div className="column">
            <InputField
              label="Nombre"
              id="nombre"
              type="text"
              value={formData.nombre}
              error={formErros.nombre}
              handleChange={handleChange}
              
            />
            <InputField
              label="Apellido"
              id="apellido"
              type="text"
              value={formData.apellido}
              error={formErros.apellido}
              handleChange={handleChange}
              
            />
            <InputField
              label="Cedula"
              id="cedula"
              type="number"
              value={formData.cedula}
              error={formErros.cedula}
              handleChange={handleChange}
             
            />
            <InputField
              label="Correo"
              id="correo"
              type="email"
              value={formData.correo}
              error={formErros.correo}
              handleChange={handleChange}
              
            />
            <InputField
              label="Contraseña"
              id="contrasena"
              type="number"
              value={formData.contrasena}
              error={formErros.contrasena}
              handleChange={handleChange}
              />
              
            <InputField
              label="Repita Contraseña"
              id="confirmacion"
              type="number"
              value={formData.confirmacion}
              error={formErros.confirmacion}
              handleChange={handleChange}
              
            />
          </div>

          <div className="column">
            <InputField
              label="Estado"
              id="estado"
              type="text"
              value={formData.estado}
              error={formErros.estado}
              handleChange={handleChange}
              
            />
            <InputField
              label="Municipio"
              id="municipio"
              type="text"
              value={formData.municipio}
              error={formErros.municipio}
              handleChange={handleChange}
              
            />
            <InputField
              label="Parroquia"
              id="parroquia"
              type="text"
              value={formData.parroquia}
              error={formErros.parroquia}
              handleChange={handleChange}
              
            />
            <InputField
              label="Calle"
              id="calle"
              type="text"
              value={formData.calle}
              error={formErros.calle}
              handleChange={handleChange}
              
            />
          </div>
        </div>
        <FormFooter>
          <FormButton text="Enviar" validate={validate} />
        </FormFooter>
      </Form>
    </MainWrapper>
  );
};

export default Register;
