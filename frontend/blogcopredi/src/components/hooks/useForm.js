import {useState} from "react";


const useForm = (initialState = {}) => {
    const [dataForm, setDataForm] = useState(initialState);
    const [formErrors, setFormErrors] = useState({});


    const validate = (data) => {

    }

    const handleInputChange = ({target}) => {
        validate(target);

    }
    const handleInputBlur = ({target}) => {

    }


    return {
        dataForm,
        formErrors,
        handleInputChange,

    }
}