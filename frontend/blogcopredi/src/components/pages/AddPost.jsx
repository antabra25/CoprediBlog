import React, {useRef, useState} from "react";
import Joi from "joi";
import useForm from "../hooks/useForm.js";
import FormButton from "../common/FormButton.jsx";
import FormFooter from "../common/FormFooter.jsx";
import CheckboxField from "../common/CheckboxField.jsx"
import {useEffect} from "react";
import {getAuthors} from "../../services/authorsService.js";
import {savePost} from "../../services/postsService.js";
import MainWrapper from "../common/MainWrapper.jsx";
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

        <MainWrapper>
            < div className="add-post-wrapper mt-16">
                <div className="add-post">
                    <form ref={formPost} className="flex flex-col w-full bg-blue-900 gap-y-6">
                        <div className="form-control">
                            <input className="post-title-input w-10/12 h-10 rounded focus-within:border-none"
                                   type="text"/>
                        </div>
                        <div className="form-control">
                            <textarea className="post-content-input w-10/12 h-60 resize-none"></textarea>
                        </div>
                        <div className="form-control">
                            <input className="post-image-input" name="postImage" type="file" accept="image/png"/>
                        </div>

                        <div>

                        </div>
                        <FormFooter>
                            <FormButton className="w-full h-10 rounded-2xl text-xl bg-amber-200" text="subir" validate={validate}/>
                        </FormFooter>

                    </form>
                </div>
            </div>
        </MainWrapper>

    )
}

export default AddPost;