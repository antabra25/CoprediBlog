import React, {useRef, useState} from "react";
import Joi from "joi";
import useForm from "../../hooks/useForm.js";
import FormButton from "../form/FormButton.jsx";
import FormFooter from "../form/FormFooter.jsx";
import CheckboxField from "../common/CheckboxField.jsx"
import {useEffect} from "react";
import {getAuthors} from "../../services/authorsService.js";
import {savePost} from "../../services/postsService.js";
import Main from "../layout/Main.jsx";
import config from "../../../config.json";


const AddPost = () => {

    const [authors, setAuthors] = useState([]);

    const formPost = useRef(null);
    useEffect(() => {
        try {
            const authors = getAuthors()
            setAuthors(authors.data)
            console.log(authors.data)
        } catch (ex) {
            if (ex.response && ex.response.status >= 400 && ex.response.status < 500) {
                console.log(ex.response.status)
            }


        }
    }, [])
    const handleSubmit = async (data) => {

        const formData = new FormData(formPost)
        try {
            await savePost(data)
        } catch (e) {
            console.log(e)
        }

    }
    const dataInit = {
        title: '',
        content: '',
    }

    const dataSchema = {
        title: Joi.string().min(5).max(500).required(),
        content: Joi.string().min(50).required()
    }

    const {
        formData,
        formErrors,
        setFormErrors,
        handleChange,
        handleCheckboxChange,
        validate,
    } = useForm(dataInit, dataSchema)
    return (

        <Main>
            < div className="add-post-wrapper mt-16">
                <div className="add-post">
                    <form ref={formPost} className="form-container">
                        <div className="form">
                            <div className="form-control">
                                <input className="post-title-input" type="text"/>
                            </div>
                            <div className="form-control">
                                <textarea className="post-content-input"></textarea>
                            </div>
                            <div className="form-control">
                                <input className="post-image-input" name="postImage" type="file" accept="image/png"/>
                            </div>

                            <div>

                            </div>
                            <FormFooter>
                                <FormButton className="w-full h-10 rounded-2xl text-xl bg-bronw-200" text="subir"
                                            validate={validate}/>
                            </FormFooter>

                        </div>
                    </form>
                </div>
            </div>
        </Main>

    )
}

export default AddPost;