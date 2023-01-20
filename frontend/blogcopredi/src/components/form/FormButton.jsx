import PropTypes from 'prop-types';



function FormButton({text, validate, className}) {
    return (
        <button disabled={validate()} className={className} type="submit">
            {text}
        </button>
    )
}

FormButton.propTypes = {
    text: PropTypes.string.isRequired
}

export default FormButton

