import React from "react";
import {useContext} from "react";
import {userContext} from "../context/userContext";

const AddRequest = () => {
const currentUser = useContext(userContext)
    return(
        <div>
            <h1>Page NewRequest</h1>
        </div>
    )

}

export default AddRequest;