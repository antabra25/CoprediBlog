import React from "react";
import {useContext} from "react";
import {UserContext} from "../../context/userContext";

const AddRequest = () => {
const {currentUser} = useContext(UserContext)
    return(
        <div>
            <h1>Solicitud de Ayuda</h1>
        </div>
    )
}

export default AddRequest;