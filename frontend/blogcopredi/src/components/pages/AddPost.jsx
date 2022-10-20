import React from "react";
import '../css/addpost.css'
import Joi from "joi";
import useForm from "../hooks/useForm.js";
import Form from "../common/Form.jsx";
import FormButton from "../common/FormButton.jsx";
import FormFooter from "../common/FormFooter.jsx";


const AddPost = () => {

    const dataInit = {
        title: '',
        content: '',
    }

    const dataSchema = Joi.object({
        title: Joi.string().min(5).max(500).required(),
        content: Joi.string().min(50).required()
    })

    const {
        formData,
        formErrors,
        setFormErrors,
        handleChange,
        validate,
    } = useForm(dataInit, dataSchema)
    return (
        <div>
            <Form>
                <div>
                    <input className="post-title-input" type="text"/>
                </div>
                <div>
                    <textarea className="post-content-input"></textarea>
                </div>

                <input type="file"/>
                <FormFooter>
                    <FormButton>Subir</FormButton>
                </FormFooter>

            </Form>
        </div>
    )
}

export default AddPost;