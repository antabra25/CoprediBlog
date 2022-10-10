import PropTypes from 'prop-types';
import "../css/form.css"


function FormButton({text, validate}) {
    return (
        <button disabled={validate()}
                className="form-button">
            {text}
        </button>
    )
}

FormButton.propTypes = {
    text: PropTypes.string.isRequired
}

export default FormButton